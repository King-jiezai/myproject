

<style scoped>

    .account-name {
        width: 1200px;
        margin: 0 auto;
    }
    .password-navs {
        width: 1200px;
        height: 40px;
        margin:  0 auto;
        margin-top: 50px;
        padding: 0 340px;
    }    
    .one {
        float: left;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50px;
        background-color: #ccc;
        color: #fff;
        font-size: 20px;
    }
    .one:nth-child(1) {
        background-color: #e60012;
    }
    .line {
        width: 200px;
        height: 5px;
        background-color: #ccc;
        float: left;
        margin: 17px 0;
    }
    .line:nth-child(2) {
        background-color: #e60012;
    }
    .password-text {
        width: 1200px;
        height: 20px;
        line-height: 20px;
        margin:  0 auto;
        margin-top: 5px;
        padding-left: 242px;
    }
    .password-text p {
        width: 240px;
        float: left;
        text-align: center;
    }
    .password-text p:first-child {
        color: #e60012;
    }
    .account-cent {
        width: 600px;
        margin: 0 auto;
        margin-top: 50px;
    }
    .cnet-name {
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-bottom: 30px;
    }
    .cnet-name .name {
        width: 120px;
        float: left;
        text-align: right;
        font-size: 14px;
    }
    .cnet-name input {
        float: left;
        width: 300px;
        height: 35px;
        outline: medium;
        padding-left: 10px;
        border-radius: 5px;
        border:0px;
        border:1px solid #999;
    }
    input::-webkit-input-placeholder {
        color: #ccc;
    }
    .cnet-silder {
        width: 600px;
        margin: 0 auto;
    }
    .cnet-silder p {
        width: 120px;
        float: left;
        text-align: right;
        font-size: 14px;
        line-height: 35px;
    }
    .cnet-code {
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-top: 30px;
    }
    .cnet-code .code {
        width: 120px;
        float: left;
        text-align: right;
        font-size: 14px;
    }
    .cnet-code input {
        float: left;
        width: 180px;
        height: 35px;
        outline: medium;
        padding-left: 10px;
        border-radius: 5px;
        border:0px;
        border:1px solid #999;
    }
    .obtain-code {
        width: 100px;
        float: left;
        margin-left: 20px;
        height: 35px;
        border:1px solid #00a0e9;
        border-radius: 5px;
        text-align: center;
        color: #3fa1fc;
        line-height: 35px;
    }
    .name-null {
        float: left;
        height: 35px;
        line-height: 35px;
        margin-left: 10px;
        color: #e60012;
    }
    .next {
        width: 80px;
        height: 40px;
        line-height: 40px;
        background-color: #e60012;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        margin: 60px 120px;
        cursor: pointer;
    }
    
</style>

<template>

    <!--account-name 填写账户名-->
    <div class="account-name">

        <!--password-navs 找回密码步骤-->
        <div class="password-navs">
            <div class="one">
                <p>1</p>
            </div>
            <div class="line">
                
            </div>
            <div class="one">
                <p>2</p>
            </div>
            <div class="line">
                
            </div>
            <div class="one">
                <p>3</p>
            </div>
        </div>
        <div class="password-text">
            <p>验证身份</p>
            <p>设置新密码</p>
            <p>完成</p>
        </div>
        
        <!--account-cent 找回密码内容-->
        <div class="account-cent">

            <!--cnet-name 账户名-->
            <div class="cnet-name">
                <p class="name">账户名：</p>
                <input type="text" placeholder="请输入您的用户名/邮箱/手机号" v-model="name" @blur="blname">
                <div class="name-null" v-show="nulls">
                    <p>请输入您的用户名/邮箱/手机号</p>
                </div>
            </div>

            <!--cnet-silder 验证码-->
            <div class="cnet-silder">
                <p>验证码：</p>
                <div>
                    <silder></silder>
                </div>
            </div>

            <!--cnet-code 短信验证码-->
            <div class="cnet-code">
                <p class="code">短信验证码：</p>
                <input type="text" placeholder="请输入短信验证码" v-model="code" @blur='blcode'>
                <div class="obtain-code">
                    <p>获取短信验证码</p>
                </div>
                <div class="name-null" v-show="culls">
                    <p>请输入短信验证码</p>
                </div>
                <div class="name-null" v-show="cullss">
                    <p>短信验证码不正确</p>
                </div>
            </div>

            <!--next 下一步-->
            <div class="next" @click="next">
                <p>下一步</p>
            </div>
        </div>
    </div>

</template>

<script>

    import silder from '@/components/retrieve-password/silder.vue'

    export default {

        components : {

            silder
        },

        data () {

            return {
               
                name : '',

                code : '',

                nulls : false,

                culls : false,

                cullss : false,
            }
            
        },

        watch : {

        },

        computed : {

           
            
        },

        methods : {
            
            //判断账户名是否为空
            blname () {

                if (this.name == '') {

                    this.nulls = true
                } else {

                    this.nulls = false
                }
            },

            //判断验证码是否为空和验证码是否正确
            blcode () {

                //验证码正则表达式
                let patrn = /^[0-9]*$/

                if (patrn.test(this.code) && this.code.length == 4) {

                    this.culls = false

                    this.cullss = false

                } else {

                    this.culls = false

                    this.cullss = true

                }

                if (this.code == '') {

                    this.culls = true

                    this.cullss = false
                } else {

                    this.culls = false
                }
            },

            //如果账户名和验证码不为空且验证码正确就跳转到下一步
            next () {
                
                this.blname()

                this.blcode()

                if (this.nulls == false && this.culls == false && this.cullss == false) {

                    this.$store.commit('obos', false)

                    setTimeout(() => {
                        this.$store.commit('obos', true)
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
