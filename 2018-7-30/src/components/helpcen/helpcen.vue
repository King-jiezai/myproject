







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
        padding: 43px 24px;
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
                    <span>租赁指南</span>
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
                    <div v-if='one'>
                        <span>公司简介</span>
                        <p>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</p>
                    </div>

                    <helpcen-one v-if='two'></helpcen-one>
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

    import navs          from '@/components/public/navs.vue'
    import tailHear      from '@/components/public/tail-hear.vue'
    import tailFoor      from '@/components/public/tail-foor.vue'
    import centerQuality from './index/center-quality.vue'
    import helpcenOne    from './index/helpcen-one.vue'

    import { Row, Col, Menu, Submenu, MenuItem } from 'iview'

    export default {

        components : {

            navs         ,
            centerQuality,
            tailHear     ,
            tailFoor     ,
            helpcenOne   ,
            Row          ,
            Col          ,
            Menu         ,
            Submenu      ,
            MenuItem     ,

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
                        fon  : '租赁保障'
                    },{
                        name : '1-4',
                        fon  : '服务协议'
                    }]
                },{
                    name : '2',
                    fon  : '免押金服务',
                    lis  : [{
                        name : '2-1',
                        fon  : '免押金服务'
                    },{
                        name : '2-2',
                        fon  : '免押金服务'
                    }]
                },{
                    name : '3',
                    fon  : '广租特色服务',
                    lis  : [{
                        name : '3-1',
                        fon  : '租赁方式'
                    },{
                        name : '3-2',
                        fon  : '租赁方式'
                    }]
                },{
                    name : '4',
                    fon  : '售后服务',
                    lis  : [{
                        name : '4-1',
                        fon  : '退机流程'
                    },{
                        name : '4-2',
                        fon  : '故障保修'
                    },{
                        name : '4-3',
                        fon  : '售后政策'
                    },{
                        name : '4-4',
                        fon  : '赔偿标准'
                    },{
                        name : '4-5',
                        fon  : '违约处理'
                    }]
                },{
                    name : '5',
                    fon  : '平台介绍',
                    lis  : [{
                        name : '5-1',
                        fon  : '加入广租'
                    },{
                        name : '5-2',
                        fon  : '商务合作'
                    }]
                }],

                one : false,

                two : false,

                das : '1-1',

                dao : '1'

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

            meu (index) {

                if (index == '1-1') {
                    this.two = true
                    this.one = false
                } else {
                    this.two = false
                }

                if (index == '4-1') {
                    this.one = true
                    this.two = false
                } else {
                    this.one = false
                }

            }

        },

        created () {

            this.dao = this.$route.query.pid

            this.das = this.$route.query.pis

            if (this.das == this.res[0].lis[0].name) {
                this.two = true
            }

            if (this.das == this.res[3].lis[0].name) {
                this.one = true
            }

        },

        mounted () {

        }

    }

</script>
