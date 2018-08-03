







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
        color: #000;
    }
    .fsl-bottom .fo {
        margin: 20px 0 45px;
        font-size: 14px;
    }
    .boz {
        overflow: hidden;
        margin: 20px 0 40px;
    }
    .boz .fso {
        overflow: hidden;
    }
    .boz .is {
        margin: 5px 0;
    }
    .boz p {
        font-size: 14px;
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

            <div class="fo"><span class="foo">公司、企业租赁</span>（公司三证合一或者五证合一营业执照复印件、公司及法人授权书、经办人身份证复印件、收货人身份证复印件）
                <p>1）承租方需公司三证合一或者五证合一营业执照复印件、公司及法人授权书、经办人身份证复印件、收货人身份证复印件；所提供的复印件及资料须加盖公章；在签合同时需提供证件资料原件查看，复印件留底使用；复印件上请打上“仅供办理租赁***使用”的字样；</p>
                <p>2）提供经办人身份证原件，我们保留复印件，经办人在合同上签字；</p>
                <p>3）免押金租赁的短期租赁，需一次性支付租金，中长期租赁（三个月以上）可按月（或季度）支付租金。</p>
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

            <span class="sp">有押金租赁（押金为设备的市场价值）</span>

            <div class="boz">
                <span class="foo">公司租赁（公司营业执照副本复印件 + 经办人身份证复印件）</span>

                <p>1）提供公司营业执照副本复印件，并加盖公司印章，可注明“仅限于租赁电脑使用”，经办人签字；</p>
                <p>2）押金应一次付清</p>
                <p class="li">3）免押金租赁的短期租赁，需一次性支付租金，中长期租赁（三个月以上）可按月（或季度）支付租金。</p>

                <span class="foo">个人或学生（本人身份证复印件）</span>

                <p>1）出示本人身份证或军官证原件，我们保留复印件，可注明“仅限于租赁电脑使用”；</p>
                <p>2）押金应一次付清</p>
                <p>3）免押金租赁的短期租赁，需一次性支付租金，中长期租赁（三个月以上）可按月（或季度）支付租金。</p>
            </div>

            <span class="sp">有押金租赁流程</span>

            <div class="boz">
                <div class="fso">
                    <div class="fs" v-for='item in ren'>
                        <img :src="item.img">
                        <div>{{item.fon}}</div>
                    </div>
                </div>

                <img class="is" src="../../../../static/images/process/process.png">

                <div class="fso">
                    <div class="fs" v-for='item in rec'>
                        <img :src="item.img">
                        <div>{{item.fon}}</div>
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
