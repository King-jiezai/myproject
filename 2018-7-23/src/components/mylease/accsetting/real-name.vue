


<style scoped>
    
    .rel_top {
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
        background: #FEF4F3;
    }
    .rel_top p {
        font-size: 14px;
        margin-left: 20px;
    }
    .rel_cont {
        width: 700px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 40px;
    }
    .rel_img {
        width: 350px;
        overflow: hidden;
        margin: 0 auto;
        font-size: 14px;
    }
    .rel_img div {
        width: 85px;
        float: left;
        text-align: center;
    }
    .rel_img div:nth-child(2) {
        width: 120px;
        line-height: 90px;
        margin: 0 30px;
    }
    .rel_img p {
        text-align: center;
    }
    .rel_nav {
        width: 360px;
        margin: 30px 0 30px 150px;
    }
    .rel_nav img {
        float: left;
        margin-right: 5px;
    }
    .real_cent {
        width: 580px;
        margin: 0 auto;
    }
    .modify_pass {
        height: 30px;
        line-height: 38px;
        margin-bottom: 20px;
    }
    .modify_pass input {
        float: left;
        width: 300px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .modify_pass input::-webkit-input-placeholder {
        color: #DDDDDD;
    }
    .modify_pass .xin {
        width: 170px;
    }
    .modify-pss {
        float: left;
        width:100px;
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
        position: absolute;
        z-index: 0;
    }
    .imgs {
        position: relative;
        z-index: 9999; 
    }
    .ss {
        width: 120px;
        height: 30px;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        border-radius: 4px;
        background: #FEF4F3;
        border: 1px solid #e60012;
        margin-left: 10px;
        display: block;
        float: left;
        cursor: pointer;
    } 
    .support {
        float: left;
        position: relative;
    }
    .support p {
        height: 20px;
    }
    .support p:hover {
        color: #A9CBFB;
        cursor: pointer;
    }
    .btom {
        margin:50px 0 0 110px;
    }
    .btom .reas {
        color: #5CABFA;
    }
    .bttom {
        width: 170px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #e60012;
        color: #fff;
        cursor: pointer;
    }
    .bank {
        position: absolute;
        width: 400px;
        overflow: hidden;
        height: 200px;
        border:1px solid #ccc;
        box-shadow: 0px 1px 5px #ccc;
        margin: 30px 0 0 -50px;
        background: #fff;
        z-index: 999999;
    }
    .prompt .sanjiao {
        position: absolute;
        margin: 23px 0 0 -35px;
        z-index: 99999;
    }
    .bank_nav {
        width: 380px;
        height: 30px;
        line-height: 30px;
        margin: 0 10px 10px 10px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .banks {
        float: left;
        width: 96px;
        font-size: 13px;
        padding-left: 17px;
    }

</style>

<template>
 
        <div class="body">
            <div class="rel_top">
                <p>实名认证</p>
            </div>

            <div class="rel_cont" v-if="one">
                <div class="rel_img">
                    <div>
                        <img src="../../../../static/images/real-names/111.png">
                        <p>填写认证信息</p>
                    </div>
                    <div>
                        <img src="../../../../static/images/real-names/555.png">
                    </div>
                    <div>
                        <img src="../../../../static/images/real-names/333.png">
                        <p>完成</p>
                    </div>
                </div>

                <div class="rel_nav">
                    <img src="../../../../static/images/real-names/2.png">
                    <p>正在进行身份认证，请输入一张本人的银行卡认证并绑定</p>
                </div>
                <div class="real_cent">
                    <div class="modify_pass">
                        <p class="modify-pss"><span class="sp1">*</span>认证姓名：</p>
                        <input type="text" placeholder="请输入真实姓名" v-model="names" @blur="blname" @focus="foname">
                        <div class="prompt">
                            <div v-show="realname">
                                <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入真实姓名</p>
                            </div>
                        </div>
                    </div>

                    <div class="modify_pass">
                        <p class="modify-pss"><span class="sp1">*</span>身份证号：</p>
                        <input type="text" placeholder="请输入身份证号" v-model="card" @blur="blcard" @focus="focard">
                        <div class="prompt">
                            <div v-show="scord">
                                <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入身份证号</p>
                            </div>
                        </div>
                    </div>

                    <div class="modify_pass">
                        <p class="modify-pss"><span class="sp1">*</span>银行卡号：</p>
                        <input type="text" placeholder="请输入银行卡号" v-model="back">
                        <div class="prompt">
                            <div class="support"> 
                                <p @mouseenter="mous" @mouseleave="moul">支持银行</p>
                            </div>
                            <img src="../../../../static/images/real-names/444.png" v-show="bands" class="sanjiao">
                            <div class="bank" v-show="bands">
                                <div class="bank_nav">
                                    <p>银行卡</p>
                                </div>
                                <div class="banks" v-for="item in res">
                                    {{item.fon}}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modify_pass">
                        <p class="modify-pss"><span class="sp1">*</span>手机号码：</p>
                        <input type="text" placeholder="请输入银行预留的手机号" v-model="phone" @blur="blphone" @focus="fophone">
                        <div class="prompt">
                            <div v-show="sphone">
                                <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入手机号码</p>
                            </div>
                        </div>
                    </div>

                    <div class="modify_pass">
                        <p class="modify-pss"><span class="sp1">*</span>短信验证码：</p>
                        <input type="text" class="xin" v-model="message" @blur="blmessage" @focus="fomessage">
                        <span class="ss">
                            <span>获取短信验证码</span>
                        </span>
                        <div class="prompt">
                            <div v-show="smessage">
                                <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入短信验证码</p>
                            </div>
                        </div>
                    </div>

                    <div class="btom">
                        <p class="reas">《实名认证相关协议》</p>
                        <div class="bttom" @click="next">
                            <p>同意协议并确定</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-show="two">
                <realFinishname></realFinishname>
            </div>

        </div>  

   
</template>

<script>
        
        import realFinishname  from '@/components/mylease/accsetting/real-finishname.vue'

    export default {

        components : {

            realFinishname
        },

        data () {

            return {

                names : '',

                realname : false,

                card : '' ,

                scord : false,

                phone : '',

                sphone : false,

                message : '',

                smessage : false,

                back : '',

                one : true,

                two : false,

                bands : false,

                res : [{
                    fon : '中国工商'
                },{
                    fon : '中国邮政'
                },{
                    fon : '中国银行'
                },{
                    fon : '招商银行'
                },{
                    fon : '中国农业'
                },{
                    fon : '中国建设'
                },{
                    fon : '交通银行'
                },{
                    fon : '北京农业'
                },{
                    fon : '民生银行'
                },{
                    fon : '兴业银行'
                },{
                    fon : '光大银行'
                },{
                    fon : '深发银行'
                },{
                    fon : '中信银行'
                },{
                    fon : '上海银行'
                },{
                    fon : '浦发银行'
                },{
                    fon : '中国平安银行'
                },{
                    fon : '广发银行'
                }]
           
            }

            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            blname () {

                if (this.names == '') {

                    this.realname = true
                }
            },

            foname () {

                this.realname = false
            },

            blcard () {

                if (this.card == '') {

                    this.scord = true
                }
            },

            focard () {

                this.scord = false
            },

            blphone () {

                if (this.phone == '') {

                    this.sphone = true
                }
            },
            
            fophone () {

                this.sphone = false
            },

            blmessage () {

                if (this.message == '') {

                    this.smessage = true
                }
            },

            fomessage () {

                this.smessage = false
            },

            next () {
               
                if (this.names !='' && this.phone != '' && this.card != '' && this.message != '' && this.back !='') {

                    this.one = false
                    
                    this.two = true
                    
                }else {
                    this.blmessage()
                    this.blphone()
                    this.blname()
                    this.blcard()
                }
            },

            mous () {

                this.bands = true
            },

            moul () {

                this.bands = false

            }
           
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
