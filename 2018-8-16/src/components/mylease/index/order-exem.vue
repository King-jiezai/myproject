


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
                <div class="myexem_cont">
                    <p>什么是免押金租赁？</p>
                    <p>免押金租赁是广租专门为企业用户打造的、降低企业资金成本，释放现金流动性的专属服务，广租将根据您提供的企业、股东或法人信息，为您授予一定的"免押金额度"，免押金额度在租赁设备时可用于抵用设备的押金。</p>
                    <p>免押金额度与您所在企业的资质紧密相关，目前仅支持企业用户申请，提供更多真实、有效的信息将会获得更高的免押金额度。广租也会根据您在易点租的良好租赁记录主动帮您进行提升免押金额度，若想进一步了解并提高免押金额度，请致电400-881-913。</p>
                    <p>广租将根据您提交的信息为您设置相应的免押金额度，请务必填写真实、有效、详尽的信息。</p>
                </div>
            </div>

            <div v-show="two">
                <orderComtwo></orderComtwo>
            </div>
             
        </div>  

   
</template>

<script>
        
    import orderComtwo from '@/components/mylease/application-deposit/order-comtwo.vue'

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
