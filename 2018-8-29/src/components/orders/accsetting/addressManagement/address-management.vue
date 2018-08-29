


<style scoped>

    .address {
        width: 100%;
    }
    .address-top {
        width: 100%;
        height: 40px;
        padding: 0 20px;
        line-height: 40px;
        background: #edf3fe;
    }
    .address-top span:last-child {
        float: right;
        color: #e60012;
        cursor: pointer;
    }
    .address-cont {
        width: 100%;
        margin-top: 20px;
        border:2px solid #ccc;
    }
    .cont-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 14px;
        font-weight: bold;
    }
    .cont-top span {
        margin-left: 10px;
    }
    .detailed-address {
        width: 100%;
        padding: 0 20px;
    }
    .detailed-address .addresss {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .addresss p {
        float: left;
        width: 90px;
        text-align: right;
        color: #999;
    }
    .detailed-address span {
        float: left;
    }
    .detailed-address span:last-child {
        margin:0 5px;
    }
    .modify {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .modify p {
        float: right;
        color: #0b62b3;
        cursor:pointer;
        margin-left: 20px;
    }
    .news-oo {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 998;
    }
    .news {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999999;
    }

</style>

<template>

    <div class="address">
        <div class="address-top">
            <span>已保存现有的收货地址</span>
            <span @click="news">新增收货地址</span>
        </div>

        
        <div class="address-cont" v-for="(item,index) in arrys">
            <div class="cont-top">
                <p>{{item.receiverName}}<span>{{item.receiverArea}}</span></p>
            </div>
            <div class="detailed-address">
                <div class="addresss">
                    <p>收货人：</p>
                    <span>{{item.receiverName}}</span>
                </div>
                <div class="addresss">
                    <p>所在地区：</p>
                    <span>{{item.receiverArea}}</span>
                </div>
                <div class="addresss">
                    <p>详细地址：</p>
                    <span>{{item.receiverAddress}}</span>
                </div>
                <div class="addresss">
                    <p>邮政编码：</p>
                    <span>{{item.receiverZip}}</span>
                </div>
                <div class="addresss">
                    <p>手机/固定电话：</p>
                    <span>{{item.receiverPhone}}</span>
                    <span v-show="shos">{{item.receiverMobile}}</span>
                </div> 
                <div class="modify">
                    <p @click="modify(index)">修改</p>
                    <p @click="deletes(index)">删除</p>
                </div>         
            </div>
        </div>
        <div class="news-oo" v-show='mod'></div>
        <news-model class="news" v-show='modo'></news-model>
        <modify-model class="news" v-show='modt'></modify-model>
    </div>

</template>

<script>
    
    import newsModel   from '@/components/orders/accsetting/addressManagement/index/news-model.vue'
    import modifyModel from '@/components/orders/accsetting/addressManagement/index/modify-model.vue'
    import { Icon } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            newsModel,
            modifyModel
        },

        data () {

            return {

                arrys : [],

                mod  : false,

                modo : false,

                modt : false,

                shos : false,          
            }

        },

        computed : {

           ...mapState([

                'bas',
                'list',
                'cor'

            ])

        },

        watch : {

            //关闭新建地址、修改地址窗口
            bas () {

                this.mod = false

                this.modo = false

                this.modt = false
                
            },

            //重新查询个人全部地址
            list () {

                this.res = this.$store.state.list.data.data

                this.arrys = this.res

            },

            //显示区号和固定电话
            cor () {

                this.shos = true
            }
        },

        methods : {

            //修改收货地址
            async modify (index) {

                let pos = await this.$api.selectShipping({
                    shippingId : this.arrys[index].id
                })

                this.mod = true

                this.modt = true

                this.$store.commit('reo', pos)
                
                setTimeout(() => {
                    this.$store.commit('reo', pos)
                }, 10)

            },

            //添加收货地址
            news () {

                this.mod = true

                this.modo = true

            },

            //查询个人全部地址
            async pop () {

                let pos = await this.$api.listShipping()

                this.arrys = pos.data.data
            },

            //删除当前点击的个人单个收货地址
            async deletes (index) {

                //查询个人单个收货地址
                let pos = await this.$api.deleteShipping({
                    shippingId : this.arrys[index].id
                })

                let poso = await this.$api.listShipping()

                this.arrys = poso.data.data

            },
        },

        created () {
            
            this.pop()

        },

        mounted () {

        }

    }

</script>
