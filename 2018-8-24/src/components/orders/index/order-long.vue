







<style scoped>

	.order-orders {
		width: 910px;
		overflow: hidden;
	}
    .stay .sp1 {
        font-size: 14px;
        color: #000;
        float: left;
    }
    .stay {
        overflow: hidden;
        line-height: 30px;
        border-bottom: 1px dashed #575757;
        padding: 0 30px 1px;
    }
    .stay-ins {
        float: right;
        margin-top: 3px;
    }
    .stay-ins .ins {
        width: 178px;
        height: 23px;
        line-height: 23px;
        font-size: 10px;
        border: 1px solid #ccc;
        padding: 0 10px;
        outline: medium;
        float: left;
    }
    .stay-img  {
        height: 23px;
        float: left;
    }
    .information {
    	overflow: hidden;
        padding: 24px 30px 0;
    }
    .information .sp1 {
        width: 255px;
        float: left;
    }
    .information .info {
        float: left;
    }
    .info .dv {
        width: 85px;
        text-align: center;
        float: left;
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
    .om:nth-child(3) {
    	color: #e60012;
    }
    .om:last-child {
        padding-right: 0;
    }
    .mation {
        width: 856px;
        overflow: hidden;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        margin: 0 auto;
    }
    .mation-left {
        width: 260px;
        overflow: hidden;
        padding: 19px 0 20px 10px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        float: left;
    }
    .mation-left img {
        float: left;
    }
    .mation-left div {
        width: 170px;
        float: left;
        margin: 0 5px;
    }
    .mation .moo {
        width: 85px;
        height: 94px;
        line-height: 94px;
        text-align: center;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        float: left;
    }
    .mation .moo:nth-child(5) {
        line-height: normal;
        padding-top: 32px;
    }
    .mation .moo:nth-child(7) {
        line-height: normal;
        padding-top: 32px;
    }
    .mation .moo:last-child {
        line-height: normal;
        padding-top: 32px;
    }
    .mation .moo:last-child span {
        color: #0891fb;
        cursor: pointer;
    }
    .fsfs {
        color: #0891fb;
        cursor: pointer;
    }
    .mation .boo {
        overflow: hidden;
    }
    .mation .mess {
        height: 34px;
        line-height: 34px;
        padding: 0 10px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .mess input {
        width: 770px;
        line-height: 32px;
        color: #e60012;
        border: 0;
        outline: medium;
    }
    .max {
        margin-bottom: 23px;
    }

</style>

<template>

    <div class="order-orders">
        <div class="stay">
            <span class="sp1">长期订单</span>

            <div class="stay-ins">
                <input class="ins" type="text" placeholder="订单号 / 商品名称">

                <div class="stay-img">
                    <img src="../../../../static/images/change/sreen.png">
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
                <div class="om">{{item.dat}}</div>
                <div class="om">{{item.ord}}</div>
                <div class="om">{{item.rent}}</div>
                <div class="om">{{item.dep}}</div>
            </div>

            <div class="mation">
                <div class="boo">
                    <div class="mation-left">
                        <img :src="item.img">
                        <div>{{item.fon}}</div>
                    </div>

                    <div class="moo">{{item.moe}}</div>
                    <div class="moo">{{item.mos}}</div>
                    <div class="moo">{{item.nub}}</div>

                    <div class="moo">
                        <span>{{item.dao}}</span>
                        <span>{{item.das}}</span>
                    </div>

                    <div class="moo">
                        <span>{{item.ren}}</span>
                    </div>

                    <div class="moo">
                        <p>{{item.omo}}</p>
                        <p class="fsfs">{{item.dis}}</p>
                    </div>

                    <div class="moo">
                        <span>{{item.can}}</span>
                        <div>{{item.imm}}</div>
                    </div>
                </div>

                <div class="mess">
                    <span>{{item.mes}}</span>
                    <input type="text" v-model='item.mess'>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        components : {

        },

        data () {

            return {

                info : ['租金', '押金', '数量', '租期', '实付款', '交易状态', '交易操作'],

                pos  : [{
                    dat : '日期：2018-5-21 10:35:00',
                    ord : '订单号：1000311113300003303',
                    rent: '首付租金：3000',
                    dep : '租赁方案：全额押金+月付',
                    img : '../../../../static/images/order/9.png',
                    fon : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    moe : '￥：120',
                    mos : '￥：1200',
                    nub : 1,
                    dao : '2018-5-21',
                    das : '2018-5-22',
                    ren : '￥2200',
                    omo : '已提交',
                    dis : '订单详情',
                    can : '长租售后',
                    imm : '取消订单',
                    mes : '我的留言：',
                    mess: ''
                }]

            }
            
        },

        watch : {

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
