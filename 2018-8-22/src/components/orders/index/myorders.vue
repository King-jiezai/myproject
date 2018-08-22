

<style scoped>

    .order-orders {
        width: 910px;
        overflow: hidden;
        position: relative;
    }
    .stay .sp1 {
        font-size: 14px;
        color: #000;
        float: left;
    }
    .stay {
        width: 850px;
        overflow: hidden;
        line-height: 30px;
        border-bottom: 1px dashed #ddd;
        padding: 0 0 10px;
        margin: 0 auto;
    }
    .stay-lis {
        float: left;
        margin-left: 40px;
    }
    .stay-cen {
        float: left;
        margin-right: 30px;
    }
    .stay-ins {
        float: right;
        margin-top: 3px;
    }
    .stay-ins .ins {
        width: 178px;
        height: 24px;
        line-height: 24px;
        font-size: 10px;
        border: 1px solid #ccc;
        padding: 0 10px;
        outline: medium;
        float: left;
    }
    .stay-img  {
        width: 46px;
        height: 24px;
        text-align: center;
        background: #ccc;
        float: left;
    }
    .stay-img img {
        margin-top: 4px;
    }
    .information {
        overflow: hidden;
        padding: 39px 30px 0;
    }
    .information .sp1 {
        width: 258px;
        float: left;
    }
    .information .info {
        float: left;
    }
    .info .dv {
        width: 82px;
        text-align: center;
        float: left;
    }
    .info .dv:first-child {
        width: 95px;
    }
    .nav {
        width: 856px;
        height: 40px;
        line-height: 40px;
        background: #f2f9fe;
        margin: 10px auto 0;
    }
    .nav .om {
        padding: 0 25px 0 10px;
        float: left;
    }
    .om:last-child {
        padding-right: 0;
    }
    .nav .bul {
        float: right;
        position: relative;
        right: 30px;
        top: 3px;
        cursor: pointer;
    }
    .mation {
        border-left: 1px solid #ccc;
    }
    .mation:first-child {
        border-top: 1px solid #ccc;
    }
    .mation:last-child .moo {
        border-bottom: 0;
    }
    .mation:last-child .mation-left {
        border-bottom: 0;
    }
    .mation-left {
        width: 260px;
        height: 94px;
        padding: 19px 0 20px 10px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        float: left;
    }
    .mation-left img {
        float: left;
        width: 63px;
        height: 48px;
    }
    .mation-left div {
        width: 170px;
        float: left;
        margin: 0 5px;
    }
    .mation .moo {
        width: 83px;
        height: 94px;
        line-height: 94px;
        text-align: center;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        float: left;
    }
    .first_p {
        height: 20px;
        line-height: 20px;
    }
    .mation .moo:nth-child(2) {
        width: 95px;
        padding-top: 28px;
    }
    .mation .moo:nth-child(4) span {
        color: #0891fb;
        cursor: pointer;
    }
    .mation .moo:last-child {
        padding-top: 28px;
    }
    .mation .boo {
        overflow: hidden;
    }
    .mess {
        width: 856px;
        height: 34px;
        line-height: 34px;
        padding: 0 10px;
        border: 1px solid #ccc;
        margin: 0 auto;
    }
    .mess span {
        float: left;
    }
    .mess p {
        width: 770px;
        line-height: 32px;
        color: #e60012;
        border: 0;
        outline: medium;
        float: left;
    }
    .max {
        margin-bottom: 23px;
        position: relative;
    }
    .track {
        width: 180px;
        height: 130px;
        border:1px solid #e60012;
        background: #fff;
        position: absolute;
        right: -70px;
        z-index: 998;
        border-radius: 5px;
        margin-top: -10px;
    }
    .triangle {
        position: relative;
        z-index: 999;
        top: -4px;
        left: 10px;
    }
    .track .numbers {
        height: 20px;
        line-height: 20px;
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin: 5px;
    }
    .cancel {
        width: 500px;
        height:370px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 1px 10px #666;
        margin-top: 50px;
        margin-bottom: 50px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        border-radius: 5px;
    }
    .box_box {
        width: 856px;
        overflow: hidden;
        border-right: 1px solid #ccc;
        margin: 0 auto;
    }
    .box_left {
        float: left;
    }
    .box_right {
        border-top: 1px solid #ccc;
        overflow: hidden;
    }
    .box_state {
        text-align: center;
        position: absolute;
        top: 60px;
        right: 125px;
    }
    .box_operation {
        text-align: center;
        position: absolute;
        top: 58px;
        right: 44px;
    }
    .box_operation .cur_po {
        width: 64px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #fff;
        background: #e60012;
        border-radius: 3px;
    }
    .fsfs {
        width: 64px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #0891fb;
        cursor: pointer;
    }
    .pages {
        float: right;
        margin: 30px 30px 30px 0;
    }
    .popup {
        width: 500px;
        height: 250px;
        background-color: #fff;
        border: 3px solid #cccbcb;
        border-radius: 5px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }
    .popup img {
        margin:  70px 220px 10px 220px;
    }
    .popup p {
        text-align: center;
        font-size: 18px;
    }

