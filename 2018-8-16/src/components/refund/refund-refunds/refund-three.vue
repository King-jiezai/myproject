

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
        background: #FF0000;
        line-height: 40px;
        color: #fff;
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
        left:900px;
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
    .return-information {
        width: 738px;
        height: 120px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding:20px 0 0 10px; 
    }
    .return-address {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
    }
    .return-address img {
        float: left;
        margin: 3px 3px 3px 0;
    }
    .return-address p:nth-child(2) {
        float: left;
    }
    .return-address p:last-child {
        float: right;
        margin-right: 10px;
        color: #32A5FE;
    }
    .address-name {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .address-name p:first-child {
        float: left;
    }
    .address-name p:last-child {
        float: left;
        margin-left: 60px;
    }
    .address-name span {
        letter-spacing: 4px;
    }
    .left-cent {
        width: 738px;
        height: 250px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding:20px 0 0 10px; 
        color: #999;
        line-height: 20px;
    }
    .modify {
        float: left;
        width: 170px;
        height: 35px;
        line-height: 35px!important;
        border-radius: 5px;
        text-align: center;
        color: #FFCACE;
        background-color: #e60012;
        font-size: 16px;
        margin: 50px 0 30px 0;
        cursor: pointer;
    }
    .mail {
        float: left;
        width: 170px;
        height: 35px;
        line-height: 35px!important;
        border-radius: 5px;
        text-align: center;
        color: #e60012;
        background-color: #fff;
        font-size: 16px;
        margin: 50px 0 30px 0;
        border:1px solid #ccc;
        margin-left: 20px;
        cursor: pointer;
        position: relative;
    }
    .mail img {
        position: absolute;
        top: -4px;
        right: -3px;
    }
    .cent-success {
        float: left;
        width: 738px;
        line-height: 30px;
        color: #999;
        line-height: 20px;
    }
    .cent-success span {
        color: #32A5FE;
        cursor: pointer;
    }
    .logis-number {
        width: 100%;
    }
    .send-mail {
        width: 100%;
    }
    .left-consult {
        width: 728px;
        overflow: hidden;
        margin: 0 10px;
        padding:20px 0 0 10px;
        margin-bottom: 30px;
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
                <span><img src="../../../../static/images/refund/111.png"></span>
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
                
                <div v-show="cent">
                    <!--left-top 请等待商家同意-->
                    <div class="left-top">
                        <div class="agree">
                            <p>7天退货，0秒响应，请退货给商家</p>
                            <img src="../../../../static/images/refund/66.png">
                            <p>还剩{{day}}天{{hour}}小时{{minu}}分</p>
                        </div>

                        <!--success 成功发起退款申请-->
                        <div class="success">
                            <p>商家已同意退货申请，请尽早退货</p>
                        </div>
                    </div>

                    
                    <div class="return-information">    
                        <div class="return-address">
                            <img src="../../../../static/images/refund/555.png">
                            <p>退货地址</p>
                            <p>联系物流信息</p>
                        </div>
                        <div class="address-name">
                            <p><span>收货人</span>：{{ addName }}</p>
                            <p>{{ phone }}</p>
                        </div>
                        <div class="receiving-address">
                            <p>收货地址：{{ address }}</p>
                        </div>
                    </div>    

                    <!--left-cent 商家详情内容-->
                    <div class="left-cent">
                        <p>1.未与商家协商一致，请勿使用到付或平邮，以免商家拒签货物</p>
                        <p>2.交易的钱款还在天猫中间账户，确保您资金安全</p>
                        <p>3.请填写真实退货物流信息，逾期未填写，退货申请将关闭</p>
                        <p>4.天猫提供官方寄件服务(上门取件、驿站)，退货有保障</p>
                        <!--modify 修改申请-->
                        <div class="modify" @click="modiy">
                            <p>填写退货物流单号</p>
                        </div>

                        <div class="mail" @click="climail">
                            <p>我要寄件</p>
                            <img src="../../../../static/images/refund/56.png">
                        </div>

                        <div class="mail" @click="clinext">
                            <p>下一步</p>
                            <img src="../../../../static/images/refund/56.png">
                        </div>

                        <!--revo 撤销申请-->
                        <div class="cent-success">
                            <p>您还可以：<span @click="revo">撤销申请</span></p>
                        </div>
                    </div>
                </div>
                
                <!--logis-number 填写退货物流单号-->
                <div v-show="numbers" class="logis-number">
                    <number></number>
                </div>
                
                <!--send-mail 快递上门收件退货-->
                <div v-show="mail" class="send-mail">
                    <piece></piece>
                </div>

                <!--left-consult 协商历史-->
                <div class="left-consult" v-show="consult">
                    <contents></contents>
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
    import detailss   from '@/components/refund/refunds-details.vue'
    import application   from '@/components/refund/revocation-application.vue'
    import number       from '@/components/refund/refund-refunds/buyer-return/logistics-number.vue'
    import piece       from '@/components/refund/refund-refunds/buyer-return/send-piece.vue'
    import {Icon }      from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            number,
            piece,
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

                addName : '张某某',

                phone : '13056654412232',

                address: '广东省广州市天河区石牌西路8号',

                mess : false,

                cancels : false,

                cent    : true,

                numbers : false,

                mail    : false,

                consult : true,

            }
            
        },

        watch : {

            agins () {

                this.cancels = false

            },

            cor () {

                this.cancels = true
            }
        },

        computed : {

            ...mapState([

                'agins',

                'cor'

            ])
            
        },

        methods : {
            
            modiy () {

                this.cent = false

                this.numbers = true
            },

            climail () {

                this.cent = false

                this.mail = true

                this.consult = false

                this.$store.commit('len', false)

                setTimeout(() => {
                    this.$store.commit('len', true)
                }, 10)
            },

            climess () {
                this.mess = !this.mess
            },

            revo () {

                this.cancels = true
            },
            
            clinext () {

                this.$store.commit('checres', false)

                setTimeout(() => {
                    this.$store.commit('checres', true)
                }, 10)

            },

        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
