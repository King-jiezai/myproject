







<style scoped>

    .zlsp-top {
        width: 100%;
        height: 30px;
        font-size: 14px;
        color: #636365;
        background: #eee;
    }
    .zlsp-list {
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
        margin-right: 35px;
    }
    .obs-right {
        float: right;
    }
    .obs-right p {
        float: left;
        cursor: pointer;
    }
    .obs-right span {
        padding: 7px 1px;
        margin: 8px 10px;
        background: #636365;
        float: left;
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
        cursor: pointer;
        float: left;
    }
    .zlsp-bottom {
        width: 100%;
    }
    .home-top {
        width: 1200px;
        height: 110px;
        margin: 0 auto;
    }
    .oos-left {
        height: 110px;
        float: left;
        cursor: pointer;
    }
    .oos-cen {
        width: 339px;
        margin: 45px 0 0 180px;
        float: left;
        position: relative;
    }
    .oos-cen .inp {
        width: 339px;
        height: 37px;
        font-size: 13px;
        color: #666;
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 0 66px 0 15px;
        margin-bottom: 5px;
        outline: medium;
        position: relative;
    }
    .oos-cen .sl {
        font-size: 12px;
        margin-right: 15px;
        cursor: pointer;
    }
    .oos-cen .sl:hover {
        color: #e60012;
    }
    .oos-cen .sl:last-child {
        margin-right: 0;
    }
    .oos-cen img {
        position: absolute;
        top: 3px;
        right: 15px;
        cursor: pointer;
    }
    .oos-right {
        width: 147px;
        height: 41px;
        color: #010101;
        font-size: 16px;
        line-height: 37px;
        border: 1px solid #e60012;
        margin-top: 43px;
        float: right;
        cursor: pointer;
    }
    .oos-right span {
        margin: 0 0 0 10px;
        color: #000;
        float: left;
    }
    .oos-right img {
        margin-top: 3.5px;
        float: left;
    }
    .home-bottom {
        width: 1200px;
        height: 54px;
        margin: 0 auto;
        position: relative;
    }
    .left-nav {
        width: 250px;
        color: #fff;
        position: relative;
    }
    .left-nav:hover {
        position: absolute;
        z-index: 2;
    }
    .left-nav .sn {
        width: 250px;
        height: 54px;
        background: #e60012;
        position: relative;
        cursor: pointer;
    }
    .sn img {
        position: absolute;
        top: 13px;
        left: 32px;
    }
    .sn div {
        color: #fff;
        letter-spacing:10px;
        font-size: 26px;
        line-height: 54px;
        position: absolute;
        left: 80px;
    }
    .fsl {
        width: 250px;
        overflow: hidden;
        background: #464f58;
        padding: 0 15px;
    }
    .lasts:last-child {
        margin-bottom: 25px;
    }
    .lasts:first-child {
        margin-top: 10px;
    }
    .right-nav {
        width: 950px;
        height: 54px;
        line-height: 54px;
        position: absolute;
        top: 0;
        left: 250px;
    }
    .right-nav ul li {
        font-size: 17px;
        list-style: none;
        float: left;
        margin-left: 50px;
        cursor: pointer;
    }
    .right-nav ul li:hover {
        color: #e60012;
    }
    .names {
        color: #e60012;
        float: left;
    }

</style>