</style>

<template>

    <div class="order-orders">
        
        <div class="stay">
            <span class="sp1">所有订单</span>
    
            <div class="stay-lis">
                <div class="stay-cen">待付款：<span>{{this.noPay}}</span></div>
                <div class="stay-cen">待发货：<span>{{this.paid}}</span></div>
                <div class="stay-cen">待收货：<span>{{this.shipped}}</span></div>
                <div class="stay-cen">待归还：<span>{{this.lease}}</span></div>
            </div>
    
            <div class="stay-ins">
                <input class="ins" type="text" placeholder="订单号 / 商品名称">
    
                <div class="stay-img">
                    <img src="../../../../static/images/order/search.png">
                </div>
            </div>
        </div>
    
        <div class="information">
            <div class="sp1">产品信息</div>
    
            <div class="info">
                <div class="dv" v-for='item in info'>{{item}}</div>
            </div>
        </div>
    
        <div class="max" v-for='(item, index) in pos'>
            <div class="nav">
                <div class="om">日期：{{item.createTime}}</div>
                <div class="om">订单号：{{item.orderNo}}</div>
                <div class="om">首付租金：</div>
                <div class="om">免押金抵扣：</div>
                <div class="bul om">
                    <img src="../../../../static/images/order/1-2.png" @click='imt(index)' title='删除订单'>
                </div>
            </div>
    
            <div class="box_box">
                <div class="box_left">
                    <div class="mation" v-for='(lis, key) in item.orderItemVoList'>
                        <div class="boo">
                            <div class="mation-left">
                                <img :src="lis.productImage">
                                <div>{{lis.productName}}{{lis.productSubtitle}}</div>
                            </div>
    
                            <div class="moo">
                                <P class='first_p'>租金：￥{{lis.totalRent}}</P>
                                <p class='first_p'>押金：￥{{lis.totalPrice}}</p>
                            </div>
    
                            <div class="moo">{{lis.quantity}}台</div>
    
                            <div class="moo"><span @click='afterSale(index, key)' v-show='item.status == 20 || item.status == 30 || item.status == 50'>申请售后</span></div>
    
                            <div class="moo">
                                <span>{{lis.number}}天</span>
                            </div>
    
                            <div class="moo">
                                <p class="first_p">￥{{lis.totalPrice + lis.totalRent}}</p>
    
                                <p class="first_p">
                                    <img src="../../../../static/images/order/1-4.png">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="box_right">
                    <div class="box_state">
                        <p v-show='item.status == 0'>交易关闭</p>
                        <p v-show='item.status == 10'>待付款</p>
                        <p v-show='item.status == 20'>出库中</p>
                        <p v-show='item.status == 30'>运输中</p>
                        <p v-show='item.status == 40'>待付款</p>
                        <p v-show='item.status == 50'>交易成功</p>
                        <p v-show='item.status == 60'>交易关闭</p>
                        <p class="fsfs" @click='dis(index)'>订单详情</p>
                        <div class="cur_po" @mouseenter="moue(index)" v-show='item.status == 20 || item.status == 30 || item.status == 50'>
                            <img src="../../../../static/images/order/1-6.png" class="ims">
                            <span>跟踪</span>
                        </div>
                        <img src="../../../../static/images/order/11.png" class="triangle" v-show="track == index">
    
                        <div class="track" v-show="track == index" @mouseleave="moul">
                            <div class="numbers">
                                <p>中通快递：<span>{{ exp }}</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="box_operation">
                        <div class="fsfs" @click='can(index)' v-show='item.status == 10 || item.status == 40'>取消订单</div>
                        <div class="cur_po" @click='payments(index)' v-show='item.status == 10 || item.status == 40'>立即付款</div>
                        <div class="cur_po" v-show='item.status == 30'>确认收货</div>
                        <div class="cur_po" v-show='item.status == 50'>交易完成</div>
                    </div>
                </div>
            </div>
    
            <div class="mess">
                <span>我的留言：</span>
                <p>{{item.message}}</p>
            </div>
        </div>
    
        <div class="popup" v-show='popup'>
            <img src="../../../../static/images/sett/333-4.png">
            <p>订单已取消</p>
        </div>
    
        <div v-show="cancel">
            <cancell></cancell>
        </div>
    
        <div class="pages">
            <Page :total="total" :page-size='pageSize' :transfer=true @on-change='onch' prev-text="上一页" next-text="下一页"></Page>
        </div>
    </div>

