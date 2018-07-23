


<style scoped>
    
    .modify_top {
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
        background: #F9F9F9;
    }
    .modify_top p {
        margin-left: 20px;
    }
    .modify_cont {
        width: 910px;
        overflow: hidden;
        margin-top: 30px;
        font-size: 14px;   
    }
    .step_nav {
        height: 30px;
        margin: 24px 0 40px 0;
        margin-left: 70px;
        position: relative;
    }
    .step-one {
        float: left;
        height: 24px;
        width: 240px;
        background: #e60012;
        margin: 3px 0;
        line-height: 24px;
        color: #fff;
        text-align: center;   
    }
    .step-two {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px; 
        text-align: center;
    }
    .step-three {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px;  
        text-align: center;
    }
    .step_one img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:240px;
    }
    .step_two img{
        height: 24px;
        display:block;
        position:absolute;
        top:3px;
        left:480px;
    }
    .step_one {
        float: left;
        width: 240px;
    }
    .step_two {
        float: left;
        width:240px;
    }
    .step_three {
        float: left;
        width: 240px;
    }
    .mailbox {
        height: 30px;
        line-height: 30px;
        margin-left: 70px;
    }
    .mailbox  p {
        font-size: 14px;
        float: left;
        letter-spacing: 1px;
    }
    .mailbox input {
        float: left;
        height: 30px;
        padding-left: 10px;
        margin-right: 20px;
        outline: medium;
    }
    .inres {
        color: #999;
    }
    .inress {
        color: #e60012;
    }
    .acc-code {
        height: 30px;
        line-height: 30px;
        margin-top: 25px;
        font-size: 15px;
        margin-left: 70px;
    }
    .acc-code p:first-child {
        letter-spacing: 4px;
        float: left;
        margin-left: 45px;
    }
    .acc-code input {
        float: left;
        height: 30px;
        line-height: 30px;
        outline: medium;
        width: 150px;
        padding-left: 10px;
    }
    .acc-code .inres{
        float: left;
        color: #e60012;
    }
    .code {
        width: 230px;
        height: 30px;
        float: left;
    }
    .code p:first-child {
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #AAAAAA;
        letter-spacing: 5px;
        margin-left: 10px;
        color: #fff;
    }
    .notkan {
        float: left;
        line-height: 30px;
        margin-left: 15px;
        width: 110px;
        letter-spacing: 1px;
    }
    .code span {
        color: #4E9EF5;
        cursor: pointer;
    }
    .message-next {
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        background-color: #e60012;
        text-align: center;
        color: #fff;
        margin: 60px 0 0 191px;
        cursor: pointer;
    }
    .mess-one {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        text-align: center;   
    }
    .mess-two {
        float: left;
        height: 24px;
        width: 240px;
        background: #e60012;
        margin: 3px 0;
        line-height: 24px;
        color: #fff;
        padding-left: 30px; 
        text-align: center;
    }
    .mess-three {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        padding-left: 30px;  
        text-align: center;
    }
    .emial {
        margin-left: 70px;
    }
    .emial p {
        margin-bottom: 20px;
        letter-spacing: 1px;
        font-size: 14px;
    }
    .mailbox-emial {
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #F1F1F1;
        border:1px solid #ccc;
        letter-spacing: 1px;
        border-radius: 5px;
        margin:40px 0 0 70px;
    }
    .no-email {
        margin-left: 70px;
        margin-top: 50px;
    }
    .no-email p:first-child {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .no-email p {
        font-size: 13px;
        letter-spacing: 2px;
        margin: 20px 0;
    }
    .popup {
        width: 250px;
        height: 100px;
        border:1px solid #ccc;
        background:#fff;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        border-radius: 5px;
        /*box-shadow: 0px 1px 9px #ccc;*/
    }
    .popup .p3 {
        margin-top: 15px;
        margin-left: 20px;
    }
    .popup_nav {
        height: 30px;
        line-height: 30px;
    }
    .popup_nav .p1{
        float: left;
        margin-left: 20px;
        font-size: 14px;
    }
    .popup_nav .p2 {
        float: right;
        font-size: 26px;
        line-height: 30px;
        margin-right: 10px;
        color: #ccc;
        cursor: pointer;
    }
    .queding {
        float: right;
        width: 35px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
        text-align: center;
        border:1px solid #65C0F7; 
        margin: 5px 10px 0 0;
        box-shadow: 0px 1px 9px #ccc;
        cursor: pointer;
    }
    .model_pre {
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }



</style>

<template>
 
        <div class="body">
            <div class="modify_top">
                <p>邮箱验证</p>
            </div>

            <div class="modify_cont" v-if="one">
                 <div class="step_nav">
                    <div class="step_one">
                        <div class="step-one">
                            <p>1.输入邮箱地址</p>
                        </div>
                        <span><img src="../../../../static/images/order/333.png"></span>
                    </div>

                    <div class="step_two">
                        <div class="step-two">
                            <p>2.发送验证邮箱</p>
                        </div>
                        <span><img src="../../../../static/images/order/22.png"></span>
                    </div>

                    <div class="step_three">
                        <div class="step-three">
                            <p>3.完成</p>
                        </div>
                    </div>
                </div>
                
                <div class="mailbox">
                    <p>请输入邮箱地址：</p>
                    <input type="text" v-model="mailbox" @blur="blmai" @focus="fomail">
                    <p v-show='mailos' class="inres" >可用于登录，找回密码及身份验证</p>
                    <p v-show='mailob' class="inress" >请输入邮箱地址</p>
                    <p v-show='mailoc' class="inress" >输入的邮箱地址不正确</p>
                </div>

                <div class="acc-code">
                    <p>验证码：</p>
                    <input type="text" v-model="code" @blur="blcode">
                    <div class="code">
                        <p>{{ num }}</p>
                        <p class="notkan">看不清?<span>换一张</span></p>
                    </div>
                    <p v-show='inres' class="inres" >请输入你的验证码</p>
                    <p v-show='innume' class="inres" >输入的验证码不正确</p>
                </div>

                <div class="message-next" @click="next">
                    <p>下一步</p>
                </div>
            </div>

             <div class="modify_cont" v-if="two">
                 <div class="step_nav">
                    <div class="step_one">
                        <div class="mess-one">
                            <p>1.输入邮箱地址</p>
                        </div>
                        <span><img src="../../../../static/images/order/22.png"></span>
                    </div>

                    <div class="step_two">
                        <div class="mess-two">
                            <p>2.发送验证邮箱</p>
                        </div>
                        <span><img src="../../../../static/images/order/333.png"></span>
                    </div>
                    <div class="step_three">
                        <div class="mess-three">
                            <p>3.完成</p>
                        </div>
                    </div>
                </div>
               
                <div class="emial">
                   <p>已发送验证邮件至：{{this.mailbox}}</p>
                   <p>验证邮件24小时内有效，请尽快登录您的邮箱点击链接完成验证。</p>
                </div>

                <div class="mailbox-emial">
                   <p>邮箱验证</p>
                </div>

                <div class="no-email">
                   <p>没收到邮件？</p>
                   <p>1.检查您的垃圾箱或广告箱，邮件有可能被误认为积极或广告邮件；或选择<span> 重新验证邮箱</span></p>
                   <p>2.还是没有收到邮件，选择<span> 重新发送</span></p>
                </div>

                <div class="popup" v-show="success">
                        <div class="popup_nav">
                            <p class="p1">myhome.gome.com.cn 显示</p>
                            <p class="p2" @click='errs'>×</p>
                        </div>
                        <p class="p3">发送成功</p>
                        <div class="queding" @click="que">
                            <p>确定</p>
                        </div>
                    </div>

                    <div class="model_pre" v-show="success"></div>

                <div class="message-next" @click="subs">
                    <p>提交</p>
                </div>
            </div>
          
        </div>  

   
</template>

<script>
        

    export default {

        components : {

        },

        data () {

            return {

                mailos : true,

                mailob : false,

                mailoc : false,

                mailbox : '',

                num  : "Bg89",

                inres : false,

                innume : false,

                code  : '',

                one   : true,

                two   : false,

                three : false,

                success : false,

            }

            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            que () {
                this.success = false
            },

            errs () {
                this.success = false
            },

            subs () {

                this.success = true
            },

            fomail () {

                this.mailos = true

                this.mailob= false

                this.mailoc = false
            },

            blmai () {

                var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

                if(this.mailbox ==''){

                    this.mailob = true
                    this.mailos = false
                    this.mailoc = false

                }else if(!regEmail.test(this.mailbox)){

                    this.mailoc = true

                    this.mailob = false

                    this.mailos = false
                }
  
                if (this.mailbox == '') {

                    this.mailob = true

                    this.mailos = false

                    this.mailoc = false
                }
            },

            blcode () {

                if (this.code == '') {

                    this.inres = true

                }else if (this.code == this.num) {

                    this.inres = false

                    this.innume = false

                }else {

                    this.inres = false

                    this.innume = true
                }
            },


            next () {

                this.blmai()
                
                this.blcode()

                if (this.inres == false && this.innume == false && this.mailob == false && this.mailoc == false) {

                    this.one = false

                    this.two = true

                    this.three = false

                }  
            },


            // pcod () {

            //         this.second = 60

            //         this.pro = true

            //         this.obn = false

            //         this.sen = true

            //         let tim = setInterval(()=> {

            //             this.second--

            //             if (this.second < 0) {

            //                 this.pro = false

            //                 this.obn = true

            //                 this.sen = false

            //                 clearInterval(tim)

            //             }

            //         }, 1000)

            // },
            
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
