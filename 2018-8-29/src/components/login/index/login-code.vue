







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
    .login p {
        text-align: center;
        margin-top: 21px;
        font-size: 13px;
    }
    .login .ooo {
        color: #439872;
    }
    .sens {
        pointer-events: none;
        cursor: default;
    }

</style>

<template>

    <div class="login">
        <div class="prompt">
            <div class="pro">!</div>
            <span>{{this.warn}}</span>
        </div>

        <input class="inps" type="text" v-model='phone' placeholder="请输入手机号">

        <div class="frame">
            <input class="inpo" type="text" v-model='phoneCode' placeholder="请输入手机验证码">
            <div class="obtain" :class="{'sens': pro}" @click='obtain'>
                <span v-show='obn'>获取短信验证码</span>
                <span v-show='sen'>{{this.second}}s</span>
            </div>
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

                phone : "",

                phoneCode : "",

                warn: '公共场所不建议自动登陆，以防账号丢失',

                obn    : true,

                sen    : false,

                second : '',

                pro    : false

            }
            
        },

        computed : {

        },

        methods : {

            //获取短信验证码
            async obtain () {

                let blur = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/

                if (this.phone == '') {

                    this.warn = '请输入手机号码'

                } else if (!blur.test(this.phone)) {

                    this.warn = '手机号码格式不正确'

                }

                if (blur.test(this.phone)) {

                    this.warn = '公共场所不建议自动登陆，以防账号丢失'

                    let res = await this.$api.phoneCode({
                        phone:this.phone
                    })

                    this.second = 60

                    this.pro = true

                    this.obn = false

                    this.sen = true

                    let tim = setInterval(()=> {

                        this.second--

                        if (this.second < 0) {

                            this.pro = false

                            this.obn = true

                            this.sen = false

                            clearInterval(tim)

                        }

                    }, 1000)

                }

            },

            //验证码登录
            async login () {

                let res = await this.$api.phoneLogin({
                    phone : this.phone,
                    phoneCode : this.phoneCode
                })

                if (this.phone == '' || this.phoneCode == '') {

                    this.warn = '请填写完整的账号信息'

                } else {

                    if (res.data.status == 1) {

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
            
        },

        mounted () {

        }

    }

</script>
