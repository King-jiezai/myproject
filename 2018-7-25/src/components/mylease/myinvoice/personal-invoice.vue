


<style scoped>
    
    .cont {
        width: 100%;
        overflow: hidden;
    }
    .invoice_conts {
        width: 100%;
    }
    .invoice_conts p {
        margin-left: 180px;
    }
    .corporate_name {
        height: 35px;
        line-height: 35px;
        margin:15px 0 ;
    }
    .corporate_name p:nth-child(3) {
        color: #e60012;
    }
    .corporate_name p:nth-child(4) {
        color: #e60012;
    }
    .corporate_name input {
        float: left;
        width: 279px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        margin-top: 3px;
        margin-right: 10px;
        outline: medium;
    }
    .corporate_name input::-webkit-input-placeholder {
        color: #ccc;
    }
   
    .next {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #e60012;
        border-radius: 5px;
        margin:60px 0 60px 270px;
        cursor: pointer;
    }
    .next p {
        margin-left: 0!important;
        letter-spacing: 3px;
    }
    .modify-pss {
        float: left;
        width:150px;
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
    .popup {
        width: 450px;
        height: 200px;
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
    .personalSuccess {
        height: 130px;
    }
    .popup img {
        margin: 50px 10px 0 140px;
        float: left;
    }
    .popup .p3 {
        float: left;
        height: 30px;
        line-height: 30px;
        margin: 50px 0px 0 0px;
        font-size: 30px;
    }
    .popup_nav {
        height: 32px;
        background-color: #f1f1f1;
        line-height: 32px;
        font-size: 30px;
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
            
        <div class="cont">
            <!-- invoice_cont 全部内容-->
            <div class="invoice_conts">
                
                <!-- corporate_name 姓名-->
                <div class="corporate_name">
                    <p class="modify-pss"><span class="sp1">*</span>姓名：</p>
                    <input type="text" placeholder="请填写姓名" @blur="blname" v-model="vname">
                    <p v-show="sname">请填写姓名</p>
                    <p v-show="snames">只能输入2-4个汉字名字</p>
                </div>

                <!-- Submission 提交按钮-->
                <div class="next" @click="Subm">
                    <p>提交</p>
                </div>             
           </div>

            <!-- popup 你的开票申请成功提示-->
            <div class="popup" v-show="success">
                <div class="popup_nav">
                    <p class="p1">你的开票申请</p>
                    <p class="p2" @click='que'>×</p>
                </div>
                <div class="personalSuccess">
                    <img src="../../../../static/images/order/5555.png">
                <p class="p3">提交成功</p>
                </div>
                <div class="queding" @click="que">
                    <p>确定</p>
                </div>
            </div>

            <!-- model_pre 你的开票申请成功提示-->
            <div class="model_pre" v-show="success"></div>
        </div>

           
          
   
</template>

<script>
        
    import { RadioGroup, Radio , Icon} from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,
            Icon,

        },

        data () {

            return {

             vname : "",

                sname : false,

                snames : false,

                success : false,

            }
            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            blname () {

                var patt3 = /^[\u4e00-\u9fa5]{2,4}$/; /*只能输入2-4个汉字*/

                if (patt3.test(this.vname)==false) {

                    this.snames = true

                    this.sname = false
                
                }else {

                    this.sname= false

                    this.snames = false
                }

                if (this.vname == '') {

                    this.sname = true

                    this.snames = false
                }else {

                    this.sname = false

                }

            },

            Subm () {

                this.blname()

                if (this.sname == false && this.snames == false) {

                    this.success = true
                }else {

                    this.success = false
                }

            },

            que () {
                this.success = false
            },
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
