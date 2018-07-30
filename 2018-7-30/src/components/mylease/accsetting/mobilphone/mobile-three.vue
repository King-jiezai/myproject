


<style scoped>

    .account_cont {
        width: 100%;
        overflow: hidden;
    }
    .step_nav {
        height: 30px;
        margin: 24px 0;
        margin-left: 70px;
        position: relative;
    }
    .step-one {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        text-align: center;   
    }
    .step-two {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px; 
        text-align: center;
    }
    .step-three {
        float: left;
        height: 24px;
        width: 240px;
        background: #e60012;
        margin: 3px 0;
        line-height: 24px;
        color: #fff;
        padding-left: 30px;  
        text-align: center;
    }
    .step_two img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:480px;
    }
    .step_one {
        float: left;
        width: 240px;
    }
    .step_two {
        float: left;
        width:240px;
    }
    .step_three {
        float: left;
        width: 240px;
    }
    .modify_success {
        width: 100%;
        overflow: hidden;
        margin-top: 70px;
    }
    .modify_cont {
        width: 480px;
        height: 30px;
        line-height: 30px;
        margin-left:70px;
    }
    .modify_cont img {
        float: left;
    }
    .modify_cont .success {
        float: left;
        font-size: 16px;
        margin-left: 20px;
        color: #018A18;
        font-weight: bold;
    }
    .new-phone {
        float: left;
        margin:5px 0 0 133px;
    }
    .logins {
        float: left;
        margin:5px 0 0 25px;
        color: #ccc;
    }
    .emils {
        float: left;
        margin:5px 0 0 133px;
        color: #3F86F8;
        cursor: pointer;
    }
    .back {
        float: left;
        margin:5px 0 0 30px;
        color: #3F86F8;
        cursor: pointer;
    }
        
</style>

<template>
 

        <div class="account_cont">     
                <div class="step_nav">
                    <div class="step_one">
                        <div class="step-one">
                            <p>1.验证身份</p>
                        </div>
                    </div>

                    <div class="step_two">
                        <div class="step-two">
                            <p>2.验证新号码</p>
                        </div>
                        <span><img src="../../../../../static/images/order/22.png"></span>
                    </div>
                    <div class="step_three">
                        <div class="step-three">
                            <p>3.完成</p>
                        </div>
                    </div>
                </div>

                <div class="modify_success">
                    <div class="modify_cont">
                        <img src="../../../../../static/images/order/5555.png">
                        <p class="success">恭喜您，手机号修改成功！</p>
                        <p class="new-phone">新手机号：<span>{{newphone}}</span></p>
                        <p class="logins">可用于登录，找回密码及身份验证！</p>
                        <p class="emils">继续验证邮箱</p>
                        <p class="back" @click="back">返回</p>
                    </div>

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

                newphone : '188****123',

            }

            
        },

        watch : {

        },

        computed : {

        },

        methods : {

            back () {
                
                this.$store.commit('agins',false)

                setTimeout(() => {
                        this.$store.commit('agins',true)
                }, 10)
            }

        },

        created () {

        },

        mounted () {

        }

    }

</script>
