







<style scoped>

    .details {
        width: 100%;
        height: 100%;
    }
    .details-bottom {
        width: 100%;
        overflow: hidden;
        border-top: 2px solid #000;
        padding-bottom: 50px;
        background: #f1f1f1;
    }
    .obs-top {
        width: 1200px;
        padding: 20px 0 1px;
        margin: 0 auto 20px;
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
        width: 1200px;
        overflow: hidden;
        border-top: 3px solid #71b247;
        border-bottom: 2px dashed #ccc;
        background: #fff;
        padding: 15px 0;
        margin: 0 auto 20px;
    }
    .fs-left {
        width: 300px;
        text-align: center;
        border-right: 1px solid #ccc;
        padding-top: 30px;
        float: left;
    }
    .fs-left .sp1 {
        color: #000;
        font-size: 14px;
    }
    .fs-left .p {
        font-size: 20px;
        font-weight: bold;
        color: #71b247;
        margin: 35px 0 20px;
    }
    .fs-left .lit {
        padding: 4px 15px;
        color: #e60012;
        border: 1px solid #e60012;
    }
    .fs-left .los {
        margin: 35px 35px 0 0;
        float: left;
    }
    .los:last-child {
        margin-right: 0;
    }
    .con {
        width: 175px;
        overflow: hidden;
        margin: 0 auto;
    }
    .los img {
        position: relative;
        top: 4px;
    }
    .los span {
        color: #999898;
    }
    .fs-right {
        float: left;
        padding-top: 30px;
    }
    .fs-right span {
        color: #999898;
        padding-left: 18px;
    }
    .process {
        width: 845px;
        height: 90px;
        overflow: hidden;
        margin: 49px 0 0 55px;
    }
    .box .img {
        float: left;
        position: relative;
        top: 6px;
    }
    .boxs {
        text-align: center;
        float: left;
    }
    .boxs p {
        color: #999898;
        font-weight: bold;
    }
    .fsl-lio {
        width: 1200px;
        height: 274px;
        overflow: hidden;
        background: #fff;
        padding: 15px 0;
        margin: 0 auto;
    }
    .fsl-lio .os {
        width: 300px;
        height: 244px;
        border-right: 1px solid #ccc;
        padding: 15px 25px;
        float: left;
        position: relative;
    }
    .os:last-child {
        border-right: 0;
    }
    .os .sp {
        color: #070707;
        font-size: 14px;
        font-weight: bold;
    }
    .os .p {
        margin-top: 20px;
    }
    .os:nth-child(3) p img {
        display: block;
    }
    .os:nth-child(3) p {
        text-indent: 2em;
    }
    .p p {
        overflow: hidden;
        color: #434444;
        margin-bottom: 5px;
    }
    .p p img {
        position: absolute;
        top: 56px;
        display: none;
    }
    .p span {
        position: absolute;
        left: 100px;
    }
    .fsl-bottom {
        width: 1200px;
        overflow: hidden;
        margin: 20px auto 0;
        background: #fff;
    }
    .ooo-top {
        height: 40px;
        line-height: 40px;
        background: #f2f8fe;
    }
    .ou-left {
        float: left;
        margin: 0 160px;
    }
    .ou-right {
        float: right;
    }
    .ou-right div {
        width: 145px;
        text-align: center;
        float: left;
    }
    .ooo-bottom {
        width: 1200px;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        background: #fff;
        padding: 10px 0 10px 20px;
    }
    .pop-left {
        float: left;
    }
    .pop-left .ol {
        float: left;
    }
    .pop-left p {
        width: 250px;
        float: left;
        margin: 30px 0 0 36px;
    }
    .pop-right {
        float: right;
    }
    .oos {
        width: 145px;
        overflow: hidden;
        line-height: 95px;
        text-align: center;
        float: left;
    }
    .oos:first-child {
        line-height: normal;
        margin-top: 32px;
    }
    .bos {
        overflow: hidden;
        padding: 23px 0 64px;
        background: #fff;
    }
    .lst {
        font-size: 14px;
        float: right;
        margin-right: 50px;
    }
    .lss-left {
        text-align: right;
        float: left;
    }
    .lss-left div:last-child {
        color: #e60012;
    }
    .lss-right {
        float: right;
        margin-left: 50px;
    }
    .lss-right div:last-child {
        color: #e60012;
    }

</style>

