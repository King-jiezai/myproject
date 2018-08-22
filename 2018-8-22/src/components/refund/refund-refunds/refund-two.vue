

<style scoped>

    .only-refunds {
        width: 100%;
        overflow: hidden;
    }
    .only_nav {
        width: 1200px;
        height: 40px;
        float: left;
        position: relative;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .only-one {
        float: left;
        height: 40px;
        width: 290px;
        background: #FF0000;
        line-height: 40px;
        color: #fff;
        text-align: center; 
    }
    .only-two {
        float: left;
        height: 40px;
        width: 310px;
        background: #FF0000;
        line-height: 40px;
        color: #fff;
        padding-left: 20px;
        text-align: center;  
    }
    .only-three {
        float: left;
        height: 40px;
        width: 320px;
        background: #ccc;
        line-height: 40px;
        color: #7B7B7B;
        padding-left: 20px;
        text-align: center;   
    }
    .only-four {
        float: left;
        height: 40px;
        width: 300px;
        background: #ccc;
        line-height: 40px;
        color: #7B7B7B;
        padding-left: 20px;
        text-align: center;   
    }
    .only_one img{
        height: 40px;
        display:block;
        position:absolute;
        left:290px;
    }
    .only_two img{
        height: 40px;
        display:block;
        position:absolute;
        left:598px;
    }
    .only_three img{
        height: 40px;
        display:block;
        position:absolute;
        left:896px;
    }
    .only_one {
        float: left;
        width: 300px;
    }
    .only_two {
        float: left;
        width: 310px;
        margin-left: -10px;
    }
    .only_three {
        float: left;
        width: 320px;
    }
    .only_four {
        float: left;
        width: 300px;
        margin-left: -20px;
    }
    .only-cent {
        width: 1160px;
        overflow: hidden;
        border: 1px solid #ccc;
        margin: 20px 20px 0 20px;
    }
    .only-left {
        width: 758px;
        float: left;
        overflow: hidden;
        border-right:1px solid #ccc;
    }
    .only-right {
        width: 400px;    
        overflow: hidden; 
    }
    .left-top {
        width: 738px;
        height: 150px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .agree {
        float: left;
        width: 100%;
        height:30px;
        line-height: 30px;
        margin-top: 85px;
    }
    .agree p {
        float: left;
    }
    .agree img {
        float: left;
        margin: 6px 3px;
    }
    .agree p:first-child {
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
    }
    .agree p:last-child {
        color: #32A5FE;
    }
    .success {
        width: 100%;
        height: 20px;
        line-height:20px;
    }
    .success p {
        float: left;
    }
    .left-cent {
        width: 738px;
        height: 250px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding:20px 0 0 10px; 
    }
    .cent-success {
        width: 100%;
        height: 65px;
        font-size: 14px;
    }
    .cent-success span {
        color: #32A5FE;
        cursor: pointer;
    }
    .modify {
        width: 150px;
        height: 40px;
        line-height: 40px!important;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        background-color: #e60012;
        font-size: 16px;
        margin: 50px 0 30px 0;
        cursor: pointer;
    }
    .left-consult {
        width: 738px;
        overflow: hidden;
        margin: 0 10px;
        padding:20px 0 0 10px;
        margin-bottom: 30px;
    }
    .next {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #e60012;
        color: #fff;
        border-radius: 5px;
        margin: 30px 30px 65px 30px;
        cursor: pointer;
    }
    .revocation-refunds {
        width: 580px;
        height: 200px;
        background-color: #fff;
        box-shadow: 0 1px 10px #666;
        border-radius: 5px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin: 0 auto;
        position: fixed;
        transform: translate(-50%, -50%);
        z-index: 999;
        cursor: pointer;
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

    <!--only-refunds 买家申请仅退款-->
    <div class="only-refunds">

        <!--only_nav 买家申请退款步骤-->
        <div class="only_nav">

            <!--only_one 买家申请退款第一步-->
            <div class="only_one">
                <div class="only-one">
                    <p>1.买家申请仅退款</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>
            
            <!--only_two 买家申请退款第二步-->
            <div class="only_two">
                <div class="only-two">
                    <p>2.卖家处理退款申请</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>

            <!--only_three 买家退货-->
            <div class="only_three">
                <div class="only-three">
                    <p>3.买家退货</p>
                </div>
                <span><img src="../../../../static/images/refund/55.png"></span>
            </div>

            <!--only_three 买家退货-->
            <div class="only_four">
                <div class="only-four">
                    <p>4.退款完毕</p>
                </div>
            </div>

        </div>

        <!--only-cent 买家申请退款商品详情-->
        <div class="only-cent">

            <!--only-left 左边商品详情-->
            <div class="only-left">

                <!--left-top 请等待商家同意-->
                <div class="left-top">
                    <div class="agree">
                        <p>请等待商家同意</p>
                        <img src="../../../../static/images/refund/66.png">
                        <p>还剩{{day}}天{{hour}}小时{{minu}}分</p>
                    </div>

                    <!--success 成功发起退款申请-->
                    <div class="success">
                        <p>您已成功发起退款申请，请耐心等待商家处理。</p>
                    </div>
                </div>

                <!--left-cent 商家详情内容-->
                <div class="left-cent">
                    <div class="cent-success">
                        <p>1.商家同意后，请按照给出的退货地址退货，并请记录退货运单号</p>
                        <p>2.如商家拒接，您可以修改申请后再次发起，商家会重新处理</p>
                        <p>3.如商家超时未处理，退货申请将达成，请按系统给出的退货地址退货</p>
                    </div>

                    <!--modify 修改申请-->
                    <div class="modify" @click="modiy">
                        <p>修改申请</p>
                    </div>

                    <!--revo 撤销申请-->
                    <div class="cent-success">
                        <p>您还可以：<span @click="revo">撤销申请</span></p>
                    </div>
                </div>
                
                <!--left-consult 协商历史-->
                <div class="left-consult">
                    <contents></contents>
                </div>

                <!--next 下一步.-->
                <div class="next" @click="clinext">
                    <p>下一步</p>
                </div>
            </div>

            <!--only-right 右边订单详情-->
            <div class="only-right">
                <detailss></detailss>
            </div>

        </div>
        
        <!--revocation-refunds 撤销申请-->
        <div class="revocation-refunds" v-show="cancels">
            <application></application>
        </div>    
        
        <div class="model_pre" v-show="cancels"></div>
    </div>

</template>

<script>
    
    import contents   from '@/components/refund/refund-refunds/consultative-content.vue'
    import application   from '@/components/refund/revocation-application.vue'
    import detailss   from '@/components/refund/refunds-details.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            contents,
            detailss,
            application
        },

        data () {

            return {
               
                day : 1,

                hour: 23,

                minu: 59,

                logis : false,

                cancels : false,

            }
            
        },

        watch : {

            agins () {

                this.cancels = false

            }
    
        },

        computed : {
            
            ...mapState([

                'agins',

            ])
            
        },

        methods : {
            
            modiy () {

                this.$store.commit('obos', false)

                setTimeout(() => {
                    this.$store.commit('obos', true)
                }, 10)
            },

            revo () {

                this.cancels = true
            },

            clinext () {

                this.$store.commit('next', false)

                setTimeout(() => {
                    this.$store.commit('next', true)
                }, 10)

            },

        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
