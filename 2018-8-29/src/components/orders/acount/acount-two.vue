


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
        background: #0293D4;
        margin: 3px 0;
        line-height: 24px;
        color: #fff;
        padding-left: 30px; 
    }
    .step-three {
        float: left;
        height: 24px;
        width: 100px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
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
        margin: 43px 0 37px 20px;
    }
    .account_jine {
        margin: 0px 0 0px 20px;
        line-height: 37px;
    }
    .account_jine p:last-child{
        color: #999;
    }
    .ins {
        width: 220px;
        height: 37px;
        line-height: 37px;
        padding-left: 10px;
        outline: medium;
        margin-right: 10px;
    }
    .next {
        height: 37px;
        width: 100px;
        line-height: 37px;
        text-align: center;
        background: #e60012;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        margin: 37px 0 0 80px ;
        cursor: pointer;
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
                    <span><img src="../../../../static/images/order/11111.png"></span>
                </div>
                <div class="step_three">
                    <div class="step-three">
                        <p>3.充值完成</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="account_rech">
            <p>充值账户：{{accou}}</p>
        </div>

        <div class="account_jine">
            <p>充值金额：<input type="text" class="ins">元</p>
            <p>请注意：目前我们支持微信、支付宝与网银充值，在线支付成功后，充值金额会在1分钟内到账，如微信、支付宝或银联系统故障或升级时，到账时间以实际情况为准</p>
        </div>

        <div class="next" @click="next">
            <p>下一步</p>
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

                accou : 'D-1230'

            }
            
        },

        watch : {

        },

        computed : {

        },

        methods : {

             next () {

                this.$store.commit('nexttwo',false)

                setTimeout(() => {
                    this.$store.commit('nexttwo',true)
                }, 10)
                
            }
            
        },

        created () {

        },

        mounted () {

        }

    }

</script>
