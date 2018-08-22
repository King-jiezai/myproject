







<style scoped>

    .oos {
        width: 248px;
        height: 426px;
        border: 1px solid #fff;
        float: left;
        cursor: pointer;
    }
    .oos:hover {
        border: 1px solid #ccc;
    }
    .oos:hover .oos-bottom {
        display: block;
    }
    .oos-top {
        text-align: center;
        margin-top: 20px;
    }
    .oos-top img {
        width: 210px;
        height: 210px;
    }
    .oos-cen {
        width: 210px;
        font-size: 14px;
        padding: 0 10px;
        margin: 0 auto;
    }
    .oos-cen p {
        line-height: 25px;
    }
    .oos-cen .p1 {
        color: #e60012;
        font-size: 16px;
        margin-bottom: 5px;
    }
    .oos-cen .p2 {
        width: 190px;
        height: 50px;
        overflow: hidden;
    }
    .oos-cen .p2:hover {
        color: #e60012;
        cursor: pointer;
    }
    .oos-cen .fs {
        margin-top: 10px;
    }
    .fs .sp2 {
        color: #e60012;
    }
    .oos-bottom {
        width: 200px;
        height: 25px;
        margin: 40px auto 0;
        display: none;
    }
    .oos-bottom .lus {
        width: 50px;
        height: 25px;
        text-align: center;
        line-height: 33px;
        border: 1px solid #ccc;
        border-right: 1px solid #fff;
        float: left;
        position: relative;
        cursor: pointer;
    }
    .oos-bottom .lus:last-child {
        border-right: 1px solid #ccc;
    }
    .lus .ims {
        position: absolute;
        top: 2px;
        left: 14px;
        display: none;
    }
    .oos-bottom .lus:hover .img {
        display: none;
    }
    .oos-bottom .lus:hover .ims {
        display: block;
    }
    .full {
        width: 992px;
        height: 36px;
        color: #e60012;
        line-height: 36px;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
        border: 2px solid #fed2d3;
        background: #ffdfe0;
        position: fixed;
        bottom: 142px;
        z-index: 1000;
    }
    .hids {
        width: 992px;
        height: 142px;
        border: 1px solid #ccc;
        border-bottom: 0;
        box-shadow: 0px 0px 3px 0px #666;
        background: #fff;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .hids-top {
        height: 33px;
    }
    .fsl-left {
        width: 141px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        font-size: 14px;
        font-weight: bold;
        color: #e60012;
        background: #fff;
        float: left;
    }
    .fsl-right {
        width: 849px;
        height: 33px;
        text-align: right;
        line-height: 33px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        padding-right: 10px;
        background: #eee;
        float: left;
    }
    .fsl-right span {
        cursor: pointer;
    }
    .hids-bottom {
        padding-top: 30px;
        position: relative;
    }
    .list-box {
        width: 215px;
        height: 78px;
        background: #fff;
        border-bottom: 5px solid #e60012;
        padding: 0 25px;
        margin-right: 3px;
        float: left;
    }
    .po-io {
        width: 50px;
        height: 50px;
        margin-right: 14px;
        float: left;
    }
    .po-io img {
        width: 50px;
        height: 50px;
    }
    .po-oo {
        float: left;
        width: 100px;
        height: 35px;
        overflow: hidden;
        font-size: 12px;
    }
    .po-oo:hover {
        color: #e60012;
        cursor: pointer;
    }
    .list-box p {
        float: left;
        width: 60px;
        height: 15px;
        color: #e60012;
    }
    .list-box span {
        color: #e60012;
        display: none;
        cursor: pointer;
        float: right;
    }
    .list-box:hover span {
        display: block;
    }
    .hided {
        width: 215px;
        height: 70px;
        padding: 0 10px 0 25px;
        float: left;
    }
    .sf {
        text-align: center;
        line-height: 50px;
        font-size: 50px;
        color: #ccc;
        border: 1px solid #ccc;
    }
    .sfl {
        color: #ccc;
    }
    .fso {
        float: right;
        position: absolute;
        top: 30px;
        right: 25px;
    }
    .fso-top {
        width: 68px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #ccc;
        background: #eee;
        margin-bottom: 5px;
        cursor:not-allowed;
    }
    .cos {
        color: #fff;
        border: 1px solid #e60012;
        background: #e60012;
        cursor: pointer;
    }
    .fso p {
        width: 68px;
        text-align: center;
        cursor: pointer;
    }
    .list_list {
        position: absolute;
        left: 0;
    }

</style>

