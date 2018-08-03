

<style scoped>

    .body {
        width: 910px;
        overflow: hidden;
    }
    .invoice_top {
        height: 40px;
        line-height: 40px;
        background: #eff9fe;
    }
    .invoice_top p {
        float: left;
        margin-left: 16px;
        font-size: 14px;
        cursor: pointer;
    }
    .invoice_top span {
        margin-left: 15px;
        color: #ccc;
    }
    .invoice_top p:last-child span {
        display: none;
    }
    .lon {
        color: #42C9FF;
    }
    
    .ticketRecord {
        width: 910px;
        overflow: hidden;
        position: relative;
    }
    .page {
        margin-top: 20px;
        float: right;
    }
    .noTransmission {
        width: 100%;
        height: 70px;
        border:1px solid #ccc;
        border-top: 0px;
        line-height: 70px;
        text-align: center;
    }
    .tablemission {
        width: 100%;
        cursor: pointer;
    }
    .tablemission-nav {
        width: 100%;
        height: 60px;
        line-height: 40px;
        border:1px solid #ccc;
        border-top:0px;
        position: relative;
        font-size: 14px;
    }
    .tablemission-nav div {
        float: left;
        padding-top:20px ;    
    }
    .tablemission-nav div:nth-child(5) p {
        width: 100px;
        padding-left: 20px;
    }
    .tablemission-nav div:nth-child(6) p {
        width:150px;
        text-align: center;
    }
    .tablemission-nav div:nth-child(7) p {
        width: 270px;
        text-align: center;
    }
    .tablemission-nav div:nth-child(8) p {
        width: 100px;
        text-align: center;
    }
    .tablemission-nav div:nth-child(9) p {
        width: 100px;
        text-align: center;
        position: relative;
        z-index: 999;
    }
    .tablemission-nav div:nth-child(10) p {
        width: 95px;
        text-align: center;
        position: relative;
        z-index: 999;
    }
    .tablemission-nav div:nth-child(11) p {
        width: 93px;
        text-align: center;
    }
    .tablemission-cont {
        width: 100%;
        border:1px solid #ccc;
        border-top:  0px;
    }
    .tablemission-cont div {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ccc;
        padding-top: 20px;
    }
    .tablemission-cont div p:nth-child(1) {
        width: 100px;
        padding-left: 20px;
    }
    .tablemission-cont div p:nth-child(2) {
        width:150px;
        text-align: center;
    }
    .tablemission-cont div p:nth-child(3) {
        width: 270px;
        text-align: center;
    }
    .tablemission-cont div p:nth-child(4) {
        width: 100px;
        text-align: center;
    }
    .tablemission-cont div p:nth-child(5) {
        width: 100px;
        text-align: center;
    }
    .tablemission-cont div p:nth-child(6) {
        width: 95px;
        text-align: center;
    }
    .tablemission-cont div p:nth-child(7) {
        width: 93px;
        text-align: center;
    }
    .tablemission-cont div:last-child {
        border-bottom:0px;
    }
    .tablemission-cont div p {
        float: left;
    }
    .allOrder {
        width: 95px;
        height: 155px;
        background: #fff;
        border: 1px solid #ccc;
        right: 94px;
        top: 20px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        cursor: pointer;
        position: absolute;
        z-index:1;
        box-shadow: 0px 1px 6px #ccc;
    }
    .allOrder p {
        height: 30px;
    }
    .allOrder p:first-child {
        margin-top: 35px;
    }
    .allOrder p:hover {
        color: #e60012;
        background-color: #ccc;
    }
    .aftersale {
        width: 100px;
        height: 130px;
        background: #fff;
        border: 1px solid #ccc;
        right: 189px;
        top: 20px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        cursor: pointer;
        position: absolute;
        z-index:1;
        box-shadow: 0px 1px 6px #ccc;
    }
    .aftersale p {
        height: 30px;
    }
    .aftersale p:first-child {
        margin-top: 35px;
    }
    .aftersale p:hover {
        color: #e60012;
        background-color: #ccc;
    }
    .icon {
        position: absolute;
        right: 100px;
        top: 35px;
        z-index: 999;
    }
    .icons {
        position: absolute;
        right:198px;
        top: 35px;
        z-index: 999;
    }

</style>

