

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
        padding-bottom: 20px;
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
            
                    <myorders v-show='orders'></myorders>

                    <orderchange v-show='chan'></orderchange>

                    <orderrenting v-show='rent'></orderrenting>

                    <orderlong v-show='long'></orderlong>

                    <ordercont v-show='cont'></ordercont>

                    <buyoutRecord v-show="buyout"></buyoutRecord>
                    
                    <entrustmentLease v-show="entrustment"></entrustmentLease>

                    <orderaccount v-show='account'></orderaccount>

                    <orderrech v-show='rech'></orderrech>

                    <Personalcen v-show='person'></Personalcen>

                    <accountrech v-show="four"></accountrech>

                    <accountforward v-show="upfor"></accountforward>

                    <ordermybill v-show="mybill"></ordermybill>

                    <orderexem v-show="exem"></orderexem>

                    <collection v-show="collect"></collection>

                    <coupon v-show="coupon"></coupon>

                    <personal v-show="personinfo"></personal>
                    
                    <enterpriseInformation v-show="entpsoninfo"></enterpriseInformation>                    

                    <security v-show="security"></security>

                    <modifypassword v-show="modify"></modifypassword>

                    <realmailbox v-show="mailbox"></realmailbox>

                    <modifypaypassword v-show="modifypays"></modifypaypassword>

                    <realname v-show="rels"></realname>

                    <mobilephone v-show="phones"></mobilephone>

                    <myinvoice v-show="invoice"></myinvoice>

                    <leasehold v-show="leasehold"></leasehold>

                    <addresss v-show="address"></addresss>
                    
                    
                </div>

            </div>
        </div>

    </div>

</template>

<script>

    import navs                         from '@/components/public/per-navs.vue'
    import myorders                     from './index/myorders.vue'
    import orderchange                  from './index/order-change.vue'
    import orderrenting                 from './index/order-renting.vue'
    import orderlong                    from './index/order-long.vue'
    import ordercont                    from './index/order-cont.vue'
    import ordermybill                  from './index/order-mybill.vue'
    import orderexem                    from './index/order-exem.vue'
    import orderaccount                 from './index/order-account.vue'
    import Personalcen                  from '@/components/percenter/Personalcen.vue'
    import buyoutRecord                 from '@/components/orders/buyout-record/buyout-record.vue'
    import entrustmentLease             from '@/components/orders/entrustment-lease/entrustment-lease.vue'
    import orderrech                    from './index/order-rech.vue'
    import accountrech                  from '@/components/orders/acount/acount-rech.vue'
    import accountforward               from '@/components/orders/acount/acount-forward.vue'
    import modifypassword               from '@/components/orders/accsetting/modify-password.vue'
    import security                     from '@/components/orders/accsetting/security.vue'
    import personal                     from '@/components/orders/accsetting/personal.vue'
    import enterpriseInformation        from '@/components/orders/accsetting/enterprise-information.vue'
    import modifypaypassword            from '@/components/orders/accsetting/modify-paypassword.vue'
    import realmailbox                  from '@/components/orders/accsetting/real-mailbox.vue'
    import realname                     from '@/components/orders/accsetting/real-name.vue'
    import mobilephone                  from '@/components/orders/accsetting/mobile-phone.vue'
    import myinvoice                    from '@/components/orders/myinvoice/my-invoice.vue'  
    import leasehold                    from '@/components/orders/myinvoice/leasehold-sale.vue'
    import collection                   from '@/components/MemberCenter/my-collection/my-collection.vue'
    import coupon                       from '@/components/MemberCenter/my-coupon/my-coupon.vue'
    import addresss                     from '@/components/orders/accsetting/addressManagement/address-management.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            navs        ,
            myorders    ,
            orderchange ,
            orderrenting,
            orderlong   ,
            ordercont   ,
            Personalcen ,
            orderaccount,
            orderrech,
            accountrech,
            accountforward,
            buyoutRecord,
            ordermybill,
            orderexem,
            security,
            personal,
            enterpriseInformation,
            realmailbox,
            coupon,
            myinvoice,
            modifypassword,
            realname,
            mobilephone,
            modifypaypassword,
            leasehold,
            collection,
            addresss,
            entrustmentLease

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
                    reo : [{
                        id : 21,
                        fon : '买断记录'
                    }]
                },{
                    img : '../../../static/images/order/3.png',
                    num : '我的委托',
                    reo : [{
                        id : 22,
                        fon : '我的委托'
                    }]
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

                modify    : false,

                rels      : false,

                phones    : false,

                modifypays: false,

                security  : false,

                personinfo: false,

                mailbox   : false,

                invoice   : false,

                leasehold : false,

                collect   : false,

                coupon    : false,

                address   : false,

                entpsoninfo: false,

                buyout     : false,

                entrustment: false,

            }

        },

        computed : {

            cor () {

                if (!this.$store.state.cor) return false

                this.active_id = this.$store.state.cor

            },

            ...mapState([

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

                this.personinfo = false

                this.entpsoninfo = false

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

                this.personinfo = false

                this.entpsoninfo = false

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

                setTimeout(() => this.$store.commit('cor', item.id), 100)

                if (item.fon == '我的租赁单') {

                    this.orders = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false


                } else {

                    this.orders = false
                }

                if (item.fon == '在租设备') {

                    this.rent = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.rent = false

                }

                if (item.fon == '续租设备') {

                    this.cont = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.cont = false

                }

                if (item.fon == '长期订单') {

                    this.long = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.long = false

                }

                if (item.fon == '变更记录') {

                    this.chan = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.chan = false

                }

                if (item.fon == '买断记录') {

                    this.buyout = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.buyout = false

                }

                if (item.fon == '我的委托') {

                    this.entrustment = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.entrustment = false

                }

                if (item.fon == '我的账户') {

                    this.account = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.account = false

                }

                if (item.fon == '我的账单') {

                    this.mybill = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.mybill = false

                }

                if (item.fon == '免押金申请') {

                    this.exem = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

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

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.collect = false

                }

                if (item.fon == '我的优惠劵') {

                    this.coupon = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.coupon = false

                }               

                if (item.fon == '我的发票') {

                    this.invoice = true

                   this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.invoice = false

                }

                if (item.fon == '租赁售后') {

                    this.leasehold = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.leasehold = false

                }

                if (item.fon == '个人信息') {

                    this.personinfo = true

                    this.entpsoninfo = false

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.personinfo = false

                }

                if (item.fon == '账户安全') {

                    this.security = true

                    this.modify = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {

                    this.security = false

                }

                if (item.fon == '地址管理') {

                    this.address = true

                    this.modify = false

                    this.security = false

                    this.phones = false

                    this.rels = false

                    this.mailbox = false

                    this.modifypays = false

                } else {
                    this.address = false

                }

            },

            // async list () {

            //     let getUserInfo = await this.$api.getUserInfo()

            //     if (getUserInfo.data.status == 0) {
                    
            //         this.$router.push('/login')

            //     }

            // }

        },

        created () {

            // this.list()


        },

        mounted () {

        }

    }

</script>
