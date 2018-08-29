
<style scoped>

    .fsl-top {
        text-align: center;
        color: #e60012;
        font-size: 18px;
    }
    .fsl-top {
        margin-bottom: 28px;
    }
    .fsl-cent {
        width: 100%;
        font-size: 14px;
    }
    .fsl-cent .fslp{
        line-height: 25px;
        margin: 20px 0;
    }
    .depositService {
        width: 100%;
        line-height: 25px;
    }
    .depositService span {
        color: #e60012;
    }
    .deposit-information {
        width: 100%;
        line-height: 25px;
        margin-top: 30px;
    }
    .deposit-information span {
        color: #e60012;
    }
    .information {
        width: 100%;
        height: 550px;
        border:1px dashed #ccc;
        margin-top: 50px;
        padding: 20px;
    }
    .infor-payments {
        width: 460px;
        height: 108px;
        margin: 0 auto;
        background: url(../../../../static/images/1.png) ;
        background-repeat: no-repeat;
        text-align: center;
        color: #fff; 
        padding:  23px 0;
        margin-top: 30px;
    }
    .infor-payments p {
        line-height: 35px;
    }
    .infor-payments p:first-child {
        font-size: 23px;
    }
    .two-payments {
        width: 613px;
        height: 108px;
        margin: 0 auto;
        background: url(../../../../static/images/2.png) ;
        background-repeat: no-repeat;
        text-align: center;
        color: #fff; 
        padding:  23px 0;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .two-payments p {
        line-height: 35px;
    }
    .two-payments p:first-child {
        font-size: 23px;
    }
    .three-payments {
        width:761px;
        height: 108px;
        margin: 0 auto;
        background: url(../../../../static/images/3.png) ;
        background-repeat: no-repeat;
        text-align: center;
        color: #fff; 
        padding:  23px 0;
    }
    .three-payments p {
        line-height: 35px;
    }
    .three-payments p:first-child {
        font-size: 23px;
    }
    .example {
        line-height: 25px;
        margin-top: 40px;
    }
    
</style>

<template>

    <div class="helpcen-one">
        <div class="fsl-top">什么是免押金服务</div>
        <div class="fsl-cent">
            <p class="fslp">广租将为您授予一定的“免押金额度”，若您所租赁设备的总押金价值在免押金额度之内且符合相关要求，您将无需支付押金，从而帮助您的企业降低资金成本，释放流动性。广租欢迎您提供更多真实信息以获得更高的免押金额度。若您希望进一步了解并提高免押金额度，请致电 400-881-9131</p>

            <div class="depositService">
                <span>一、申请免押金租赁流程</span>
                <p>免押金额度将与您所在企业的资质有关，目前仅支持企业申请免押金额度。您可进入“资产中心->免押金申请"页面以申请或查看您当前的免押金额度。中提交资料，立即获得初始免     押金额度，1-2个工作日对信用状况再次进行认证评估审核，终审通过即可签合同，签约成功，即可发货。
                    新增芝麻企业信用分申请免押金授信方式：广租与芝麻信用达成战略合作关系，让企业的信用更有价值，企业用户可用芝麻企业信用分申请免押金租赁，最高可获得500万授信额度。
                </p>
            </div>

            <div class="deposit-information">
                <span>二、免押金租赁授信资料要求</span>
                <p>需提供公司营业执照副本复印件、企业法人身份证复印件，并加盖公章。</p>
                <p>温馨提示：考虑到您的资料安全，请您在证件上注明"仅限于广租租设备使用，其他用途无效"。</p>
            </div>

            <div class="information">
                <p>以租期12个月为例</p>
                <div class="infor-payments">
                    <p>首付：25%</p>
                    <p>第一个月先支付总租金的25%</p>
                </div>
                <div class="two-payments">
                    <p>二期：20%</p>
                    <p>第二个月支付剩余租金的20%</p>
                </div>
                <div class="three-payments">
                    <p>三期：平均逐月支付</p>
                    <p>第三个月后按照剩余租金平均值逐月支付，直至租金支付完成</p>
                </div>
                <p class="example"> 例如：本年度需支付总租金为1040元，即第一个月需支付1040×25%=260元，第二个月需支付780（1040-260）×20%=156元，
                    第三个月之后逐月支付624（780-156）÷10=62.4元，逐月支付完成本期租赁交易。</p>
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

            }

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
