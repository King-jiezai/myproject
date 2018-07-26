







<style scoped>

    .fso-top {
        width: 856px;
        height: 39px;
        line-height: 39px;
        background: #fff8db;
        padding: 0 5px;
        margin-bottom: 17px;
    }
    .fso-cen {
        width: 856px;
        overflow: hidden;
        border: 1px solid #f1f1f1;
    }
    .oos {
        width: 856px;
        height: 39px;
        line-height: 39px;
        background: #f1f1f1;
    }
    .oos p {
        width: 138px;
        text-align: center;
        float: left;
    }
    .oos p:nth-child(3) {
        width: 302px;
    }
    .oop-os {
        width: 138px;
        line-height: 80px;
        text-align: center;
        float: left;
    }
    .oop-oo {
        width: 302px;
        height: 81px;
        padding: 16px 5px 0;
        float: left;
    }
    .oop-oo img {
        width: 58px;
        height: 47px;
        float: left;
    }
    .oop-oo p {
        width: 232px;
        height: 47px;
        text-align: center;
        padding: 10px 5px 0 5px;
        float: left;
    }
    .p {
        padding: 0 10px;
    }
    .om {
        width: 786px;
        height: 30px;
        color: #e60012;
        border: 0;
        outline: medium;
        padding: 0 10px;
    }
    .pp {
        border-right: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
    }
    .pp:last-child {
        border-right: 0;
    }

</style>

<template>

    <div class="change">

        <div class="change-bottom">
            <div class="fso-top">
                <span>换设备确认收货后，请于7天内及时将被更换的设备退回，否则会生成租金，请知悉。</span>
            </div>

            <div class="fso-cen">
                <div class="oos">
                    <p v-for='item in pos'>{{item.fon}}</p>
                </div>

                <div class="oop">
                    <div class="oop-os pp">123123123</div>
                    <div class="oop-os pp">2018-6-6</div>
                    <div class="oop-oo pp">
                        <img src="../../../../static/images/change/1.png">
                        <p>二手笔记本电脑 联想Thinkpad X220 X230 12寸 ibm超薄手提上网本</p>
                    </div>
                    <div class="oop-os pp">123123123123</div>
                    <div class="oop-os pp">运输中</div>
                </div>

                <p class="p">我要留言<input class="om" type="text"></p>
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
                
                pos : [{
                    fon : '换设备单号'
                },{
                    fon : '发货时间'
                },{
                    fon : '商品名称'
                },{
                    fon : '设备序列号'
                },{
                    fon : '状态'
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
