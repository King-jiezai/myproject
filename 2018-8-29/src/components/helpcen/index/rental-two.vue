
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
    .fsl-cent p{
        line-height: 25px;
        margin: 20px 0;
    }
    .fsl-cent span {
        color: #e60012;
    }
    .payment-method {
        width: 100%; 
    }
    .payment-method p {
        margin: 0px;
        line-height: 25px;
    }
    .payment-method p:first-child {
        color: #e60012;
    }
    .explain {
        margin: 50px 0!important;
    }

</style>

<template>

    <div class="helpcen-one">
        <div class="fsl-top">租金支付</div>
        <div class="fsl-cent">
            <p><span>1、租金计算：</span>租金计算方式为起租日期至截止租期日期（如：起租期为7月2日，截止日期为7月4日，即租期为7月2日——7月4日共需支付3天的租赁费用)</p>

            <p><span>2、短租：</span>（三个月以下）须一次性支付完租金，（三个月以上）中长期租赁可以分期付款</p>

            <p><span>3、分期付款：</span>每月系统自动从您的资金账户中扣除租金，扣除租金日期为下单日（如下单日为7月1日，则下一期租金扣除日为8月1日）请保证账户余额充足。若扣款失败，系统29—31日发送提醒短信。</p>

            <p><span>4、逾期滞纳金：</span>若您未按时支付租金，则每逾期1日（不足1日按1日计），广租有权加收当月支付租金的0.3% （百分之三）作为滞纳金。</p>

            <div class="payment-method">
                <p>5、支付方式：</p>
                <p>1）货到付款</p>
                <p>1）银联支付</p>
                <p>1）网上转账</p>
                <p>1）支付宝、微信转账</p>
            </div>
            <p class="explain">最终解释权归广租所有，详情咨询在线客服</p>
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
