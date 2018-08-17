

<style scoped>
    
    .body {
        width: 100%;
    }
    .order-details {
        width: 400px;
        height: 30px;
        line-height: 30px;
        padding-left:20px;
        margin-top: 30px;
        font-size: 14px;
    }
    .right-cent {
        width: 360px;
        margin: 5px 20px 37px 20px;
        height: 140px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .right-img {
        float: left;
        width: 88px;
        height: 88px;
        margin: 24px 10px 24px 20px;
        border: 1px solid #ccc;
    }
    .right-img img {
        margin: 9px 3px;
    }
    .right-text {
        float: left;
        width: 240px;
        margin-top: 24px;
    }
    .right-texts {
        float: left;
        width: 240px;
        margin-top: 10px;
        color: #999;
    }
    .seller {
        width: 360px;
        margin: 0 20px;
        height: 30px;
        line-height: 30px;
    }
    .seller p:first-child {
        float: left;
        color: #999;       
    }
    .seller p:first-child span {
        letter-spacing: 24px;
    }
    .seller .name {
        float: left;
        margin-left: 10px;
        color: #32A5FE;
    }
    .contact {
        float: right;
        width: 95px;
        height: 25px;
        line-height: 25px;
        background-color: #FFC8CD;
        border-radius: 5px;
        border:1px solid #e60012;
        margin: 5px 0;
        background:linear-gradient(top,#fff ,#ffc6ca 60%,#fff);
    }
    .contact p {
        color: #e60012!important;
        margin:0 5px 0 10px;
    }
    .phone {
        width: 360px;
        margin: 0 20px;
        height: 30px;
        line-height: 30px;
    }
    .phone p:first-child {
        float: left;
        color: #999;       
    }
    .phone p:last-child {
        float: left;
        margin-left: 10px;
        color: #000;
    }
    .number {
        width: 360px;
        margin: 0 20px;
        height: 30px;
        line-height: 30px;
    }
    .number p:first-child {
        float: left;
        color: #999;       
    }
    .number p:last-child {
        float: left;
        margin-left: 10px;
        color: #000;
    }
    .deposit {
        width: 360px;
        margin: 0 20px;
        height: 30px;
        line-height: 30px;
    }
    .deposit p:first-child {
        float: left;
        color: #999;       
    }
    .deposit p:first-child span {
        letter-spacing: 24px;
    }
    .deposit .deposits {
        float: left;
        margin-left: 10px;
        color: #000;
    }
    .total-price {
        width: 360px;
        margin: 0 20px;
        height: 30px;
        line-height: 30px;
    }
    .total-price p:first-child {
        float: left;
        color: #999;       
    }
    .total-price p:last-child {
        float: left;
        margin-left: 10px;
        color: #000;
    }
    .logistics {
        width: 360px;
        margin: 0 20px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
    .logistics-cent {
        width: 360px;
        margin: 0 20px;
        height: 500px;
        background-color: #fff;
        overflow-y: auto;
        overflow: hidden;
        box-shadow: 0px 1px 7px #ccc;
        position: absolute;
    }
    .right-bottom {
        width: 360px;
        margin: 20px 20px 30px 20px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
    }
    .bottom {
        width: 360px;
        height: 30px;
        line-height: 30px;
    }
    .bottom p:first-child {
        float: left;
        color: #999;       
    }
    .bottom p:first-child span {
        letter-spacing: 24px;
    }
    .bottom .deposits {
        float: left;
        margin-left: 10px;
        color: #000;
    }
    .bottom .deposits span {
        margin: 0 2px;
    }
    
</style>

<template>
    
    <div class="body">
    <!--only-refunds 买家申请仅退款-->
    <div v-for="item in seller">
        <div class="order-details">
            <p>退款详情</p>
        </div>

        <!--right-cent 商品详情-->
        <div class="right-cent">
            <div class="right-img">
                <img :src="item.imgs">
            </div>
            <p class="right-text">{{ item.fon }}</p>
            <p class="right-texts">租赁方案:</p>
        </div>

        <!--seller 卖家信息-->
        <div class="seller">
            <p><span>卖</span>家：</p>
            <p class="name">{{item.name}}</p>
            <div class="contact">
                <p>联系我们</p>
                <img src="../../../static/images/refund/44.png">
            </div>
        </div>

        <!--phone 联系电话-->
        <div class="phone">
            <p>联系电话：</p>
            <p>{{item.phone}}</p>
        </div>

        <!--number 订单编号：-->
        <div class="number">
            <p>订单编号：</p>
            <p>{{item.number}}</p>
        </div>

        <!--deposit 押金-->
        <div class="deposit">
            <p><span>押</span>金：</p>
            <p class="deposits">￥：{{ item.deposits }}<span>x{{ item.num }}(数量)</span></p>
        </div>

        <!--deposit 租金-->
        <div class="deposit">
            <p><span>租</span>金：</p>
            <p class="deposits">￥：{{ item.rent }}</p>
        </div>

        <!--deposit 优惠-->
        <div class="deposit">
            <p><span>优</span>惠：</p>
            <p class="deposits">￥：{{ item.discount }}</p>
        </div>

        <!--deposit 邮费-->
        <div class="deposit">
            <p><span>邮</span>费：</p>
            <p class="deposits">￥：{{ item.postage }}</p>
        </div>

        <!--total-price 商品总价-->
        <div class="total-price">
            <p>商品总价：</p>
            <p>￥：{{item.price}}</p>
        </div>
        
        <!--logistics 物流信息-->
        <div class="logistics" @click="clilogi" v-show="oos">
            <p>物流信息</p>
        </div>
        
        <!--logistics-cent 物流信息内容-->
        <div class="logistics-cent" v-show="logis">
            
        </div> 

        <div class="right-bottom" v-show="bott">
            <!--bottom 退款编号：-->
            <div class="bottom">
                <p>退款编号：</p>
                <p>{{item.refundNum}}</p>
            </div>

            <!--bottom 退款金额-->
            <div class="bottom">
                <p>退款金额：</p>
                <p class="deposits">￥：{{ item.loo }}</p>
            </div>
            
             <!--bottom 原因-->
            <div class="bottom">
                <p>申请件数：</p>
                <p class="deposits">{{ item.num }}</p>
            </div>

            <!--bottom 原因-->
            <div class="bottom">
                <p><span>原</span>因：</p>
                <p class="deposits">{{ item.cause }}</p>
            </div>

            <!--bottom 要求-->
            <div class="bottom">
                <p><span>要</span>求：</p>
                <p class="deposits">{{ item.enterprise }}</p>
            </div>

            <!--bottom 货物状态-->
            <div class="bottom">
                <p>货物状态：</p>
                <p class="deposits">{{ item.state }}</p>
            </div>

            <!--bottom 说明-->
            <div class="bottom">
                <p><span>说</span>明：</p>
            </div> 
        </div>             
    </div>

    </div>
</template>

<script>
    

    import { mapState } from 'vuex'

    export default {

        components : {

        },

        data () {

            return {

                bott : false,
                
                logis : false,

                oos : false,

                seller : [{
                    imgs : '../../../static/images/refund/11.png',
                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    name : '广租',
                    phone  : '18816889159',
                    number : '1235547878898988881',
                    deposits : 2000,
                    rent   : 1000,
                    discount : 0,
                    postage  : 0,
                    price  : 2900,
                    refundNum :'1234555568874142',
                    loo : 2160,
                    enterprise :'仅退款',
                    cause : '不想要了',                 
                    state: '未发货',
                    vals : 2160,
                    num  : 1,
                    speak : ''
                }],

            }
            
        },

        watch : {

            res () {

                this.bott = true

            },

            infor () {

                this.bott = true

                this.oos = true
            },

            checres () {

                this.bott = true

            },

            poo () {

                this.bott = true

            },

            next () {

                this.bott = true

            },

            rch () {

                this.bott = true
                
            },

            len () {

                this.bott = false
            }
 
        },

        computed : {
            
            ...mapState([

                'res',

                'infor',

                'checres',

                'poo',

                'next',

                'rch',

                'len'
                
            ])
        },

        methods : {
           
           clilogi () {

                this.logis = !this.logis

            }
           
        },

        created () {
            
    
        },

        mounted () {

        }

    }

</script>
