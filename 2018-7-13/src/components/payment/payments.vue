

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
        overflow: hidden;
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
    .oop-oo {
        width: 438px;
        overflow: hidden;
        float: left;
    }
    .box-p {
        height: 84px;
        float: left;
        width: 440px;
    }
    .box-ps {
        overflow: hidden;
        float: left;
        width: 440px;
        margin-bottom: 14px;
    }
    .nas {
        float: left;
        width: 72px;
    }
    .box-p p {    
        float: right;
        font-size: 18px;
        line-height:45px;
    }
    .box-ps p {    
        float: right;
        font-size: 18px;
        line-height:45px;
    }
    .pps {
        width: 440px;     
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
        margin-left: 16px;
        border:0px;
        border: 1px solid #ccc;
        padding-left: 10px;
        font-size: 15px;
        line-height: 45px;
    }
    .coo {
          border: 1px solid #e60012;
    }
    .insss {
        float: left;
        width: 350px;
        height: 45px;
        border-radius: 5px;
        margin-left: 16px;
        border: 1px solid #ccc;
        padding-left: 10px;
        font-size: 16px;
        line-height: 45px;
        font-weight: bold;
    }
    .insss p {
        float: left;
    }
    .inss {
        float: left;
        width: 350px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-left: 88px;
        margin-bottom: 14px;
        line-height: 45px;
        font-size: 14px;
        color: #000;
    }
    .inss img {
        margin: 6px 30px 6px 10px;
    }
    .inss p {
        float: left;
    }
    .inss .numb {
        float: left;
        margin-left:50px;
        font-size: 12px;
    }
    .inss .numb span {
        margin-left: 20px;
    }
    .box-bs {
        float: left;
        height: 42px;
        line-height: 42px;
        color: #e60012;
        position: relative;
        z-index: 0;
        border-radius: 5px;
        display: block;
        margin-left: 88px;
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
        margin: 13px 5px;
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
        margin: 40px 0 27px 88px;
        font-size: 18px;
        cursor: pointer;
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
    .select input {
        float: left;
        margin: 4px 10px 0 88px;
    }
    .select p {
        float: left;
        font-size: 14px;
        color: #ccc;
    }
    .select span {
        color: #e60012;
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
                            <div class="oop-oo">
                                <div class="pps">
                                    <p>可用银行与限额</p>
                                </div>                          
                                <div class="box-ps">
                                    <div class="nas">
                                        <p>银行卡</p>
                                    </div>
                                    <div class="insss" >
                                        <p>{{loo}}</p>
                                    </div>
                                </div>                               
                                                       
                                <div class="inss">
                                    <img src="../../../static/images/sett/333-7.png">
                                    <p>广发银行</p>
                                    <p class="numb">**************4496<span>| 储蓄卡</span></p>
                                </div>

                                <div class="box-p">                               
                                    <div class="nas">
                                       <p>姓名</p>
                                    </div>
                                    <input type="text" class="ins" placeholder="请输入您的真实姓名" @focus="code" @blur="codes" v-model="txt" :class="{coo : co}">
                                    <div  class="box-bs" v-show="oso">
                                    <p>x</p>姓名不能为空
                                </div>
                                </div>
                                

                                <div class="box-p">                               
                                    <div class="nas">
                                       <p>身份证号</p>
                                    </div>
                                    <input type="text" class="ins" placeholder="请输入您的身份证号" @focus="iden" @blur="idens" v-model="txts" :class="{coo : cos}">
                                    <div  class="box-bs" v-show="idenes">
                                    <p>x</p>身份证不能为空
                                </div>
                                </div>
                               <div class="box-p">                               
                                    <div class="nas">
                                       <p>手机号</p>
                                    </div>
                                    <input type="text" class="ins" placeholder="请输入银行预留手机号" @focus="pho" @blur="phos" v-model="txtes" :class="{coo : coss}">
                                    <div  class="box-bs" v-show="phoes">
                                        <p>x</p>手机号与银行预留的不一样
                                    </div>
                                </div> 
                                <div class="select">
                                    <input type="checkbox">
                                    <p>同意<span>《服务协议》</span></p>
                                </div>   
                                <div class="btn" @click="bts">
                                    <span>下一步</span>
                                </div>                            
                            </div>
                           
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

    import orderNavs from '@/components/public/order-navs.vue';

    export default {
        
        components : {
            
            orderNavs
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

                idenes:  false ,

                phoes :  false ,

                oob : false  ,

                txt :  ''    ,

                txts :  ''    ,

                txtes :  ''   ,

                loo : ''     ,

                co : false,

                cos : false,

                aa : true,

                bb : false,

                coss : false

            }
        },               

        computed : {

        },

        watch : {

        },
        //js
        methods : {

                bts () {

                    this.codes ()

                    this.idens()

                    this.phos()
                },
        	   
                code () {

                    this.oso = false

                    this.co  =true

                    this.cos = false

                    this.coss = false

               },

               codes () {

                    if (this.txt == '') {

                        this.oso = true
                    }

               },

               iden () {

                    this.idenes = false

                    this.co=false

                    this.cos= true

                    this.coss=false

               },

               idens () {

                    if (this.txts == '') {

                        this.idenes = true
                    }

               },

               pho () {

                    this.phoes = false

                    this.co=false

                    this.cos= false

                    this.coss=true

               },

               phos () {

                    if (this.txtes == '') {

                        this.phoes = true
                    }

               },

                obs () {

                    this.oob = !this.oob

                    this.bb = !this.bb

                    this.aa = !this.aa

                }	
           
        },

        created () {

            this.loo =   this.$store.state.val 
            
        },

        mounted () {

        }
    }

</script>
