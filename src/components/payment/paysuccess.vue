







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
    }
    .pay-deta {
        width: 790px;
        overflow: hidden;
        margin: 0 auto;
        padding: 33px 0;
    }
    .pay-detaa {
        width: 100%;
        height: 30px;
        float: left;
        line-height: 30px;
        font-size: 17px;
    }
    .pay-detaa img {
        float: left;
        padding-right: 10px;     
    }
    .pay-detaa p {
        width: 200px;
        float: left;
    }
     .pay-detaa p:nth-child(3) {
        float: left;
        margin-left: 80px;
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
        margin-left: 40px;
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
        margin: 3px 10px 3px 0;
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
    .pay-like {
        float: left;
        width: 1134px;
        height: 38px;
        margin: 0 33px;
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
        height:276px;
        margin: 29px 33px 33px 33px;
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
        width: 100%;
        height: 184px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right:1px solid #ccc;
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
                            <img src="../../../static/images/paysuccess/未标题-1.png">
                        </div>
                        <div class="payment-p">
                            <p>购买成功 我们尽快处理</p>
                        </div>
                    </div>
                    <div class="pay-deta">
                        <div class="pay-detaa">
                            <img src="../../../static/images/paysuccess/未标题-2.png">
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
                            <img src="../../../static/images/paysuccess/未标题-3.png">
                            <img src="../../../static/images/paysuccess/未标题-4.png">
                            <img src="../../../static/images/paysuccess/未标题-5.png">
                            <img src="../../../static/images/paysuccess/未标题-6.png">
                        </div>
                        <div class="pay-prompt">
                            <img src="../../../static/images/paysuccess/未标题-0.png">
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
                <div class="pay-like">
                    <p>猜你喜欢</p>
                    <img src="../../../static/images/paysuccess/未标题-7.png">
                </div>
                <div class="pay-img">
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
                        <div class="serve-con">
                            
                        </div>
                    </div>
                </div>
                <div class="pay-serve-right">
                    <div class="serve-top">
                         <p>售后服务</p>
                    </div>
                    <div class="serve-img">
                        
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
                    img :'../../../static/images/paysuccess/未标题-8.png'
                }
                ]


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
