







<style scoped>

    .entrustment {
        width: 910px;
        overflow: hidden;
        position: relative;
    }
    .entrustment-top {
        width: 100%;
        height: 35px;
        border-bottom: 1px dashed #ccc;
        padding: 0 20px;
        line-height: 35px;
        position: relative;
    }
    .entrustment-top .success {
        float: left;
    }
    .entrustment-top .success span {
        color: #e60012;
        margin: 0 3px;
    }
    .inps {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        padding-left:10px; 
        border:1px solid #ccc;
        cursor: pointer;
    }
    .entrustment-cont {
        width: 100%;
        margin-top: 30px;
    }
    .entrustment-nav {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f1f1f1;
    }
    .entrustment-nav p:nth-child(5) {
        width: 220px
    }
    .entrustment-nav p:nth-child(1) {
        width: 130px
    }
    .entrustment-nav p:nth-child(2) {
        width: 130px
    }
    .entrustment-nav p:nth-child(4) {
        width: 130px
    }
    .entrustment-nav p {
        width: 100px;
        float: left;
        text-align: center;
    }
    .information {
        width: 100%;
        overflow: hidden;
        margin-bottom: 30px;
        border-top: 1px solid #ccc;
    }
    .information-cont {
        width: 100%;
        padding: 10px 0;
        overflow: hidden;
        border:1px solid #ccc;
        border-top: 0px;
    }
    .information .infor {
        width: 100px;
        float: left;
        line-height: 70px;
        text-align: center;
    }
    .information .infor:nth-child(1) {
        width: 130px!important;
    }
    .information .infor:nth-child(2) {
        width: 130px!important;
    }
    .information .infor:nth-child(4) {
        width: 130px!important;
    }
    .information .infor:nth-child(5) {
        width: 220px!important;
        height: 70px;
        line-height: 20px;
        text-align: left;
        padding-top: 10px;     
    }
    .information .infor:nth-child(7) {
        width: 98px!important;
        padding: 10px 0;
    }
    .information .infor:nth-child(7) p {
        line-height: 25px!important;
        cursor:pointer ;
    }
    .nowpay {
        width: 70px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: #e60012;
        color: #fff;
        border-radius: 5px;
        margin: 0 15px;
    }
    .leaving-message {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border:1px solid #ccc;
        border-top: 0px;
    }
    .leaving-message p {
        float: left;
    }
    .leaving-message input {
        width: 823px;
        height: 38px;
        line-height:38px;
        outline: medium;
        border:0px;
        margin-left: 5px;
    }
    .pages {
        float: right;
        margin: 30px 30px 30px 0;
    }

</style>

<template>
    
    <!--entrustment 我的委托记录-->
    <div class="entrustment">

        <!--entrustment-top 我的委托次数-->
        <div class="entrustment-top">
            <p class="success">委托租赁：<span>{{this.infor.length}}</span></p>
        </div> 

        <!--entrustment-cont 委托的内容-->
        <div class="entrustment-cont">
            <div class="entrustment-nav">
                <p>城市</p>
                <p>类目</p>
                <p>姓名</p>
                <p>手机</p>
                <p>委托内容</p>
                <p>委托时间</p>
                <p>操作</p>
            </div>
            
            <!--information 委托的信息-->
            <div class="information" v-for="item in infor">
                <div class="information-cont">
                    <div class="infor">
                        <p>{{item.address}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.category}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.name}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.phone}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.cont}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.time}}</p>
                    </div>
                    <div class="infor">
                        <p>{{item.colse}}</p>
                        <div class="nowpay">
                            <p>{{item.pay}}</p>
                        </div>
                    </div>
                </div>
                <div class="leaving-message">
                    <p>我要留言：</p>
                    <input type="text">
                </div>               
            </div>
            
        </div>
        
        <!--pages 分页-->
        <div class="pages">
            <Page :total="total" :page-size='pageSize' :transfer=true @on-change='onch' prev-text="上一页" next-text="下一页"></Page>
        </div>
    </div>

</template>

<script>

    import { RadioGroup, Radio , Icon , Page} from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,
            Icon,
            Page

        },

        data () {

            return {

                num : 0,

                val : '不限',

                pageSize : 2,

                page : 1,

                total : 0,

                scr : [{
                    fon: '不限'
                },{
                    fon: '未付款'
                },{
                    fon: '成功买断'
                },{
                    fon: '已关闭'
                }],

                infor : [{
                    address : '广东省广州市',
                    category : '笔记本租赁',
                    name: '某某某',
                    phone: '13056984123', 
                    cont : '我发发发访阿法公司法务哇阿发嘎为尕娃伽互分哈哈发放哈ufew 风哈发',
                    time : '2018-8-24',
                    colse : '关闭订单',
                    pay  : '售后申请'

                },{
                    address : '广东省广州市',
                    category : '笔记本租赁',
                    name: '某某某',
                    phone: '13056984123', 
                    cont : '',
                    time : '2018-8-24',
                    colse : '关闭订单',
                    pay  : '售后申请'

                }],

            }

        },

        methods : {

            cliinp () {

                this.screes = !this.screes
            },

            cliscr (index) {

                this.val = this.scr[index].fon

                this.screes = false
            },

            onch (index) {


            },

        },

        created () {

        },

        mounted () {

        }

    }

</script>
