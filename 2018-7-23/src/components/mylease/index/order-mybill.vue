


<style scoped>

    .mybill {
        width: 910px;
        overflow: hidden;
    }
    .mybill_top {
        height: 40px;
        line-height: 40px;
        background: #FFFDF0;
        border:1px solid #FFDFBE;
        padding-left: 20px;
    }
    .mybill_top span {
        font-size: 14px;
        font-weight: bold;
    }
    .mybill_nav {
        height: 40px;
        line-height: 40px;
        background: #daebfd;
        margin-top: 48px;
        padding:0 20px;
        font-size: 14px;
    }
    .mybill_nav p:first-child {
        float: left;
    } 
    .export {
        cursor: pointer;
        color:#6BAEFC;
        float: right;
    }
    .export .ios {
        float: left;
    }
    .export p {
        float: left;
    }
    .mybill_nav .butt {
        width: 100px;
        height: 40px;
        background: #daebfd;
        border:0px;
       
    }
    .mybill_nav .ios {     
        font-size: 26px;
        margin-right: 5px;
        margin-top: 5px;
        outline: medium;
    }
    .time {
        font-size: 14px;
        margin: 20px 0 20px 20px;
    }
    .payment {
        height: 21px;
        line-height: 21px;
    }
    .payment p{
        float: left;
        color: #999;
        margin-left: 10px;
        font-size: 14px;
    }
    .payment p:first-child {
        margin-left: 20px;
    }
    .payment span{
        color: #e60012;
    }
    .mybill_cent_nav {
        margin-top: 30px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border:1px solid #ccc;
    }
    .mybill_cent_nav p {
        float: left;
        width: 225px;
        font-size: 14px;
        cursor: pointer;
    }
    .mybill_cent_nav p:nth-child(2) {
        border-left:  1px solid #ccc;
        border-right: 1px solid #ccc;
        
    }
    .mybill_cent_nav p:nth-child(3) {
        border-right: 1px solid #ccc;    
    }
    .mybill_cent_nav span {
        margin:0 3px;
        color: #e60012;
    }
    .styls {
        height: 40px;
        background:#fff; 
    }
    .mybill_rech {
        overflow: hidden;
        margin-top: 50px;
    }
    .rech_top {
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        font-size: 14px;
    }
    .rech_top p {
        float: left;
    }
    .rech_top p:nth-child(1) {
        width: 630px;
        font-size: 16px;
    }
    .rech_top p:nth-child(2) {
        margin-left: 20px;
    }
    .rech_top p:nth-child(3) {
        float: right;
    }
    .rech_top span {
        color: #e60012;
    }
    .rech_nav {
        height: 40px;
        background: #F1F1F1;
        border:1px solid #ccc;
    }
    .rech_nav .date {
        float: left;
        width: 170px;
        height: 39px;
        text-align: center;
        font-size: 14px;
        line-height: 39px;
        border-right: 1px solid #ccc;
        cursor: pointer;
    }
    .rech_loop {
        float: left;
        height: 55px;
        line-height: 55px;
        text-align: center;
        font-size: 14px;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
    }
    .rech_loop p:nth-child(4) {
        width: 100px;
    }
    .rech_loop p:nth-child(5) {
        width: 100px;
    }
    .rech_loop p:nth-child(7) {
        width: 100px;
    }
    .rech_loop p {
        float: left;
        width: 152px;
    }
    .rech_cont {
        width: 100%;
        float: left;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border:1px solid #ccc;
    }
    .bill {
        background: #fff;
    }
    .pics {
        width: 30px;
        height: 30px;
        float: left;
        margin: 4px 0 4px 14px;
    }

</style>

