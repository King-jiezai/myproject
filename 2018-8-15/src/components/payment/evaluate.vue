


<style scoped>
    
    .body {
        width: 100%;
        overflow: hidden;
    }
    .top {
        background: #f7f7f7;
    }
    .payment-top {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        background: #fff;
    }
    .orderNavs {
        border-bottom: 2px solid #000;
    }
    .pay-top {
        float: left;
        width: 100%;
        height: 85px;
        margin-top: 30px;
        border-bottom: 1px dashed #7D7D7D;
    }
    .payment-img {
        width: 55px;
        margin: 0 auto; 
    }
    .payment-p {
        float: left;
        width: 100%;
        padding:0 370px;
    }
    .payment-p p {
        float: left;
        font-size: 18px;
        color: #7D7D7D;           
    }
    .payment-p p:first-child {
        width: 300px;
        float: left;
    }
    .payment-p p:first-child span {
        color: #000;
    }
    .payment-p p:last-child {
        float: right;
    }
    .eva-cent {
        width: 100%;
        overflow: hidden;
        padding-top: 5px; 
    }
    .eva-left {
        float: left;
        width: 310px;
        overflow: hidden;
    }
    .eva-img {
        width: 250px;
        height: 250px;
        margin: 20px auto 10px;
        border:1px solid #ccc;
    }
    .eva-img img {
        margin: 32px 14px;
    }
    .eva-left p {
        width: 250px;
        margin: 0 auto;
        font-size: 15px;
        text-align: center;
    }
    .eva-left p:nth-child(3) {
        font-size: 20px;
        color: #e60012;
    }
    .eva-left p:nth-child(4) {
        font-size: 18px;
        color: #ccc;
        text-align: left;
    }
    .eva-right {
        width: 890px;
        overflow: hidden;
        float: right;
    }
    .eva-cont {
        width: 890px;
        height: 400px;
        border-bottom: 1px dashed #7D7D7D;
    }
    .eva-right-left {
        float: left;
        width: 680px;
    }
    .eva-right-left .pp {
        margin: 20px 0 30px 0;
        font-size: 18px;
    }
    .eva-title {
        float: left;
        width: 100%;
        height: 120px;
    }
    .eva-title .p {
        float: left;
        margin: 0;
        font-size: 18px;
    }
    .impres-right {
        float: right;
        width: 590px;
        height: 120px;
    }
    .eva-impres {
        float: left;
        width: 105px;
        height: 40px;
        text-align: center;
        border:1px solid #ccc;
        margin:0 16px 16px 0;
        line-height: 40px;   
        font-size: 12px;     
    }
    .oso {
        width: 105px;
        height: 40px;
        font-size: 14px!important;
        border:1px solid #e60012;
    }
    .eva-impres:nth-child(5) {
       margin-right: 0;      
    }
    .eva-impres:nth-child(10) {
       margin-right: 0;      
    }
    .imges {
        float: right;
        margin-top: -22px ;
    }
    .eva-sheet {
        float: left;
        width: 100%;
        height: 186px;
    }
    .eva-sheet .p {
        float: left;
        margin: 0;
        font-size: 18px;
    }
    .eva-sheet textarea {
        float: right;
        width: 590px;
        height: 106px;
        resize:none;
        outline: medium;
        padding:5px 0 0 10px;
        font-size: 14px;
    }
    .eva-push {
        float: right;
        width: 590px;
        height: 80px;
    }
    .push-img {
        float: left;
        width: 56px;
        height: 55px;
        text-align: center;
        border:1px solid #C3C8CC;
        margin: 13px 5px 12px 0;     
    }
    .push-img img {
        margin:5px 12px 0px 12px;
    }
    .push-img .phone {
        margin:5px 19px 0px 19px;
    }
    .eva-push .eva-p {
        float: left;
        line-height: 80px;
    }
    .eva-push span {
        color: #e60012;
    }
    .eva-push .name {
        line-height: 80px;
        float: right;
    }
    .eva-los {
        float: left;
        width: 100%;
        height: 144px;
        margin-top: 38px;
        border-bottom: 1px dashed #7D7D7D;
    }
    .eva-los .p {
        margin: 0;
        font-size: 18px;
    }
    .eva-loss .pp {     
        position: relative;
        margin-left: 90px;
    }
    .eva-loss .aa {
        margin-left: 100px;
    }
    .eva-loss .pp:last-child .aa {
        margin-left:64px;
    }
    .eva-loss .fen {
        position: absolute;
        left: 304px;
        top: 8px;
    }
    .eva-butt {
        float: left;
        width: 220px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        margin-top: 48px;
        background: #e60012;
        font-size: 24px;
        color: #fff;
        border-radius: 5px;
        margin-left: 180px;
    }
    .eva-proposal {
        float: left;
        width: 100%;
        height: 79px;
        line-height: 79px;
        font-size: 16px;
    }
    .eva-proposal img {
        margin: 26px 10px 26px 95px ;
        float: left;
    }
    .eva-proposal span {
        color: #046bbb;
    }
    .eva-right-rig {
        float: right;
    }
    .eva-right-rig:hover .rig-tex {
        position: relative;
        right: 200px;
    }
    .rig-tex {
        width: 178px;
        height: 34px;
        line-height: 34px;
        border:1px solid #ccc;
        position: relative;
        top: 22px;
        right: 120px;
        z-index: 999;
    }
    .eva-right-rig .rig-img {
        position: absolute;
        right:-16px;
        top: 0px;
    }
    .rig-tex img {
        margin: 7px 5px;
        float: left;
    }
    .rig-show {
        position: relative;
        width: 167px;
        height: 167px;
        float: right;
        overflow: hidden;
        z-index: 500;
        top:-22px;
       
    }
    .rig-show .rig-imgs {
        right: 0px;
        position: absolute;
        top:10px;
    }
    

