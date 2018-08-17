


<style scoped>

    .per_top {
        width: 880px;
        height: 202px;
        border-top-left-radius: 20px; 
        border-bottom-left-radius: 20px; 
        border: 1px solid #ccc;
        border-right: 0px;
        margin: 0px 0 30px 0;
    }
    .per-left {
        float: left;
        height: 183px;
        width: 330px;
        margin: 10px 0;
        border-right: 1px dashed #ccc;
        text-align: center;
    }
    .per-left img {
       margin: 10px 104px 0px ; 
    }
    .per-left .mem {
        width: 70px;
        height: 25px;
        background: red;
        margin: 0 auto;
        border-radius: 50px;
        line-height: 25px;
        color: #fff;
    }
    .per-left .mem span {
        margin-right: 3px;
    }
    .per_bottom {
        width: 100%;
        overflow: hidden;
        margin-top:3px;
    }
    .per_bottom p {
        height: 25px;
        line-height: 25px;
        padding: 0 20px;
        text-align: left;
    }
    .per_bottom span {
        color: #2470BE;
    }
    .per-right {
        float: left;
        width: 549px;
        height: 202px;
        text-align: center;
    }
    .right-cent {
        float: left;
        width: 526px;
        overflow: hidden;
        margin: 10px 0px 0 10px;
    }
    .right-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .right-top p{
        float: left;
    }
    .right-top img {
        margin: -4px 0;
    }
    .right-top span {
        float: left;
        padding: 1px 102px;
        margin: 14px 5px;
        background: #ccc;
    }
    .right-top span:first-child {
        margin-left: 30px;
    }
    .per-right .pass {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #FCCD49;
    }
    .pass img {
        float: left;
        margin-right: 5px;
    }
    .pass p {
        float: left;
    }
    .per-right .pass span {
        color: #2770BF;
    }
    .per-right .imgs {
        float: right;
        position: relative;
        left: 5px;
        top: -2px;
    }
    .cent_staus {
        width: 515px;
        height: 120px;
        margin: 2px 5px;
        box-shadow: 0px 1px 1px #ccc;
    }
    .cent_staus_nav {
        height: 39px;
        line-height: 39px;
        background: #fff7f7;
        text-align: left;
    }
    .cent_staus_nav .staus {
        width: 205px;
        float: left;
        padding-left: 17px;
    }
    .cent_staus_nav .per_recharge {
        float: left;
        width: 100px;
    }
    .per_recharge p {
        width: 42px;
        height: 18px;
        background: #f5f4f4;
        margin: 10px 0 10px 43px;
        line-height: 18px;
        border: 1px solid #aaaaaa;
        border-radius: 5px;
        text-align: center;
    }
    .cent_staus_nav span {
        color: #e60012;
    }
    .per_bott {
        height: 25px;
        line-height: 25px;
    }
    .per_bott p {
        width: 270px;
        float: left;
        text-align: left;
        margin-left: 15px;
        color: #ccc;
    }
    .per_bott p:last-child {
        width: 150px;
        margin-left: 50px;
    }
    .per_bott span {
        color: #2770BF;
        margin-left: 45px;
    }
    .per_bott:last-child span {
        margin-left: 60px;
    }

</style>

<template>

        <!--per_top 个人的基本信息-->
        <div class="per_top">
            <div class="per-left">
                <img :src="imgs">
                <p>用户名：{{name}}</p>
                <p class="mem"><span>{{mem}}</span>会员</p>
                <div class="per_bottom">
                    <p>资料完成度： 
                        <Progress :percent="40"></Progress><span>{{tex}}</span>
                    </p>
                    <p>账户安全度：</p>
                </div>
            </div>
             
            <!--per-right 我的资金信息-->
            <div class="per-right">
                <div class="right-cent">           
                    <div class="right-top">
                        <span></span>
                        <p>
                            <img src="../../../static/images/percent/2.png">
                            我的资金
                        </p>
                        <span></span>
                    </div>

                    <div class="pass"> 
                        <img src="../../../static/images/percent/365.png">
                        <p>为保证您的资金安全，在开通资产后，请<span>设置支付密码</span></p>
                    </div>

                    <div class="cent_staus">
                        <div class="cent_staus_nav">
                            <p class="staus">账单余额：<span>￥{{mom}}</span></p>
                            <p class="staus">账单欠款：<span>￥{{momq}}</span></p>
                            <div class="per_recharge">
                                <p>充值</p>
                            </div>     
                        </div>
                        <div class="per_bott">
                            <p>免押金金额：￥{{free}}<span>申请免押金</span></p>
                            <p>返利：￥{{frees}}</p>
                        </div>
                        <div class="per_bott">
                            <p>押 金 金 额：￥{{yajin}}</p>
                            <p>待入账：￥{{dai}}</p>
                        </div>
                        <div class="per_bott">
                            <p>优惠券数量：{{shu}} 张<span>查看</span></p>
                            <p>已失效：  {{shi}} 张</p>
                        </div>
                    </div>
                </div>                
                <img src="../../../static/images/percent/25.png" class="imgs">
            </div>
        </div>       

</template>

<script>

     import { Progress } from 'iview'

    export default {
        
        components : {

            Progress
               
        },

        data () {

            return {

                imgs : '../../../static/images/percent/aa-01.png',               

                mem  : 'D1'   ,

                pum  :  50    ,

                tex  : '完善' ,

                name : 'dg_123',

                mom  : '100.00',

                momq : '100.00',

                free  : '0.00' ,

                frees : '0.00' ,

                yajin : '0.00' ,

                dai   : '0.00' ,

                shu : 0 ,

                shi : 0                           

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {


        },

        created () {
                    
           
        },

        mounted () {

        }
    }

</script>
