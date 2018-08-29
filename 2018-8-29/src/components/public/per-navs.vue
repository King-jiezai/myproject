


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
        padding-top: 43px;
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
        width: 147px;
        height: 41px;
        color: #010101;
        font-size: 16px;
        line-height: 37px;
        border: 1px solid #e60012;
        float: right;
        cursor: pointer;
    }
    .oos-right .myzul {
        float: left;
        margin: 0 10px; 
    }
    .oos-right img {
        float: left;
        margin: 2px 0;
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
        margin:9px 0 0 365px;
        position: absolute;
        z-index: 99999999;
    }
    .spps:nth-child(2) {
        color: #e60012;
    }
    .spp {
        margin:9px 0 0 445px;
        position: absolute;
        z-index: 99999;
    }
    .spp:nth-child(4){
        color: #e60012;
    }
    .setting p:hover {
        background: #fff7f7;
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
                <Icon type="ios-arrow-down" class="spps" v-show="icon_b"/>
                <Icon type="ios-arrow-up" class="spps" v-show="icon_a"></Icon/>
                <Icon type="ios-arrow-down" class="spp" v-show="icon_d"/>
                <Icon type="ios-arrow-up" class="spp" v-show="icon_c"></Icon/>
                <div class="box-bottom">                  
                    <div class="navs-ooo" v-for='(item, index) in red' @click.stop='lis(index)' :class="{'ooo': per == index}">
                        {{item}}
                    </div>
                       
                    <div class="setting" v-show='show'>
                         <p v-for='(item,index) in res' @click='click(index)'>{{item.num}}</p>
                    </div>
                    <div class="setting" v-show='shows'>
                         <p v-for='item in sett'>{{item.num}}</p>
                    </div>
                </div>
                <div class="oos-right">
                    <span class="myzul" @click="mycart">我的租赁箱</span>

                    <Badge :count='num'>
                        <img :src="imgs">
                    </Badge>              
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

                his : true,

                name: '',

                out : false,

                oos : true,

                icon_a : false,

                icon_b : true,

                icon_c : false,

                icon_d : true,

                show : false,

                shows : false,

                num : 0,

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
                'clos',

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

                this.per = null

            },

            clos () {
                this.per = null
            }

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

            mycart () {

                window.open('/myRentalbox')
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

                    window.open('/Personalcen')

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

                if (this.res[index].num == '资金账户') {

                    window.open('/orders?pid=' + 8 )

                }

                if (this.res[index].num == '个人信息') {

                    window.open('/orders?pid=' + 18 )

                }

                if (this.res[index].num == '账户安全') {

                    window.open('/orders?pid=' + 19 )

                }

                if (this.res[index].num == '收货地址') {

                    window.open('/orders?pid=' + 20 )

                }

            },

            //查询个人信息
            async pop () {

                let reo = await this.$api.getUserInfo()

                if (reo.data.status == 1) {

                    this.his = false

                    this.out = true

                    this.name = reo.data.data.username

                }

            },

            //退出登录
            async logout () {

                let reo = await this.$api.logout()

                this.$router.push('/zlsp')

            },

            //查询购物车商品列表
            async cartList () {

                let reo = await this.$api.getUserInfo()

                if (reo.data.status == 1) {

                    let res = await this.$api.cartList()

                    this.num = res.data.data.cartProductVoList.length

                }

            }

        },

        created () {

            this.pop()

            this.cartList()
            
        },

        mounted () {}

    }

</script>
