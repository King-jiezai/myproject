

<style scoped>

    .information {
        width: 100%;
        overflow: hidden;      
    }
    .left-top {
        width: 738px;
        height: 110px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .agree {
        float: left;
        width: 100%;
        height:30px;
        line-height: 30px;
        margin-top: 45px;
    }
    .agree p {
        float: left;
    }
    .agree img {
        float: left;
        margin: 6px 3px;
    }
    .agree p:first-child {
        font-size: 16px;
        font-weight: bold;
        margin-right: 30px;
    }
    .agree p:last-child {
        color: #32A5FE;
    }
    .success {
        width: 100%;
        height: 20px;
        line-height:20px;
    }
    .success p {
        float: left;
    }
    .information-cent {
        width: 738px;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
        overflow: hidden;
    }
    .return-info {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
    }
    .return-info p {
        float: left;
    }
    .return-info p:last-child {
        color: #32A5FE;
        margin-left: 30px;
    }
    .return-logist {
        width: 100%;
        line-height: 20px;
        color:#999;
    }
    .return-logist p:last-child span{
        margin-left: 5px;
    }
    .handle {
        width: 100%;
        line-height: 20px;
        color: #ccc;
        padding-left: 10px;
        margin-top: 30px;
    }
    .cancel {
        width: 100%;
        line-height: 30px;
        color: #999;
        margin-top: 10px;
        margin-bottom: 20px;
        height: 30px;
    }
    .cancel p {
        float: left;
    }
    .cancel span {
        margin-left: 30px;
        color: #32A5FE;
        cursor: pointer;
    }

</style>

<template>
    
    <!--logisticss 买家退货-->
    <div class="information">
       <div class="left-top">
            <div class="agree">
                <p>请等待商家收货并退款</p>
                <img src="../../../../../static/images/refund/66.png">
                <p>还剩{{day}}天{{hour}}小时{{minu}}分</p>
            </div>

            <!--success 成功发起退款申请-->
            <div class="success">
                <p>如果商家收到货并验货无误，将操作退款给您</p>
            </div>
        </div>

        <div class="information-cent">
            <div class="return-info">
                <p>退货物流：{{express}}（{{num}}）</p>
                <p>查看物流详情</p>
            </div>
            <div class="return-logist">
                <p>快件在【{{addres}}】 已发车。 准备发往【{{endaddres}}】</p>
                <p>{{data}}<span>{{time}}</span></p>
            </div>

            <div class="handle">
                <p>如果商家拒绝退款，需要您修改退货申请</p>
                <p>如果商家超时未处理，将自动退款给您</p>
            </div>

            <div class="cancel">
                <p>您还可以：申请客服介入<span @click="clican">撤销申请</span></p>
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

                day : 1,

                hour: 23,

                minu: 59,

                express : '顺丰快递',

                num : '99000000445656641445452',

                addres : '武汉东西湖集散中心',

                endaddres : '广州新塘集散中心',

                data : '2018-8-6',

                time : '01:56:00'
                
            }
            
        },

        watch : {

            
            
        },

        computed : {

            
            
        },

        methods : {

            clican () {

                this.$store.commit('cor', false)

                setTimeout(() => {
                    this.$store.commit('cor', true)
                }, 10)
            }
           
        },

        created () {
            
            

        },

        mounted () {

        }

    }

</script>
