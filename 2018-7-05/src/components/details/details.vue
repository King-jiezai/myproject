







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
        margin: 0 auto;
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
    .fs-left p {
        font-size: 20px;
        font-weight: bold;
        color: #71b247;
        margin: 35px 0 20px;
    }
    .fs-left .lit {
        padding: 4px 5px;
        color: #e60012;
        border: 1px solid #e60012;
    }
    .fs-left .los {
        margin-top: 35px;
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
        width: 843px;
        overflow: hidden;
        margin: 49px auto 0;
        padding-left: 49px;
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
        color: #000;
        font-weight: bold;
    }
    .fsl-cen {
        width: 1200px;
        height: 295px;
        overflow: hidden;
        background: #fff;
        margin: 20px auto;
        padding: 15px 0;
    }
    .cen-left {
        width: 300px;
        height: 265px;
        border-right: 1px solid #ccc;
    }
    .cen-left .oo {
        width: 129px;
        height: 112px;
        text-align: center;
        border: 1px solid #eee;
        padding-top: 6px;
        margin: 75px 0 0 25px;
        float: left;
    }
    .cen-left p {
        color: #000;
        line-height: 265px;
        margin-left: 15px;
        float: left;
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
    .os:last-child p:last-child {
        color: #999898;
    }
    .os .sp {
        color: #070707;
        font-size: 14px;
        font-weight: bold;
    }
    .os .p {
        margin-top: 20px;
    }
    .p p {
        color: #434444;
        margin-bottom: 5px;
    }
    .p span {
        position: absolute;
        left: 100px;
    }
    .fsl-bottom {
        width: 1200px;
        overflow: hidden;
        margin: 20px auto 0;
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
    .oos:last-child {
        line-height: normal;
        margin-top: 25px;
    }
    .oos:last-child img {
        position: relative;
        top: 3px;
    }
    .oos:last-child .lij {
        width: 78px;
        line-height: 20px;
        border: 1px solid #434444;
        margin: 5px auto 0;
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
                    <p>完成</p>
                    <span class="lit">查看发票详情</span>

                    <div class="los">
                        <img src="../../../static/images/complete-order/1.png">
                        <span>分享链接</span>
                    </div>
                </div>

                <div class="fs-right">
                    <span>订单已经完成，感谢您在广租商场购物，欢迎您对本次交易及所租赁商品进行评价</span>

                    <div class="process">
                        <div class="box" v-for='item in res'>
                            <div class="boxs">
                                <img :src="item.img">
                                <p>{{item.fon}}</p>
                            </div>
                            <img class="img" :src="item.ims">
                        </div>

                        <div class="box">
                            <div class="boxs">
                                <img src="../../../static/images/complete-order/7.png">
                                <p>已完成</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fsl-cen">
                <div class="cen-left">
                    <div class="oo">
                        <img src="../../../static/images/complete-order/9.png">
                    </div>

                    <p>送货方式：普通快递</p>
                </div>
            </div>

            <div class="fsl-lio">
                <div class="os" v-for='item in reo'>
                    <span class="sp">{{item.hear}}</span>
                    <div class="p">
                        <p v-for='item in item.arr'>{{item.name}}<span>{{item.lis}}</span></p>
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

                        <div class="oos">
                            <p>申请售后</p>
                            <div class="lij">
                                <img src="../../../static/images/complete-order/13.png">
                                <span>立即购买</span>
                            </div>
                        </div>
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
                    img : '../../../static/images/complete-order/2.png',
                    fon : '提交订单',
                    ims : '../../../static/images/complete-order/8.png'
                },{
                    img : '../../../static/images/complete-order/3.png',
                    fon : '付款成功',
                    ims : '../../../static/images/complete-order/8.png'
                },{
                    img : '../../../static/images/complete-order/4.png',
                    fon : '产品出库',
                    ims : '../../../static/images/complete-order/8.png'
                },{
                    img : '../../../static/images/complete-order/5.png',
                    fon : '等待收货',
                    ims : '../../../static/images/complete-order/8.png'
                },{
                    img : '../../../static/images/complete-order/6.png',
                    fon : '租赁中',
                    ims : '../../../static/images/complete-order/8.png'
                }],

                reo : [{
                    hear : '收货人信息：',
                    arr  : [{
                        name : '收货人：',
                        lis  : '张先生'
                    },{
                        name : '地址：',
                        lis  : '广州市天河区展望广场'
                    },{
                        name : '手机号码：',
                        lis  : '123123133'
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
                    hear : '订单信息：',
                    arr  : [{
                        name : '订单号：',
                        lis  : '1111111111111'
                    },{
                        name : '下单时间：',
                        lis  : '2018-5-23 10:10:10'
                    },{
                        name : '订单状态：',
                        lis  : '未支付'
                    },{
                        name : '发货日期：',
                        lis  : '2018-5-23 10:10:10'
                    },{
                        name : '起租日期：',
                        lis  : '2018-5-23'
                    },{
                        name : '结束日期：',
                        lis  : '2018-5-23'
                    },{
                        name : '租赁期限：',
                        lis  : '24个月'
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
                    },{
                        name : '电子发票将在订单完成后1-2天内开具'
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
