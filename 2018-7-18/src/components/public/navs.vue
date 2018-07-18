







<style scoped>

    .navs {
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
    .pos-p {
        float: left;
        margin-left: 10px;
        cursor: pointer;
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
    .navs-right {
        width: 818px;
        height: 110px;
        float: left;
        padding-top: 52px;
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
    .box-bottom {
        float: right;
    }
    .navs-ooo {
        font-size: 15px;
        padding: 5px 15px;
        float: left;
    }
    .navs-ooo:hover {
        cursor: pointer;
        color: #e60012;
    }
    .navs-btn {
        width: 45px;
        height: 30px;
        color: #e60012;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        margin-right: 10px;
        border: 1px solid #e60012;
        float: left;
    }
    .navs-btn:hover {
        cursor: pointer;
    }
    .navs-btn2 {
        width: 45px;
        height: 30px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        background: #e60012;
        float: left;
    }
    .navs-btn2:hover {
        cursor: pointer;
    }
    .names {
        color: #e60012;
        float: left;
    }

</style>

<template>

    <div class="navs">
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
                <div class="box-bottom">
                    <div class="navs-ooo" v-for='(item, index) in red' @click='lis(index)'>{{item}}</div>

                    <!-- <router-link to='/login' target=_blank>
                        <div class="navs-btn">登录</div>
                    </router-link>
                    
                    <router-link to='/reg' target=_blank>
                        <div class="navs-btn2">注册</div>
                    </router-link> -->
                </div>
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

                img : '../../../static/images/tu4.png',

                red : ['首页', '租赁商铺', '定制租赁', 'IT外包', '租赁大全', '设备回收'],

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
                }],

                his : true,

                name: '',

                out : false

            }

        },

        computed : {

        },

        methods : {

            clis (index) {

                if (this.reo[index].num == '帮助中心') {
                    window.open('/center')
                }

                if (this.reo[index].num == '我的租赁') {
                    window.open('/order')
                }

            },
            
            lis (index) {
                
                if (this.red[index] == '首页') {
                    this.$router.push('/')
                }

                if (this.red[index] == '租赁商铺') {
                    window.open('/zlsp')
                }

                if (this.red[index] == '租赁大全') {
                    window.open('/whole')
                }
                
            },

            async pop () {

                let reo = await this.$api.getUserInfo()

                if (reo.data.status == 0) {

                    this.his = false

                    this.out = true

                    this.name = reo.data.data.phone

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