<template>

    <div class="bjb-box">
        <div class="oos" v-for='(item, index) in oop' :key='index'>
            <div class="oos-top" @click='comms(index)'>
                <img :src="item.mainImage">
            </div>

            <div class="oos-cen">
                <p class="p1">￥{{item.rent}}/天</p>
                <p class="p2" @click='comms(index)'>{{item.name}}（{{item.subtitle}}）</p>

                <div class="fs">
                    <img :src="item.ims">
                    <span class="sp1">{{item.fon}}<span class="sp2">{{item.nub}}</span>{{item.fos}}</span>
                </div>
            </div>

            <div class="oos-bottom">
                <div
                    class="lus"
                    v-for='(item, key) in res'
                    @click='contrast(index, key)'
                >
                    <img class="img" :src="item.img">
                    <img class="ims" :src="item.ims">
                </div>

            </div>
        </div>

        <div class="full" v-if='fll'>
            <span>{{this.fsl}}</span>
        </div>

        <div class="hids" v-if='ooc'>
            <div class="hids-top">
                <div class="fsl-left">对比栏</div>

                <div class="fsl-right">
                    <span @click='hid'>隐藏</span>
                </div>
            </div>

            <div class="hids-bottom">
                <div class="hided" v-for='item in reo'>
                    <div class="po-io sf">{{item.num}}</div>
                    <div class="sfl">{{item.zin}}</div>
                </div>

                <div class="list_list">
                    <div class="list-box" v-for='(item, index) in pos'>
                        <div class="po-io">
                            <img :src="item.mainImage">
                        </div>

                        <div class="po-oo">{{item.name}}（{{item.subtitle}}）</div>
                        <p>￥{{item.rent}}/天</p>
                        <span @click='del(index)'>删除</span>
                    </div>
                </div>

                <div class="fso">
                    <div class="fso-top" :class="{cos: cos}" @click='cont'>
                        <span>对比</span>
                    </div>

                    <p @click='dels'>清空对比栏</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        components : {

        },

        data () {

            return {

                res : [{
                    id  : 0,
                    img : '../../../../static/images/comclass-2/fen_2.png',
                    ims : '../../../../static/images/comclass-2/fen_2_1.png'
                },{
                    id  : 1,
                    img : '../../../../static/images/comclass-2/fen_3.png',
                    ims : '../../../../static/images/comclass-2/fen_3_1.png'
                },{
                    id  : 2,
                    img : '../../../../static/images/comclass-2/fen_4.png',
                    ims : '../../../../static/images/comclass-2/fen_4_1.png'
                },{
                    id  : 3,
                    img : '../../../../static/images/comclass-2/fen_5.png',
                    ims : '../../../../static/images/comclass-2/fen_5_1.png'
                }],

                reo : [{
                    num : '1',
                    zin : '您还可以继续添加'
                },{
                    num : '2',
                    zin : '您还可以继续添加'
                },{
                    num : '3',
                    zin : '您还可以继续添加'
                }],

                pos : [],

                ooc : false,

                cos : false,

                com : null,

                fll : false,

                fsl : null

            }

        },

        methods : {

            comms (index) {

                window.open('/pages?pid=' + this.oop[index].id)

            },

            //点击当前对比图标
            contrast (index, key) {

                clearTimeout(this.com)

                //点击当前对比图标显示对比栏
                if (key == this.res[key].id) {
                    this.ooc = true
                }

                //对比栏如果存在当前数据，显示提示
                if (key == this.res[key].id && this.pos.includes(this.oop[index])) {

                    this.fll = true

                    this.fsl = '该商品已存在！'

                    this.com = setTimeout( () => {
                        this.fll = false
                    }, 2000)

                } else {

                    this.fll = false

                }

                //对比商品不能大于三
                if (key == this.res[key].id && this.pos.length < 3) {

                    if (this.pos.indexOf(this.oop[index]) < 0) {
                        this.pos.push(this.oop[index])
                    }

                }

                if (key == this.res[key].id && this.pos.indexOf(this.oop[index]) < 0) {

                    this.fll = true

                    this.fsl = '对比栏已满,您可以删除不需要的栏内商品再继续添加哦！'

                    this.com = setTimeout( () => {
                        this.fll = false
                    }, 2000)

                }

                if (this.pos.length > 1) {
                    this.cos = true
                }

            },

            hid () {

                this.ooc = false

            },

            del (index) {

                this.pos.splice(index, 1)

                if (this.pos.length < 2) {
                    this.cos = false
                }

            },

            cont () {

                if (this.pos.length > 1) {
                    window.open('/contrast')
                }

            },

            dels () {

                this.pos = []

                this.cos = false

            }

        },

        created () {

            this.ooc = this.$route.query.pid
            
        },

        mounted () {

        },

        props : [
            'oop'
        ]

    }

</script>
