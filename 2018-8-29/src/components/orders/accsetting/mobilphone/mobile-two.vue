


<style scoped>

    .account_cont {
        width: 100%;
        overflow: hidden;
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
        background: #DDDDDD;
        margin: 3px 0;
        line-height: 24px;
        color: #7B7B7B;
        text-align: center;   
    }
    .step-two {
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
    .account_rech {
        width: 100%;
        overflow: hidden;
        line-height: 30px;
        padding-left: 70px;
        font-size: 14px;
        margin-top: 70px;
    }
    .account_rech input {
        width: 250px;
        height: 30px;
        padding-left: 10px;
        float: left;
        border:1px solid #DDDDDD;
        outline: medium;
    }
    .rech_cont {
        width: 100%;
        height: 30px;
    }
    .account_rech .first {
        float: left;
        margin-right: 10px;
    }
    .account_rech .inres{
        float: left;
        margin-left: 20px;
        color: #e60012;
    }
    .ins {
        width: 220px;
        height: 37px;
        line-height: 37px;
        padding-left: 10px;
        outline: medium;
        margin-right: 10px;
    }
    .next {
        height: 37px;
        width: 90px;
        line-height: 37px;
        background: #e60012;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        margin: 60px 0 0 120px ;
        cursor: pointer;
        text-align: center
    }
    .nexts {
        height: 30px;
        width: 80px;
        line-height: 30px;
        background: #e60012;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        margin: 50px 0 0 100px ;
        cursor: pointer;
        text-align: center
    }
    .verification {
        margin:60px 0 0 70px;
    }
    .verification p {
        font-size: 14px;
    }
    .verification .modifyph {
        font-size: 12px;
        line-height: 20px;
        margin-left: 20px;
        color: #e60012;
        cursor: pointer;
    }
    .ver-again {
        width: 100%;
        height: 25px;
        margin: 20px 0 40px 0px;
        line-height: 25px;
        cursor: pointer;
    }
    .again {
        float: left;
        width: 115px;
        height: 25px;
        line-height: 25px;
        background: #EDEDED;
        border:1px solid #ccc;
        text-align: center;
        border-radius: 5px;
        margin-left: 90px;
        font-size: 12px;
    }
    .day {
        float: left;
        margin-left: 15px;
        color: #e60012;
    }
    .ver-Code {
        width: 100%;
        height: 22px;
    }
    .ver-Code p {
        float: left;
        line-height: 22px;
        margin-left: 45px;
    }
    .ver-Code input {
        float: left;
        width: 120px;
        outline: medium;
    }
    .incode {
        float: left;
        margin-left: 10px!important;
        color: #e60012;
    }
    .sens {
        pointer-events: none;
        cursor: default;
    }
        
</style>

<template>
 
    <div class="account_cont">     
        <div class="step_nav">
            <div class="step_one">
                <div class="step-one">
                    <p>1.验证身份</p>
                </div>
                <span><img src="../../../../../static/images/order/22.png"></span>
            </div>

            <div class="step_two">
                <div class="step-two">
                    <p>2.验证新号码</p>
                </div>
                <span><img src="../../../../../static/images/order/333.png"></span>
            </div>
            <div class="step_three">
                <div class="step-three">
                    <p>3.完成</p>
                </div>
            </div>
        </div>
        
        <div class="account_rech" v-if="one">
            <div class="rech_cont">
                <p class="first">请输入新手机号：</p>
                <input type="text" v-model="phone" @blur="blpho">
                <p v-show='inres' class="inres" >请输入你的新手机号码</p>
                <p v-show='innume' class="inres" >手机号码格式不正确</p>
            </div>    
            <div class="next" @click="next">
                <p>下一步</p>
            </div>      
        </div>

        <div class="verification" v-if="two">
            <p>当前手机号码：{{phone}} <span @click="modify" class="modifyph">修改号码</span></p>
            <div class="ver-again">
                <div class="again" :class="{'sens': pro}" @click='pcod'>
                    <p v-show='obn'>重新获取验证码</p>
                    <span v-show='sen'>{{this.second}}s</span>
                </div>
                <p class="day">一天可获得5次验证</p>
            </div>
            <div class="ver-Code">
                 <p>验证码：</p>
                 <input type="text" v-model="code" @blur="blcode">
                  <p v-show='codes' class="incode" >请输入验证码</p>
                  <p v-show='icodes' class="incode" >请输入四位纯数字验证码</p>
            </div>
            <div class="nexts" @click="nextss">
                <p>下一步</p>
            </div>
        </div>
    </div>

</template>

<script>

    import {Icon} from 'iview'

    export default {

        components : {

            Icon

        },

        data () {

            return {

                phone : '',

                inres : false,

                innume : false,

                one : true,

                two : false,

                code : '',

                codes : false,

                icodes : false,

                pro   : false,

                obn    : true,

                sen    : false,

                second : '',
    
            }
            
        },

        watch : {

        },

        computed : {

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

            blpho () {

                let blur = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/

                if (blur.test(this.phone)) {

                    this.inres = false

                    this.innume = false

                } else if (!blur.test(this.phone)) {

                    this.inres = false

                    this.innume = true

                }

                if (this.phone == '') {

                    this.inres = true

                    this.innume = false

                }

            },

            next () {

                this.blpho()

                if (this.inres == false && this.innume == false) {

                    this.one = false

                    this.two = true

                }
 
            },

            modify () {

                this.one = true

                this.two = false

            },

            blcode () {

                let patrn = /^[0-9]*$/

                if (patrn.test(this.code) && this.code.length == 4) {

                    this.codes = false

                    this.icodes = false

                } else {

                    this.codes = false

                    this.icodes = true

                }

                if (this.code == '') {

                    this.codes = true

                    this.icodes = false
                }

            },

            nextss () {

                this.blcode()

                if (this.codes == false && this.icodes == false) {

                    this.$store.commit('nextss',false)

                    setTimeout(() => {
                        this.$store.commit('nextss',true)
                    }, 10)

                }
                
            }

        },

        created () {

        },

        mounted () {

        }

    }

</script>
