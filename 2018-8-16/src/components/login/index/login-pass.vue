







<style scoped>

    .login {
        overflow: hidden;
    }
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
    }
    .autos {
        color: #666;
        margin-top: 20px;
    }
    .autos input {
        position: relative;
        top: 2px;
    }
    .autos .sp {
        float: right;
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
    .login .ooo {
        color: #439872;
    }
    .fs-left {
        float: left;
        position: relative;
        bottom: 5px;
    }
    .fs-left img {
        position: relative;
        top: 3px;
        margin-right: 5px;
    }
    .fs-right {
        float: right;
    }
    .fso {
        margin-top: 21px;
    }

</style>

<template>

    <div class="login">
        <div class="prompt">
            <div class="pro">!</div>
            <span>{{warn}}</span>
        </div>

        <input class="inps" type="text" v-model='pop.name' placeholder="手机号">

        <div class="frame">
            <input class="inps" type="text" v-model='pop.password' placeholder="密码">
        </div>

        <div class="autos">
            <input type="checkbox">
            <span>下次自动登录</span>
            <span class="sp" @click="retri">忘记密码？</span>
        </div>

        <div class="logins" @click='login'>登陆</div>

        <div class="fso">
            <p class="fs-left">
                <span>快捷登陆：</span>
                <img src="../../../../static/images/landing_qq.png">
                <img src="../../../../static/images/landing.png">
            </p>

            <p class="fs-right">
                <router-link to='/reg'>
                    <span class="ooo">立即注册>></span>
                </router-link>
            </p>
        </div>
    </div>

</template>

<script>

    export default {

        components : {

        },

        data () {

            return {

                warn: '公共场所不建议自动登陆，以防账号丢失',

                pop : {

                    name: "",

                    password: ""

                }

            }
            
        },

        computed : {

        },

        methods : {
            
            async login () {

                let res = await this.$api.login({
                    phone: this.pop.name,
                    password: this.pop.password
                })

                if (this.pop.name == '' || this.pop.password == '') {

                    this.warn = '请填写完整的账号信息'

                } else {

                    if (res.data.status == 0) {

                        this.$router.push('/')

                    }

                    if (res.data.status == 1) {

                        this.warn = res.data.msg

                    }

                }

            },

            retri () {

                window.open('/password') 
            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
