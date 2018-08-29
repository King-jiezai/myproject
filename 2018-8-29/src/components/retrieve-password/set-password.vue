

<style scoped>

    .set-password {
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
    .one:nth-child(3) {
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
    .line:nth-child(4) {
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
    .password-text p:nth-child(2) {
        color: #e60012;
    }
    .password-cent {
        width: 656px;
        margin: 0 auto;
        margin-top: 50px;
    }
    .new-password {
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-bottom: 30px;
    }
    .new-password .pass {
        float: left;
        width: 120px;
        text-align: right;
    }
    .new-password input {
        float: left;
        width: 300px;
        height: 35px;
        outline: medium;
        padding-left: 10px;
        border-radius: 5px;
        border:0px;
        border:1px solid #999;
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

    <!--set-password 设置新密码-->
    <div class="set-password">

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
        
        <!--password-cent 设置新密码内容-->
        <div class="password-cent">
            
            <!--new-password 输入新密码-->
            <div class="new-password">
                <p class="pass">新密码：</p>
                <input type="password" v-model="pass" @blur="blpass">
                <div class="name-null" v-show="nulls">
                    <p>{{this.password}}</p>
                </div>
            </div>
            
            <!--new-password 输入确认密码-->
            <div class="new-password">
                <p class="pass">确认密码：</p>
                <input type="password" v-model="pasword" @blur="blword">
                <div class="name-null" v-show="culls">
                    <p>{{this.confirm}}</p>
                </div>
            </div>

            <div class="next" @click="next">
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

                confirm : '',

                password : '',

                nulls : false,

                culls : false,

                pass : '',

                pasword : '',
            }
            
        },

        watch : {

        },

        computed : {

           
            
        },

        methods : {

            //判断新密码是否为空
            blpass () {

                let pat = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,16})$/

                if (this.pass == '') {

                    this.nulls = true

                    this.password = '请输入新密码'

                } else if (!pat.test(this.pass)) {

                    this.nulls = true

                    this.password = '密码必须包含长度为6-16位的字母和数字'

                }

                if (pat.test(this.pass)) {

                    this.nulls = false

                }

            },

            //判断确认密码是否为空且新密码和确认密码是否相同
            blword () {

                if (this.pasword == '') {

                    this.culls = true

                    this.confirm = '请输入确认密码'

                } else if (this.pasword != this.pass) {

                    this.culls = true

                    this.confirm = '两次输入的密码不一致'

                } else {

                    this.culls = false

                }

            },

            //如果新密码和确认密码不为空且新密码和确认密码相同就跳转到下一步
            async next () {
                
                this.blpass()

                this.blword()

                if (this.nulls == false && this.culls == false) {

                    let forgetResetPassword = await this.$api.forgetResetPassword({
                        password : this.pasword
                    })

                    if (forgetResetPassword.data.status == 1) {

                        this.$store.commit('cor', false)

                        setTimeout(() => {
                            this.$store.commit('cor', true)
                        }, 10)

                    }

                } 

            }
           
        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
