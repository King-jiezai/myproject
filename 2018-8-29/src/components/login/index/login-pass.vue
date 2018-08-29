







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
        width: 100%;
        height: 18px;
        color: #666;
        margin-top: 30px;
    }
    .autos .sp {
        float: right;
        cursor: pointer;
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
        cursor: pointer;
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
            <span>{{this.warn}}</span>
        </div>

        <input class="inps" type="text" v-model='name' placeholder="手机号">

        <div class="frame">
            <input class="inps" type="password" v-model='password' placeholder="密码">
        </div>

        <div class="autos">
            <Checkbox v-model="single" size='default' @on-change='remember'>记住密码</Checkbox>

            <span class="sp" @click='forget'>忘记密码？</span>
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

    import { Checkbox } from 'iview'

    export default {

        components : {

            Checkbox

        },

        data () {

            return {

                single: false,

                remem : false,

                warn: '公共场所不建议自动登陆，以防账号丢失',

                name: "",

                password: ""

            }
            
        },

        computed : {

        },

        methods : {

            //忘记密码
            forget () {

                window.open('/retrievePassword')

            },

            //记住密码
            remember (index) {

                this.remem = index

            },
            
            //密码登录
            async login () {

                let res = await this.$api.login({
                    phone: this.name,
                    password: this.password
                })

                if (this.name == '' || this.password == '') {

                    this.warn = '请填写完整的账号信息'

                } else {

                    if (res.data.status == 1) {

                        if (this.remem == true) {

                            //写入字段
                            localStorage.setItem("username", this.name)
                            localStorage.setItem("userpassword", this.password)

                        } else {

                            localStorage.removeItem("username")
                            localStorage.removeItem("userpassword")

                            this.single = false

                        }

                        let URL = location.href.split('?')

                        if (URL.length == 1) {

                            this.$router.push('/')

                        } else {

                            this.$router.push('/pages?pid=' + this.$route.query.pid + '&classification=' + this.$route.query.classification)
                            
                        }

                    }

                    if (res.data.status == 0) {

                        this.warn = res.data.msg

                    }

                }

            }

        },

        created () {

            if (this.$route.query.pid == undefined) {

                this.$route.query.pid = ''

            }

            if (this.$route.query.classification == undefined) {

                this.$route.query.classification = ''

            }

            if (localStorage.getItem("username") != null && localStorage.getItem("userpassword") != null) {

                this.single = true

                this.name = localStorage.getItem("username")

                this.password = localStorage.getItem("userpassword")

            }
            
        },

        mounted () {

        }

    }

</script>
