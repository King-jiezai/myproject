

<style scoped>

    .retrieve-password {
        width: 100%;
    }
    .account-name {
        width: 1200px;
        margin: 0 auto;
    }
    .password-top {
        width: 100px;
        height: 80px;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        margin-top: 50px;
    }
    .account-name {
        width: 100%;
        margin-top:50px ;
    }
    .center-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .center-foor .heas {
        border-bottom: 1px solid #666;
    }
    .button {
        margin: 50px 422px;
    }
    
</style>

<template>

    <!--retrieve-password 找回密码-->
    <div class="retrieve-password">
        
        <!--navs 广租头部-->
        <div class="navs">
            <navs></navs>
        </div>
        <div class="password-top">
            <img src="../../../static/images/pas.png">
            <p>找回密码</p>
        </div>

        <!--找回密码第一步，填写账户名-->
        <div class="account-name" v-show="one">
            <name></name>
        </div>

        <!--找回密码第二步，设置新密码-->
        <div class="account-name" v-show="two">
            <password></password>
        </div>
        
        <!--找回密码第三步，密码设置成功-->
        <div class="account-name" v-show="three">
            <success></success>
        </div>
        
        <!--center-foor 广租底部-->
        <div class="center-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>

            <tail-foor></tail-foor>
        </div>  
        
    </div>

</template>

<script>
    
    import navs     from '@/components/public/password-nav.vue'
    import tailHear from '@/components/public/tail-hear.vue'
    import tailFoor from '@/components/public/tail-foor.vue'
    import name     from '@/components/retrieve-password/account-name.vue'
    import password from '@/components/retrieve-password/set-password.vue'
    import success  from '@/components/retrieve-password/success-code.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            navs,
            tailHear,
            tailFoor,
            name,
            password,
            success
        },

        data () {

            return {
               
               one : true,

               two : false,

               three : false,

            }
            
        },

        watch : {

            //显示设置新密码
            obos () {

                this.one = false

                this.two = true

                this.three = false
            },

            //显示成功设置新密码 
            cor () {

                this.one = false

                this.two = false

                this.three = true
            }
        },

        computed : {

            ...mapState([

                'obos',

                'cor'

            ])
            
        },

        methods : {
            
             
        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
