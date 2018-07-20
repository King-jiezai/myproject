







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
    .om:last-child {
        padding-right: 0;
    }
    .nav .bul {
        width: 85px;
        float: right;
    }
    .bul img {
        margin-right: 32px;
        float: left;
        position: relative;
        top: 14px;
        cursor: pointer;
    }
    .bul img:last-child {
        margin-right: 0;
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
    .mation .moo:nth-child(6) {
        line-height: normal;
        padding-top: 28px;  
    }
    .mation .moo:nth-child(7) {
        line-height: normal;
        padding-top: 22px;
    }
    .mation .moo:nth-child(7) span{
      cursor: pointer;
    }
    .mation .moo:nth-child(7) .ims {
        position: relative;
        top: 2px;
    }
    .mation .moo:last-child {
        line-height: normal;
        padding-top: 26px;
    }
    .mation .moo:last-child span {
        color: #0891fb;
        cursor: pointer;
    }
    .mation .moo:last-child div {
        width: 65px;
        color: #fff;
        padding: 3px 0;
        border-radius: 4px;
        background: #e60012;
        margin: 3px auto 0;
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
    .page {
        padding: 0 30px;
        float: right;
    }
    .track {
        position: absolute;
        width: 180px;
        height: 130px;
        border:1px solid #e60012;
        background: #fff;
        right: 455px;
        z-index: 1;
        border-radius: 5px;
        margin-top:-4px;
    }
    .triangle {
        position: relative;
        z-index: 999;
        top: 0px;
        left: 10px;
    }
    .track .numbers {
        height: 20px;
        line-height: 20px;
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin: 5px;
    }

</style>

<template>

    <div class="order-orders">
        <div class="stay">
            <span class="sp1">所有订单</span>

            <div class="stay-lis">
                <div class="stay-cen" v-for='item in stay'>{{item.fon}}<span>{{item.num}}</span></div>
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
                <div class="om">{{item.dat}}</div>
                <div class="om">{{item.ord}}</div>
                <div class="om">{{item.rent}}</div>
                <div class="om">{{item.dep}}</div>
                <div class="bul om">
                    <img :src="item.imo">
                    <img :src="item.imt" @click='imt(index)'>
                </div>
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

                        <div>
                            <img :src="item.imu">
                            <img :src="item.imn">
                        </div>
                    </div>

                    <div class="moo">
                        <p>{{item.omo}}</p>
                        <p class="fsfs" @click='dis(index)'>{{item.dis}}</p>
                        <div>
                            <img :src="item.ims" class="ims">
                            <span @mouseenter="moue(index)" @mouseleave="moul">{{item.gz}}</span>
                        </div>                       
                        <img src="../../../../static/images/order/11.png" class="triangle" v-show="track == index">

                        <div class="track" v-show="track == index">
                            <div class="numbers">
                                <p>中通快递：<span>{{ exp }}</span></p>
                            </div>
                        </div>
                    </div>
                   

                    <div class="moo">
                        <span @click='can(index)'>{{item.can}}</span>
                        <div @click='imm(index)'>{{item.imm}}</div>
                    </div>
                </div>

                <div class="mess">
                    <span>{{item.mes}}</span>
                    <input type="text" v-model='item.mess'>
                </div>
            </div>
        </div>

        <div class="page">
            <zlsp-page></zlsp-page>
        </div>
    </div>

</template>

<script>

    import zlspPage from '@/components/public/zlsp-page.vue'

    export default {

        components : {

            zlspPage,

        },

        data () {

            return {

                track : null ,

                exp  :  '1554155555444',
                
                stay : [{
                    fon : '待付款：',
                    num : '0'
                },{
                    fon : '待发货：',
                    num : '0'
                },{
                    fon : '待收货：',
                    num : '0'
                },{
                    fon : '待归还：',
                    num : '0'
                },{
                    fon : '退款中：',
                    num : '0'
                },{
                    fon : '买断订单：',
                    num : '0'
                }],

                info : ['租金', '押金', '数量', '租期', '实付款', '交易状态', '交易操作'],

                pos  : [{
                    dat : '日期：2018-5-21 10:35:00',
                    ord : '订单号：1000311113300003303',
                    rent: '首付租金：3000',
                    dep : '免押金抵扣：00',
                    img : '../../../../static/images/order/9.png',
                    fon : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    moe : '￥：120',
                    mos : '￥：1200',
                    nub : 1,
                    dao : '2018-5-21',
                    das : '2018-5-22',
                    ren : '￥2200',
                    imo : '../../../../static/images/order/1-3.png',
                    imt : '../../../../static/images/order/1-2.png',
                    imu : '../../../../static/images/order/1-4.png',
                    imn : '../../../../static/images/order/1-5.png',
                    omo : '待付款',
                    dis : '订单详情',
                    gz  : '跟踪',
                    ims : '../../../../static/images/order/1-6.png',
                    can : '取消订单',
                    stay: '待付款',
                    imm : '立即付款',
                    mes : '我的留言：',
                    mess: ''
                },{
                    dat : '日期：2018-5-21 10:35:00',
                    ord : '订单号：1000311113300003303',
                    rent: '首付租金：3000',
                    dep : '免押金抵扣：00',
                    img : '../../../../static/images/order/9.png',
                    fon : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    moe : '￥：120',
                    mos : '￥：1200',
                    nub : 1,
                    dao : '2018-5-21',
                    das : '2018-5-22',
                    ren : '￥2200',
                    imo : '../../../../static/images/order/1-3.png',
                    imt : '../../../../static/images/order/1-2.png',
                    imu : '../../../../static/images/order/1-4.png',
                    imn : '../../../../static/images/order/1-5.png',
                    omo : '待付款',
                    dis : '订单详情',
                    gz  : '跟踪',
                    ims : '../../../../static/images/order/1-6.png',
                    can : '取消订单',
                    stay: '待付款',
                    imm : '立即付款',
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

            moue (index) {

                this.track = index
            },

            moul () {

                this.track = null
            },

            dis (index) {

                if (this.pos[index].dis == '订单详情') {
                    window.open('/details')
                }

            },

            can (index) {

                if (this.pos[index].can == '取消订单') {
                    window.open('/detailsou')
                }

            },

            imm (index) {

                if (this.pos[index].imm == '立即付款') {
                    window.open('/detailsto')
                }

            },

            imt (index) {
                this.pos.splice(index, 1)
            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
