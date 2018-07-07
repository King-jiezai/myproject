







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
        border-top: 3px solid #e60012;
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
    .oop {
        margin-bottom: 15px;
    }
    .oop img {
        position: relative;
        top: 4px;
    }
    .fs-left .p {
        font-size: 20px;
        font-weight: bold;
        color: #e60012;
        margin: 35px 0 0px;
    }
    .fs-left .lit {
        color: #e60012;
    }
    .fs-left .los {
        margin: 35px 35px 0 0;
        float: left;
    }
    .los:last-child {
        margin-right: 0;
    }
    .pp {
        color: #6d6c6c;
        margin-top: 10px;
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
        margin: 49px 20px 0;
    }
    .box .img {
        float: left;
        position: relative;
        top: 6px;
    }
    .ous {
        color: #999898;
        margin-top: 50px;
        padding-left: 20px;
    }
    .boxs {
        text-align: center;
        float: left;
    }
    .boxs p {
        color: #999898;
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
    .prompt {
        height: 86px;
        color: #e60012;
        font-size: 14px;
        padding: 0 25px;
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
                    <p class="p">等待付款</p>

                    <div class="oop">
                        <img src="../../../static/images/complete-order-2/1.png">
                        <span>剩余6时6分</span>
                    </div>

                    <span class="lit">付款</span>
                    <p class="pp">找人代付款</p>

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
                    <span>该订单会为您保留6.0小时（从下单之日算起），6.0小时之后如果还未付款，系统将自动取消该订单。</span>

                    <div class="process">
                        <div class="box" v-for='item in res'>
                            <div class="boxs">
                                <img :src="item.img">
                                <p>{{item.fon}}</p>
                                <p>{{item.dat}}</p>
                                <p>{{item.das}}</p>
                            </div>
                            <div><img class="img" :src="item.ims"></div>
                        </div>

                        <div class="box">
                            <div class="boxs">
                                <img src="../../../static/images/complete-order-2/10.png">
                                <p>已完成</p>
                            </div>
                        </div>
                    </div>

                    <p class="ous">完成订单可能获得：</p>
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

                <div class="prompt">温馨提示：</div>
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
                    img : '../../../static/images/complete-order-2/4.png',
                    fon : '已提交',
                    ims : '../../../static/images/complete-order-2/11.png',
                    dat : '2018-5-23',
                    das : '10:10:10'
                },{
                    img : '../../../static/images/complete-order-2/5.png',
                    fon : '已付款',
                    ims : '../../../static/images/complete-order-2/12.png'
                },{
                    img : '../../../static/images/complete-order-2/6.png',
                    fon : '订单待审核',
                    ims : '../../../static/images/complete-order-2/12.png'
                },{
                    img : '../../../static/images/complete-order-2/7.png',
                    fon : '确认订单',
                    ims : '../../../static/images/complete-order-2/12.png'
                },{
                    img : '../../../static/images/complete-order-2/8.png',
                    fon : '商品出库',
                    ims : '../../../static/images/complete-order-2/12.png'
                },{
                    img : '../../../static/images/complete-order-2/9.png',
                    fon : '租赁中',
                    ims : '../../../static/images/complete-order-2/12.png'
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
