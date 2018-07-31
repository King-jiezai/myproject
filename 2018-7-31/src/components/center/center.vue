







<style scoped>

    .center {
        width: 100%;
        height: 100%;
    }
    .center-top img {
        width: 100%;
        height: 240px;
    }
    .center-self {
        width: 1200px;
        overflow: hidden;
        margin: 53px auto 0;
    }
    .self {
        height: 28px;
    }
    .self span {
        padding: 13px 2px;
        background: #e60012;
        float: left;
    }
    .self div {
        float: left;
        font-size: 18px;
        font-weight: bold;
        color: #000;
        letter-spacing: 3px;
        margin-left: 10px;
    }
    .help {
        height: 590px;
        padding: 0 20px 116px;
    }
    .fsl {
        width: 290px;
        text-align: center;
        margin-top: 80px;
        float: left;
        cursor: pointer;
    }
    .fsl img {
        margin-bottom: 10px;
    }
    .fsl .p1 {
        font-size: 16px;
        color: #000;
        margin: 5px 0;
    }
    .fsl .p2 {
        width: 230px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
    }
    .center-hot {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    .center-service {
        width: 100%;
        height: 226px;
        background: #b6e8e8;
        position: relative;
    }
    .service {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    .service-gd {
        height: 28px;
        margin-top: 32px;
    }
    .service-gd span {
        padding: 13px 2px;
        background: #e60012;
        float: left;
    }
    .service-gd div {
        float: left;
        font-size: 18px;
        font-weight: bold;
        color: #000;
        letter-spacing: 3px;
        margin-left: 10px;
    }
    .fso {
        padding-left: 50px;
    }
    .fs {
        width: 290px;
        overflow: hidden;
        margin: 20px 115px 0 0;
        float: left;
    }
    .fs:last-child {
        margin-right: 0;
    }
    .fs-top {
        height: 70px;
    }
    .fs-top img {
        float: left;
    }
    .fs-top div {
        font-size: 18px;
        margin-top: 13px;
        float: left;
    }
    .fs-top .p2 {
        overflow: hidden;
        font-size: 13px;
    }
    .fs-top .sp {
        color: #e60012;
    }
    .fs-bottom {
        width: 290px;
        overflow: hidden;
    }
    .fs-bottom span {
        padding: 5px 25px;
        color: #fff;
        font-size: 15px;
        border-radius: 50px;
        background: #e60012;
        margin-left: 100px;
        position: absolute;
        bottom: 25px;
    }
    .vo {
        color: #e60012;
        font-size: 13px!important;
        margin-top: 0!important;
    }
    .center-quality {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        padding: 91px 0 34px 0;
    }
    .center-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .center .heas {
        border-bottom: 1px solid #666;
    }

</style>

<template>

    <div class="center">
        <div class="center-top">
            <navs></navs>
            <img src="../../../static/images/center/1.png">
        </div>

        <div class="center-self">
            <div class="self">
                <span></span>
                <div>自助服务</div>
            </div>

            <div class="help">
                <div class="fsl" v-for='(item, index) in res' @click='guide(index)'>
                    <img :src="item.img">
                    <p class="p1">{{item.fon}}</p>
                    <div class="p2">{{item.zin}}</div>
                </div>
            </div>
        </div>

        <div class="center-hot">
            <center-hot></center-hot>
        </div>

        <div class="center-service">
            <div class="service">
                <div class="service-gd">
                    <span></span>
                    <div>广租客服</div>
                </div>

                <div class="fso">
                    <div class="fs" v-for='item in obs'>
                        <div class="fs-top">
                            <img :src="item.img">

                            <div>
                                <p>{{item.sso}}</p>
                                <p class="p2"><span class="sp">{{item.sss}}</span>{{item.oos}}</p>
                                <div class="vo">{{item.oob}}</div>
                            </div>
                        </div>

                        <div class="fs-bottom">
                            <span>{{item.fon}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="center-quality">
            <center-quality></center-quality>
        </div>

        <div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>

            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>

    import navs          from '@/components/public/navs.vue'
    import tailHear      from '@/components/public/tail-hear.vue'
    import tailFoor      from '@/components/public/tail-foor.vue'
    import centerHot     from './index/center-hot.vue'
    import centerQuality from './index/center-quality.vue'

    export default {

        components : {

            navs         ,
            tailHear     ,
            tailFoor     ,
            centerHot    ,
            centerQuality,

        },

        data () {

            return {

                res : [{
                    img : '../../../static/images/center/2.png',
                    fon : '租赁指南',
                    zin : '快速查看登录 / 注册 租赁 支付流程等'
                },{
                    img : '../../../static/images/center/3.png',
                    fon : '订单查询',
                    zin : '快速查看订单详情、配送进度、确认收货等'
                },{
                    img : '../../../static/images/center/4.png',
                    fon : '售后服务',
                    zin : '快速提交退换货 / 维修申请查看处理进度退款记录'
                },{
                    img : '../../../static/images/center/5.png',
                    fon : '账号安全',
                    zin : '修改密码、绑定 / 换绑手机、提高账户安全等'
                },{
                    img : '../../../static/images/center/6.png',
                    fon : '免押金服务',
                    zin : '快速查看了解免押金租赁需求'
                },{
                    img : '../../../static/images/center/7.png',
                    fon : '广租特色服务',
                    zin : '快速了解广租不一样的租赁服务'
                },{
                    img : '../../../static/images/center/8.png',
                    fon : '物流配送',
                    zin : '费用、范围等信息查询说明'
                },{
                    img : '../../../static/images/center/9.png',
                    fon : '平台介绍',
                    zin : '快速查看了解广租'
                }],

                obs : [{
                    img : '../../../static/images/center/10.png',
                    sso : '在线咨询（7*24小时）',
                    sss : '30秒',
                    oos : '内回复咨询问答',
                    fon : '点此咨询'
                },{
                    img : '../../../static/images/center/11.png',
                    sso : '电话客服',
                    sss : '24小时',
                    oos : '人工电话实时服务',
                    fon : '点此咨询'
                },{
                    img : '../../../static/images/center/12.png',
                    sso : '提建议',
                    oos : '客服及时通过私信回复您',
                    oob : '邮件留言 dg@dg500.cn',
                    fon : '我要留言'
                }]

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

            guide (index) {

                if (this.res[index].fon == '租赁指南') {
                    window.open('helpcen?pid=1&pis=1-1')
                }

                if (this.res[index].fon == '售后服务') {
                    window.open('helpcen?pid=4&pis=4-1')
                }

                if (this.res[index].fon == '免押金服务') {
                    window.open('helpcen?pid=2&pis=2-1')
                }

                if (this.res[index].fon == '广租特色服务') {
                    window.open('helpcen?pid=3&pis=3-1')
                }

                if (this.res[index].fon == '平台介绍') {
                    window.open('helpcen?pid=5&pis=5-1')
                }

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
