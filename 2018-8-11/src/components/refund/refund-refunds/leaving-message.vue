

<style scoped>

    .message {
        width: 100%;
        overflow: hidden;
        background-color: #F5F5F5;
        border:1px solid #ccc;
    }
    .message-efundment  {
        width: 675px;
        height: 100px;
        color: #999;
        margin: 20px;
        border:1px solid #ccc;
        border-radius: 5px;
    }
    .message-efundment textarea {
        width: 100%;
        height: 100%;
        padding-left: 10px;
        outline: medium;      
        border: 0px;
        border-radius: 5px;
    }
    .message-upimg {
        width: 90px;
        height:120px;
        line-height: 35px;
        margin: 20px 0 0 20px;
        text-align: center;
    }
    .message-sumi {
        width: 100px;
        height: 40px;
        font-size: 16px;
        color: #fff;
        background-color: #e60012;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        margin: 20px; 
    }

</style>

<template>
    
    <!--message 留言-->
    <div class="message">
        <div class="message-efundment">
            <textarea></textarea>
        </div>

        <div class="message-upimg">
            <div class="upimg">
                <zupImg></zupImg>
            </div>
            <p>上传凭证</p>
        </div>

        <div class="message-sumi">
            <p>提交</p>
        </div>
       
    </div>

</template>

<script>
      
    import zupImg from '@/components/mylease/upimg/up-img.vue'

    export default {

        components : {

            zupImg

        },

        data () {

            return {

              
            }
            
        },

        watch : {

         
        },

        computed : {

            
            
        },

        methods : {

            
        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
