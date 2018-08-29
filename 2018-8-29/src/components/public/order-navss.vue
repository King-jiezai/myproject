







<style scoped>

    .order-navs {
        width: 100%;
        height: 140px;
        margin: 0 auto;
    }
    .top-top {
        width: 100%;
        height: 30px;
        font-size: 14px;
        color: #636365;
        background: #eee;
    }
    .bottom-bottom {
        width: 1200px;
        height: 110px;
        margin: 0 auto;
    }
    .top-list {
        width: 1200px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
    }
    .oo-left {
        float: left;
    }
    .obs-left {
        float: left;
        margin-right: 15px;
    }
    .oo-right {
        float: right;
    }
    .pos-left {
        float: left;
    }
    .pos-left .sp {
        color: #666;
    }
    .login {
        color: #e60012;
        padding: 3px 10px;
    }
    .pos-right {
        float: right;
    }
    .pos-right .cos {
        float: left;
    }
    .cos .sp {
        padding: 7px 1px;
        margin: 8px 10px;
        background: #636365;
        float: left;
    }
    .cos p {
        float: left;
        cursor: pointer;
    }
    .navs-left {
        width: 382px;
        height: 110px;
        float: left;
    }
    .box-top {
        float: right;
    }
    .box-top img {
        position: relative;
        top: 3px;
    }
    .box-top .sp {
        color: #e60012;
    }
    .navs-right {
        width: 550px;
        height: 110px;
        float: right;
        padding-top: 52px;
    }
    .pos-p {
        float: left;
        margin-left: 10px;
        cursor: pointer;
    }
    .names {
        color: #e60012;
        float: left;
    }

</style>

<template>

    <div class="order-navs">
        <div class="top-top">
            <div class="top-list">
                <div class="oo-left">
                    <div class="obs-left">欢迎来到广租！</div>

                    <div class="box-top">
                        <img :src="img">
                        <span>热线：<span class="sp">400-881-9131</span></span>
                    </div>
                </div>

                <div class="oo-right">
                    <div class="pos-left" v-show='out'>
                        <span class="names">{{name}}</span>
                        <p class="pos-p" @click='logout'>退出</p>
                    </div>
                    
                    <div class="pos-left" v-show='his'>
                        <router-link to='/login' target=_blank>
                            <span class="login">登录</span>
                        </router-link>

                        <router-link to='/reg' target=_blank>
                            <span class="sp">注册</span>
                        </router-link>
                    </div>

                    <div class="pos-right">
                        <div class="cos" v-for='(item, index) in reo'>
                            <span class="sp"></span>
                            <p @click='clis(index)'>{{item.num}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-bottom">
            <div class="navs-left">
                <router-link to='/'>
                    <img src="../../../static/images/logo.jpg">
                </router-link>
            </div>

            <div class="navs-right">
                <Steps :current="3" size="small">
                    <Step content="我的租赁箱"></Step>
                    <Step content="确认订单"></Step>
                    <Step content="付款"></Step>
                    <Step content="支付成功"></Step>
                    <Step content="评价"></Step>
                </Steps>
            </div>
        </div>
    </div>

</template>

<script>

    import { Steps, Step } from 'iview'

    export default {

        components : {

            Steps,
            Step : Steps.Step,

        },

        data () {

            return {

                his : true,

                name: '',

                out : false,

                img : '../../../static/images/tu4.png',

                reo : [{
                    num : '我的租赁'
                },{
                    num : '会员中心'
                },{
                    num : '网站导航'
                },{
                    num : '帮助中心'
                },{
                    num : '收藏网站'
                }]

            }

        },

        computed : {

        },

        methods : {

            async clis (index) {

                if (this.reo[index].num == '帮助中心') {
                    window.open('/center')
                }

                if (this.reo[index].num == '我的租赁') {

                    let getUserInfo = await this.$api.getUserInfo()

                    if (getUserInfo.data.status == 0) {
                        
                        window.open('/login')

                    }

                    if (getUserInfo.data.status == 1) {
                        
                        window.open('/orders')

                    }

                }
                
                if (this.reo[index].num == '会员中心') {
                    window.open('/member')
                }

            },

            async pop () {

                let reo = await this.$api.getUserInfo()

                if (reo.data.status == 1) {

                    this.his = false

                    this.out = true

                    this.name = reo.data.data.username

                }

            },

            async logout () {

                let reo = await this.$api.logout()

                window.location.reload()

            }

        },

        created () {

            this.pop()
            
        },

        mounted () {}

    }

</script>
