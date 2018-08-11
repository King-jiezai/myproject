

<style scoped>

    .refund {
        width: 100%;
        overflow: hidden;
    }
    .refund-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #fffdf0;
        border-bottom: 1px solid #ff7681;
    }
    .refund-tex {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .refund-tex img {
        margin: 5px;
        float: left;
    }
    .refund-tex p {
        color: #666;
    }
    .refund-tex span {
        color: #000;
        font-weight: bold;
    }
    .refund-cnet {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .refund-nav {
        width: 1200px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        margin-top:  30px ;
        margin-bottom: 20px;
    }
    .refund-nav p{
        float: left;
    }
    .refund-nav span {
        margin: 0 8px;
    }
    .refund-type {
        width: 1200px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .modify-pss {
        float: left;
        width:80px;
        font-size: 14px;
        color: #333;
        margin-right: 10px;
        margin-top: 10px;
    }
    .sp1{
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .radiogroup {
        width: 100px;
        float: left;
    }
    .onlyRefunds {
        width: 100%;
        overflow: hidden;
    }
    .refunds {
        width: 100%;
        overflow: hidden;
    }
    .center-foor {
        margin-top: 70px;
        background: #fafafa;
        margin-bottom: 50px;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
    }

</style>

<template>
    
    <!--refund 申请退款-->
    <div class="refund">

        <!--navs 广租头部-->
        <div class="navs">
            <navs></navs>
        </div>
        
        <!--refund-top 安全提醒-->
        <div class="refund-top">
            <div class="refund-tex">
                <img src="../../../static/images/refund/33.png">
                <p>安全提醒：为了您的财产安全，<span>不要点击链接，不要向陌生人转账</span>或透漏银行卡和验证码信息，<span>谨防诈骗！</span></p>
            </div>
        </div>
        
        <!--refund-cnet 退款商品详情-->
        <div class="refund-cnet">

            <!--refund-nav 退款导航-->
            <div class="refund-nav">
                <p>我的租赁箱<span>></span></p>
                <p>已租的宝贝<span>></span></p>
                <p>退款申请</p>
            </div>

            <!--refund-type 服务类型-->
            <div class="refund-type">
                <p class="modify-pss"><span class="sp1">*</span>服务类型：</p>
                <div class="radiogroup">
                    <RadioGroup v-model="enterprise" @on-change="change">
                        <Radio label="仅退款" ></Radio>
                        <Radio label="退货退款 "></Radio>
                    </RadioGroup>
                </div>
            </div>

            <!--onlyRefunds 买家申请仅退款-->
            <div class="onlyRefund" v-if="one">
                <onlyRefund></onlyRefund>
            </div>
            
            <!--refunds 买家申请仅退款退货-->
            <div class="refunds" v-if="two">
                <refundRefund></refundRefund>
            </div>
        </div>

        <!--center-foor 底部-->
        <div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>
            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>
    
    import navs         from '@/components/public/navs.vue'
    import onlyRefund   from '@/components/refund/only-refunds/only-refund.vue'
    import refundRefund from '@/components/refund/refund-refunds/refund-refunds.vue'
    import tailHear     from '@/components/public/tail-hear.vue'
    import tailFoor     from '@/components/public/tail-foor.vue'

    import { RadioGroup, Radio} from 'iview'

    export default {

        components : {

            navs,
            RadioGroup,
            Radio,
            onlyRefund,
            refundRefund,
            tailHear,
            tailFoor

        },

        data () {

            return {

                enterprise : '仅退款',

                one : true,

                two : false,

            }
            
        },

        watch : {

           
        },

        computed : {

            
            
        },

        methods : {

            change () {

                if (this.enterprise == '仅退款') {

                    this.one = true

                    this.two = false

                }else {

                    this.two = true

                    this.one = false
                    
                }
            }
        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
