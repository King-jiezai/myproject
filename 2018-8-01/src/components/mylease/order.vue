







<style scoped>

    .order {
        width: 100%;
        height: 100%;
    }
    .order-top {
        width: 100%;
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
        overflow: hidden;
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
        overflow: hidden;
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

    <div class="order" @click='testes'>

        <!--order-to 头部-->
        <div class="order-top">
            <navs></navs>
        </div>

        <!--center 我的租赁信息 -->        
        <div class="order-bottom" v-if="center">
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
                <div class="fsl-left" @click="close">
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

                    <!--orders 订单中心 -->
                    <div v-if='orders'>
                        <order-orders></order-orders>
                    </div>
                    
                    <!--chan 变更记录 -->
                    <div v-if='chan'>
                        <order-change></order-change>
                    </div>
                    
                    <!--rent 在租设备 -->
                    <div v-if='rent'>
                        <order-renting></order-renting>
                    </div>
                    
                    <!--long 长期订单 -->
                    <div v-if='long'>
                        <order-long></order-long>
                    </div>
                    
                    <!--cont 续租设备 -->
                    <div v-if='cont'>
                        <order-cont></order-cont>
                    </div>
                    
                    <!--account 我的账户 -->
                    <div v-if='account'>
                        <orderAccount></orderAccount>
                    </div>
                    
                    <!--rech 充值 -->
                    <div v-if='rech'>
                        <orderRech></orderRech>
                    </div>
                    
                    <!--person 个人中心 -->
                    <div v-if=person>
                        <Personalcen></Personalcen>
                    </div>
                    
                    <!--four 查看充值明细 -->
                    <div v-if="four">
                        <accountRech></accountRech>
                    </div>

                    <!--upfor 提现 -->
                    <div v-if="upfor">
                        <accountForward></accountForward>
                    </div>
                    
                    <!--mybill 我的账单 -->
                    <div v-if="mybill">
                        <orderMybill></orderMybill>
                    </div>
                    
                    <!--exem 免押金申请 -->
                    <div v-if="exem">
                        <orderExem></orderExem>
                    </div>
                    
                    <!--exem 我的收藏 -->
                    <div v-if="collect">
                        <collection></collection>
                    </div>

                    <!--personinfo 个人信息 -->
                    <div v-if="personinfo">
                        <personal></personal>
                    </div>
                    
                    <!--security 账户安全 -->
                    <div v-if="security">
                        <security></security>
                    </div>
                    
                    <!--modify 修改登录密码 -->
                    <div v-if="modify">
                        <modifyPassword></modifyPassword>
                    </div>
                    
                    <!--mailbox 邮箱验证 -->
                     <div v-if="mailbox">
                        <realMailbox></realMailbox>
                    </div>
                    
                    <!--modifypays 修改支付密码 -->
                    <div v-if="modifypays">
                        <modifyPaypassword></modifyPaypassword>
                    </div>
                
                    <!--rels 实名验证 -->
                    <div v-if="rels">
                        <realName></realName>
                    </div>
                    
                    <!--phones 手机验证 -->
                    <div v-if="phones">
                        <mobilePhone></mobilePhone>
                    </div>
                    
                    <!--invoice 我的发票 -->
                    <div v-if="invoice">
                        <myInvoice></myInvoice>
                    </div>
                    
                    <!--leasehold 租赁售后 -->
                    <div v-if="leasehold">
                        <leasehold></leasehold>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>

    import navs              from '@/components/public/per-navs.vue'
    import orderOrders       from './index/order-orders.vue'
    import orderChange       from './index/order-change.vue'
    import orderRenting      from './index/order-renting.vue'
    import orderLong         from './index/order-long.vue'
    import orderCont         from './index/order-cont.vue'
    import orderMybill       from './index/order-mybill.vue'
    import orderExem         from './index/order-exem.vue'
    // import orderDetailed     from './index/order-detailed.vue'
    import orderAccount      from './index/order-account.vue'
    import Personalcen       from  '@/components/percenter/Personalcen.vue'
    import orderRech         from './index/order-rech.vue'
    import accountRech       from '@/components/mylease/acount/acount-rech.vue'
    import accountForward    from '@/components/mylease/acount/acount-forward.vue'
    import modifyPassword    from '@/components/mylease/accsetting/modify-password.vue'
    import security          from '@/components/mylease/accsetting/security.vue'
    import personal          from '@/components/mylease/accsetting/personal.vue'
    import modifyPaypassword from '@/components/mylease/accsetting/modify-paypassword.vue'
    import realMailbox       from '@/components/mylease/accsetting/real-mailbox.vue'
    import realName          from '@/components/mylease/accsetting/real-name.vue'
    import mobilePhone       from '@/components/mylease/accsetting/mobile-phone.vue'
    import myInvoice         from '@/components/mylease/myinvoice/my-invoice.vue'  
    import leasehold         from '@/components/mylease/myinvoice/leasehold-sale.vue'
    import collection        from '@/components/MemberCenter/my-collection/my-collection.vue'


    import { mapState } from 'vuex'


    export default {

        components : {

            navs        ,
            orderOrders ,
            orderChange ,
            orderRenting,
            orderLong   ,
            orderCont   ,
            Personalcen ,
            orderAccount,
            orderRech,
            accountRech,
            accountForward,
            orderMybill,
            orderExem,
            security,
            personal,
            realMailbox,
            // orderDetailed,
            myInvoice,
            modifyPassword,
            realName,
            mobilePhone,
            modifyPaypassword,
            leasehold,
            collection,

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
                        fon : '我的账户'
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
                        fon : '广租会员'
                    },{
                        id  : 12,
                        fon : '积分管理'
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

                cont      : false,

                account   : false,

                person    : false,

                rech      : false,

                four      : false,

                upfor     : false,

                mybill    : false,

                exem      : false,

                // detail    : false,

                modify    : false,

                rels      : false,

                phones    : false,

                modifypays : false,

                security  : false,

                personinfo: false,

                mailbox   : false,

                invoice   : false,

                leasehold : false,

                center    : true,

                collect   : false,

            }

        },

        computed : {

            cor () {

                if (!this.$store.state.cor) return false

                this.active_id = this.$store.state.cor

            },
            ...mapState([

                'up'    ,

                'pson'  ,

                'infor' ,

                'active',

                'rch'   ,

                'checres',

                'shqi',

                'agins',

                'modifypass',

                'modifypay',

                'modifyphone',

                'modifyname',

                'modifymail',

                'member',

            ])

        },

        watch : {

            cor () {},

            modifypass () {

                this.modify = true

                this.security = false

                this.phones = false

                this.rels = false

                this.modifypays = false

                this.mailbox = false

            },

            modifymail () {

                this.mailbox = true

                this.modify = false

                this.security = false

                this.phones = false

                this.rels = false

                this.modifypays = false
            },

            modifypay () {

                this.modify = false

                this.security = false

                this.phones = false

                this.rels = false

                this.mailbox = false

                this.modifypays = true


            },

            modifyphone () {

                this.modify = false

                this.security = false

                this.phones = true

                this.rels = false

                this.mailbox = false

                this.modifypays = false
            },

            modifyname () {

                this.modify = false

                this.security = false

                this.phones = false

                this.rels = true

                this.mailbox = false

                this.modifypays = false

            },

            agins () {

                this.phones = true

                this.modifypays = false

            },

            shqi () {

                this.exem = false

                // this.detail = true
            },

            pson () {

                this.orders = false

                this.cos = false

                this.rent = false

                this.cont = false

                this.long = false

                this.chan = false

                this.person = true

                this.rech = false

                this.four = false

                this.account = false

                this.upfor = false

                this.mybill = false

                this.leasehold = false

                this.exem = false

                this.invoice = false

                this.personinfo = false

                this.security = false

                this.center = true

                this.collect = false
            },

            infor () {

                this.personinfo = true

                this.center = true

                this.orders = false

                this.cos = false

                this.rent = false

                this.cont = false

                this.long = false

                this.chan = false

                this.person = false

                this.rech = false

                this.four = false

                this.account = false

                this.upfor = false

                this.mybill = false

                this.leasehold = false

                this.exem = false

                this.invoice = false

                this.security = false

                this.collect = false
                
            },

            rch () {
                this.rech = true
                this.account = false
                this.four = false
            },

            active () {

                this.active_id = null

            },

            checres () {

                this.four = true

                this.rech = false

                this.account = false

            },

            up () {

                this.upfor = true

                this.rech = false

                this.account = false

                this.four = false

            }

        },

        methods : {

            testes () {

                this.$store.commit('obos',false)

                setTimeout(() => {
                    this.$store.commit('obos',true)
                }, 10)

            },

            close () {

                this.$store.commit('clos',false)

                setTimeout(() => {
                    this.$store.commit('clos',true)
                }, 10)
            },

            lis (item) {

                // this.$store.commit('cor', null)

                setTimeout(() => this.$store.commit('cor', item.id), 100)

                if (item.fon == '我的租赁单') {

                    this.orders = true
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.orders = false
                }

                if (item.fon == '在租设备') {

                    this.rent = true
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.rent = false

                }

                if (item.fon == '续租设备') {

                    this.cont = true
                    this.person = false
                    this.per = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.cont = false

                }

                if (item.fon == '长期订单') {

                    this.long = true
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.long = false

                }

                if (item.fon == '变更记录') {

                    this.chan = true
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.chan = false

                }

                if (item.fon == '我的账户') {

                    this.account = true
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false


                } else {

                    this.account = false

                }

                if (item.fon == '我的账单') {

                    this.mybill = true
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false


                } else {

                    this.mybill = false

                }

                if (item.fon == '免押金申请') {

                    this.exem = true
                    this.mybill = false
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.exem = false

                }

                if (item.fon == '广租会员') {

                    this.$router.push("/member")

                }

                if (item.fon == '积分管理') {

                    this.$router.push("/manage")

                }

                if (item.fon == '我的收藏') {

                    this.collect = true
                    this.mailbox = false
                    this.exem = false
                    this.mybill = false
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.invoice= false

                } else {

                    this.invoice = false

                }              

                if (item.fon == '我的发票') {

                    this.invoice = true
                    this.mailbox = false
                    this.exem = false
                    this.mybill = false
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.invoice = false

                }

                if (item.fon == '租赁售后') {

                    this.leasehold = true
                    this.invoice = false
                    this.mailbox = false
                    this.exem = false
                    this.mybill = false
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {

                    this.leasehold = false

                }

                if (item.fon == '个人信息') {

                    this.personinfo = true                
                    this.security = false
                    this.exem = false
                    this.mybill = false
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false
                    this.mailbox = false

                } else {

                    this.personinfo = false

                }

                if (item.fon == '账户安全') {

                    this.security = true
                    this.mailbox = false
                    this.phones = false
                    this.personinfo = false
                    this.rels =false
                    this.modifypays = false
                    this.modify = false
                    this.exem = false
                    this.mybill = false
                    this.person = false
                    this.rech = false
                    this.four = false
                    this.upfor = false
                    this.collect = false

                } else {
                    this.security = false

                }
            }

        },

        created () {

        },

        mounted () {

        }

    }

</script>