</style>

<template>

    <div class="body">
         <div class="orderNavs">
            <orderNavs></orderNavs>
        </div>
        <div class="top">
            <div class="payment-top">
                <div class="pay-top">
                    <div class="payment-img">
                        <img src="../../../static/images/paysuccess/p.png">
                    </div>
                    <div class="payment-p">
                        <p v-for="item in res">订单号：<span>{{item.loo}}</span></p>
                        <p v-for="item in time">{{item.loo}}</p>
                    </div>
                </div>
                <div class="eva-cent">
                    <div class="eva-left">
                        <div class="eva-img" v-for="item in pay">
                            <img :src='item.img'>
                        </div>
                        <p v-for='item in pay'>{{item.loo}}</p>
                        <p v-for='item in pay'>{{item.mon}}</p>
                        <p>套餐：</p>
                    </div>
                    <div class="eva-right">
                        <div class="eva-cont">
                            <div class="eva-right-left">
                                <p class="pp">商品评分：                                      
                                    <Rate show-text allow-half v-model="valueCustomText">
                                        <span style="color: #000">{{ valueCustomText }}分</span>
                                    </Rate>                                         
                                </p> 
                                <div class="eva-title">
                                    <p class="p">买家印象：</p>
                                    <div class="impres-right">
                                        <div class="eva-impres" v-for='(item,index) in pre' 
                                            :class="{oso:obo == index}" @click='cls(index)'>
                                            <p>{{item.loo}}</p>
                                            <img src="../../../static/images/sett/4.png" class="imges" v-show="obo == index">
                                        </div>                                   
                                    </div>
                                </div>
                                <div class="eva-sheet">
                                    <p class="p">评价晒单：</p>
                                    <textarea v-model="value6" placeholder="分享体验心得，给万千想买的人一个参考"></textarea>
                                    <div class="eva-push">                                       
                                        <div class="push-img">
                                            <img src="../../../static/images/paysuccess/b.png">
                                            <p>电脑传图</p>
                                        </div>
                                        <div class="push-img">
                                            <img src="../../../static/images/paysuccess/c.png" class="phone">
                                            <p>手机传图</p>
                                        </div>
                                        <p class="eva-p">共<span>0</span>张，还能上传<span>9</span>张</p>
                                        <p class="name">
                                            <Checkbox>匿名</Checkbox>
                                        </p>
                                    </div>
                                </div>                          
                            </div>
                            <div class="eva-right-rig">
                                <div class="rig-tex" @mouseenter="mou" @mouseleave="lea">
                                    <img src="../../../static/images/paysuccess/e.png">
                                    <p>打开广租手机，扫码评论</p>
                                    <img src="../../../static/images/paysuccess/g.png" class="rig-img">
                                </div>
                                
                                <div class="rig-show" @mouseenter="mou" @mouseleave="lea">
                                    <img src="../../../static/images/paysuccess/1.jpg" class="rig-imgs" v-show="oo">
                                    <img src="../../../static/images/wechat-2.png" v-show="oos">
                                </div>
                                

                            </div>
                        </div>
                    
                        <div class="eva-los">
                            <p class="p">物流服务评价：</p>
                            <div class="eva-loss">
                                <p class="pp">快速包装：                                      
                                    <Rate show-text allow-half v-model="score" class="aa">
                                        <span style="color: #000" class="fens">{{ score }}分</span>
                                    </Rate>
                                    <span style="color: #000" class="fen">0分</span>
                                </p>

                                <p class="pp">送货速度：                                      
                                    <Rate show-text allow-half v-model="custom" class="aa">
                                        <span style="color: #000">{{ custom }}分</span>
                                    </Rate>  
                                    <span style="color: #000" class="fen">0分</span>                         
                                </p> 

                                <p class="pp">配送员服务态度：                                     
                                    <Rate show-text allow-half v-model="distri" class="aa">
                                        <span style="color: #000">{{ distri }}分</span>
                                    </Rate> 
                                    <span style="color: #000" class="fen">0分</span>                      
                                </p>  
                            </div>                           
                        </div>
                        <div class="eva-butt">
                            <p>提交评论</p>
                        </div>
                        <div class="eva-proposal">
                            <img src="../../../static/images/paysuccess/a.png">
                            <p>对广租租赁有建议或意见，<span>参与租赁小调查</span></p>
                        </div>
                    </div>   
                </div>
            </div>                   
        </div>             
    </div>

