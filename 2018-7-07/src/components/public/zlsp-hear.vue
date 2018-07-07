







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
    }
    .oos-right span {
        margin: 0 13px;
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
        height: 619px;
        background: #464f58;
        padding: 10px 15px 0 15px;
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
                    <div class="pos-left">
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
                    <input class="inp" type="text" placeholder="请输入关键字">
                    <img :src="img">
                    <span class="sl" v-for='item in pos'>{{item.num}}</span>
                </div>

                <div class="oos-right">
                    <span>我的租赁箱</span>
                    <img :src="imgs">
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
                            v-for='(item, key) in reo'
                            :key='key'
                            :res='item.obs'
                            :red='item.img'
                            :reo='item.fon'
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

    export default {

        components : {

            zlspNav,

        },

        data () {

            return {

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

                reo : [{
                    img : '../../../static/images/computer.png',
                    fon : '电脑设备',
                    obs : ['笔记本', '一体机', '台式机', '游戏电脑', '平板电脑', '服务器']
                },{
                    img : '../../../static/images/printer-2.png',
                    fon : '办公设备',
                    obs : ['碎纸机', '传真机', '扫描设备', '投影仪', '打印机', '复合一体机']
                },{
                    img : '../../../static/images/camera-2.png',
                    fon : '数码产品',
                    obs : ['相机', 'DV摄像', '入门摄像', '无人机', '三脚架', '手机', '对讲机']
                },{
                    img : '../../../static/images/video.png',
                    fon : '影音设备',
                    obs : ['显示器', 'LED屏', '接拼屏', '液晶电视', '幕布', '幕布支架', '音响', '功放']
                },{
                    img : '../../../static/images/network.png',
                    fon : '网络设备',
                    obs : ['路由器', '交换机', '上网宝']
                },{
                    img : '../../../static/images/other.png',
                    fon : '其它设备',
                    obs : ['身份识别器']
                }],

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

            nav (index) {

                if (this.res[index].num == '我的租赁') {
                    window.open('/order')
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
                
            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
