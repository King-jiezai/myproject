


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
        margin: 24px 0;
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
    .acc-name {
        margin:10px 0 0 70px;
        font-size: 15px;
        letter-spacing: 18px;
    }
    .acc-name span {
         letter-spacing: 1px;
    }
    .acc-code {
        height: 30px;
        line-height: 30px;
        margin-top: 30px;
        font-size: 15px;
        margin-left: 70px;
    }
    .acc-code p:first-child {
        letter-spacing: 18px;
        float: left;
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
    .message-code {
        height: 30px;
        line-height: 30px;
        margin: 30px 0 0 70px;
    }
    .message-code .messages {
        float: left;
        font-size: 15px;
        letter-spacing: 4.8px;
    }
    .message-code input {
        float: left;
        height: 30px;
        line-height: 30px;
        outline: medium;
        width: 150px;
        padding-left: 10px;
        margin-left: 13px;
    }
    .message-code .inres {
        float: left;
        color: #e60012;
        margin-left: 20px;
    }
    .get-code {
        float: left;
        width: 125px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border:1px solid #e60012;
        color: #e60012;
        margin-left: 10px;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .get-code span {
        color: #000;
    }
    .message-next {
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        background-color: #e60012;
        text-align: center;
        color: #fff;
        margin: 60px 0 0 202px;
        cursor: pointer;
    }
    .message-nexts {
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        background-color: #e60012;
        text-align: center;
        color: #fff;
        margin: 50px 0 0 230px;
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
    .modify_conts {
        width: 700px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 40px;
    }
    .modify_pass {
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .modify_pass input {
        float: left;
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .setting_pass {
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .setting_pass input {
        float: left;
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .deter_pass {
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .deter_pass input {
        float: left;
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .modify-pss {
        float: left;
        width:115px;
        line-height: 30px;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin-right: 10px;
    }
    .sp1 {
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .prompt {
        height: 30px;
        line-height: 30px;
        float: left;
        margin-left: 10px;
    }
    .prompt p {
        float: left;
        position: absolute;
        font-size: 14px;
        color: #999;
    }
    .showpass {
        float: left;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
        border: 1px solid #fac5c5;
        border-radius: 4px;
        background: #ffebeb;
        margin-left: 8px;
        margin-top: -30px;
        position: relative;
        z-index: 0;
    }
    .imgs {
        position: relative;
        z-index: 9999; 
    }
    .success-one {
        float: left;
        height: 24px;
        width: 240px;
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        text-align: center;
    }
    .success-two {
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
    .success-three {
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
    .success_conts {
        width: 700px;
        margin: 0 auto;
        margin-top: 50px;
    }
    .success_pass {
        height: 30px;
        line-height: 30px;
        margin-left: 70px;
        color: #008B18;
        font-size: 16px;
    } 
    .success_pass img {
        float: left;
        margin-right: 10px;
    }
    .success_new {
        height: 30px;
        line-height: 30px;
        margin: 20px 0 0 123px;
    }
    .success_new p {
        float: left;
        letter-spacing: 2px;
    } 
    .again {

        height: 30px;
        line-height: 30px;
        margin: 30px 0 0 123px;
    }
    .again p {
        cursor: pointer;
        float: left;
        margin-right: 20px;
        font-size: 13px;
        color: #6898FC;
    }
    .sens {
        pointer-events: none;
        cursor: default;
    }

</style>

<template>
 
    <div class="body">
        <div class="modify_top">
            <p>修改支付密码</p>
        </div>

        <div class="modify_cont" v-if='one'>
            <div class="step_nav">
                <div class="step_one">
                    <div class="step-one">
                        <p>1.验证身份</p>
                    </div>
                    <span><img src="../../../../static/images/order/333.png"></span>
                </div>

                <div class="step_two">
                    <div class="step-two">
                        <p>2.修改支付密码</p>
                    </div>
                    <span><img src="../../../../static/images/order/22.png"></span>
                </div>
                <div class="step_three">
                    <div class="step-three">
                        <p>3.完成</p>
                    </div>
                </div>
            </div>

            <div class="acc-name">
                <p>账户名：<span> {{name}} </span></p>
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

            <div class="message-code">
                <p class="messages">短信验证码：</p>
                <input type="text" v-model="mescode" @blur="blmessa">
                <div class="get-code" :class="{'sens': pro}" @click='pcod'>
                    <p v-show='obn'>获取短信验证码</p>
                    <span v-show='sen'>{{this.second}}s</span>
                </div>
                <p v-show='mess' class="inres" >请输入你的验证码</p>
                <p v-show='messa' class="inres" >请输入四位纯数字验证码</p>
            </div>

            <div class="message-next" @click="next">
                <p>下一步</p>
            </div>
        </div>

        <div class="modify_cont" v-if="two">
            <div class="step_nav">
                <div class="step_one">
                    <div class="mess-one">
                        <p>1.验证身份</p>
                    </div>
                    <span><img src="../../../../static/images/order/22.png"></span>
                </div>

                <div class="step_two">
                    <div class="mess-two">
                        <p>2.修改支付密码</p>
                    </div>
                    <span><img src="../../../../static/images/order/333.png"></span>
                </div>
                <div class="step_three">
                    <div class="mess-three">
                        <p>3.完成</p>
                    </div>
                </div>
            </div>

            <div class="modify_conts">
                <div class="modify_pass">
                    <p class="modify-pss"><span class="sp1">*</span>当前密码：</p>
                    <input type="text" v-model="yuanpass" @focus="relpass" @blur="blrpass">
                    <div class="prompt">
                        <div v-show="prpass">
                            <p>密码使用六位纯数字</p>
                        </div>
                        <div v-show="pass">
                            <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                            <p class="showpass">请输入当前密码</p>
                        </div>
                    </div>
                </div>
                <div class="setting_pass">
                    <p class="modify-pss"><span class="sp1">*</span>设置新的密码：</p>
                    <input type="text" v-model="settpass" @focus="release" @blur="clipass">
                    <div class="prompt">
                        <div v-show="prom">
                            <p >密码使用六位纯数字</p>
                        </div>
                        <div v-show="proms">
                             <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                            <p class="showpass">请输入新的密码</p>
                        </div>
                        <div v-show="promss">
                             <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                            <p class="showpass">密码必须使用六位纯数字</p>
                        </div>
                    </div>
                </div>
                <div class="deter_pass">
                    <p class="modify-pss"><span class="sp1">*</span>确定密码：</p>
                    <input type="text" v-model="quepass" @focus="focpass" @blur="blurpass" >
                    <div class="prompt">
                        <div v-show="confirm">
                            <p>新的密码和确认密码必须是相同的</p>
                        </div>
                        <div v-show="confirms">
                             <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                            <p class="showpass">请输入确认密码</p>
                        </div>
                        <div v-show="diss">
                             <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                            <p class="showpass">两次密码输入不一致</p>
                        </div>
                    </div>
                </div>
             </div>   

            <div class="message-nexts" @click="nexts">
                <p>下一步</p>
            </div>
        </div>

        <div class="modify_cont" v-if="three">
            <div class="step_nav">
                <div class="step_one">
                    <div class="success-one">
                        <p>1.验证身份</p>
                    </div>
                    <span><img src="../../../../static/images/order/22.png"></span>
                </div>

                <div class="step_two">
                    <div class="success-two">
                        <p>2.修改支付密码</p>
                    </div>
                    <span><img src="../../../../static/images/order/22.png"></span>
                </div>
                <div class="step_three">
                    <div class="success-three">
                        <p>3.完成</p>
                    </div>
                </div>
            </div>

            <div class="success_conts">
                <div class="success_pass">
                    <img src="../../../../static/images/order/5555.png">
                    <p>恭喜您，修改支付密码成功</p>
                </div>

                <div class="success_new">
                    <p>新密码：{{settpass}}</p>
                </div>

                <div class="again">
                    <p @click="agin">继续手机验证</p>
                    <p @click="back">返回</p>
                </div>
               
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

                name : "13500018594",

                num  : "Bg89",

                inres : false,

                innume : false,

                mess  : false,

                messa : false,

                mescode : '',

                code   : '',

                pro   : false,

                obn    : true,

                sen    : false,

                second : '',

                one   : true,

                two   : false,

                three : false,

                prpass : true,

                pass   : false,

                prom   : true,

                proms  : false,

                promss : false,

                confirm : true ,

                confirms: false,

                diss    : false,

                yuanpass : '',

                settpass : '',

                quepass  : '',

            }

        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            pcod () {

                this.second = 60

                this.pro = true

                this.obn = false

                this.sen = true

                let tim = setInterval(()=> {

                    this.second--

                    if (this.second < 0) {

                        this.pro = false

                        this.obn = true

                        this.sen = false

                        clearInterval(tim)

                    }

                }, 1000)

            },

            agin () {

                this.$store.commit('agins',false)

                setTimeout(() => {
                        this.$store.commit('agins',true)
                }, 10)

            },

            blcode () {

                if (this.code == '') {

                    this.inres = true

                } else if (this.code == this.num) {

                    this.inres = false

                    this.innume = false

                } else {

                    this.inres = false

                    this.innume = true
                }

            },

            blmessa () {

                let patrn = /^[0-9]*$/

                if (patrn.test(this.mescode) && this.mescode.length == 4) {

                    this.mess = false

                    this.messa = false

                } else {

                    this.mess = false

                    this.messa = true

                }

                if (this.mescode == '') {

                    this.mess = true

                    this.messa = false
                }

            },

            blrpass () {

                if (this.yuanpass == '') {

                    this.prpass = false,

                    this.pass = true
                }

            },

            relpass () {

                this.prpass = true

                this.pass = false

            },

            clipass () {

                let patrn = /^[0-9]*$/

                if (patrn.test(this.settpass) && this.settpass.length == 6) {

                    this.prom = true

                    this.proms = false

                    this.promss = false

                } else {

                    this.prom = false

                    this.proms = false

                    this.promss = true

                }


                if (this.settpass == '') {

                    this.prom = false

                    this.proms = true

                    this.promss = false
                }

            },

            release () {

                this.prom = true

                this.proms = false

                this.promss = false

            }, 

            blurpass () {

                if (this.quepass == '') {

                    this.confirms = true

                    this.confirm = false

                    this.diss = false
                }

                if (this.quepass !=this.settpass && this.quepass != '') {  

                    this.confirm = false

                    this.diss = true

                    this.confirms = false
                }

            },

            focpass () {

                this.confirm = true

                this.confirms = false

                this.diss = false

            },

            back () {

                this.one = true

                this.two = false

                this.three = false

                this.code = null

                this.mescode = null

            },

            next () {

                this.blmessa()
                
                this.blcode()

                if (this.inres == false && this.innume == false && this.mess == false && this.messa == false) {

                    this.one = false

                    this.two = true

                    this.three = false

                }  

            },

            nexts () {

                this.blrpass()

                this.blurpass()

                this.clipass()

                if (this.pass == false && this.proms == false && this.promss == false 
                     && this.confirms == false && this.diss == false) {

                    this.one = false

                    this.two = false

                    this.three = true

                }

            }
            
        },

        created () {

        },

        mounted () {

        }

    }

</script>
