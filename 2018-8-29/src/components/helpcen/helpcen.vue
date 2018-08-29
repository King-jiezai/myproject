


<style scoped>

    .help {
        width: 100%;
        height: 100%;
    }
    .help-top {
        height: 380px;
        overflow: hidden;
    }
    .help-top img {
        width: 100%;
        height: 240px;
    }
    .box {
        overflow: hidden;
        background: #f1f1f1;
        padding-bottom: 42px;
    }
    .obs-top {
        width: 1200px;
        padding: 15px 0;
        margin: 0 auto;
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
    .help-cen {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        background: #f1f1f1;
    }
    .fsl-left {
        width: 263px;
        overflow: hidden;
        background: #fff;
        float: left;
        margin-right: 27px;
    }
    .fsl-left .oo {
        height: 43px;
        text-align: center;
        line-height: 43px;
        color: #Fff;
        font-size: 16px;
        background: #e60012;
    }
    .fsl-left .op {
        width: 263px;
        padding-bottom: 15px;
    }
    .fsl-right {
        width: 910px;
        overflow: hidden;
        background: #fff;
        float: left;
        padding: 30px 24px;
    }
    .fsl-right span {
        color: #e60012;
        font-size: 16px;
    }
    .fsl-right p {
        font-size: 14px;
        text-indent: 2em;
        margin-top: 20px;
    }
    .help-bot {
        width: 1200px;
        margin: 0 auto;
        padding: 42px 0 34px;
    }
    .center-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
    }

</style>

