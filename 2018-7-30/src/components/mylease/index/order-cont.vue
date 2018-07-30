







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
        margin-bottom: 25px;
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
    .nav {
        width: 856px;
        height: 40px;
        line-height: 40px;
        background: #f2f9fe;
        margin: 10px auto 0;
    }
    .nav .om {
        width: 110px;
        text-align: center;
        float: left;
    }
    .om:first-child {
        width: 305px;
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
        width: 305px;
        height: 94px;
        padding: 19px 0 20px 10px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        float: left;
    }
    .mation-left img {
        float: left;
        margin-top: 3px;
    }
    .mation-left div {
        width: 210px;
        float: left;
        margin: 0 5px;
        padding-top: 10px;
    }
    .mation .moo {
        width: 110px;
        height: 94px;
        line-height: 94px;
        text-align: center;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        float: left;
    }
    .moo:nth-child(3) {
        line-height: normal;
        padding-top: 32px;
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

</style>

<template>

    <div class="order-orders">
        <div class="stay">
            <span class="sp1">当前共续租设备</span>

            <div class="stay-ins">
                <input class="ins" type="text" placeholder="订单号 / 商品名称">

                <div class="stay-img">
                    <img src="../../../../static/images/change/sreen.png">
                </div>
            </div>
        </div>

        <div class="max" v-for='(item, index) in pos'>
            <div class="nav">
                <div class="om" v-for='item in ooo'>{{item.txt}}</div>
            </div>

            <div class="mation">
                <div class="boo">
                    <div class="mation-left">
                        <img :src="item.img">
                        <div>{{item.fon}}</div>
                    </div>

                    <div class="moo">{{item.moe}}</div>

                    <div class="moo">
                        <p>{{item.mos}}</p>
                        <p>{{item.das}}</p>
                    </div>

                    <div class="moo">{{item.nub}}</div>

                    <div class="moo">
                        <span>{{item.dao}}</span>
                    </div>

                    <div class="moo">
                        <span>{{item.ren}}</span>
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

                pos : [{
                    img : '../../../../static/images/order/9.png',
                    fon : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',
                    moe : '1',
                    mos : '2018-6-7',
                    das : '2018-6-8',
                    nub : '￥1000',
                    dao : '已续租',
                    ren : '申请售后',
                    omo : '已提交',
                    mes : '我的留言：',
                    mess: ''
                }],

                ooo : [{
                    txt : '商品信息'
                },{
                    txt : '续租数量'
                },{
                    txt : '续租截止日期'
                },{
                    txt : '差价总额'
                },{
                    txt : '全部状态'
                },{
                    txt : '操作'
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
