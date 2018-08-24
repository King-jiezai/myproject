







<style scoped>

    .buyout {
        width: 910px;
        overflow: hidden;
        position: relative;
    }
    .buyout-top {
        width: 100%;
        height: 35px;
        border-bottom: 1px dashed #ccc;
        padding: 0 20px;
        line-height: 35px;
        position: relative;
    }
    .buyout-top .success {
        float: left;
    }
    .buyout-top .success span {
        color: #e60012;
        margin: 0 3px;
    }
    .buyout-screen {
        width: 140px;
        height: 30px;
        line-height: 30px;
        float: right;
        position: relative;
    }
    .buyout-screen span {
        float: left;
    }
    .inps {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        padding-left:10px; 
        border:1px solid #ccc;
        cursor: pointer;
    }
    .inps p {
        float: left;
    }
    .screen {
        width: 100px;
        border:1px solid #ccc;
        line-height: 25px;
        position: absolute;
        right: 24px;
        top: 30px;
        z-index: 9999;
        background-color: #fff;
    }
    .screen p {
        padding: 0 25px;
    }
    .screen p:hover {
        background-color: #e60012;
        color: #fff;
        cursor: pointer;
    }
    .buyout-cont {
        width: 100%;
        margin-top: 30px;
    }
    .buyout-nav {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f1f1f1;
    }
    .buyout-nav p:nth-child(1) {
        width: 120px
    }
    .buyout-nav p:nth-child(2) {
        width: 120px;
    }
    .buyout-nav p:nth-child(3) {
        width: 230px;
    }
    .buyout-nav p:nth-child(9) {
        width: 90px;
    }
    .buyout-nav p {
        width: 70px;
        float: left;
        text-align: center;
    }
    .information {
        width: 100%;
        overflow: hidden;
        margin-bottom: 30px;
        border-top: 1px solid #ccc;
    }
    .information-cont {
        width: 100%;
        padding: 10px 0;
        overflow: hidden;
        border:1px solid #ccc;
        border-top: 0px;
    }
    .information .infor {
        width: 70px;
        height: 80px;
        float: left;
        text-align: center;
        line-height: 80px;
    }
    .information .infor:nth-child(1) {
        width: 120px;
        line-height: 80px;
    }
    .information .infor:nth-child(2) {
        width: 120px;
        line-height: 80px;
    }
    .information .infor:nth-child(3) {
        width: 230px;
        text-align: left!important;
    }
    .information .infor:nth-child(3) img {
        float: left;
        margin: 15px 0 15px 5px;
    }
    .information .infor:nth-child(3) p {
        margin-top: 15px;
        float: right;
        width: 160px;
        line-height: 20px!important;
    }
    .information .infor:nth-child(8) {
        padding: 20px 0;
    }
    .information .infor:nth-child(8) p {
        line-height: 20px!important;
    }
    .information .infor:nth-child(8) .endorder{
        color: #0a96f8;
        cursor: pointer;
    }
    .information .infor:nth-child(9) {
        width: 88px;
        padding: 15px 0;
    }
    .information .infor:nth-child(9) p {
        line-height: 25px!important;
        cursor: pointer;
    }
    .nowpay {
        width: 70px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: #e60012;
        color: #fff;
        border-radius: 5px;
        margin: 0 8px;
    }
    .leaving-message {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border:1px solid #ccc;
        border-top: 0px;
    }
    .leaving-message p {
        float: left;
    }
    .leaving-message input {
        width: 823px;
        height: 38px;
        line-height:38px;
        outline: medium;
        border:0px;
        margin-left: 5px;
    }
    .pages {
        float: right;
        margin: 30px 30px 30px 0;
    }

</style>

<template>
    
    <!--buyout 买断记录-->
    <div class="buyout">

        <!--buyout-top 买断次数和筛选-->
        <div class="buyout-top">
            <p class="success">累计成功买断：<span>{{this.infor.length}}</span>次</p>
            <div class="buyout-screen">
                <span>筛选：</span>
                <div class="inps" @click="cliinp">
                    <p>{{this.val}}</p>
                    <Icon type="ios-arrow-down" />
                </div>               
            </div>
        </div>

        <!--screen 筛选内容-->
        <div class="screen" v-show="screes">
            <p v-for="(item,index) in scr" @click="cliscr(index)">{{item.fon}}</p>
        </div>
        
        <!--buyout-cont 买断的内容-->
        <div class="buyout-cont">
            <div class="buyout-nav">
                <p>订单编号</p>
                <p>租赁订单</p>
                <p>产品名称</p>
                <p>交易类型</p>
                <p>订单金额</p>
                <p>支付方式</p>
                <p>付款时间</p>
                <p>订单状态</p>
                <p>操作</p>
            </div>
            
            <!--information 买断的信息-->
            <div class="information" v-for="item in infor">
                <div class="information-cont">
                    <div class="infor">
                        <p>{{item.orderNum}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.leaseNum}}</p>
                    </div>
                    <div class="infor">
                        <img :src="item.img">
                        <p>{{item.fon}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.type}}</p>
                    </div>
                    <div class="infor">
                        <p>￥{{item.momey}}</p>
                    </div>
                    <div class="infor">
                        <img :src="item.alipay">
                        <img :src="item.bank">
                    </div>
                    <div class="infor">
                        <p>{{item.time}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.status}}</p>
                        <p class="endorder">{{item.endorder}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.colse}}</p>
                        <div class="nowpay">
                            <p>{{item.pay}}</p>
                        </div>
                    </div>
                </div>
                <div class="leaving-message">
                    <p>我要留言：</p>
                    <input type="text">
                </div>               
            </div>
            
        </div>
        
        <!--pages 分页-->
        <div class="pages">
            <Page :total="total" :page-size='pageSize' :transfer=true @on-change='onch' prev-text="上一页" next-text="下一页"></Page>
        </div>
    </div>

</template>

<script>

    import { RadioGroup, Radio , Icon , Page} from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,
            Icon,
            Page

        },

        data () {

            return {

                num : 0,

                val : '不限',

                pageSize : 2,

                page : 1,

                total : 0,

                scr : [{
                    fon: '不限'
                },{
                    fon: '未付款'
                },{
                    fon: '成功买断'
                },{
                    fon: '已关闭'
                }],

                infor : [{
                    orderNum : '1313231313132',
                    leaseNum : '1313231313132',
                    img : '../../../../static/images/buyout/230.png',
                    fon : '二手笔记本电脑联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    type: '未付款',
                    momey: 3000, 
                    alipay: '../../../../static/images/order/1-5.png',
                    bank : '../../../../static/images/order/1-4.png',
                    time : '2018-8-24',
                    status : '待付款',
                    endorder: '结束订单',
                    colse : '关闭订单',
                    pay  : '立即付款'

                },{
                    orderNum : '1313231313132',
                    leaseNum : '1313231313132',
                    img : '../../../../static/images/buyout/230.png',
                    fon : '二手笔记本电脑联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    type: '未付款',
                    momey: 3000, 
                    alipay: '../../../../static/images/order/1-5.png',
                    bank : '../../../../static/images/order/1-4.png',
                    time : '2018-8-24',
                    status : '待付款',
                    endorder: '结束订单',
                    colse : '关闭订单',
                    pay  : '立即付款'

                }],

                screes : false,

            }

        },

        methods : {

            cliinp () {

                this.screes = !this.screes
            },

            cliscr (index) {

                this.val = this.scr[index].fon

                this.screes = false
            },

            onch (index) {


            },

        },

        created () {

        },

        mounted () {

        }

    }

</script>
