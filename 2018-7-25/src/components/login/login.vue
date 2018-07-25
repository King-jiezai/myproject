







<style scoped>

    .login {
        width: 100%;
        height: 100%;
    }
    .login-bottom {
        width: 100%;
        height: 558px;
        background: #99e4c3;
    }
    .login-bottom .box {
        width: 1200px;
        height: 558px;
        margin: 0 auto;
    }
    .box-left img {
        margin: 0 192px 0 102px;
        float: left;
    }
    .box-right {
        width: 360px;
        height: 381px;
        border-radius: 10px;
        margin-top: 92px;
        background: #fff;
        float: left;
    }
    .fsl-top {
        height: 66px;
    }
    .fsl-top .oo {
        width: 180px;
        text-align: center;
        line-height: 66px;
        font-size: 18px;
        border-bottom: 1px solid #c9c9c9;
        float: left;
        cursor: pointer;
    }
    .oo:last-child .os {
        display: none;
    }
    .sos {
        color: #e60012;
        border-bottom: 1px solid #e60012!important;
    }
    .fsl-top .os {
        width: 1px;
        height: 24px;
        background: #959595;
        margin: 21px 0;
        float: right;
    }
    .fsl-bottom {
        padding: 0 30px;
    }
    .center-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
    }

</style>

<template>

    <div class="login">
        <div class="login-top">
            <navs></navs>
        </div>

        <div class="login-bottom">
            <div class="box">
                <div class="box-left">
                    <img src="../../../static/images/login.png">
                </div>

                <div class="box-right">
                    <div class="fsl-top">
                        <div
                             class="oo"
                            :class="{'sos': cos == index}"
                             v-for='(item, index) in log'
                            @click='lis(index)'
                        >
                            <span>{{item.fon}}</span>
                            <div class="os"></div>
                        </div>
                    </div>

                    <div class="fsl-bottom">
                        <login-code v-show='one'></login-code>
                        <login-pass v-show='two'></login-pass>
                    </div>
                </div>
            </div>

            <div class="center-foor">
                <div class="heas">
                    <tail-hear></tail-hear>
                </div>

                <tail-foor></tail-foor>
            </div>
        </div>
    </div>

</template>

<script>

    import navs      from '@/components/public/navs.vue'
    import tailHear  from '@/components/public/tail-hear.vue'
    import tailFoor  from '@/components/public/tail-foor.vue'
    import loginCode from '@/components/login/index/login-code.vue'
    import loginPass from '@/components/login/index/login-pass.vue'

    export default {

        components : {

            navs     ,
            tailHear ,
            tailFoor ,
            loginCode,
            loginPass,

        },

        data () {

            return {

                log : [{
                    fon : '登陆'
                },{
                    fon : '验证码登陆'
                }],

                cos : false,

                one : false,

                two : true

            }
            
        },

        computed : {

        },

        methods : {

            lis (index) {

                this.cos = index

                if (this.log[index].fon == '验证码登陆') {

                    this.one = true

                    this.two = false

                }

                if (this.log[index].fon == '登陆') {

                    this.one = false

                    this.two = true

                }

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
