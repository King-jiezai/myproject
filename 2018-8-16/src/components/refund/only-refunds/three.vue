

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
        width: 400px;
        background: #FF0000;
        line-height: 40px;
        color: #fff;
        text-align: center; 
    }
    .only-two {
        float: left;
        height: 40px;
        width: 417px;
        background: #FF0000;
        line-height: 40px;
        color: #fff;
        text-align: center;  
    }
    .only-three {
        float: left;
        height: 40px;
        width: 400px;
        background: #FF0000;
        line-height: 40px;
        color: #fff;
        padding-left: 30px;
        text-align: center;   
    }
    .only_one img{
        height: 40px;
        display:block;
        position:absolute;
        left:399px;
    }
    .only_two img{
        height: 40px;
        display:block;
        position:absolute;
        left:800px;
    }
    .only_one {
        float: left;
        width: 400px;
    }
    .only_two {
        float: left;
        width: 417px;
    }
    .only_three {
        float: left;
        width: 400px;
        margin-left: -17px;
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
    .order-details {
        width: 400px;
        height: 30px;
        line-height: 30px;
        padding-left:20px;
        margin-top: 30px;
        font-size: 14px;
    }
    .left-top {
        width: 738px;
        height: 100px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .agree {
        float: left;
        width: 100%;
        height:30px;
        line-height: 30px;
        margin-top: 35px;
        font-size: 16px;
        font-weight: bold;
    }
    .agree img {
        float: left;
        margin: 6px 3px;
    }
    .success {
        width: 100%;
        height: 20px;
        line-height:20px;
        float: left;
    }
    .success p {
        float: left;
        color: #999;
    }
    .success span {
        margin-left: 5px;
    }
    .refund-amount {
        width: 738px;
        height: 50px;
        margin: 0 10px;
        line-height: 50px;
        padding:0px 0 0 10px;
    }
    .refund-amount p:first-child {
        float: left;
        color: #999;
    }
    .refund-amount p:last-child {
        float: left;
        color: #0A8CCA;
        margin-left: 100px;
    }
    .return-success {
        width: 738px;
        height: 70px;
        margin: 0 10px 30px 10px;
        line-height: 70px;
        border: 1px solid #ccc;
        padding:0px 0 0 10px;
        font-size: 13px;
    }
    .left-consult {
        width: 728px;
        overflow: hidden;
        margin: 0 10px;
        padding:20px 0 0 10px;
        margin-bottom: 97px;
        border-top: 1px solid #ccc;
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

            <!--only_three 卖家申请退款成功-->
            <div class="only_three">
                <div class="only-three">
                    <p>3.退款完毕</p>
                </div>
            </div>

        </div>

        <!--only-cent 卖家退款成功详情-->
        <div class="only-cent">

            <!--only-left 卖家左边退款成功详情-->
            <div class="only-left">

                <!--left-top 退款成功-->
                <div class="left-top">
                    <div class="agree">
                        <p>商家已同意退款，退款成功！</p>
                    </div>
                    <div class="success">
                        <p>退款成功时间：{{data}}<span>{{times}}</span></p>
                    </div>
                </div>

                <!--refund-amount 退款总金额-->
                <div class="refund-amount">
                    <p>退款总金额：￥{{ this.loo }}</p>
                    <p>查看钱的去向</p>
                </div>
                
                <!--refund-success 退回支付宝金额-->
                <div class="return-success">
                    <p>退回支付宝：￥{{ this.loo }}</p>
                </div>
                
                <!--left-consult 协商历史-->
                <div class="left-consult">
                    <contents></contents>
                </div>
            </div>

            <!--only-right 右边订单详情-->
            <div class="only-right">
                <detailss></detailss>
            </div>

        </div>   
        
    </div>

</template>

<script>
    
    import contents   from '@/components/refund/only-refunds/consultative-content.vue'
    import detailss   from '@/components/refund/refunds-details.vue'
    import {Icon } from 'iview'

    export default {

        components : {

            Icon,
            contents,
            detailss,
        },

        data () {

            return {

                data : '2018-08-04',

                times: '14:30:00',

                day : 1,

                hour: 23,

                minu: 59,

                loo : 2160,

            }
            
        },

        watch : {

        },

        computed : {

            
        },

        methods : {
            
            

        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
