


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
        width: 700px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 40px;
    }
    .modify_pass {
        height: 38px;
        line-height: 38px;
        margin-bottom: 20px;
    }
    .modify_pass input {
        float: left;
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 38px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .setting_pass {
        height: 38px;
        line-height: 38px;
        margin-bottom: 20px;
    }
    .setting_pass input {
        float: left;
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 38px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .deter_pass {
        height: 38px;
        line-height: 38px;
        margin-bottom: 20px;
    }
    .deter_pass input {
        float: left;
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
        height: 38px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
    }
    .modify-pss {
        float: left;
        width:100px;
        line-height: 38px;
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
        height: 38px;
        line-height: 38px;
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
        height: 38px;
        line-height: 38px;
        padding: 0 5px;
        border: 1px solid #fac5c5;
        border-radius: 4px;
        background: #ffebeb;
        margin-left: 8px;
        margin-top: -38px;
        position: relative;
        z-index: 0;
    }
    .imgs {
        position: relative;
        z-index: 9999; 
    } 
    .btom {
        float: left;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        background: #e60012;
        color: #fff;    
        margin: 20px 0 0 150px;
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
        box-shadow: 0px 1px 9px #ccc;
    }
    .popup .p3 {
        margin-top: 15px;
        text-align: center;
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


</style>

<template>
 
        <div class="body">
            <div class="modify_top">
                <p>修改登录密码</p>
            </div>

            <div class="modify_cont">
                    <div class="modify_pass">
                        <p class="modify-pss"><span class="sp1">*</span>原始密码：</p>
                        <input type="text" v-model="yuanpass" @focus="relpass" @blur="blrpass">
                        <div class="prompt">
                            <div v-show="prpass">
                                <p >密码可使用字母加数字或符合的组合，6-20个字符</p>
                            </div>
                            <div v-show="pass">
                                <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入原始密码</p>
                            </div>
                            <div v-show="ypass">
                                <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">输入的密码与原始密码不一致</p>
                            </div>
                        </div>
                    </div>
                    <div class="setting_pass">
                        <p class="modify-pss"><span class="sp1">*</span>设置密码：</p>
                        <input type="text" v-model="settpass" @focus="release" @blur="clipass">
                        <div class="prompt">
                            <div v-show="prom">
                                <p >密码可使用字母加数字或符合的组合，6-20个字符</p>
                            </div>
                            <div v-show="proms">
                                 <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入设置密码</p>
                            </div>
                            <div v-show="promss">
                                 <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">密码必须包含长度为8-20位的字母和数字</p>
                            </div>
                        </div>
                    </div>
                    <div class="deter_pass">
                        <p class="modify-pss"><span class="sp1">*</span>确定密码：</p>
                        <input type="text" v-model="quepass" @focus="focpass" @blur="blurpass" >
                        <div class="prompt">
                            <div v-show="one">
                                <p>设置密码和确认密码的值必须相同</p>
                            </div>
                            <div v-show="two">
                                 <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">请输入确认密码</p>
                            </div>
                            <div v-show="three">
                                 <img src="../../../../static/images/reg/sj2.png"  class="imgs">
                                <p class="showpass">两次密码输入不一致</p>
                            </div>
                        </div>
                    </div>

                    <div class="popup" v-show="success">
                        <div class="popup_nav">
                            <p class="p1">你的密码</p>
                            <p class="p2" @click='errs'>×</p>
                        </div>
                        <p class="p3">修改成功</p>
                        <div class="queding" @click="que">
                            <p>确定</p>
                        </div>
                    </div>

                    <div class="btom" @click="sub">
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

                phone : '177*****158',

                settpass : '' ,

                yuanpass : '',

                password : "123456a",

                quepass : '',

                prom : true,

                proms: false,

                promss : false,

                prpass : true ,

                pass   : false,

                one : true,

                two : false,

                three : false,

                success : false,

                ypass : false,


            }

            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            relpass () {

                this.prpass = true

                this.pass = false

                this.ypass = false
            },

            blrpass () {

                if (this.yuanpass == '') {

                    this.prpass = false

                    this.pass = true

                    this.ypass = false

                }else  if (this.yuanpass != this.password) {

                    this.prpass = false

                    this.pass = false

                    this.ypass = true
                }


               
             
            },

            release () {

                this.prom = true

                this.proms = false

                this.promss = false
            },

            clipass () {


                let pat = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,20})$/

                if (this.settpass == '') {

                    this.prom = false

                    this.proms = true

                    this. promss = false

                } else if (pat.test(this.settpass) && 6 <= this.settpass.length <= 20) {

                    this.prom = true

                    this.proms = false

                    this.promss = false                

                }else {

                    this.prom = false

                    this.proms = false

                    this.promss = true           
                }

                if (!pat.test(this.settpass) && this.settpass != '') {

                    this.promss = true

                    this.prom = false

                    this.proms = false
                }


            },
 
            focpass () {

                this.one = true

                this.two = false

                this.three = false
            },

            blurpass () {             

                if (this.quepass == '') {

                    this.one = false

                    this.two = true

                    this.three = false

                }

                if (this.quepass !=this.settpass) {  

                        this.one = false

                        this.three = true

                        this.two = false
                }
            },

            sub () {

                this.blurpass()

                this.clipass()

                this.blrpass()

                if (this.yuanpass !='' && this.settpass !='' && this.quepass !='' && this.quepass == this.settpass && this.ypass == false && this.promss == false) {

                     this.success = true
                }            

            },

            que () {
                this.success = false
            },

            errs () {
                this.success = false
            }
 
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
