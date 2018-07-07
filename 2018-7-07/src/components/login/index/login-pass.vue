







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
            <span>公共场所不建议自动登陆，以防账号丢失</span>
        </div>

        <input class="inps" type="text" v-model='pop.phone' placeholder="用户名或手机号">

        <div class="frame">
            <input class="inps" type="text" v-model='pop.password' placeholder="密码">
        </div>

        <div class="autos">
            <input type="checkbox">
            <span>下次自动登录</span>
            <span class="sp">忘记密码？</span>
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

                pop : {

                    phone: "18344099304",

                    password: "123456"

                }

            }
            
        },

        computed : {

        },

        methods : {
            
            async login () {

                // let url = 'http://120.78.75.195:8080/guangzu/user/login.do'

                // this.$http.post(url, this.pop).then( data => {

                //     // this.$router.push('/')

                //     console.log(data)

                // })

                let res = await this.$api.login(this.pop)
                
                // console.log(res)

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
