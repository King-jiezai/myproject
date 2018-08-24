







<style scoped>

    .lis-left {
        float: left;
    }
    .lis-left ul {
        height: 28px;
        border: 1px solid #ccc;
        background: #fff;
        margin-top: 3px;
        float: left;
        position: relative;
    }
    .lis-left ul li {
        width: 64px;
        height: 26px;
        color: #0a0a0a;
        text-align: center;
        line-height: 26px;
        list-style: none;
        float: left;
        cursor: pointer;
        position: relative;
    }
    .lis-left ul li .spn {
        position: relative;
        top: -1px;
    }
    .lis-left ul li p {
        width: 64px;
        height: 26px;
        border: 1px solid #e60012;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    .lis-left ul li:hover p {
        color: #e60012;
        display: block;
    }
    .cor {
        color: #fff!important;
        background: #e60012;
    }
    .ins {
        float: left;
        margin: 3px 0 0 15px;
        position: relative;
    }
    .hc {
        position: relative;
        z-index: 1;
    }
    .hc span {
        margin: 0 5px;
    }
    .hc .inps {
        width: 50px;
        height: 28px;
        border: 1px solid #ccc;
        padding: 0 5px;
        outline: medium;
    }
    .hd {
        width: 152px;
        height: 70px;
        border: 1px solid #ccc;
        background: #fff;
        position: absolute;
        top: -3px;
        left: -16px;
    }
    .hd .p1 {
        width: 46px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        border: 1px solid #ccc;
        position: absolute;
        bottom: 5px;
        left: 22px;
        cursor: pointer;
    }
    .hd .p1:hover {
        color: #e60012;
    }
    .hd .p2 {
        width: 46px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        background: #e60012;
        position: absolute;
        bottom: 5px;
        right: 22px;
        cursor: pointer;
    }
    .lis-right {
        float: right;
    }
    .lis-right span {
        font-size: 14px;
        line-height: 34px;
        margin: 0 10px;
        float: left;
    }
    .lis-right .num {
        width: 32px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #ccc;
        background: #fff;
        margin-top: 4px;
        float: left;
    }

</style>

<template>

    <div class="zlsp-com">
        <div class="lis-left">
            <ul>
                <li v-for='(item, index) in lis' :class="{'cor': ooo == index}" @click='nvs(index)'>
                    <span>{{item}}</span>
                    <p></p>
                    <span v-show='index == size'>
                        <span class="spn" v-show='rise'>↑</span>
                        <span class="spn" v-show='drop'>↓</span>
                    </span>
                </li>
            </ul>

            <div class="ins">
                <div class="hc">
                    <input class="inps" type="text" placeholder="￥" @click.stop='onin'>
                    <span>-</span>
                    <input class="inps" type="text" placeholder="￥" @click.stop='onin'>
                </div>

                <div class="hd" v-if='sos'>
                    <p class="p1" @click='err'>取消</p>
                    <p class="p2" @click='suc'>确定</p>
                </div>
            </div>
        </div>

        <div class="lis-right">
            <span>1/10</span>
            <div class="num"><</div>
            <div class="num">></div>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                rise: false,

                drop: false,

                ooo : true,

                sos : false,

                price_desc : 'price_desc',

                price_asc  : 'price_asc',

                falt : true,

                size : 4,

                salesVolume_desc : 'salesVolume_desc',

                salesVolume_asc  : 'salesVolume_asc'

            }

        },

        methods : {

            async nvs (index) {

                var gets = localStorage.getItem("val")

                this.ooo = index

                let order = ''

                //商品价格排序
                if (index == 3) {

                    this.size = index
                
                    if (this.falt) {

                        this.rise = true

                        this.drop = false

                        order = this.price_asc

                        var res = await this.$api.list({
                            categoryId : this.$route.query.classification,
                            pageNum : this.$route.query.pageNum,
                            orderBy : order,
                            keyword : gets
                        })

                        this.falt = false
                        
                    } else {

                        this.rise = false

                        this.drop = true

                        order = this.price_desc

                        var res = await this.$api.list({
                            categoryId : this.$route.query.classification,
                            pageNum : this.$route.query.pageNum,
                            orderBy : order,
                            keyword : gets
                        })

                        this.falt = true
                        
                    }

                    var arr = [this.rise, this.drop]

                    this.$store.commit('listo', res.data.data.list)

                    setTimeout(() => {
                        this.$store.commit('listo', res.data.data.list)
                    }, 10)

                    this.$router.push('/bjb?orderBy=' + order + '&pageNum=' + this.$route.query.pageNum + '&navs_id=' + index
                         + '&updown=' + arr + '&sizes=' + this.size + '&classification=' + this.$route.query.classification)

                }

                //商品销量排序
                if (index == 1) {

                    this.size = index

                    if (this.falt) {

                        this.rise = true

                        this.drop = false

                        order = this.salesVolume_desc

                        var res = await this.$api.list({
                            categoryId : this.$route.query.classification,
                            pageNum : this.$route.query.pageNum,
                            orderBy : order,
                            keyword : gets
                        })

                        this.falt = false
                        
                    } else {

                        this.rise = false

                        this.drop = true

                        order = this.salesVolume_asc

                        var res = await this.$api.list({
                            categoryId : this.$route.query.classification,
                            pageNum : this.$route.query.pageNum,
                            orderBy : order,
                            keyword : gets
                        })

                        this.falt = true
                        
                    }

                    var arr = [this.rise, this.drop]

                    this.$store.commit('listo', res.data.data.list)

                    setTimeout(() => {
                        this.$store.commit('listo', res.data.data.list)
                    }, 10)

                    this.$router.push('/bjb?orderBy=' + order + '&pageNum=' + this.$route.query.pageNum + '&navs_id=' + index
                         + '&updown=' + arr + '&sizes=' + this.size + '&classification=' + this.$route.query.classification)

                }

                if (index == 2) {

                    this.size = 4

                    this.$router.push('/bjb?orderBy=' + order + '&pageNum=' + this.$route.query.pageNum + '&navs_id=' + index
                         + '&updown=' + this.$route.query.updown + '&sizes=' + this.size + '&classification=' + this.$route.query.classification)
                    
                    window.location.reload()

                }

                if (index == 0) {

                    this.$route.query.updown = [true, false]

                    this.size = 4

                    localStorage.removeItem("val")

                    this.$router.push('/bjb?pageNum=' + 1 + '&orderBy=' + '' + '&navs_id=' + 0 + '&updown=' + this.$route.query.updown + '&sizes=' + 4 + '&classification=' + this.$route.query.classification)
                    
                    window.location.reload()

                }

            },

            onin () {

                this.sos = true

            },

            err () {

                this.sos = false

            },

            suc () {

            }

        },

        created () {

            if (this.$route.query.navs_id == undefined) {

                this.$route.query.navs_id = 0

            }

            this.ooo = this.$route.query.navs_id

            if (this.$route.query.pageNum == undefined) {

                this.$route.query.pageNum = 1

            }

            if (this.$route.query.orderBy == undefined) {

                this.$route.query.orderBy = ''

            }

            if (this.$route.query.updown != undefined) {
                
                let o = this.$route.query.updown.split(',')

                this.rise = eval(o[0].toLowerCase())

                this.drop = eval(o[1].toLowerCase())

            }

            this.size = this.$route.query.sizes
            
        },

        mounted () {

        },

        props : [
            'lis'
        ]

    }

</script>