<template>

    <div class="zlsp-hear">
        <div class="zlsp-top">
            <div class="zlsp-list">
                <div class="oo-left">
                    <div class="obs-left">欢迎来到广租租赁商城！</div>

                    <div class="obs-right">
                        <p @click='list'>返回广租首页</p>
                        <span></span>
                        <p @click='addFavorite'>收藏网站</p>
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
                        <div class="cos" v-for='(item, index) in res'>
                            <span class="sp"></span>
                            <p @click='nav(index)'>{{item.num}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="zlsp-bottom">
            <div class="home-top">
                <div class="oos-left" @click='list'>
                    <img src="../../../static/images/logo.jpg">
                </div>

                <div class="oos-cen">
                    <input class="inp" v-model='val' type="text" placeholder="请输入关键字">
                    <img :src="img" @click='sreen'>
                    <span class="sl" v-for='item in pos'>{{item.num}}</span>
                </div>

                <div class="oos-right" @click='Cart'>
                    <span>我的租赁箱</span>

                    <Badge :count='num'>
                        <img :src="imgs">
                    </Badge>
                </div>
            </div>

            <div class="home-bottom">
                <div class="left-nav">
                    <div class="sn">
                        <img :src="imgo">
                        <div>租赁分类</div>
                    </div>

                    <div class="fsl">
                        <zlsp-nav
                            class='lasts'
                            v-for='(item, key) in reo'
                            :key='key'
                            :res='item.categoryList'
                            :reo='item.name'
                        ></zlsp-nav>
                    </div>
                </div>

                <div class="right-nav">
                    <ul>
                        <li v-for='(item, index) in obs' @click='oos(index)'>{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import zlspNav from '@/components/public/zlsp-nav.vue'

    import { Badge } from 'iview'

    export default {

        components : {

            zlspNav,
            Badge,

        },

        data () {

            return {

                num : 0,

                val : '',

                his : true,

                name: '',

                out : false,

                img : '../../../static/images/search-2.png',

                imgs: '../../../static/images/case.png',

                imgo: '../../../static/images/class-2.png',

                res : [{
                    num : '我的租赁'
                },{
                    num : '会员中心'
                },{
                    num : '网站导航'
                },{
                    num : '服务热线：400-881-9131'
                }],

                reo : [],

                pos : [{
                    num : '笔记本'
                },{
                    num : '一体机'
                },{
                    num : '台式机'
                }],

                obs : ['租赁频道', '租赁大礼包', '定制租赁', '增值服务']

            }

        },

        computed : {

        },

        methods : {

            //我的购物车
            async Cart () {

                let reo = await this.$api.getUserInfo()

                if (reo.data.status == 1) {
                    
                    window.open('/myRentalbox')

                }

                if (reo.data.status == 0) {
                    
                    window.open('/login')

                }

            },

            //商品搜索
            async sreen () {

                if (this.val != '') {

                    //写入字段
                    localStorage.setItem("val", this.val)

                    var gets = localStorage.getItem("val")

                    let res = await this.$api.list({
                        keyword : gets
                    })

                    this.$store.commit('sreen', res.data.data.list)

                    setTimeout(() => {
                        this.$store.commit('sreen', res.data.data.list)
                    }, 10)

                    this.val = ''

                }
                
                window.location.reload()

            },

            async nav (index) {

                if (this.res[index].num == '我的租赁') {

                    let getUserInfo = await this.$api.getUserInfo()

                    if (getUserInfo.data.status == 0) {
                        
                        window.open('/login')

                    }

                    if (getUserInfo.data.status == 1) {
                        
                        window.open('/orders')

                    }

                }

                if (this.res[index].num == '会员中心') {
                    window.open('/member')
                }

            },

            list () {

                this.$router.push('/')

            },

            oos (index) {

                if (this.obs[index] == '租赁频道') {
                    this.$router.push('/zlsp')
                }

            },

            //收藏网站
            addFavorite () {

                var url = window.location

                var title = document.title

                var ua = navigator.userAgent.toLowerCase()

                if (ua.indexOf("msie 8") > -1) {
                    external.AddToFavoritesBar(url, title, '')//IE8
                } else {
                    try {
                        window.external.addFavorite(url, title)
                    } catch (e) {
                        try {
                            window.sidebar.addPanel(title, url, "")//firefox
                        } catch (e) {
                            alert("您的浏览器不支持，请使用Ctrl+D进行添加！")
                        }
                    }
                }
                
            },

            //获取个人信息
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

                window.location.reload()

            },

            //商品分类
            async getCategoryList() {

                let res = await this.$api.getCategoryList()

                this.reo = res.data.data

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

            this.getCategoryList()

            this.cartList()
            
        },

        mounted () {

        }

    }

</script>