<template>

    <div class="help">
        <div class="help-top">
            <navs></navs>
            <img src="../../../static/images/process/los.jpg">
        </div>

        <div class="box">
            <div class="obs-top">
                <span class="sp"></span>

                <router-link to='/'>
                    <span>广租首页</span>
                </router-link>

                <span>></span>

                <router-link to='/center'>
                    <span>帮助中心</span>
                </router-link>

                <span>></span>

                <router-link to='/center'>
                    <span>自助服务</span>
                </router-link>

                <span>></span>

                <router-link to='/center'>
                    <span>{{this.loo}}</span>
                </router-link>
            </div>

            <div class="help-cen">
                <div class="fsl-left">
                    <div class="oo">帮助中心</div> 

                    <div class="op">
                        <Row>
                            <Col span="8">
                                <Menu :theme="theme2" @on-select="meu" :active-name='das' :open-names="[dao]">
                                    <Submenu
                                        :name="item.name"
                                        v-for='(item, index) in res'
                                        :key='index'
                                    >
                                        <template slot="title">
                                            {{item.fon}}
                                        </template>
                                        <MenuItem
                                            :name="item.name"
                                            v-for='(item, key) in item.lis'
                                            :key='key'
                                        >
                                            {{item.fon}}</MenuItem>
                                    </Submenu>
                                </Menu>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div class="fsl-right">
                    
                    <!--helpOne 租赁流程-->
                    <helpcen-one v-if='helpOne'></helpcen-one>

                    <!--helpTwo 租金支付-->
                    <helpcen-two v-if='helpTwo'></helpcen-two>

                    <!--helpThree 租赁方案-->
                    <helpcen-three v-if='helpThree'></helpcen-three>

                    <!--helpFour 租赁协议-->
                    <helpcen-four v-if='helpFour'></helpcen-four>

                    <!--helpSix 取换机及运费-->
                    <helpcen-six v-if='helpSix'></helpcen-six>

                    <!--helpSeven 优惠券规则-->
                    <helpcen-seven v-if='helpSeven'></helpcen-seven>

                    <!--depositService 免押金服务-->
                    <deposit-service v-if='depositService'></deposit-service>

                    <!--featureService 即租即还-->
                    <feature-service v-if='featureService'></feature-service>

                    <!--doorService 上门服务-->
                    <door-service v-if='doorService'></door-service>

                    <!--aftersaleOne 故障保修-->
                    <aftersale-one v-if='aftersaleOne'></aftersale-one>

                    <!--aftersaleTwo 退换货政策-->
                    <aftersale-two v-if='aftersaleTwo'></aftersale-two>

                    <!--aftersaleThree 售后政策-->
                    <aftersale-three v-if='aftersaleThree'></aftersale-three>

                    <!--aftersaleFour 租金支付-->
                    <aftersale-four  v-if='aftersaleFour'></aftersale-four>

                    <!--platformOne 企业概况-->
                    <platform-one v-if='platformOne'></platform-one>

                    <!--platformTwo 商务合作-->
                    <platform-two v-if='platformTwo'></platform-two>

                    <!--platformThree 加入我们-->
                    <platform-three v-if='platformThree'></platform-three>

                    <!--platformFour 联系我们-->
                    <platform-four v-if='platformFour'></platform-four>
                </div>
            </div>
        </div>

        <div class="help-bot">
            <center-quality></center-quality>
        </div>

        <div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>

            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>

    import navs             from '@/components/public/navs.vue'
    import tailHear         from '@/components/public/tail-hear.vue'
    import tailFoor         from '@/components/public/tail-foor.vue'
    import centerQuality    from './index/center-quality.vue'
    import helpcenOne       from './index/rental-one.vue'
    import helpcenTwo       from './index/rental-two.vue'
    import helpcenThree     from './index/rental-three.vue'
    import helpcenFour      from './index/rental-four.vue'
    import helpcenSix       from './index/rental-six.vue'
    import helpcenSeven     from './index/rental-seven.vue'
    import depositService   from './index/deposit-service.vue'
    import featureService   from './index/feature-service.vue'
    import doorService      from './index/door-service.vue'
    import aftersaleOne     from './index/aftersale-one.vue'
    import aftersaleTwo     from './index/aftersale-two.vue'
    import aftersaleThree   from './index/aftersale-three.vue'
    import aftersaleFour    from './index/aftersale-four.vue'
    import platformOne      from './index/platform-one.vue'
    import platformTwo      from './index/platform-two.vue'
    import platformThree    from './index/platform-three.vue'
    import platformFour     from './index/platform-four.vue'

    import { Row, Col, Menu, Submenu, MenuItem } from 'iview'

    export default {

        components : {

            navs            ,
            centerQuality   ,
            tailHear        ,
            tailFoor        ,
            helpcenOne      ,
            helpcenTwo      ,
            helpcenThree    ,
            helpcenFour     ,
            helpcenSix      ,
            helpcenSeven    ,
            depositService  ,
            featureService  ,
            doorService     ,
            aftersaleOne    ,
            aftersaleOne    ,
            aftersaleTwo    ,
            aftersaleThree  ,
            aftersaleFour   ,
            platformOne     ,
            platformTwo     ,
            platformThree   ,
            platformFour    ,
            Row             ,
            Col             ,
            Menu            ,
            Submenu         ,
            MenuItem        ,

        },

        data () {

            return {

                theme2: 'light',

                res   : [{
                    name : '1',
                    fon  : '租赁指南',
                    lis  : [{
                        name : '1-1',
                        fon  : '租赁流程'
                    },{
                        name : '1-2',
                        fon  : '租金支付'
                    },{
                        name : '1-3',
                        fon  : '租赁方案'
                    },{
                        name : '1-4',
                        fon  : '租赁协议'
                    },{
                        name : '1-5',
                        fon  : '信用星级'
                    },{
                        name : '1-6',
                        fon  : '取换机及运费'
                    },{
                        name : '1-7',
                        fon  : '优惠券规则'
                    }]
                },{
                    name : '2',
                    fon  : '免押金服务',
                    lis  : [{
                        name : '2-1',
                        fon  : '什么是免押金服务'
                    }]
                },{
                    name : '3',
                    fon  : '广租特色服务',
                    lis  : [{
                        name : '3-1',
                        fon  : '即租即还'
                    },{
                        name : '3-2',
                        fon  : '上门服务'
                    }]
                },{
                    name : '4',
                    fon  : '售后服务',
                    lis  : [{
                        name : '4-1',
                        fon  : '故障保修'
                    },{
                        name : '4-2',
                        fon  : '退换货政策'
                    },{
                        name : '4-3',
                        fon  : '售后政策'
                    },{
                        name : '4-4',
                        fon  : '常见问题'
                    }]
                },{
                    name : '5',
                    fon  : '平台介绍',
                    lis  : [{
                        name : '5-1',
                        fon  : '企业概况'
                    },{
                        name : '5-2',
                        fon  : '商务合作'
                    },{
                        name : '5-3',
                        fon  : '加入我们'
                    },{
                        name : '5-4',
                        fon  : '联系我们'
                    }]
                }],

                helpOne : false,

                helpTwo : false,

                helpThree: false,

                helpFour : false,

                helpSix  : false,

                helpSeven: false,

                depositService : false,

                featureService : false,

                doorService  : false,

                aftersaleOne : false,

                aftersaleTwo : false,

                aftersaleThree : false,

                aftersaleFour : false,

                platformOne   : false,

                platformTwo   : false,

                platformThree  : false,

                platformFour   : false,  

                das : '1-1',

                dao : '1',

                loo : '',

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

            meu (index) {


                if (index == '1-1') {
                    this.helpOne = true
                } else {
                    this.helpOne = false
                }

                if (index == '1-2') {
                    this.helpTwo = true
                } else {
                    this.helpTwo = false
                }

                if (index == '1-3') {
                    this.helpThree = true
                } else {
                    this.helpThree = false
                }

                if (index == '1-4') {
                    this.helpFour = true
                } else {
                    this.helpFour = false
                }

                if (index == '1-6') {
                    this.helpSix = true
                } else {
                    this.helpSix = false
                }

                if (index == '1-7') {
                    this.helpSeven = true
                } else {
                    this.helpSeven = false
                }

                if (index == '2-1') {
                    this.depositService = true
                } else {
                    this.depositService = false
                }

                if (index == '3-1') {
                    this.featureService = true
                } else {
                    this.featureService = false
                }

                if (index == '3-2') {
                    this.doorService = true
                } else {
                    this.doorService = false
                }

                if (index == '4-1') {
                    this.aftersaleOne = true
                } else {
                    this.aftersaleOne = false
                }

                if (index == '4-2') {
                    this.aftersaleTwo = true
                } else {
                    this.aftersaleTwo = false
                }

                if (index == '4-3') {
                    this.aftersaleThree = true
                } else {
                    this.aftersaleThree = false
                }

                if (index == '4-4') {
                    this.aftersaleFour = true
                } else {
                    this.aftersaleFour = false
                }

                if (index == '5-1') {
                    this.platformOne = true
                } else {
                    this.platformOne = false
                }

                if (index == '5-2') {
                    this.platformTwo = true
                } else {
                    this.platformTwo = false
                }

                if (index == '5-3') {
                    this.platformThree = true
                } else {
                    this.platformThree = false
                }

                if (index == '5-4') {
                    this.platformFour = true
                } else {
                    this.platformFour = false
                }


            }

        },

        created () {

            this.dao = this.$route.query.pid

            this.das = this.$route.query.pis

            console.log(this.dao)

            if (this.das == this.res[0].lis[0].name) {
                this.helpOne = true
            }

            if (this.das == this.res[3].lis[0].name) {
                this.aftersaleOne = true
            }

            if (this.das == this.res[1].lis[0].name) {
                this.depositService = true
            }

            if (this.das == this.res[2].lis[0].name) {
                this.featureService = true
            }

            if (this.das == this.res[4].lis[0].name) {
                this.platformOne = true
            }

        },

        mounted () {

        }

    }

</script>
