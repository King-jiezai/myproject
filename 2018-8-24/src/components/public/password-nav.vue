

<style scoped>

    .navs {
        width: 100%;
        height: 100px;
        margin: 0 auto;
        border-bottom:3px solid #e60012;
    }
    .navs-top {
        width: 1200px;
        height: 100px;
        margin: 0 auto;
    }
    
    .navs-left {
        width: 382px;
        height: 100px;
        float: left;
    }
    .navs-left img {
        height: 95px;
    }
    .navs-right {
        float: left;
        height: 40px;
        line-height: 40px;
        width: 800px;
        margin-top: 42px;
    }
    .right-pass {
        float: left;
        font-size: 14px;
    }
    .right-word {
        width: 140px;
        float: right;   
    }
    .right-word p {
        float: left;
        text-align: right;
        cursor: pointer;
    }
    .sp {
        padding: 7px 1px;
        margin: 13px 10px;
        background: #636365;
        float: left;
    }
    .right-word div:first-child .sp {
        display: none;
    }

</style>

<template>

    <div class="navs">
        <div class="navs-top">
            <div class="navs-left">
                <router-link to='/'>
                    <img src="../../../static/images/logo.jpg">
                </router-link>
            </div>
            <div class="navs-right">
                <div class="right-pass">
                    <p>找回密码</p>
                </div>
                <div class="right-word">
                    <div v-for="item in pass">
                        <span class="sp"></span>                  
                        <p @click='onclick(item)'>{{item}}</p>
                    </div> 
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

                img : '../../../static/images/tu4.png',

                pass : ['注册', '登录']

            }

        },

        computed : {

        },

        methods : {

            onclick (item) {

                if (item == '注册') {

                    this.$router.push('/reg')

                }

                if (item == '登录') {

                    this.$router.push('/login')

                }

            }

        },

        created () {

        },

        mounted () {}

    }

</script>