<template>
            
    <div class="ticketRecord">

        <!-- noTransmission 暂无数据-->
        <div class="noTransmission" v-show="noshows">
            <p>暂无数据！</p>
        </div> 

        <!-- Table 数据表--> 
        <div v-show="shows" class="tablemission"> 
            <div class="tablemission-nav">
                <Icon type="arrow-down-b" class="icon" v-show="one"></Icon>
                <Icon type="arrow-up-b" class="icon" v-show="two"></Icon>
                <Icon type="arrow-down-b" class="icons" v-show="ones"></Icon>
                <Icon type="arrow-up-b" class="icons" v-show="twos"></Icon>

                <div v-for="(item,index) in columns1" @click.stop="colus(index)">
                    <p>{{item.title}}</p>
                </div> 
            </div>
            
            <!-- tablemission-cont 申请售后记录表的数据--> 
            <div class="tablemission-cont">
                <div v-for="item in data1">
                    <p> {{item.salesnumber}}</p>
                    <p> {{item.ordernumber}}</p>
                    <p> {{item.commoinfor}}</p>
                    <p> {{item.applicationtime}}</p>
                    <p> {{item.saletype}}</p>
                    <p> {{item.allstate}}</p>
                    <p> </p>
                </div>
            </div>

            <!-- page 分页--> 
            <div class="page">
                <Page 
                        :total="round" 
                        :page-size="num"
                        :page-size-opts="pages"
                        show-elevator
                        @on-change="changepage" 
                        @on-page-size-change="onch" >                   
                </Page>
            </div>

            <!-- allOrder 点击全部状态弹出状态查询的选项-->
            <div class="allOrder" v-show='show'>
                <p v-for='(item,index) in res' @click='click(index)'>{{item.num}}</p>
            </div>
            
            <!-- aftersale 点击售后类型弹出类型查询的选项-->
            <div class="aftersale" v-show='aSale'>
                <p v-for='(item,index) in sale' @click='sales(index)'>{{item.num}}</p>
            </div>
        </div>
    </div>
   
</template>

<script>
        
    import {Icon , Table , Page} from 'iview'

    import { mapState } from 'vuex'


    export default {

        components : {

            Table,
            Page,
            Icon,

        },

        data () {

            return {

                adata  : [], 

                num    :  1 ,

                page   : 1,

                pages  : [5,10,15,20,100] ,

                shows  : true,

                noshows: false,

                show   : false,

                aSale  : false,

                one    : true,

                two    : false,

                ones    : true,

                twos    : false,

                res : [{
                    num : '全部状态'
                },{
                    num : '等待审核'
                },{
                    num : '带交服务费'
                },{
                    num : '已完成'
                }],

                sale : [{
                    num : '售后类型'
                },{
                    num : '换货'
                },{
                    num : '维修'
                }],

                columns1: [
                    {
                        title: '售后编号',
                        key: 'salesnumber',
                        width :100
                    },
                    {
                        title: '订单编号',
                        key: 'ordernumber',
                        width:150
                    },
                    {
                        title: '商品信息',
                        key: 'commoinfor',
                        width :270
                    },
                    {
                        title: '申请时间',
                        key: 'applicationtime',
                        width :100
                    },
                    {
                        title: '售后类型',
                        key: 'saletype',
                        width :100
                    },
                    {
                        title: '全部状态',
                        key: 'allstate',
                        width :95
                    },
                    {
                        title: '操作',
                        key: 'fullorder',
                        width:92
                    },
                    
                ],

                 data1: [
                    {
                        salesnumber : '001001',
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 ',
                        applicationtime: '2018-7-26',
                        saletype: '换货',
                        allstate: "已完成",
                        fullorder : "",
                    },{
                       salesnumber : '001001',
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230',
                        applicationtime: '2018-7-26',
                        saletype: '换货',
                        allstate: "已完成"
                    },{
                        salesnumber : '001001',
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提上网本',
                        applicationtime: '2018-7-26',
                        saletype: '换货',
                        allstate: "已完成"
                    },{
                       salesnumber : '001001',
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提上网本',
                        applicationtime: '2018-7-26',
                        saletype: '换货',
                        allstate: "已完成"
                    }
                    ],        

            }
            
        },

        computed : {
          
            ...mapState([

                'obos',

            ])
        },

        watch : {

            obos () {

                this.show = false

                this.aSale = false

                this.one = true

                this.two = false

                this.ones = true

                this.twos = false

            },

        },

        methods : {

            colus (index) {

                if (this.columns1[index].title == "全部状态") {

                    this.show = !this.show

                    this.aSale = false

                    this.one = !this.one

                    this.two = !this.two

                    this.ones = true

                    this.twos = false
                }

                if (this.columns1[index].title == "售后类型") {

                    this.aSale = !this.aSale

                    this.show = false

                    this.one = true

                    this.two = false

                    this.ones = !this.ones

                    this.twos = !this.twos
                }
            },

            click (index) {

            },

            sales (index) {

            },

            pop () {

                this.adata = this.data1

                this.round = this.data1.length

                if(this.data1.length < this.num){

                    this.data1 = this.adata

                }else{

                    this.data1 = this.adata.slice(0,this.num)

                }
               
            },       

            changepage (index) {

                this.page = index

                var start = (index - 1) * this.num

                var end = index * this.num

                this.data1 = this.adata.slice(start, end)
            },

            onch (kk) {

                this.num = kk

                this.changepage(this.page)

            }, 
        },

        created () {

           this.pop()

           if (this.data1 == 0) {

                this.shows = false

                this.noshows = true
           }else {

                this.shows = true

                this.noshows = false
           }

        },


        mounted () {

        }

    }

</script>


