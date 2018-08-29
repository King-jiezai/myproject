
<style scoped>

    .fsl-top {
        text-align: center;
        color: #e60012;
        font-size: 18px;
    }
    .fsl-top {
        margin-bottom: 28px;
    }
    .fsl-bottom .sp {
        font-size: 16px;
        color: #e60012;
    }
    .fsl-bottom .fo {
        margin: 5px 0 30px;
        font-size: 14px;
    }
    .boz {
        overflow: hidden;
        margin: 10px 0 40px;
    }
    .boz .fso {
        overflow: hidden;
    }
    .boz .is {
        margin: 5px 0;
    }
    .boz p {
        font-size: 14px;
        line-height: 25px;
    }
    .foo {
        color: #e60012;
        font-size: 14px;
    }
    .li {
        margin-bottom: 27px;
    }
    .fs {
        width: 145px;
        overflow: hidden;
        margin-right: 34px;
        float: left;
    }
    .fs:last-child {
        margin-right: 0;
    }
    .fs img {
        float: left;
    }
    .fs div {
        width: 85px;
        font-size: 14px;
        color: #606060;
        float: left;
    }
    .llo {
        margin-top: 10px;
    }

</style>

<template>

    <div class="helpcen-one">
        <div class="fsl-top">租赁办理流程</div>

        <div class="fsl-bottom">
            <span class="sp">免押金租赁服务</span>

            <div class="fo">
                <p>为帮助企业减少资金压力，让企业轻松办公，轻资发展，广租为您提供免押金租赁服务，若承租人通过我司的风控检测，将无需支付押金。  </p>
            </div>

            <div class="boz">

                <span class="sp">企业免押金租赁授信资料要求：</span>

                <p>1）提供公司营业执照复印件，企业法人身份证复印件，并加盖公司印章，可注明“仅限于办公租赁使用”</p>
                <p>2）若是经办需要提供法人授权书，法人身份证复印件、以及经办人身份证复印件，可注明“仅限于办公租赁使用”</p>
                <p>3）资料提交成功后，本公司会对所提供的企业资料进行风控评审，1~2个工作日内会下发信息告诉您能否获取免押金服务</p>
                <p>4）免押金租赁的短期租赁，需一次性支付租金；中长期租赁（三个月以上），可按月（或季度）支付租金。</p>
                
            </div>

            <span class="sp">免押金租赁流程</span>

            <div class="boz">
                <div class="fso">
                    <div class="fs" v-for='item in res'>
                        <img :src="item.img">
                        <div>{{item.fon}}</div>
                    </div>
                </div>

                <img class="is" src="../../../../static/images/process/process.png">

                <div class="fso">
                    <div class="fs">
                        <img src="../../../../static/images/process/10.png">
                        <div class="llo">租赁结束</div>
                    </div>
                    <div class="fs" v-for='item in reo'>
                        <img :src="item.img">
                        <div>{{item.fon}}</div>
                    </div>
                    <div class="fs">
                        <img src="../../../../static/images/process/6.png">
                        <div class="llo">收取租金</div>
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

                res : [{
                    img : '../../../../static/images/process/1.png',
                    fon : '在此咨询、电话洽谈或面谈'
                },{
                    img : '../../../../static/images/process/2.png',
                    fon : '审核客户提供资料'
                },{
                    img : '../../../../static/images/process/3.png',
                    fon : '签订租赁合同并收取定金'
                },{
                    img : '../../../../static/images/process/4.png',
                    fon : '按客户要求准备好设备'
                },{
                    img : '../../../../static/images/process/5.png',
                    fon : '送货客户验机或上门验机'
                }],

                reo : [{
                    img : '../../../../static/images/process/9.png',
                    fon : '检查设备完整性及配置'
                },{
                    img : '../../../../static/images/process/8.png',
                    fon : '租期满后收回设备'
                },{
                    img : '../../../../static/images/process/7.png',
                    fon : '租期设备期间配套服务'
                }],

                ren : [{
                    img : '../../../../static/images/process/1.png',
                    fon : '在此咨询、电话洽谈或面谈'
                },{
                    img : '../../../../static/images/process/2.png',
                    fon : '审核客户提供资料'
                },{
                    img : '../../../../static/images/process/3.png',
                    fon : '签订租赁合同并收取定金'
                },{
                    img : '../../../../static/images/process/4.png',
                    fon : '按客户要求准备好设备'
                },{
                    img : '../../../../static/images/process/5.png',
                    fon : '送货客户验机或上门验机'
                }],

                rec : [{
                    img : '../../../../static/images/process/10.png',
                    fon : '退还押金租赁结束'
                },{
                    img : '../../../../static/images/process/9.png',
                    fon : '检查设备完整性及配置'
                },{
                    img : '../../../../static/images/process/8.png',
                    fon : '租期满后收回设备'
                },{
                    img : '../../../../static/images/process/7.png',
                    fon : '租期设备期间配套服务'
                },{
                    img : '../../../../static/images/process/6.png',
                    fon : '收取押金和租金'
                }]

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
