


<style scoped>

    .body {
        width: 910px;
        overflow: hidden;
    }
    .box-step {
        width: 100%;
        height: 85px;
        margin-bottom: 20px;
    }
    .step-cont {
        width: 440px;
        height: 85px;
        margin: 0 auto;
    }
    .step-img {
        float: left;
        width: 80px;
        height: 85px;
        overflow: hidden;
        text-align: center;
        margin: 0 4px;        
    }
    .step-img p {
        margin-top: 5px;
    }
    .step-img:nth-child(1) p{
        color: #469FFF;
    }
    .step-img:nth-child(2) img {
        margin: 12px 0;
    }
    .step-img:nth-child(4) img {
        margin: 12px 0;
    }
    .box-txt {
        width:910px;
        height: 46px;
        float: left;
        font-size: 12px;
        color: #333;
        margin-bottom: 51px;
        background: #fffdf0;
        border: 1px solid #ffdfbe;
        line-height: 46px;
    }
    .box-txt p:first-child {
        float: left;
        width: 20px;
        height: 20px;
        background: #F8AD36;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin: 13px;
    }

</style>

<template>
 
        <div class="body">

            <div class="box-step">
                    <div class="step-cont">
                        <div class="step-img">
                            <img src="../../../../static/images/order/77.png">
                            <p>填写资料</p>
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/55.png">
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/44.png">
                            <p>补充资料</p>
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/55.png">
                        </div>
                        <div class="step-img">
                            <img src="../../../../static/images/order/33.png">
                            <p>提交资料</p>
                        </div>                       
                    </div>
                </div>
                <div class="box-txt">
                    <p>!</p>
                    <p>温馨提示：补充资料填写的越完整，越有利于提高免押金额度。</p>
                </div>
             
        </div>  

   
</template>

<script>
        

    export default {

        components : {

          

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
