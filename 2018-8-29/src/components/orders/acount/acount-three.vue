


<style scoped>

    .order_account {
        width: 910px;
        overflow: hidden;
    }
    .account_top {
        background: #f1f1f1;
        height: 47px;
    }
    .account_txt {
        float: left;
        width: 70%;
        height: 47px;
        line-height: 47px;
        padding-left: 20px;
    }
    .account_txt p {
        width:170px;
        float: left;
        font-size: 16px;
    }
    .account_txt span {
        color:#e60012;
    }
    .account_rechs {
        float: left;
        width: 55px;
        height: 25px;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #000;
        cursor: pointer;
        border:1px solid #ccc;
        margin: 12px 0;
        margin-left: 90px;
    }   
    .check {
        float: left;
        line-height: 47px;
        margin-left:20px ;
        font-size: 14px;
        color: #e60012;
    }
    .account_cont {
        width: 100%;
        overflow: hidden;
    }
    .account_step {
        height: 78px;
        border-bottom: 1px solid #ccc;
    }
    .step_nav {
        width: 300px;
        height: 30px;
        margin: 24px 0;
        float: right;
        position: relative;
    }
    .step-one {
        float: left;
        height: 24px;
        width: 100px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        text-align: center;   
    }
    .step-two {
        float: left;
        height: 24px;
        width: 100px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px; 
    }
    .step-three {
        float: left;
        height: 24px;
        width: 100px;
        background: #0293D4;
        margin: 3px 0;
        line-height: 24px;
        color: #fff;
        padding-left: 30px;  
    }
    .step_one img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:100px;
    }
    .step_two img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:200px;
    }
    .step_one {
        float: left;
        width: 117px;
    }
    .step_two {
        float: left;
        width: 117px;
        margin-left: -17px;
    }
    .step_three {
        float: left;
        width: 100px;
        margin-left: -17px;
    }
    .account_rech {
        height: 300px;
        line-height: 300px;
        text-align: center;
    }
        
</style>

<template>
 
    <div class="account_cont">     
        <div class="account_step">
            <div class="step_nav">
                <div class="step_one">
                    <div class="step-one">
                        <p>1.填写充值金额</p>
                    </div>
                    <span><img src="../../../../static/images/order/22.png"></span>
                </div>

                <div class="step_two">
                    <div class="step-two">
                        <p>2.在线支付</p>
                    </div>
                    <span><img src="../../../../static/images/order/22.png"></span>
                </div>
                <div class="step_three">
                    <div class="step-three">
                        <p>3.充值完成</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="account_rech">
            <p>充值成功</p>
        </div>
    </div>

</template>

<script>

    import {Icon} from 'iview'

    export default {

        components : {

            Icon

        },

        data () {

            return {


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
