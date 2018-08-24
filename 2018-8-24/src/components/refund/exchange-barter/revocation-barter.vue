

<style scoped>

    .exchange-barter {
        width: 100%;
        overflow: hidden;
    }
    .barter_nav {
        width: 1200px;
        height: 40px;
        float: left;
        position: relative;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .barter_one {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .barter-one {
        float: left;
        height: 40px;
        width: 380px;
    }
     .barter_one img{
        height: 40px;
        float: left;
        position:absolute;
        left:380px;
    }
    .barter_two {
        float: left;
        width: 420px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
        margin-left: -20px;
    }
    .barter-two {
        float: left;
        height: 40px;
        width: 420px;
    }
     .barter_two img{
        height: 40px;
        float: left;
        position:absolute;
    }
    .barter_three {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .barter-three {
        float: left;
        height: 40px;
        width: 374px;
    }
    .barter_three img{
        height: 40px;
        float: left;
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
    }
    .success p {
        float: left;
    }
    .success span {
        margin-left: 5px;
    }
    .left-cent {
        width: 738px;
        height: 100px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding:30px 0 0 10px; 
    }
    .cent-success {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
    }
    .left-consult {
        width: 728px;
        overflow: hidden;
        margin: 0 10px;
        padding:20px 0 0 10px;
        margin-bottom: 97px;
    }
    
</style>

<template>

    <!--only-refunds 买家申请换货-->
    <div class="exchange-barter">

        <!--barter_nav 买家申请换货步骤-->
        <div class="barter_nav">

            <!--barter_one 买家申请换货第一步-->
            <div class="barter_one">
                <div class="barter-one">
                    <p>1.买家申请换货</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>
            
            <!--barter_two 买家申请换货第二步-->
            <div class="barter_two">
                <div class="barter-two">
                    <p>2.卖家处理换货申请</p>
                </div>
                <span><img src="../../../../static/images/refund/55.png"></span>
            </div>

            <!--barter_three 买家申请换货成功-->
            <div class="barter_three">
                <div class="barter-three">
                    <p>3.换货关闭</p>
                </div>
            </div>

        </div>

        <!--only-cent 买家申请退款商品详情-->
        <div class="only-cent">

            <!--only-left 左边商品详情-->
            <div class="only-left"> 
                <div class="left-top">
                    <div class="agree">
                        <p>换货关闭</p>
                    </div>
                    <div class="success">
                        <p>完结时间：{{data}}<span>{{times}}</span></p>
                    </div>
                </div>
                <div class="left-cent">
                    <div class="cent-success">
                        <p>因您主动撤销，换货申请关闭，如问题仍未解决，售后保障期内，您可以重新发起售后申请</p>
                    </div>
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
    
    import detailss   from '@/components/refund/exchange-barter/revocation-details.vue'
    import contents   from '@/components/refund/exchange-barter/consultative-content.vue'

    export default {

        components : {

            detailss,
            contents,
        },

        data () {

            return {
               
               data : '2018-8-18',

               times : '12:30:00'

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