<template>
 

        <div class="mybill">     
            <div class="mybill_top">
                <p><span>温馨提示：</span>新订单首月租金在下单时支付，用户收到货时出账单，以后每月租金在次月1号出账，次月5号自动扣款。</p>
            </div>

            <div class="mybill_cont">
                <div class="mybill_nav">
                    <p>我的账单</p>
                    <div class="export">
                        <Icon type="ios-download-outline" class="ios"></Icon>
                        <p  @click="exportData"> 导出账单</p>
                    </div>
                </div>
                <div class="mybill_cent">
                    <p class="time">{{this.data}}<span> 至 {{this.datas}} 账单</span></p>
                    <div class="payment">
                        <p>本期应付：<span>￥{{ cope }}</span></p>
                        <p>(设备租金：<span>￥{{ rech }}</span>)</p>
                        <p>已付款：<span>￥{{ pay }}</span></p>
                        <p>未付款：<span>￥{{ notpay }}</span></p>
                    </div>

                    <div class="mybill_cent_nav">
                        <p v-for="(item,index) in res" @click="next(index)" :class="{'styls': oos == index}">{{item.title}}<span>{{item.loo}}</span><Icon type="arrow-down-b"></Icon></p>
                    </div>

                    <div v-if="one">
                        <mybillOne></mybillOne>
                    </div>

                     <div v-if="two">
                        <mybillTwo></mybillTwo>
                    </div>
                </div>

                <div class="mybill_rech">
                    <div class="rech_top">
                        <p>租金</p>
                        <p>商品总数量：<span>{{ allnum }}</span></p>
                        <p>月租金总额：<span>￥{{ allmon}}</span></p>
                    </div>
                    <div class="rech_nav">
                        <div v-for="(item,index) in bills" @click="now(index)" :class="{'bill' : bioo == index}" class="date">
                            <p>{{item}}</p>
                        </div>
                        <div class="pics">
                            <DatePicker
                                type="month"
                                :clearable="false"
                                @on-change='onchan'                             
                            ></DatePicker>
                        </div>
                    </div>
                    <div class="rech_loop">
                        <p v-for="item in loop">{{item.font}}</p>
                    </div>
                    <div class="rech_cont">
                        <p>暂无数据！</p>
                    </div>
                </div>

            </div>
        </div>

</template>

<script>

    import mybillOne from '@/components/mylease/mybill/mybill-one.vue'
    import mybillTwo from '@/components/mylease/mybill/mybill-two.vue'

    import {Icon , Table , DatePicker} from 'iview'

    export default {

        components : {

            Icon,
            Table,
            mybillOne,
            mybillTwo,
            DatePicker,

        },

        data () {

            return {

                allmon : 100,

                allnum : 5,

                data : '',

                datas : '',

                cope : 100,

                rech : 100,

                pay  : 100,

                notpay : 100,

                one : true,

                two : false,

                oos : false,

                bioo : false,


               res: [{
                    "title": "新增设备租金",
                    loo : '1'
                },{
                    "title": "往期设备租金",
                    loo : 1
                },{
                    "title": "退回设备租金",
                    loo : 1
                },{
                    "title": "调整项",
                    loo : 1
                }],

                bills : [],

                loop : [{
                    font : '时间',
                },{
                    font : '订单号',
                },{
                    font : '起止日期',
                },{
                    font : '支付状态',
                },{
                    font : '应付金额',
                },{
                    font : '付款日',
                },{
                    font : '操作',
                }],

            }

            
        },

        watch : {

        },

        computed : {
          
        },

        methods : {  

            onchan (index) {

                var sdate = new Date(index.replace(/-/g, "/"))
            
                sdate.setDate(sdate.getDate() - 4);
                sdate.setDate(sdate.getMonth() + 1);
                var dateArray = [];
                var dateTemp;
                var flag = 1;
                for (var i = 0; i < 5; i++) {
                   
                    dateTemp = sdate.getFullYear()+"-"+(sdate.getDate()+1);
                    dateArray.push(dateTemp);
                    sdate.setDate(sdate.getDate() + flag);
                
            }

                this.bills = dateArray
                console.log(dateArray)

            },

            now (index) {

                this.bioo = index
            },

            next (index) {

                if (this.res[index].title == '新增设备租金') {
                    this.one = true
                    this.two = false
                    this.oos = index
                }

                if (this.res[index].title == '往期设备租金') {
                    this.one = false
                    this.two = true
                    this.oos = index
                }
            },  
            
            exportData () {

                    this.$store.commit('expr',false)

                    setTimeout(() => {
                        this.$store.commit('expr',true)
                    }, 10)           
            }
       
        },

        created () {

            var mydate=new Date()

            let year = mydate.getFullYear()

            let month = mydate.getMonth()+1

            let months = mydate.getMonth()+2

            let arr = []

            let arrs = []

            arr.push(year, month)

            arrs.push(year, months)

            this.data = arr.join('-')

            this.datas = arrs.join('-')

           var myDate = new Date(); //获取今天日期
            myDate.setDate(myDate.getMonth());
            var dateArray = [];
            var dateTemp;
            var flag = 1;
            for (var i = 0; i < 5; i++) {
                dateTemp = myDate.getFullYear()+"-"+(myDate.getDate()+1);
                dateArray.push(dateTemp);
                myDate.setDate(myDate.getDate() + flag);
            }

            this.bills = dateArray

        },

        mounted () {

        }

    }

</script>
