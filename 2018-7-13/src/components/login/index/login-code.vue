







<style scoped>

    .prompt {
        width: 300px;
        height: 29px;
        color: #999;
        line-height: 29px;
        padding: 0 10px;
        background: #faeeee;
        margin-top: 25px;
    }
    .prompt .pro {
        width: 20px;
        height: 20px;
        color: #fff;
        line-height: 20px;
        text-align: center;
        border-radius: 50%;
        background: #ef7d81;
        margin: 4px 10px 0 0;
        float: left;
    }
    .login .inps {
        width: 300px;
        height: 38px;
        border: 1px solid #ddd;
        padding: 0 10px;
        margin-top: 10px;
        outline: medium;
    }
    .frame {
        width: 300px;
        height: 38px;
        margin-top: 10px;
    }
    .inpo {
        width: 182px;
        height: 38px;
        border: 1px solid #ddd;
        padding: 0 10px;
        outline: medium;
        float: left;
    }
    .obtain {
        width: 108px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        color: #b4b4b4;
        background: #eee;
        float: right;
    }
    .autos {
        color: #666;
        margin-top: 20px;
    }
    .autos input {
        position: relative;
        top: 2px;
    }
    .logins {
        width: 300px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        background: #e60012;
        margin-top: 30px;
    }
    .login p {
        text-align: center;
        margin-top: 21px;
        font-size: 13px;
    }
    .login .ooo {
        color: #439872;
    }

</style>

<template>

    <div class="login">
        <div class="prompt">
            <div class="pro">!</div>
            <span>公共场所不建议自动登陆，以防账号丢失</span>
        </div>

        <input class="inps" type="text" v-model='pop.phone' placeholder="请输入手机号">

        <div class="frame">
            <input class="inpo" type="text" v-model='pop.code' placeholder="请输入手机验证码">
            <div class="obtain" @click='obtain'>获取验证码</div>
        </div>

        <div class="autos">
            <input type="checkbox">
            <span>下次自动登录</span>
        </div>

        <div class="logins" @click='login'>登陆</div>

        <p>
            <router-link to='/reg'>
                <span class="ooo">立即注册</span>
            </router-link>
        </p>
    </div>

</template>

<script>

    export default {

        components : {

        },

        data () {

            return {

                pop : {

                    phone: "",

                    code : ""

                }

            }
            
        },

        computed : {

        },

        methods : {

            async obtain () {

                let res = await this.$api.phoneCode({
                    phone:this.pop.phone
                })

            },

            async login () {

                let res = await this.$api.login(this.pop)

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