</template>

<script>

    import orderNavs from '@/components/public/order-navs.vue';
    import { Rate , Checkbox} from 'iview'

    export default {
        
        components : {
            
            orderNavs,
            Rate,
            Checkbox,
               
        },

        data () {

            return {

                valueCustomText : 0,

                oo : true,

                oos : false,

                obo : null,

                score : 0,

                custom : 0,

                distri : 0,

                num : '0',

                nums : '9',

                value6 : '',

                res : [{
                    loo : '9666845254654556366554'
                }],

                time :[{
                    loo : '2018-12-30 16:00'
                }],

                pay :[{
                    img :'../../../static/images/paysuccess/230.png',
                    loo :"二手笔记本电脑 联想ThinkPad X220 X230 12寸imb超薄手提上网本",
                    mon : '￥1600'
                }],

                pre :[{
                    loo : '正品质量'
                },{
                    loo : '性能优良'
                },{
                    loo : '造型美观'
                },{
                    loo : '成色新颖'
                },{
                    loo : '轻薄便携'
                },{
                    loo : '性价比高'
                },{
                    loo : '价格优惠'
                },{
                    loo : '服务优良'
                },{
                    loo : '便宜实用'
                },{
                    loo : '自定义标签'
                },]

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {

            mou () {

                this.oo = false

                this.oos = true
            },

            lea () {

                this.oo = true

                this.oos = false
            },

            cls (index) {

                this.obo = index

            }

        },

        created () {
            
        },

        mounted () {

        }
    }

</script>
