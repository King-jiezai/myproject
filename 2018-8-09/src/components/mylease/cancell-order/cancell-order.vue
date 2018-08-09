

<style scoped>

    .cancel-orders {
        width: 910px;
        overflow: hidden;
    }
    .cancel {
        width: 500px;
        height:370px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 1px 10px #666;
        position: fixed;
        top: 50%;
        left: 50%;  
        transform: translate(-50%, -50%);
        z-index: 999;
        border-radius: 5px;
    }
    .cancel-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #F3F3F3;
        font-size: 14px;
        cursor: pointer;
    }
    .cancel-top p {
        float: left;
        letter-spacing: 1px;
    }
    .cancel-top p:last-child {
        float: right;
        color: #999;
    }
    .cancel-nav {
        width: 100%;
        height: 60px;
        padding: 0 20px;
        background-color: #FFFBDB;
        line-height: 20px;
    }
    .cancel-nav img {
        float: left;
        margin-top: 5px;
    }
    .cancel-nav p {
        float: left;
        margin: 7px 0 0 10px;
        color: #A3A08F;
    }
    .cancel-nav p:last-child {
        margin-top: 5px;
    }
    .cancel-cent {
        width: 500px;
        overflow: hidden;
        padding: 0 30px;
        margin-top: 10px;
        cursor: pointer;
    }
    .cancel-cause {
        width: 200px;
        height: 30px;
        float: left;
        border:1px solid #ccc;
        text-align: center;
        line-height: 30px;
        margin: 10px;
        position: relative;
    }
    .cancel-cause img {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
    .cancelstly {
        border:2px solid #e60012;
    }
    .cancel-bottom {
        width: 100%;
        margin-top: 10px;
    }
    .cancel-bottom div {
        width: 90px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        float: left;
        border-radius: 5px;
        letter-spacing: 1px;
        cursor: pointer;
    }    
    .cancel-bottom div:first-child {
        background-color: #F5F5F5;
        margin-left: 150px;
        border:1px solid #ccc;  
    }
    .cancel-bottom div:last-child {
        background: #F7F7F7;
        cursor:not-allowed;
        margin-left: 20px;
        border:1px solid #f1f1f1;
        color: #ccc;
    }
    .cos {
        color: #fff;
        border: 1px solid #e60012!important;
        background: #e60012!important;
        cursor: pointer!important;
    }
    .model_pre {
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

</style>

<template>

    <div class="cancel-orders">
            <div class="cancel" v-show="cancel">
                <div class="cancel-top">
                    <p>选择取消原因</p>
                    <p @click="think">X</p>
                </div>
                <div class="cancel-nav">
                    <img src="../../../../static/images/payment/0.png">
                    <p>订单取消成功后将无法恢复；拆单后取消订单，其他子单也将一并取消</p>
                    <p>活动券、优惠券将可能不再返还；支付券不予返还，支付优惠一并取消</p>
                </div>
                <div class="cancel-cent">
                    <div class="cancel-cause" @click="clcans(index)" v-for="(item , index) in cans" :class="{'cancelstly' : cas == index}">
                        <span>{{ item.fon }}</span>
                        <img src="../../../../static/images/sett/4.png" v-show="simg==index">
                    </div>
                </div>
                <div class="cancel-bottom">
                    <div>
                        <p @click="think">再想想</p>
                    </div>
                    <div @click="next" :class="{cos: cos}">
                        <p>下一步</p>
                    </div>
                </div>
            </div>
        <div v-show="detail">
            <detail></detail>
        </div>
        <div class="model_pre" v-show="cancel"></div>
    </div>

</template>

<script>
    
    import detail from '@/components/mylease/cancell-order/cancell-details.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            detail

        },

        data () {

            return {

                simg : null,

                cas  : null,

                cos  : false,

                cancel : true,

                detail : false,

                cans : [{
                    fon : '订单不能按预计时间送达'
                },{
                    fon : '操作有误（商品、地址等选错）'
                },{
                    fon : '重复下单/误下单'
                },{
                    fon : '其他渠道价格更低'
                },{
                    fon : '该商品京东降价了'
                },{
                    fon : '不想买了'
                },{
                    fon : '商品无货'
                }]
            }
            
        },

        watch : {

            res () {
                this.cancel = false

                this.detail= false
            },

            bas () {

                this.cancel = true

                this.detail = false

                this.simg = null

                this.cas = null

                this.cos = null
            }
        },

        computed : {

            ...mapState([

                'res',

                'bas'

            ])
        },

        methods : {

            clcans (index) {
                this.simg = index

                this.cas = index

                if (this.simg == index && this.cas == index) {
                    this.cos = true
                }
  
            },

            think () {

                this.simg = null

                this.cas = null

                this.cos = null

                this.cancel = false

                this.detail = false

            },

            next () {

                if (this.cas == null) {
                    this.cos = false
                }else {
                    this.cos = true
                    this.cancel = false
                    this.detail = true
                }
              
            },

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
