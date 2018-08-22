







<style scoped>
    
    .top {
        width: 100%;
        /*overflow: hidden;*/           
    }
    .payment-cent {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top: 50px;
    }
    .payment-top {
        width: 100%;
        height: 83px;
        margin-bottom: 18px;
        
    }
    .payment-img {
        width: 55px;
        margin: 0 auto;

    }
    .payment-p p {
        font-size: 18px;
        text-align: center;       
    }
    .payment-cont {
        width: 100%;
        height: 54px;
        border-top: 5px #e60012 solid;
    }
    .oos {
        width: 100%;
        height: 52px;
        line-height: 52px;
        float: left;
        background: #fff9fb;
        border-bottom: 1px dotted #ccc;
    }
    .oos .spss {
        color: #e60012;
        font-size: 18px;
    }
    .oos p:first-child{
        width: 180px; 
        margin-left: 56px;
    }
    .oos p{ 
        width: 400px;
        float: left;
        margin-left: 104px;
        font-size: 16px;
    }
    .oos .pay {
        width: 270px;
        float: left;
    }
    .oos img {
        float: left;
        margin: 10px 10px;
    }
    .oob {
        float: left;
        width: 100%;
        height: 52px;
        line-height: 52px;
        background: #fff9fb;
        font-size: 16px;
        border-bottom: 1px dotted #ccc;
    }
    .oob p {
        float: left;
    }
    .oob p:first-child {
        float: left;      
        margin:0 50px 0 340px;
    }
    .obs {
        float: right;
        width: 57px;
        height: 52px;
        font-size: 18px;
        color: #e60012;
        line-height: 52px;
        margin-right: 20px;
    }
    .obs span {
        font-size: 16px;
        height:52px;
        float: left;
        line-height: 52px;
    }
    .obs .sps {
        float: left;
        margin: 17px 0 0 7px;
    }
    .obs .spps {
        float: left;
        margin: 17px 0 0 7px;
    }
    .payment-conts {
        width: 100%;
        float: left;
    }
    .payment-left {
        float: left;
        width: 888px;
        border-right: 1px solid #ccc;
    }
    .payment-left .oox {
        height:27px;
        width: 100%;
        float: left;
        padding-left: 56px;
        margin-top: 57px;
    }
    .oox p {
        float: left;
        font-size: 18px;
    }
    .oox span {
        float: left;
        margin-left:5px;
        font-size: 14px;
        line-height: 27px;
    }
    .oop {
        width:776px;
        height: 35px;
        float: left;
        color: #ccc;
        border-bottom:1px solid #ccc; 
        margin: 38px 56px 0 56px;     
    }
    .oop-p {
        width: 100%;
        height: 20px;
        float: left;
    }
    .oop-img {
        width: 100%;
        height: 15px;
        float: left;
       
    }
    .oop-img img {
        float: left;
        margin: 1px 20px 0px 50px;
    }
    .oop-img img:last-child {
        float: left;
        margin: 1px 20px 0px 245px;
    }
    .oop p {
        font-size: 15px;
        float: left;
        padding-left: 30px;
    }
    .oop p:last-child {
        float: left;
        padding-left: 138px;
    }
    .ooxs {
        color: #000;
    }
    .bott {
        float: left;
        width: 887px;
        height: 59px;
        background:linear-gradient(left, #fdf1f5 , #ffffff);
        line-height:59px;
        border-bottom: 1px solid #ccc; 
    }
    .bott img {
        float: left;
        padding:16px 10px 16px 56px;
    }
    .bott p {
        float: left;
        font-size: 18px;
    }
    .payment-right {
        width: 312px;
        float: left;
        margin-top: 57px;
    }
    .pam-rit {
        float: left;
        width: 268px;
        height: 255px;
        background: #fdf1f5;
        margin: 0 22px;    
    }
    .code {
        float: left;
        width: 156px;
        height: 156px;
        background: #ccc;
        margin: 27px 56px 0px 56px;
    }
    .code-oo {
        float: left;
        width: 156px;
        height:72px;
        margin: 0px 56px;
    }
    .code-ss {
        width: 156px;
        height: 32px;
        margin: 20px 0 ;
       
    }
    .code-ss img {
        float: left;
        padding: 0 10px;
    }
    .code-ss p {
        font-size: 14px;
        line-height: 16px;
    }
    .pam-bot {
        width: 268px;
        height: 52px;
        float: left;
        margin: 12px 22px 0 22px;

    }
    .pam-bot img:first-child {
        padding:0px 63px 0 45px;
    }
    .orderNavs {
        border-bottom: 2px solid #000;
    }

</style>

<template>
    <div class="top">
        <div class="orderNavs">
            <orderNavs></orderNavs>
        </div>
        <div class="payment-cent">
            <div class="payment-top">
                <div class="payment-img">
                    <img src="../../../static/images/sett/333-4.png">
                </div>

                <div class="payment-p">
                    <p>订单已提交，等待付款</p>
                </div>
            </div>

            <div class="payment-cont">
                <div class="oos">
                    <p v-for="item in res">待付款：<span class="spss">{{item.loo}}</span></p>
                    <p v-for="item in shs">购买商品：{{item.loo}}</p>
                    <p v-for="item in dis" class="pay"><img src="../../../static/images/sett/333-5.png">订单号：{{item.loo}}</p>
                    <div class="obs" @click="osb">
                        <span>详情</span>
                        <Icon type="chevron-down" class="spps" v-show="aa"></Icon>
                        <Icon type="chevron-up" class="sps" v-show="bb"></Icon>
                    </div>
                </div>

                <div class="oob" v-show="oobs">
                    <p>收款商家：大广租赁</p>
                    <p v-for="item in time">交易时间：<span>{{item.loo}}</span></p>
                 
                </div>
            
                
            </div>
                
            <div class="payment-conts">
                <div class="payment-left">
                    <div class="bott">
                        <img src="../../../static/images/sett/333-6.png">
                        <p>银行卡快捷支付 无需开通网银</p>
                    </div>
                    <div class="oox">
                        <p>网银支付</p>
                        <span>/ 请选择银行</span>
                    </div>
                                                
                    <div class="oop" > 
                        <div class="oop-p">
                            <p v-for="(item,index) in paym" @click="os(index)" :class="{'ooxs': oops == index}">{{item.pay}}</p>
                        </div>
                        <div class="oop-img">                                
                            <img src="../../../static/images/sett/sanjx.png" v-show="first">
                            <img src="../../../static/images/sett/sanjx.png" v-show="second">
                        </div>
                       
                    </div>
                    
                    <select1 v-if='one'></select1>
                    <select2 v-if='two'></select2>                     
                                         
                </div>

                <div class="payment-right">
                    <div class="pam-rit">
                        <div class="code"></div>
                        <div class="code-oo">
                            <div class="code-ss">
                                <img src="../../../static/images/sett/333-1.png">
                                <p>打开支付宝</p>
                                <p>扫一扫直接支付</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="pam-bot">
                        <img src="../../../static/images/sett/333-2.png" >
                        <img src="../../../static/images/sett/333-3.png" >
                    </div>
                     
                </div>
              
            </div>
                
        </div>      
    </div>

</template>

<script>

    import select1   from './Perpayment.vue';
    import select2   from './Entpayment.vue'; 
    import orderNavs from '@/components/public/order-navs.vue';

    import { Icon } from 'iview'

    export default {
        
        components : {

            select1,
            select2,
            Icon,
            orderNavs
               
        },

        data () {

            return {

                one : true,

                two : false,

                oobs : false,

                first:true,

                second:false,

                oops : false,

                aa : true,

                bb : false,

                loo : "显示更多银行" ,

                res:[{

                    loo:"￥2300.00"
                }],

                shs:[{

                    loo:"ThinkPad x230 12英寸商务笔记本电脑"
                }],

                dis:[{

                    loo:"123555148855225"
                }],

                time:[{

                    loo:"2018-6-14"
                }],

                paym:[{
                    pay:"个人支付",
                    
                },{
                    pay:"企业支付",
                }],

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {

            lis () {

                if (this.loo == '显示更多银行') {
                    this.obs = false
                    this.loo = '收起'
                } else {
                    this.obs = true
                    this.loo = '显示更多银行'
                }     

            },
               
            os (index) {

                // this.oops = !this.oops

                if (this.paym[index].pay == '个人支付') {

                    this.one = true

                    this.two =false

                    this.first = true

                    this.second = false

                    this.oops = false
                    
                }else if (this.paym[index].pay == '企业支付') {

                    this.two = true

                    this.one = false

                    this.first = false

                    this.second = true

                    this.oops = true

                }
            },

            osb () {

                this.oobs = !this.oobs

                this.bb = !this.bb

                this.aa = !this.aa
            }
        },

        created () {
            
        },

        mounted () {

        }
    }

</script>
