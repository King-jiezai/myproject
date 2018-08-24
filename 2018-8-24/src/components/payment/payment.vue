

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
        margin: 24px 0px 0px 10px;
        width: 10px;  
        height: 10px;
        position: absolute;  
        border-left: 1px solid #e60012;  
        border-top: 1px solid #e60012;  
        transform: translate(0,-50%) rotate(-135deg); 
    }
    .obs .spps {
        float: left;
        margin: 28px 0px 0px 10px;
        width: 10px;  
        height: 10px;
        position: absolute;  
        border-right : 1px solid #e60012;  
        border-bottom: 1px solid #e60012;  
        transform: translate(0,-50%) rotate(-135deg); 
    }
    .payment-conts {
        width: 100%;
        float: left;
        margin-top: 59px;
    }
    .payment-left {
        float: left;
        width: 888px;
        border-right: 1px solid #ccc;
    }
    .payment-left .oox {
        width: 100%;
        float: left;
        padding-left: 56px;
    }
    .oox p {
        float: left;
        font-size: 18px;
    }
    .oox span {
        float: left;
        margin-left:5px;
        font-size: 12px;
        color: #ccc;
        margin-top: 6px;
    }
    .oop {
        width:100%;
        height: 63px;
        float: left;       
        margin-top: 55px;
        padding-left: 150px;
    }
    .oop img {
        float: left;
        margin: 18px 0 21px 10px;
        position: relative;
        left: 1px;
        z-index: 1;
    }
    .box-p {
        float: left;
        width: 414px;
    }
    .box-p p {
        float: left;
        font-size: 18px;
        line-height:45px;
    }
    .pps {
        width: 414px;     
        float: left;    
    }
    .pps p {
        float: right;
        font-size: 12px;
        padding-right: 20px;
        color: #e60012;
    }
    .ins {
        float: left;
        width: 350px;
        height: 45px;
        outline: none;
        border-radius: 5px;
        margin-left: 10px;
        border:0px;
        border: 1px solid red;
        padding-left: 10px;
        font-size: 15px;
    }
    .box-bs {
        float: left;
        height:45px;
        width: 160px;
        border: 1px solid #F9C3C3;
        line-height: 45px;
        color: #e60012;
        background: #ffE6D9;
        position: relative;
        z-index: 0;
        border-radius: 5px;
        display: block;
    }
    .box-bs p {
        float: left;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #e60012;
        color: #fff;
        line-height: 15px;
        text-align: center;
        margin: 14px 10px;
    }
    .btn {
        width: 135px;
        height: 42px;
        background: #e60012;
        float: left;
        text-align: center;
        line-height: 42px;
        color: #fff;
        border-radius: 5px;
        margin: 59px 0 63px 150px;
        font-size: 18px;
        cursor: pointer;
    }
    .btn a {
        color: #fff;
    }
    .bott {
        float: left;
        width: 100%;
        height: 57px;
        background:linear-gradient(left, #fdf1f5 , #ffffff);
        line-height: 57px;
        border-top: 1px solid #ccc;
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
            <orderNavst></orderNavst>
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
                    <div class="obs" @click="obs">
                        <span>详情</span>
                        <span style="font-size:24px;" class="spps" v-show="aa"></span>  
                        <span style="font-size:24px;" class="sps" v-show="bb"></span> 
                    </div>
                </div>

                <div class="oob" v-show="oob">
                    <p>收款商家：大广租赁</p>
                    <p v-for="item in time">交易时间：<span>{{item.loo}}</span></p>
                 
                </div>
           
            </div>

            <div class="payment-conts">
                <div class="payment-left">
                    <div class="oox">
                        <p>银行卡快捷支付</p>
                        <span>/ 无需开通网银</span>
                    </div>
                                                
                    <div class="oop"> 
                        <div class="pps">
                            <p>可用银行与限额</p>
                        </div>                          
                        <div class="box-p">
                            <p>银行卡</p>
                            <input type="text" class="ins" placeholder="请输入个人银行卡号" @focus="code" @blur="codes" v-model="txt" id="box">
                        </div>
                        <img src="../../../static/images/sett/Triangle.png" v-show="oso">
                        <div  class="box-bs" v-show="oso">
                            <p>x</p>请输入您的银行卡号
                        </div>
                    </div>

                    <div class="btn" @click="bts">
                       <span>下一步</span>
                    </div>

                    <div class="bott">
                        <img src="../../../static/images/sett/333-6.png">
                        <p>网银支付请选择银行卡</p>
                    </div>
                    
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

    import orderNavst from '@/components/public/order-navst.vue'

    export default {
        
        components : {
            
            orderNavst

        },

        data () {

            return {

                res:[{

                    loo:"￥2300.00"
                }],

                shs:[{

                    loo:"ThinkPad x230 12英寸商务笔记本电脑"
                }],

                dis:[{

                    loo:"123555148854894"
                }],

                time:[{

                    loo:"2018-6-14"
                }],
            	
	            oso :  false ,

                oob : false  ,

                aa : true,

                bb : false,

                txt :  ''         
            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {
        	   
            code () {

                this.oso = false

                $('#box').keyup(function(){  
                var value=$(this).val().replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");    
                $(this).val(value)  
            }) 

           },

           codes () {

                if (this.txt == '') {

                    this.oso = true
                }

           },

            obs () {

                this.oob = !this.oob

                this.bb = !this.bb

                this.aa = !this.aa

            },

            bts () {

                if (this.txt == '') {

                    this.oso = true

                }else {

                    this.$router.push('/payment')
                    this.$store.commit('val', this.txt)
                  
                }
            }	
           
        },

        created () {
            
        },

        mounted () {

        }
    }

</script>
