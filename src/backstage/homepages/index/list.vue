






<style scoped>

    .list {
        width: 100%;
        height: 100%;
    }
    .list-ol {
        width: 258px;
        overflow: hidden;
        padding: 30px 0;
        background: #14B1C4;
        float: left;
        height: 953px;
    }
    .list-top {
        width: 258px;
        overflow: hidden;
        background: #14B1C4;
        margin-bottom: 20px;
    }
    .ooo {
        width: 198px;
        overflow: hidden;
        border-bottom: 1px solid #d6d6d6;
        padding-bottom: 30px;
        margin: 0 auto;
    }
    .ooo-left {
        float: left;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #7DC4FF;
    }
    .ooo-right {
        float: left;
        color: #d6d6d6;
        padding: 14px 0 0 20px;
    }
    .ooo-right .p1 {
        font-size: 16px;
        margin-bottom: 10px;
    }
    .p2 .sp1 {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #29C24A;
        float: left;
        position: relative;
        top: 2px;
    }
    .p2 .sp2 {
        margin-left: 5px;
    }
    .ims {
        position: relative;
    }
    .imo {
        position: absolute;
        top: 11px;
        left: 35px;
    }
    .list-or {
        width: 20px;
        height: 20px;
        background: #DFECEC;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-top: 110px;
        float: left;
        cursor: pointer;
    }

</style>

<template>

    <div class="list">
        <div class="list-ol" v-show='los'>
            <div class="list-top">
                <div class="ooo">
                    <div class="ooo-left"></div>

                    <div class="ooo-right">
                        <p class="p1">晴天，你好</p>

                        <div class="p2">
                            <p class="sp1"></p>
                            <span class="sp2">线上</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-bottom">
                <Menu :theme="theme2">
                    <Submenu
                        :name="item.name"
                        v-for='(item, index) in res'
                        :key='index'
                        class='ims'
                    >
                        <template slot="title">
                            <img class="imo" :src="item.img">
                            <!-- <img class="imo" :src="item.ims"> -->
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
            </div>
        </div>

        <div class="list-or" @click='his'></div>
    </div>

</template>

<script>

    import { Menu, Submenu, MenuItem } from 'iview'

    export default {

        components : {

            Menu,
            Submenu,
            MenuItem,

        },

        data () {

            return {

                los : true,

                theme2: 'light',

                res   : [{
                    img  : '../../../../static/images/page/home.png',
                    ims  : '../../../../static/images/page/home_1.png',
                    name : '1',
                    fon  : '首页',
                    lis  : ''
                },{
                    img  : '../../../../static/images/page/members.png',
                    ims  : '../../../../static/images/page/members_2.png',
                    name : '2',
                    fon  : '会员管理',
                    lis  : [{
                        name : '2-1',
                        fon  : '会员管理'
                    },{
                        name : '2-2',
                        fon  : '会员管理'
                    }]
                },{
                    img  : '../../../../static/images/page/product.png',
                    ims  : '../../../../static/images/page/product_2.png',
                    name : '3',
                    fon  : '产品管理',
                    lis  : [{
                        name : '3-1',
                        fon  : '产品管理'
                    },{
                        name : '3-2',
                        fon  : '产品管理'
                    }]
                },{
                    img  : '../../../../static/images/page/order.png',
                    ims  : '../../../../static/images/page/order_2.png',
                    name : '4',
                    fon  : '订单管理',
                    lis  : [{
                        name : '4-1',
                        fon  : '订单管理'
                    },{
                        name : '4-2',
                        fon  : '订单管理'
                    }]
                },{
                    img  : '../../../../static/images/page/data.png',
                    ims  : '../../../../static/images/page/data_2.png',
                    name : '5',
                    fon  : '租赁数据',
                    lis  : [{
                        name : '5-1',
                        fon  : '租赁数据'
                    },{
                        name : '5-2',
                        fon  : '租赁数据'
                    }]
                },{
                    img  : '../../../../static/images/page/customer.png',
                    ims  : '../../../../static/images/page/customer_2.png',
                    name : '6',
                    fon  : '客户管理',
                    lis  : [{
                        name : '6-1',
                        fon  : '客户管理'
                    },{
                        name : '6-2',
                        fon  : '客户管理'
                    }]
                },{
                    img  : '../../../../static/images/page/custom.png',
                    ims  : '../../../../static/images/page/custom_2.png',
                    name : '7',
                    fon  : '定制服务',
                    lis  : [{
                        name : '7-1',
                        fon  : '定制服务'
                    },{
                        name : '7-2',
                        fon  : '定制服务'
                    }]
                },{
                    img  : '../../../../static/images/page/recycling.png',
                    ims  : '../../../../static/images/page/recycling_2.png',
                    name : '8',
                    fon  : '产品回收',
                    lis  : [{
                        name : '8-1',
                        fon  : '产品回收'
                    },{
                        name : '8-2',
                        fon  : '产品回收'
                    }]
                },{
                    img  : '../../../../static/images/page/report.png',
                    ims  : '../../../../static/images/page/report_2.png',
                    name : '9',
                    fon  : '报表统计',
                    lis  : [{
                        name : '9-1',
                        fon  : '报表统计'
                    },{
                        name : '9-2',
                        fon  : '报表统计'
                    }]
                },{
                    img  : '../../../../static/images/page/system.png',
                    ims  : '../../../../static/images/page/system_2.png',
                    name : '10',
                    fon  : '系统设置',
                    lis  : [{
                        name : '10-1',
                        fon  : '系统设置'
                    },{
                        name : '10-2',
                        fon  : '系统设置'
                    }]
                }]

            }

        },

        methods : {

            his () {

                this.los = !this.los

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
