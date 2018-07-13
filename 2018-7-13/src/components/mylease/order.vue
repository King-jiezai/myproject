







<style scoped>

    .order {
        width: 100%;
        height: 100%;
    }
    .order-top {
        width: 100%;
        overflow: hidden;
        border-bottom: 2px solid #000;
    }
    .order-bottom {
        width: 100%;
        background: #fff;
        padding-bottom: 50px;
    }
    .order-bottom .box {
        width: 1110px;
        overflow: hidden;
        margin: 0 auto;
    }
    .fsl-left {
        width: 200px;
        height: 1173px;
        padding: 0 0 10px 0;
        float: left;
    }
    .fs {
        width: 200px;
        margin: 0 auto;
    }
    .ons {
        font-size: 16px;
        margin: 0 0 13px 50px;
    }
    .fs img {
        position: relative;
        top: 6px;
    }
    .obs-top {
        width: 1200px;
        padding: 20px 0 10px;
        border-bottom: 1px dashed #575757;
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
    .fsl-right {
        width: 910px;
        height: 1173px;
        padding: 30px 0;
        float: right;
    }
    .ono {
        font-size: 13px;
        color: #888;
        margin: 0 0 10px 85px;
        cursor: pointer;
    }
    .cos {
        color: #e60012;
    }

</style>

<template>

    <div class="order">
        <div class="order-top">
            <navs></navs>
        </div>
        
        <div class="order-bottom">
            <div class="obs-top">
                <span class="sp"></span>

                <!-- <router-link to='/'> -->
                    <span>我的租赁</span>
                <!-- </router-link> -->

                <span>></span>

                <!-- <router-link to='/center'> -->
                    <span>订单中心</span>
                <!-- </router-link> -->

                <span>></span>

                <!-- <router-link to='/center'> -->
                    <span>我的订单</span>
                <!-- </router-link> -->
            </div>

            <div class="box">
                <div class="fsl-left">
                    <div class="fs" v-for='item in res'>
                        <div class="ons">
                            <img :src="item.img">
                            <span>{{item.num}}</span>
                        </div>

                        <p
                             v-for='item in item.reo'
                             class="ono"
                            :class="{'cos': active_id == item.id}"
                            @click='lis(item)'
                        >{{item.fon}}</p>
                    </div>
                </div>

                <div class="fsl-right">
                    <div v-if='orders'>
                        <order-orders></order-orders>
                    </div>

                    <div v-if='chan'>
                        <order-change></order-change>
                    </div>

                    <div v-if='rent'>
                        <order-renting></order-renting>
                    </div>

                    <div v-if='long'>
                        <order-long></order-long>
                    </div>

                    <div v-if='cont'>
                        <order-cont></order-cont>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import navs         from '@/components/public/navs.vue'
    import orderOrders  from './index/order-orders.vue'
    import orderChange  from './index/order-change.vue'
    import orderRenting from './index/order-renting.vue'
    import orderLong    from './index/order-long.vue'
    import orderCont    from './index/order-cont.vue'


    export default {

        components : {

            navs        ,
            orderOrders ,
            orderChange ,
            orderRenting,
            orderLong   ,
            orderCont   ,

        },

        data () {

            return {

                res : [{
                    img : '../../../static/images/order/2.png',
                    num : '订单中心',
                    reo : [{
                        id  : 1,
                        fon : '我的租赁单'
                    },{
                        id  : 2,
                        fon : '在租设备'
                    },{
                        id  : 3,
                        fon : '续租设备'
                    },{
                        id  : 4,
                        fon : '长期订单'
                    },{
                        id  : 5,
                        fon : '变更记录'
                    }]
                },{
                    img : '../../../static/images/order/1.png',
                    num : '买断记录',
                    reo : []
                },{
                    img : '../../../static/images/order/3.png',
                    num : '我的委托',
                    reo : []
                },{
                    img : '../../../static/images/order/4.png',
                    num : '设备回收',
                    reo : [{
                        id  : 6,
                        fon : '设备评估'
                    },{
                        id  : 7,
                        fon : '上门回收'
                    }]
                },{
                    img : '../../../static/images/order/5.png',
                    num : '资产中心',
                    reo : [{
                        id  : 8,
                        fon : '账户信息'
                    },{
                        id  : 9,
                        fon : '我的账单'
                    },{
                        id  : 10,
                        fon : '免押金申请'
                    }]
                },{
                    img : '../../../static/images/order/6.png',
                    num : '会员中心',
                    reo : [{
                        id  : 11,
                        fon : '账户充值'
                    },{
                        id  : 12,
                        fon : '会员卡管理'
                    },{
                        id  : 13,
                        fon : '我的收藏'
                    },{
                        id  : 14,
                        fon : '我的优惠劵'
                    }]
                },{
                    img : '../../../static/images/order/7.png',
                    num : '客户服务',
                    reo : [{
                        id  : 15,
                        fon : '我的发票'
                    },{
                        id  : 16,
                        fon : '租赁售后'
                    },{
                        id  : 17,
                        fon : '上门预约服务'
                    }]
                },{
                    img : '../../../static/images/order/8.png',
                    num : '账户设置',
                    reo : [{
                        id  : 18,
                        fon : '个人信息'
                    },{
                        id  : 19,
                        fon : '账户安全'
                    },{
                        id  : 20,
                        fon : '地址管理'
                    }]
                }],

                active_id : true,

                orders    : true,

                chan      : false,

                rent      : false,

                long      : false,

                cont      : false

            }

        },

        computed : {

            cor () {

                if (!this.$store.state.cor) return false

                this.active_id = this.$store.state.cor

            }

        },

        watch : {

            cor () {}

        },

        methods : {

            lis (item) {

                // this.$store.commit('cor', null)

                setTimeout(() => this.$store.commit('cor', item.id), 100)

                this.orders = item.fon == '我的租赁单' ? true : false

                this.rent   = item.fon == '在租设备' ? true : false

                this.cont   = item.fon == '续租设备' ? true : false

                this.long   = item.fon == '长期订单' ? true : false

                this.chan   = item.fon == '变更记录' ? true : false

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