<template>

    <div class="details">
        <div class="details-top">
            <navs></navs>
        </div>

        <div class="details-bottom">
            <div class="obs-top">
                <span class="sp"></span>

                <!-- <router-link to='/'> -->
                    <span>订单中心</span>
                <!-- </router-link> -->

                <span>></span>

                <!-- <router-link to='/center'> -->
                    <span>我的租赁单</span>
                <!-- </router-link> -->

                <span>></span>

                <!-- <router-link to='/center'> -->
                    <span>我的订单详情</span>
                <!-- </router-link> -->
            </div>

            <div class="fsl-top">
                <div class="fs-left">
                    <span class="sp1">订单号：132030220335032</span>
                    <p class="p">已取消</p>
                    <span class="lit">立即购买</span>

                    <div class="con">
                        <div class="los">
                            <img src="../../../static/images/complete-order-2/2.png">
                            <span>分享链接</span>
                        </div>

                        <div class="los">
                            <img src="../../../static/images/complete-order-2/3.png">
                            <span>删除订单</span>
                        </div>
                    </div>
                </div>

                <div class="fs-right">
                    <span>您的订单拦截成功，所有礼品卡将返还至广租账户，手机红包将返回至您的移动账户，查看退款时效</span>

                    <div class="process">
                        <div class="box" v-for='item in res'>
                            <div class="boxs">
                                <img :src="item.img">
                                <p>{{item.fon}}</p>
                            </div>
                            <div><img class="img" :src="item.ims"></div>
                        </div>

                        <div class="box">
                            <div class="boxs">
                                <img src="../../../static/images/complete-order-3/5.png">
                                <p>已完成</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fsl-lio">
                <div class="os" v-for='item in reo'>
                    <span class="sp">{{item.hear}}</span>
                    <div class="p">
                        <p v-for='item in item.arr'>
                            <img src="../../../static/images/complete-order-3/7.png">
                            {{item.name}}<span>{{item.lis}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="fsl-bottom">
                <div class="ooo-top">
                    <div class="ou-left">商品</div>

                    <div class="ou-right">
                        <div>租期</div>
                        <div>数量</div>
                        <div>月租金</div>
                        <div>单台押金</div>
                        <div>操作</div>
                    </div>
                </div>

                <div class="ooo-bottom">
                    <div class="pop-left">
                        <div class="ol">
                            <img src="../../../static/images/complete-order/14.png">
                        </div>

                        <p>【大广易租】二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本</p>
                    </div>

                    <div class="pop-right">
                        <div class="oos">
                            <p>2018-5-23</p>
                            <p>2018-5-24</p>
                        </div>

                        <div class="oos">1</div>

                        <div class="oos">￥：2200</div>

                        <div class="oos">￥：3200</div>

                        <div class="oos">查看设备序列号</div>
                    </div>
                </div>

                <div class="bos">
                    <div class="lst">
                        <div class="lss-left">
                            <div>商品总押金：</div>
                            <div>减免押金：</div>
                            <div>应付租金：</div>
                            <div>增值服务：</div>
                            <div>优惠金额：</div>
                            <div>运费：</div>
                            <div>实付金额：</div>
                        </div>

                        <div class="lss-right">
                            <div>￥189.00</div>
                            <div>-￥10.00</div>
                            <div>￥99</div>
                            <div>￥50</div>
                            <div>￥0.00</div>
                            <div>￥0.00</div>
                            <div>￥179.00</div>
                        </div>
                    </div>
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
                    img : '../../../static/images/complete-order-3/3.png',
                    fon : '提交申请',
                    ims : '../../../static/images/complete-order-3/6.png'
                },{
                    img : '../../../static/images/complete-order-3/4.png',
                    fon : '系统处理',
                    ims : '../../../static/images/complete-order-3/6.png'
                }],

                reo : [{
                    hear : '订单信息：',
                    arr  : [{
                        name : '支付方式：',
                        lis  : '在线支付'
                    },{
                        name : '取消时间：',
                        lis  : '2018-5-23 10:10:10'
                    },{
                        name : '取消原因：',
                        lis  : '过期未支付'
                    }]
                },{
                    hear : '付款信息：',
                    arr  : [{
                        name : '应付总金额：',
                        lis  : '￥3039.00'
                    },{
                        name : '商品总押金：',
                        lis  : '￥2940.00'
                    },{
                        name : '减免押金：',
                        lis  : '￥0.00'
                    },{
                        name : '应付租金：',
                        lis  : '￥99'
                    },{
                        name : '增值服务：',
                        lis  : '￥50'
                    },{
                        name : '优惠金额：',
                        lis  : '￥0.00'
                    },{
                        name : '实付金额：',
                        lis  : '￥3039.00'
                    }]
                },{
                    hear : '退款信息：',
                    arr  : [{
                        name : '如果订单拆分，优惠劵可能不再返还。退款将返还您实际支付的金额'
                    }]
                },{
                    hear : '发票信息：',
                    arr  : [{
                        name : '发票类型：',
                        lis  : '电子普通发票'
                    },{
                        name : '发票抬头：',
                        lis  : '企业'
                    },{
                        name : '发票内容：',
                        lis  : '商品明细'
                    }]
                }]

            }

        },

        computed : {

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
