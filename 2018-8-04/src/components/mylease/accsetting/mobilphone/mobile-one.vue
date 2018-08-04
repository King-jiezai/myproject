


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
    .account_rech {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 90px;
        font-size: 14px;
        margin-top: 40px;
        text-align: center;
    }
    .account_rech p {
        float: left;
        margin-right: 20px;
    }
    .account_yanz {
        float: left;
        width:100px;
        height: 34px;
        line-height: 34px;
        background-color: #f1f1f1;
        border: 1px solid #ccc; 
        border-radius: 5px;
        text-align: center;
        margin:30px  0 0 165px;
        cursor: pointer;
    }
    .cord {
        width: 100%;
        float: left;
        margin:40px 0 0 110px;
    }
    .cord p {
        font-size: 14px;
        line-height: 30px;
        float: left;
     }
    .cord input {
        float: left;
        height: 30px;
        width: 200px;
        outline: medium;
        padding-left: 10px;

    }
    .cord .inres{
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
        float: left;
        height: 37px;
        width: 100px;
        line-height: 37px;
        text-align: center;
        background: #e60012;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        margin: 37px 0 0 165px ;
        cursor: pointer;
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
                        <span><img src="../../../../../static/images/order/333.png"></span>
                    </div>

                    <div class="step_two">
                        <div class="step-two">
                            <p>2.验证新号码</p>
                        </div>
                        <span><img src="../../../../../static/images/order/22.png"></span>
                    </div>
                    <div class="step_three">
                        <div class="step-three">
                            <p>3.完成</p>
                        </div>
                    </div>
                </div>
            
            <div class="account_rech">
                <p>手机号：{{accou}}</p>
                <p>若当前号码无效或无法接受验证码，请拨打客服电话：400-881-9131</p>
            </div>

            <div class="account_yanz"  :class="{'sens': pro}" @click='pcod'>
                <p v-show='obn'>获取验证码</p>
                <span v-show='sen'>{{this.second}}s</span>
            </div>

            <div class="cord">
                <p>验证码：</p>
                <input type="text" v-model="cords" @blur="blcode">
                <p v-show='inres' class="inres" >请输入你的验证码</p>
                <p v-show='innume' class="inres" >请输入四位纯数字验证码</p>
            </div>

            <div class="next" @click="next">
                <p>下一步</p>
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

                accou : '188****6178',

                cords : '',

                inres : false,

                innume : false,

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

            blcode () {

                let patrn = /^[0-9]*$/

                if (patrn.test(this.cords) && this.cords.length == 4) {

                    this.inres = false

                    this.innume = false

                } else {

                    this.inres = false

                    this.innume = true

                }

                if (this.cords == '') {

                    this.inres = true

                    this.innume = false
                }
                
            },


            next () {

                this.blcode()

                if (this.inres == false && this.innume == false) {

                    this.$store.commit('nexts',false)

                    setTimeout(() => {
                        this.$store.commit('nexts',true)
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
