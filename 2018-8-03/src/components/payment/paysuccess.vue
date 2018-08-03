


<style scoped>
    
    .body {
        width: 100%;
        overflow: hidden;
    }
    .top {
        background: url(../../../static/images/paysuccess/背景.jpg);
    }
    .pay {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        background: #fff;  
    }
    .payment-top {
        float: left;
        width: 100%;
        background: #f0fef9;     
    }
    .orderNavs {
        border-bottom: 2px solid #000;
    }
    .pay-top {
        float: left;
        width: 100%;
        height: 80px;
        margin-top: 47px;
    }
    .payment-img {
        width: 55px;
        margin: 0 auto; 
    }
    .payment-p p {
        font-size: 18px;
        text-align: center;
        color: #096F02;
        font-weight: bold;       
    }
    .pay-deta {
        width: 790px;
        overflow: hidden;
        margin: 0 auto;
        padding: 20px 0 33px 0;
    }
    .pay-detaa {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 17px;
    }
    .pay-detaa img {
        float: left;
        padding-right: 10px;
        padding-left: 60px;     
    }
    .pay-detaa p {
        width: 200px;
        float: left;
    }
     .pay-detaa p:nth-child(3) {
        float: left;
        margin-left: 50px;
    }
    .pay-detaa span {
        margin-left: 5px;
    }
    .pay-detaa .mony {
        font-size: 20px;
        color: #e60012;
    }
    .pay-p span {
        color: #e60012;
    }
    .pay-baby {
        width: 100%;
        height: 30px;
        float: left;
        line-height: 30px;
        font-size: 14px;
        margin: 10px 0;
    }
    .pay-baby p {
        padding-left: 100px; 
        float: left;
    }
    .pay-baby img {
        margin: 3px;
    }
    .pay-prompt {
        width: 100%;
        height: 30px;
        float: left;
        line-height: 30px;
        font-size: 14px;
    }
    .pay-prompt img {
        float: left;
        margin: 3px 10px 3px 60px;
    }
    .pay-succ {
        width: 100%;
        height: 171px;
        float: left;
    }
    .succ-top {
        overflow: hidden;
        margin: 50px 0;
    }
    .succ-top .succ-p {
        text-align: center;
        font-size: 24px;
        color: #e60012;
        font-weight: bold;
    }
    .succ-integral {
        width: 100%;
        height: 30px;
        float: left;
        padding: 0 360px;
        margin-top: 5px;
    }
    .succ-integral p {
        float: left;
        font-size: 16px;
        line-height: 30px;
        margin-left: 10px;
    }
    .succ-integral p:first-child {
        margin-left: 45px;
    }
    .succ-integral p:last-child {
        color: #e60012;
    }
    .pay-like {
        float: left;
        width: 1132px;
        height: 38px;
        margin-bottom: 29px;
        background: #f1f1f1;
    }
    .pay-like p {
        float: left;
        line-height: 38px;
        font-size: 18px;
        margin-left: 10px;
    }
    .pay-like img {
        float: right;
        margin:6px 20px 6px 0;
    }
    .pay-img {
        float: left;
        width: 1134px;
        height:345px;
        margin: 0px 33px 33px 33px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right:1px solid #ccc;
    }
    .pay-imgs {
        float: left;
        width: 212px;
        height: 212px;
        border:1px solid #ccc;
        margin-left: 12px;
    }
    .pay-imgs p {
        font-size: 15px;
    }
    .pay-serve-left {
        float: left;
        width: 839px;
        height: 222px;
        margin-left: 33px;
        margin-bottom: 50px;
        border-bottom: 
    }
    .pay-serve-right {
        float: left;
        width: 276px;
        height: 222px;
        margin-left: 19px;
        margin-bottom: 50px;
    }
    .serve-top {
        width: 100%;
        height: 38px;
        background: #f1f1f1;
        line-height: 38px;
    }
    .serve-top p {
        margin-left: 12px;
        font-size: 16px;
    }
    .serve-img {
        float: left;
        width: 100%;
        height: 184px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right:1px solid #ccc;
    }
    .serve-con {
        float: left;
        width: 190px;
        height:60px;
        margin: 10px 0 10px 15px;
    }
    .serve-con img {
       
        float: left;
        padding: 7px 10px 7px 0;
    }
    .serve-con:nth-child(4) img {
        margin: 6px 0;
    }
    .serve-con:nth-child(8) img {
        margin: 5px 0;
    }
    .serve-con .serve-text {
        height: 43px;
        width: 130px;
        float: left;
        margin: 9px 0;
    }
    .serve-text p {
        font-size: 10px;
        color: #B0B0B0;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;  
    }
    .serve-text p:first-child {
        font-size: 16px;
        color: #000;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .serve-title {
        float: left;
        width: 100%;
        height: 92px;
        font-size: 14px;
    }
    .serve-title p {
        margin: 10px 0 10px 10px;
    }
    .serve-phone p {
        float: left;
        margin: 0 0 5px 30px;
    }
    .serve-phone p:last-child {
        width: 100px;
        height: 22px;
        background:linear-gradient(top,#FFF1CF 10%,#FFF 30%,#FFF1CF); 
        border-radius: 5px;
        border:1px solid #ED6100;
    }
    .serve-phone img {
        margin-left: 5px;
    }
    .serve-phone span {
        float: right;
        margin:2px 10px 0 0;
        color: #FF1A1F;
        font-size: 12px;
    }
    .serve-phones p {
        float: left;
        margin: 0 0 0px 30px;
    }
    .serve-phones p:last-child {
        width: 100px;
        height: 22px;
        background:linear-gradient(top,#CFCFCD ,#FFF 40%,#CFCFCD);
        border-radius: 5px;
        border:1px solid #A0A0A0;
    }
    .serve-phones img {
        margin-left: 5px;
    }
    .serve-phones span {
        float: right;
        margin:2px 10px 0 0;
        color: #5B5B59;
        font-size: 12px;
    }
    .serve-titles {
        float: left;
        width: 100%;
        height: 92px;
        font-size: 14px;
    }
    .serve-titles p {
        margin: 10px 0 0 10px;
    }
    .serve-time p {
        margin: 5px 0 0 30px;
    }
    .serve-time span {
        margin-right: 42px;
    }

</style>

<template>

    <div class="body">
         <div class="orderNavs">
            <orderNavs></orderNavs>
        </div>
        <div class="top">
            <div class="pay">
                <div class="payment-top">
                    <div class="pay-top">
                        <div class="payment-img">
                            <img src="../../../static/images/paysuccess/1.png">
                        </div>
                        <div class="payment-p">
                            <p>购买成功 我们尽快处理</p>
                        </div>
                    </div>
                    <div class="pay-deta">
                        <div class="pay-detaa">
                            <img src="../../../static/images/paysuccess/2.png">
                            <p v-for="item in res">订单号:<span>{{item.loo}}</span></p>
                            <p v-for="item in reg">在线支付:<span class="mony">{{item.loo}}</span></p>
                            <p class="pay-p">
                                <span>查看订单详情</span>
                                <span>|</span>
                                <span>继续逛</span>
                            </p>
                        </div>
                        <div class="pay-baby">
                            <p>分享刚入手的宝贝：</p>
                            <img src="../../../static/images/paysuccess/3.png">
                            <img src="../../../static/images/paysuccess/4.png">
                            <img src="../../../static/images/paysuccess/5.png">
                            <img src="../../../static/images/paysuccess/6.png">
                        </div>
                        <div class="pay-prompt">
                            <img src="../../../static/images/paysuccess/0.png">
                            <p>重要提示：广租平台及销售商不会以订单异常、系统升级为由，要求你点击任何链接进行退款。</p>
                        </div>
                    </div>
                </div>
                <div class="pay-succ">
                    <div class="succ-top">
                        <p class="succ-p">恭喜你完成此订单！</p>
                        <div class="succ-integral">
                            <p v-for="item in inte">本次会员积分：<span>{{item.loo}}</span></p>
                            <p v-for="item in intes">总积分：<span>{{item.loo}}</span></p>
                            <p>点击链接详情></p>
                        </div>
                    </div>                 
                </div>
                
                <div class="pay-img">
                    <div class="pay-like">
                        <p>猜你喜欢</p>
                        <img src="../../../static/images/paysuccess/7.png">
                    </div>
                    <div class="pay-imgs" v-for="item in pay">
                        <img :src="item.img">
                        <p>{{item.loo}}</p>
                    </div>              
                </div>
                <div class="pay-serve-left">
                    <div class="serve-top">
                        <p>广租特色服务</p>
                    </div>
                    <div class="serve-img">
                        <div class="serve-con" v-for="item in ses">
                            <img :src="item.img">
                            <div class="serve-text">
                                <p>{{item.loo}}</p>
                                <p>{{item.los}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pay-serve-right">
                    <div class="serve-top">
                         <p>售后客服</p>
                    </div>
                    <div class="serve-img">
                        <div class="serve-title">
                            <p>在线咨询</p>
                            <div class="serve-phone">
                                <p>客服中心</p>
                                <p>
                                    <img src="../../../static/images/paysuccess/16.png">
                                    <span>和我联系</span>
                                </p>
                            </div>
                            <div class="serve-phones">
                                <p>客服中心</p>
                                <p>
                                    <img src="../../../static/images/paysuccess/16.png">
                                    <span>和我联系</span>
                                </p>
                            </div>
                        </div>
                        <div class="serve-titles">
                            <p>工作时间</p>
                            <div class="serve-time">
                                <p>周一至周六：8：30--22：30</p>
                                <p><span>周</span>日：8：30--22：30</p>
                            </div>
                        </div>
                        <div class="serve-title">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>

</template>

<script>

    import orderNavs from '@/components/public/order-navs.vue';

    export default {
        

        components : {
            
            orderNavs
               
        },

        data () {

            return {

                res :[{
                    loo:'4654646664564'
                }],

                reg :[{
                    loo:'￥2300.00'
                }],

                inte :[{
                    loo:'20000'
                }],

                intes :[{
                    loo:'30000'
                }],

                pay :[{
                    img :'../../../static/images/comclass-2/X240.jpg',
                    loo :"二手笔记本电脑 联想ThinkPad X220 X230、、、、、、"
                },{
                    img :'../../../static/images/comclass-2/X240.jpg',
                    loo :"二手笔记本电脑 联想ThinkPad X220 X230、、、、、、"
                },{
                    img :'../../../static/images/comclass-2/X240.jpg',
                    loo :"二手笔记本电脑 联想ThinkPad X220 X230、、、、、、"
                },{
                    img :'../../../static/images/comclass-2/X240.jpg',
                    loo :"二手笔记本电脑 联想ThinkPad X220 X230、、、、、、"
                },{
                    img :'../../../static/images/comclass-2/X240.jpg',
                    loo :"二手笔记本电脑 联想ThinkPad X220 X230、、、、、、"
                }],

                ses : [{
                    img :'../../../static/images/paysuccess/8.png',
                    loo :'租赁指南',
                    los :'快速查看登录/注册、、、'
                },{
                    img :'../../../static/images/paysuccess/9.png',
                    loo :'订单查询',
                    los :'快速查看订单详情、、、'
                },{
                    img :'../../../static/images/paysuccess/10.png',
                    loo :'售后服务',
                    los :'快速提交退换货、、、'
                },{
                    img :'../../../static/images/paysuccess/11.png',
                    loo :'账户安全',
                    los :'修改密码、绑定、、、'
                },{
                    img :'../../../static/images/paysuccess/12.png',
                    loo :'免押金服务',
                    los :'快速查看了解免押金、、、'
                },{
                    img :'../../../static/images/paysuccess/13.png',
                    loo :'广租特色服务',
                    los :'快速了解广租不一样、、、',
                    
                },{
                    img :'../../../static/images/paysuccess/14.png',
                    loo :'物流配送',
                    los :'费用、范围等信息查询、、、',
                },{
                    img :'../../../static/images/paysuccess/15.png',
                    loo :'平台介绍',
                    los :'快速查看了解广租、、、'
                }]


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
