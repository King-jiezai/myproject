


<style scoped>

    .body {
        width: 910px;
        overflow: hidden;
    }
    .myexem {
        width: 910px;
        height: 360px;
        background: #FDF9F8;
        border-top: 2px #e60012 solid;
    }
    .myexem .myexem_exem {
        font-size: 20px;
        margin:20px 0 0 20px;
        color: #333;
    }
    .myexem .myexem_not {
        float: left;
        font-size: 16px;
        margin:30px 0 0 60px;
        color: #333;
    }
    .immed {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background: #e60012;
        border-radius: 5px;
        margin:23px 0 0 20px;
        cursor: pointer;
    }
    .immed p {
        margin-left: 0px!important;
    }
    .myexem_cont {
        width: 100%;
        float: left;
        margin-top: 30px;
        line-height: 25px;
        font-size: 14px;
        color: #666;
    }
    .myexem_cont p:nth-child(1) {
        margin-left: 20px;
        font-size: 16px;
        color: #333;
    }
    .myexem_cont p:nth-child(2) {
        text-indent: 2em;
        margin-left: 20px;
    }
    .myexem_cont p:nth-child(3) {
        text-indent: 2em;
        margin-left: 20px;
    }
    .myexem_cont p:nth-child(4) {
        text-indent: 2em;
        margin-left: 20px;
    }

</style>

<template>
 
    <div class="body">
        <div v-show="one" class="myexem">
            <p class="myexem_exem">申请免押金额度</p>
            <p class="myexem_not">您还未申请免押金额度</p>
            <div class="immed">
                <p @click="nows">立即申请</p>
            </div>
           
        </div>

        <div v-show="two">
            <orderComtwo></orderComtwo>
        </div>
    </div>  
   
</template>

<script>
        
    import orderComtwo from '@/components/orders/index/order-comtwo.vue'

    export default {

        components : {

            orderComtwo,

        },

        data () {

            return {

                one : true,

                two : false    

            }
            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {  

            nows () {

                this.one = false

                this.two = true
                
            }
       
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