</template>

<script>

    import cancell from '@/components/orders/cancell-order/cancell-order.vue'

    import { Page } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            cancell,
            Page

        },

        data () {

            return {

                pageSize : 10,

                popup : false,

                noPay : 0,

                paid : 0,

                shipped : 0,

                lease : 0,

                page : 1,

                total : 0,

                track : null ,

                exp  :  '1554155555444',

                cancel : false,

                info : ['金额', '数量', '商品操作', '租期', '实付款', '交易状态', '交易操作'],

                pos  : []

            }
            
        },

        watch : {

            res () {
                this.cancel = false
            }

        },

        computed : {

            ...mapState([

                'res'

            ])

        },

        methods : {

            //申请售后
            afterSale (index, key) {

                window.open('/refund?orderNo=' + this.pos[index].orderNo + '&productId=' + this.pos[index].orderItemVoList[key].productId)

            },

            moue (index) {

                this.track = index
            },

            moul () {

                this.track = null
            },

            //查看订单详情
            dis (index) {

                window.open('/details?details=' + this.pos[index].orderNo)

            },

            //取消订单
            async can (index) {

                if (this.pos[index].status == 10) {

                    let orderCancel = await this.$api.orderCancel({
                        orderNo : this.pos[index].orderNo
                    })

                    let orderList = await this.$api.orderList({
                        pageNum : this.page,
                        pageSize : this.pageSize
                    })
                    
                    this.pos   = orderList.data.data.list

                    this.total = orderList.data.data.total

                    let getOrderListStatus = await this.$api.getOrderListStatus()

                    this.noPay   = getOrderListStatus.data.data.noPay

                    this.paid    = getOrderListStatus.data.data.paid

                    this.shipped = getOrderListStatus.data.data.shipped

                    this.lease   = getOrderListStatus.data.data.lease

                    this.popup = true

                    let time = setInterval(()=> {

                        this.popup = false

                        clearInterval(time)

                    }, 2000)

                }

                if (this.pos[index].status == 20) {

                    this.cancel = true

                    this.$store.commit('bas', false)

                    setTimeout(() => {
                        this.$store.commit('bas', true)
                    }, 10)

                }

            },

            //立即付款
            async payments (index) {

                let res = await this.$api.unionPay({
                    orderNo : this.pos[index].orderNo
                })

                window.location.href = 'http://120.78.142.125/dg/order/alipay.do?orderNo=' + this.pos[index].orderNo

            },

            imt (index) {
                this.pos.splice(index, 1)
            },

            //页码跳转
            async onch (index) {

                this.page = index

                let reo = await this.$api.orderList({
                    pageNum : this.page,
                    pageSize : this.pageSize
                })

                this.pos = reo.data.data.list

            },

            //查询个人全部订单
            async orderList () {

                let reo = await this.$api.orderList({
                    pageNum : this.page,
                    pageSize : this.pageSize
                })

                this.pos   = reo.data.data.list

                this.total = reo.data.data.total

                let getOrderListStatus = await this.$api.getOrderListStatus()

                this.noPay   = getOrderListStatus.data.data.noPay

                this.paid    = getOrderListStatus.data.data.paid

                this.shipped = getOrderListStatus.data.data.shipped

                this.lease   = getOrderListStatus.data.data.lease

            }

        },

        created () {

            this.orderList()
            
        },

        mounted () {

        }

    }

</script>
