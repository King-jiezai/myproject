

<style scoped>

    .set-password {
        width: 1200px;
        margin: 0 auto;
    }
    .password-navs {
        width: 1200px;
        height: 40px;
        margin:  0 auto;
        margin-top: 50px;
        padding: 0 340px;
    }    
    .one {
        float: left;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50px;
        background-color: #ccc;
        color: #fff;
        font-size: 20px;
    }
    .one:nth-child(1) {
        background-color: #e60012;
    }
    .one:nth-child(3) {
        background-color: #e60012;
    }
    .one:nth-child(5) {
        background-color: #e60012;
    }
    .line {
        width: 200px;
        height: 5px;
        background-color: #ccc;
        float: left;
        margin: 17px 0;
    }
    .line:nth-child(2) {
        background-color: #e60012;
    }
    .line:nth-child(4) {
        background-color: #e60012;
    }
    .line:nth-child(6) {
        background-color: #e60012;
    }
    .password-text {
        width: 1200px;
        height: 20px;
        line-height: 20px;
        margin:  0 auto;
        margin-top: 5px;
        padding-left: 242px;
    }
    .password-text p {
        width: 240px;
        float: left;
        text-align: center;
    }
    .password-text p:first-child {
        color: #e60012;
    }
    .password-text p:nth-child(2) {
        color: #e60012;
    }
    .password-text p:nth-child(3) {
        color: #e60012;
    }
    .success-cent {
        width:400px;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 80px;
        overflow: hidden;
    }
    .success-left {
        float: left;
        width: 70px;
        height: 70px;
    }
    .success-right {
        width: 300px;
        height: 70px;
        float: left;
        line-height: 30px;
        margin-left: 20px;
        font-size: 16px;
    }
    .success-right p:first-child {
        font-size: 20px;
        color: #5dc758;
        margin: 5px 0;
    }
    
</style>

<template>

    <!--set-password 成功设置新密码-->
    <div class="set-password">

        <!--password-navs 找回密码步骤-->
        <div class="password-navs">
            <div class="one">
                <p>1</p>
            </div>
            <div class="line">
                
            </div>
            <div class="one">
                <p>2</p>
            </div>
            <div class="line">
                
            </div>
            <div class="one">
                <p>3</p>
            </div>
        
        </div>
        <div class="password-text">
            <p>验证身份</p>
            <p>设置新密码</p>
            <p>完成</p>
        </div>
        
        <!--success-cent 成功设置新密码的提示-->
        <div class="success-cent">
            
            <div class="success-left">
                <img src="../../../static/images/success.png">
            </div>

            <div class="success-right">
                <p>新密码设置成功！</p>
                <p>请牢记您新设置的密码。返回登录页面</p>
            </div>
            
        </div>
    </div>

</template>

<script>


    export default {

        components : {

           
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
