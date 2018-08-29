
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
    .fsl-cent span {
        float: left;
        color: #e60012;
    }
    .freight {
        width: 822px;
        margin: 20px;
        background-color: #F3F1F2;
    }
    .freight-nav {
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #e60012;
        color: #fff;
        text-align: center;
    }
    .retreat-process {
        width: 100%;
        height: 84px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .retreat-process:nth-child(3) {
        width: 100%;
        height: 126px;
    }
    .retreat-process:nth-child(3) .retreat-left {
        line-height: 126px;
    }
    .retreat-left {
        float: left;
        width: 140px;
        line-height: 84px;
    }
    .retreat-right {
        float: left;
        width: 680px;
    }
    .retreat-top {
        width: 100%;
        height: 42px;
        line-height: 42px;
        border-bottom: 1px solid #ccc;
        text-align: center;
    }
    .top-left {
        width: 280px;
        height: 42px;
        float: left;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .top-right {
        width: 400px;
        height: 42px;
        float: left;
    }
    .retreat-process:nth-child(3) .retreat-bottom:nth-child(2) {
        border-bottom: 1px solid #ccc;
    }
    .retreat-bottom {
        width: 100%;
        height: 42px;
        line-height: 42px;
        text-align: center;
    }
    .bottom-left {
        width: 280px;
        height: 42px;
        float: left;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .bottom-right {
        width: 400px;
        height: 42px;
        float: left;
    }
    .supple {
        width: 100%;
        overflow: hidden;
    }
    .supple span {
        width: 100%;
        line-height: 25px;
        color: #999;
    }
    .address {
        overflow: hidden;
        width: 100%;
        margin: 30px 0;
    }
    .address p {
        color: #e60012;
        font-size: 14px;
    }
    .address span {
        width: 100%;
        color: #666;
        line-height: 30px;
    }

</style>

<template>

    <div class="helpcen-one">
        <div class="fsl-top">换取机及运费</div>
        <div class="fsl-cent">
            <p><span>一、运费</span>广租通过顺丰快运将客户所订机器快递上门</p>

            <div class="freight">
                <div class="freight-nav">
                    <p>运费承担经过</p>
                </div>

                <div class="freight-cont">
                    <div class="retreat-process">
                        <div class="retreat-left">
                            <p>退机流程</p>
                        </div>
                        <div class="retreat-right">
                            <div class="retreat-top">
                                <div class="top-left">
                                    <p>期满退机</p>
                                </div>
                                <div class="top-right">
                                    <p>期满正常退机</p>
                                </div>
                            </div>
                            <div class="retreat-bottom">
                                <div class="bottom-left">
                                    <p>客户承担退回运费</p>
                                </div>
                                <div class="bottom-right">
                                    <p>客户承但运费</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="retreat-process">
                        <div class="retreat-left">
                            <p>换机流程</p>
                        </div>
                        <div class="retreat-right">
                            <div class="retreat-top">
                                <div class="top-left">
                                    <p>维修换单</p>
                                </div>
                                <div class="top-right">
                                    <p>更改订单</p>
                                </div>
                            </div>
                            <div class="retreat-bottom">
                                <div class="bottom-left">
                                    <p>参考维修流程</p>
                                </div>
                                <div class="bottom-right">
                                    <p>客户承但订单运费，（除非电脑存在问题）由广租承担订单运费</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="retreat-process">
                        <div class="retreat-left">
                            <p>维修流程</p>
                        </div>
                        <div class="retreat-right">
                            <div class="retreat-top">
                                <div class="top-left">
                                    <p>正常硬件故障</p>
                                </div>
                                <div class="top-right">
                                    <p>广租承担运费（往返）</p>
                                </div>
                            </div>
                            <div class="retreat-bottom">
                                <div class="bottom-left">
                                    <p>人为故障</p>
                                </div>
                                <div class="bottom-right">
                                    <p>客户承但运费（往返）</p>
                                </div>
                            </div>
                            <div class="retreat-bottom">
                                <div class="bottom-left">
                                    <p>软件故障</p>
                                </div>
                                <div class="bottom-right">
                                    <p>客户承但运费（往返）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="supple">
                <p>补充说明：</p>
                <span>（1）应由客户承担运费时，客户需在寄出时支付运费，如果客户选择到付，则广租将为其生成相应账单。</span>
                <span>（2）应由广租承担运费时，如果有返请客户先行垫付的情况，在广租验收合格后，会将运费返还到客户账户。</span>
                <span>（3）运费以物流公司标准收取为准，如有问题请联系客服。</span>
            </div>

            <div class="address">
                <p>二、退换机地址</p>
                <span>退换机地址：广州市天河区石牌西路8号展望广场9楼908-910</span>
                <span>收件电话：1562589556（仅限快递填写）</span>
                <span>收 件 人：王秀团</span>
            </div>

            <div class="address">
                <p>三、故障处理</p>
                <span>机器在租用过程中或正常租期结束导致的退回，如发现并确认是人为故障，则客户需支付维修费用。 </span>
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
