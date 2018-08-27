

<style scoped>

    .barter-refunds {
        width: 100%;
        overflow: hidden;
    }
    .barter_nav {
        width: 1200px;
        height: 40px;
        float: left;
        position: relative;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .barter_one {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .barter-one {
        float: left;
        height: 40px;
        width: 380px;
    }
     .barter_one img{
        height: 40px;
        float: left;
        position:absolute;
        left:380px;
    }
    .barter_two {
        float: left;
        width: 420px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
        margin-left: -20px;
    }
    .barter-two {
        float: left;
        height: 40px;
        width: 420px;
    }
     .barter_two img{
        height: 40px;
        float: left;
        position:absolute;
    }
    .barter_three {
        float: left;
        width: 400px;
        height: 40px;
        background-color: #FF0000;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .barter-three {
        float: left;
        height: 40px;
        width: 374px;
    }
    .barter_three img{
        height: 40px;
        float: left;
    }
    .only-cent {
        width: 1160px;
        overflow: hidden;
        border: 1px solid #ccc;
        margin: 20px 20px 0 20px;
    }
    .only-left {
        width: 758px;
        float: left;
        overflow: hidden;
        border-right:1px solid #ccc;
    }
    .only-right {
        width: 400px;    
        overflow: hidden; 
    }
    .left-top {
        width: 738px;
        height: 100px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .left-top p:first-child {
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
        padding-top: 50px;
    }
    .left-top p:last-child {
        color: #999;
    }
    .cent-success {
        width: 738px;
        height: 150px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .cent-success p:first-child {
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
        padding-top: 30px;
    }
    .cent-success p:last-child {
        color: #666;
        margin-left: 30px;
        margin-top: 5px;
        font-size: 13px;
    }
    .cent-success span {
        margin-right: 5px;
    }
    .left-consult {
        width: 728px;
        overflow: hidden;
        margin: 0 10px;
        padding:20px 0 0 10px;
        margin-bottom: 30px;
    }
    
</style>

<template>

    <!--only-refunds 买家申请换货-->
    <div class="barter-refunds">

        <!--barter_nav 买家申请换货步骤-->
        <div class="barter_nav">

            <!--barter_one 买家申请换货第一步-->
            <div class="barter_one">
                <div class="barter-one">
                    <p>1.买家申请换货</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>
            
            <!--barter_two 买家申请换货第二步-->
            <div class="barter_two">
                <div class="barter-two">
                    <p>2.卖家处理换货申请</p>
                </div>
                <span><img src="../../../../static/images/refund/111.png"></span>
            </div>

            <!--barter_three 买家申请换货成功-->
            <div class="barter_three">
                <div class="barter-three">
                    <p>3.买家确认，换货成功</p>
                </div>
            </div>

        </div>

        <!--only-cent 买家申请换货商品详情-->
        <div class="only-cent">

            <!--only-left 左边商品详情-->
            <div class="only-left">

                <!--left-top 换货成功-->
                <div class="left-top">
                        <p>买家已确认，换货成功</p>
                        <p>换货成功时间: {{this.day}} <span>{{this.hour}}</span></p>
                </div>
                
                <!--cent-success 换货物件-->
                <div class="cent-success">
                    <p>换货物件：</p>
                    <p>{{this.fon}}：<span>{{this.number}}</span><span>/</span>{{this.disk}}：<span>{{this.disks}}</span></p>
                </div>

                <!--left-consult 协商历史-->
                <div class="left-consult">                 
                    <contents></contents>  
                </div>

            </div>

            <!--only-right 右边订单详情-->
            <div class="only-right">
                <threeDetails></threeDetails>
            </div>

        </div>   
        
    </div>

</template>

<script>
    
    import contents   from '@/components/refund/exchange-barter/consultative-content.vue'
    import threeDetails   from '@/components/refund/exchange-barter/three-details.vue'
    import {Icon } from 'iview'

    export default {

        components : {

            Icon,
            threeDetails,
            contents,
        },

        data () {

            return {
               

                day : "2018-8-18",

                hour: "14:15:00",

                fon : 'CPU',

                number: 'i5-4300',

                disk : '硬盘',

                disks: '500G硬盘'

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
