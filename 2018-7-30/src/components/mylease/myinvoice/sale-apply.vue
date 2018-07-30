

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
        margin: 30px 0;
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
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
        position: relative;
        font-size: 14px;
    }
    .tablemission-nav div {
        float: left;
        line-height: 30px;
        padding-top:9px ;
    }
    .tablemission-nav div:nth-child(3) p{   
        width: 200px;   
        padding-left: 50px;
    }
    .tablemission-nav div:nth-child(4) p{
        width: 508px;
        text-align: center;
    }
    .tablemission-nav div:nth-child(5) p{
        width: 200px;
        text-align: center;
        position: relative;
        z-index: 999;
    }
    .tablemission-cont {
        width: 100%;
        border:1px solid #ccc;
        border-top:  0px;
    }
    .tablemission-cont div {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #ccc;
        line-height: 30px;
        padding-top: 10px;
    }
    .tablemission-cont div p:nth-child(1) {
        width: 200px;
        padding-left: 50px;
    }
    .tablemission-cont div p:nth-child(2) {
        width: 508px;
        text-align: center;
    }
    .tablemission-cont div p:nth-child(3) {
        width: 200px;
        text-align: center;
    }
    .tablemission-cont div:last-child {
        border-bottom:0px;
    }
    .tablemission-cont div p {
        float: left;
    }
    .allOrder {
        width: 100px;
        height: 160px;
        background: #fff;
        border: 1px solid #ccc;
        right: 50px;
        top: 10px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        cursor: pointer;
        position: absolute;
        z-index:1;
        box-shadow: 0px 1px 6px #ccc;
    }
    .allOrder p:first-child {
        margin-top: 35px;
    }
    .allOrder p {
        height: 30px;
    }
    .allOrder p:hover {
        color: #e60012;
        background-color: #ccc;
    }
    .icon {
        position: absolute;
        right: 60px;
        top: 18px;
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
                
                <div v-for="(item,index) in columns1" @click.stop="colus(index)">
                    <p>{{item.title}}</p>
                </div> 
            </div>
            
            <!-- tablemission-cont 申请售后表的数据--> 
            <div class="tablemission-cont">
                <div v-for="item in data1">
                   <p> {{item.ordernumber}}</p>
                   <p> {{item.commoinfor}}</p>
                   <p> {{item.allOrder}}</p>
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

            <!-- allOrder 点击全部订单弹出订单查询的选项--> 
            <div class="allOrder" v-show='show'>
                <p v-for='(item,index) in res' @click='click(index)'>{{item.num}}</p>
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

                one    : true,

                two    : false,

                res : [{
                    num : '全部订单'
                },{
                    num : '近三个月订单'
                },{
                    num : '今年内订单'
                },{
                    num : '今年以前订单'
                }],

                columns1: [
                   
                    {
                        title: '订单编号',
                        key: 'ordernumber',
                        width:200
                    },
                    {
                        title: '商品信息',
                        key: 'commoinfor',
                        // width :270
                    },
                    {
                        title: '全部订单',
                        key: 'allOrder',
                        width :200
                    }
                ],

                 data1: [
                    {
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提',
                        allOrder     : '全部订单'
                    },{
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提上网本',
                        allOrder     : '今年内订单'
                    },{
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm',
                        allOrder     : '全部订单'
                    },{
                        ordernumber  : '08412544126',
                        commoinfor : '二手笔记本电脑 联想ThinkpadX220 X230 12寸ibm超薄手提上',
                        allOrder     : '全部订单'
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

                this.one = true

                this.two = false

            },
        },

        methods : {

            colus (index) {

                if (this.columns1[index].title == "全部订单") {

                    this.show = !this.show

                    this.one = !this.one

                    this.two = !this.two
                }
            },

            click (index) {

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


