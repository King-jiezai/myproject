


<style scoped>

    .navs {
        width: 100%;
        height: 145px;
        margin: 0 auto;
        border-bottom: 2px solid #000;
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
        float: left;
        margin-left: 25px;
    }
    .navs-ooo {
        font-size: 15px;
        padding: 5px 25px;
        float: left;
        position: relative;
        z-index: 9999;
    }
    .navs-ooo:hover {
        cursor: pointer;
        color: #e60012;
    }
    .ooo {     
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
    .oos-right {
        width: 150px;
        height: 41px;
        color: #010101;
        font-size: 16px;
        line-height: 37px;
        border: 1px solid #e60012;
        float: right;
    }
    .oos-right .myzul {
        float: right;
        margin-right: 10px;
    }
    .oos-right img {
        float: left;
        margin:4px;     
    }
    .setting {
        width: 133px;
        height: 185px;
        background: #fff;
        border: 1px solid #ccc;
        margin-left: 240px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        z-index:1;
    }
    .setting p {
        height: 30px;
    }
    .setting p:hover {
        color: #e60012;
    }
    .setting p:first-child {
        margin-top: 30px;
    }
    .setting:last-child {
        width: 100px;
        height: 100px;
        background: #fff;
        border: 1px solid #ccc;
        margin-left: 355px;
        text-align: center;       
        font-size: 14px;
        cursor: pointer;
    }
    .spps {
        padding:12px 0 0 365px;
        position: absolute;
        z-index: 999;
    }
    .spps:nth-child(1) {
        color: #e60012;
    }
    .spp {
        padding:12px 0 0 445px;
        position: absolute;
        z-index: 999;
    }
     .spp:nth-child(3){
        color: #e60012;
    }
    .setting p:hover {
        background: #fff7f7;
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
                    <div class="pos-left">
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
                <Icon type="arrow-up-b" class="spps" v-show="icon_a"></Icon>
                <Icon type="arrow-down-b" class="spps" v-show="icon_b"></Icon>
                <Icon type="arrow-up-b" class="spp" v-show="icon_c"></Icon>
                <Icon type="arrow-down-b" class="spp" v-show="icon_d"></Icon>  
                <div class="box-bottom">                  
                    <div class="navs-ooo" v-for='(item, index) in red' @click.stop='lis(index)' :class="{'ooo': per == index}">
                        <Badge :count='num' class="badge">
                             {{item}}
                        </Badge>
                    </div>
                       
                    <div class="setting" v-show='show'>
                         <p v-for='(item,index) in res' @click='click(index)'>{{item.num}}</p>
                    </div>
                    <div class="setting" v-show='shows'>
                         <p v-for='item in sett'>{{item.num}}</p>
                    </div>
                </div>
                <div class="oos-right">
                    <Badge :count='num'>
                        <img :src="imgs">
                    </Badge>
                    <span class="myzul" @click="mycart">我的租赁箱</span>                   
                </div>
            </div>
             
        </div>
    </div>

</template>

<script>

    import { Icon, Badge } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            Badge,
        },

        data () {

            return {

                oos : true,

                icon_a : false,

                icon_b : true,

                icon_c : false,

                icon_d : true,

                show : false,

                shows : false,

                num : 1,

                per : null,

                imgs: '../../../static/images/case.png',

                img : '../../../static/images/tu4.png',

                red : ['返回商城首页', '个人中心', '账户设置', '社区', '消息',],

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

                res : [{
                    num : '个人信息'
                },{
                    num : '资金账户'
                },{
                    num : '押金账户'
                },{
                    num : '账户安全'
                },{
                    num : '收货地址'
                }],

                sett : [{
                    num : '我的圈子'
                },{
                    num : '我的话题'
                }]


            }

        },

        computed : {

            ...mapState([

                'obos',
                'clos'

            ])

        },

        watch : {

            obos () {

                this.show = false

                this.shows = false

                this.icon_a = false

                this.icon_b = true

                this.icon_c = false

                this.icon_d = true

            },

            clos () {
                this.per = null
            }

        },

        methods : {

            clis (index) {

                if (this.reo[index].num == '帮助中心') {
                    window.open('/center')
                }

                if (this.reo[index].num == '我的租赁') {
                    window.open('/order')
                }

                if (this.reo[index].num == '会员中心') {

                    window.open('/member')

                }

            },

            mycart () {

                window.open('/ShoppingCart')
            },
            
            lis (index) {

                this.per = index

                this.$store.commit('active',false)

                setTimeout(() => {
                    this.$store.commit('active',true)
                }, 10)
                
                if (this.red[index] == '返回商城首页') {

                    this.$router.push('/')
                }

                if (this.red[index] == '个人中心') {

                    this.show = false

                    this.shows = false

                    this.icon_a = false

                    this.icon_b = true

                    this.icon_c = false

                    this.icon_d = true

                    window.open('/person')
                }

                if (this.red[index] == '账户设置') {
                    this.show = !this.show
                    this.icon_a = !this.icon_a
                    this.icon_b = !this.icon_b
                    this.icon_c = false
                    this.icon_d = true
                    this.shows = false
                }
                if (this.red[index] == '社区') {
                    this.shows = !this.shows
                    this.icon_c = !this.icon_c
                    this.icon_d = !this.icon_d
                    this.icon_a = false
                    this.icon_b = true
                    this.show = false
                }
                
            },

            click (index) {

                if (this.res[index].num == '个人信息') {

                    this.$store.commit('infor',false)

                    this.$router.push("/order")

                    setTimeout(() => {
                        this.$store.commit('infor',true)
                    }, 10)

                }

            }
        },

        created () {
            
        },

        mounted () {}

    }

</script>
