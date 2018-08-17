







<style scoped>

    .whole {
        width: 100%;
        height: 100%;
    }
    .whole-top {
        width: 100%;
        height: 380px;
        overflow: hidden;
    }
    .whole-bottom {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    .whole-top img {
        width: 100%;
        height: 240px;
    }
    .obs-top {
        width: 1200px;
        padding: 20px 0 30px;
    }
    .obs-top .sp {
        padding: 2px;
        background: #e60012;
        margin-right: 10px;
    }
    .obs-top span {
        font-size: 15px;
        color: #434444;
        margin-right: 5px;
    }
    .fsl-top {
        width: 1184px;
        height: 83px;
        border-bottom: 2px solid #e60012;
        margin: 0 auto;
    }
    .oo-left {
        width: 83px;
        height: 83px;
        text-align: center;
        line-height: 32px;
        color: #fff;
        font-size: 28px;
        background: #e60012;
        padding: 10px;
        margin-right: 24px;
        float: left;
    }
    .fsl-top .sp {
        width: 1077px;
        text-indent: 2em;
        font-size: 14px;
        color: #898898;
        padding-top: 20px;
        float: left;
    }
    .fsl-cen {
        width: 1200px;
        text-align: center;
        margin: 70px 0;
    }
    .fsl-cen .oo {
        font-size: 16px;
        padding: 15px 40px;
        background: #f2f2f2;
        border-radius: 8px;
        margin-right: 6px;
        cursor: pointer;
    }
    .fsl-cen .oo:last-child {
        margin-right: 0;
    }
    .cos {
        color: #fff;
        background: #e60012!important;
    }
    .fsl-bottom {
        width: 1200px;
        overflow: hidden;
        padding: 0 8px 22px;
        border-bottom: 1px dashed #575757;
        margin-bottom: 52px;
    }
    .fsl-bottom:last-child {
        margin-bottom: 0;
    }
    .fsl-bottom .oop {
        float: left;
        width: 83px;
        height: 89px;
        border: 1px solid #e60012;
        margin-right: 24px;
    }
    .fsl-bottom .p {
        float: right;
        color: #e60012;
        margin-top: 71px;
    }
    .oop .p1 {
        height: 50px;
        color: #e60012;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        background: #eee;
    }
    .oop .p2 {
        height: 39px;
        line-height: 39px;
        text-align: center;
        color: #fff;
        background: #e60012;
    }
    .oso {
        float: left;
        margin-top: 15px;
    }
    .oso span {
        font-size: 24px;
    }
    .oso p {
        font-size: 14px;
        color: #898898;
    }
    .fsl-hot {
        margin: 63px 0;
    }
    .hot {
        text-align: center;
    }
    .hot span {
        font-size: 30px;
        color: #000;
    }
    .hot .po {
        width: 365px;
        height: 1px;
        background: #c9c9c9;
        margin: 15px auto;
    }
    .po span {
        width: 50px;
        height: 3px;
        background: #e60012;
        display: block;
        margin: 0 auto;
    }
    .hot .pp {
        color: #8b8b8b;
        margin: 0 0 29px;
    }
    .hot-img {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
    }
    .pic-left {
        position: absolute;
        top: 147px;
        left: 20px;
    }
    .pic-right {
        position: absolute;
        top: 147px;
        right: 20px;
    }
    .hoo {
        width: 299px;
        height: 350px;
        margin-right: 1px;
        float: left;
    }
    .hoo:last-child {
        margin-right: 0;
    }
    .hoo img {
        height: 295px;
    }
    .hoo p {
        height: 55px;
        color: #fff;
        text-align: center;
        line-height: 55px;
        font-size: 16px;
        background: #e60012;
        margin-top: -5px;
    }
    .hot-siz {
        overflow: hidden;
        font-size: 16px;
        color: #8b8b8b;
        border-bottom: 2px solid #8b8b8b;
        margin-bottom: 50px;
        padding-bottom: 5px;
    }
    .hot-siz .span {
        color: #e60012;
        float: left;
    }
    .hot-siz .sl {
        float: left;
    }
    .sl:last-child span {
        display: none;
    }
    .sl p {
        float: left;
    }
    .sl span {
        padding: 9px 1px;
        margin: 3px 8px 0;
        background: #8b8b8b;
        float: left;
    }

</style>

<template>

    <div class="whole">
        <div class="whole-top">
            <navs></navs>
            <img src="../../../static/images/whole/1.jpg">
        </div>

        <div class="whole-bottom">
            <div class="obs-top">
                <span class="sp"></span>

                <router-link to='/'>
                    <span>广租首页</span>
                </router-link>

                <span>></span>
                <span>租赁大全</span>
            </div>

            <div class="fsl-top">
                <div class="oo-left">
                    <span>租赁资讯</span>
                </div>

                <p class="sp">尊重企业发展规律及成长曲线，体现彼此技术资源优势，互惠互利合作发展的投资策略，通过对中国0~24岁、教育、互联网、科技四个维度的深入研究以及对交叉领域模式的独到分析，结合我们多年累积的成熟教育经验、强大的执行能力。捕捉惠及孩子学习体验及成长动力的投资机会。</p>
            </div>

            <div class="fsl-cen">
                <span
                     class="oo"
                    :class="{'cos': coo == index}"
                     v-for='(item, index) in res'
                    @click='lis(index)'
                >{{item.fon}}</span>
            </div>

            <div class="fsl-bottom" v-for='item in reo'>
                <div class="oop">
                    <p class="p1">{{item.fon}}</p>
                    <p class="p2">{{item.num}}</p>
                </div>

                <div class="oso">
                    <span>{{item.zin}}</span>
                    <p>{{item.don}}</p>
                </div>

                <p class="p">{{item.os}}</p>
            </div>

            <div class="fsl-hot">
                <div class="hot">
                    <span>热门推荐</span>

                    <p class="po">
                        <span></span>
                    </p>

                    <p class="pp">现在，服务的上千家客户与我们一路同行，见证我们的成长；未来，我们一起分享成功的喜悦。</p>
                </div>

                <div class="hot-img">
                    <div class="hoo" v-for='item in pos'>
                        <img :src="item.img">
                        <p>{{item.fon}}</p>
                    </div>

                    <div class="pic-left"><img src="../../../static/images/whole/3.png"></div>
                    <div class="pic-right"><img src="../../../static/images/whole/4.png"></div>
                </div>
            </div>

            <div class="hot-siz">
                <span class="span">热搜词：</span>

                <div class="sl" v-for='item in los'>
                    <p>{{item.fon}}</p>
                    <span></span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import navs from '@/components/public/navs.vue'

    export default {

        components : {

            navs,

        },

        data () {

            return {

                res : [{
                    fon : '公司动态'
                },{
                    fon : '租赁案例'
                },{
                    fon : '租赁新闻'
                },{
                    fon : '租赁资讯'
                },{
                    fon : '技巧知识'
                }],

                coo : false,

                reo : [{
                    fon : '05',
                    num : '2018 06',
                    zin : '工作再忙，也要学会这10个Excel快捷键！',
                    don : '工作中最最最常用、最实用的、而且新手不一定知道，你一定要全部掌握。',
                    os  : '查看详情 >'
                },{
                    fon : '05',
                    num : '2018 06',
                    zin : '工作再忙，也要学会这10个Excel快捷键！',
                    don : '工作中最最最常用、最实用的、而且新手不一定知道，你一定要全部掌握。',
                    os  : '查看详情 >'
                },{
                    fon : '05',
                    num : '2018 06',
                    zin : '工作再忙，也要学会这10个Excel快捷键！',
                    don : '工作中最最最常用、最实用的、而且新手不一定知道，你一定要全部掌握。',
                    os  : '查看详情 >'
                }],

                pos : [{
                    img : '../../../static/images/whole/5.png',
                    fon : '楼盘开售活动租赁现场'
                },{
                    img : '../../../static/images/whole/6.png',
                    fon : '楼盘开售活动租赁现场'
                },{
                    img : '../../../static/images/whole/7.png',
                    fon : '楼盘开售活动租赁现场'
                },{
                    img : '../../../static/images/whole/8.png',
                    fon : '楼盘开售活动租赁现场'
                }],

                los : [{
                    fon : '电脑资讯'
                },{
                    fon : '租电脑多少钱一天'
                },{
                    fon : '打印机租赁怎么算'
                },{
                    fon : '怎么租台式电脑'
                },{
                    fon : '租电脑有什么好处'
                }]

            }
            
        },

        computed : {

        },

        methods : {

            lis (index) {

                this.coo = index

            }

        },

        created () {

        },

        mounted () {

        }

    }

</script>
