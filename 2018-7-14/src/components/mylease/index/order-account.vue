


<style scoped>

    .order_account {
        width: 910px;
        height: 500px;
    }
    .account_top {
        height: 87px;
        border:1px solid #ccc;
    }
    .account_txt {
        float: left;
        width: 70%;
        height: 47px;
        line-height: 47px;
        margin: 20px 0 20px 10px; 
    }
    .account_txt p {
        width:170px;
        float: left;
        font-size: 16px;
    }
    .account_txt span {
        color:#e60012;
    }
    .account_rech {
        float: left;
        width: 60px;
        height: 25px;
        background: #e60012;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        margin: 30px 0;
    }
    .account_rechs {
        float: left;
        width: 60px;
        height: 25px;
        background: #e60012;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        margin: 30px 0 30px 20px;
    }
    
    .check {
        float: right;
        line-height: 87px;
        margin-right: 20px;
        font-size: 14px;
        color: #43C3F0;
    }
   

</style>

<template>

    <div class="order_account">
        <div class="account_top">
            <div class="account_txt">
                <p>账户余额：<span>￥{{acc}}</span></p>
                <p>账户状态：<span>{{tai}}</span></p>
            </div>
            <div class="account_rech">
                    <p>充值</p>
            </div>
             <div class="account_rechs">
                    <p>提现</p>
            </div>

            <p class="check">查看充值明细</p>
            
        </div>
    </div>

</template>

<script>

   

    export default {

        components : {

    

        },

        data () {

            return {

                acc : 1000,

                tai : "有效"

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
