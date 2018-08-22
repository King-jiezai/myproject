







<style scoped>

    .max-box .sp {
        color: #e60012;
    }
    .change-cen {
        margin: 21px 0;
    }
    .sp1 {
        margin-right: 35px;
    }
    .fso-top {
        width: 856px;
        height: 39px;
        line-height: 39px;
        background: #f2f9f1;
        padding: 0 5px;
        margin-bottom: 17px;
    }
    .pon {
        float: left;
        margin-left: 20px;
    }
    .pon:first-child {
        margin-left: 0;
    }
    .pon input {
        width: 160px;
        height: 21px;
        padding: 0 5px;
        line-height: 21px;
        outline: medium;
    }
    .fso-top img {
        margin: 8px 0 0 5px;
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
        width: 75px;
        text-align: center;
        float: left;
    }
    .oos p:nth-child(3) {
        width: 302px;
    }
    .oos p:first-child {
        width: 103px;
    }
    .oop-os {
        width: 75px;
        line-height: 80px;
        text-align: center;
        float: left;
    }
    .oop-os:first-child {
        width: 103px;
    }
    .oop-os:last-child {
        margin-right: -1px;
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
    .das {
        float: left;
    }
    .fsl-fsl p {
        float: left;
    }
    .fsl-fsl span {
        float: left;
        margin: 0 10px;
    }

</style>

<template>

    <div class="max-box">
        <div class="change-cen">
            <span class="sp1">未到期在租设备<span class="sp">（1）</span></span>
            <span class="sp1">已到期未归还设备<span class="sp">（0）</span></span>
        </div>

        <div class="change-bottom">
            <div class="fso-top">
                <div class="fsl-fsl">
                    <p>起租日：</p>
                    <div class="das">
                        <DatePicker
                            :clearable="false"
                            type="date"
                            :transfer=true
                            size='large' 
                        ></DatePicker>
                    </div>

                    <span>至</span>

                    <div class="das">
                        <DatePicker
                            :clearable="false"
                            type="date"
                            :transfer=true
                            size='large' 
                        ></DatePicker>
                    </div>
                </div>

                <div class="pon">
                    <span>订单号：</span>
                    <input type="text" placeholder="请输入订单号进行查询">
                </div>

                <div class="pon">
                    <span>设备序列号：</span>
                    <input type="text" placeholder="请输入设备序列号进行查询">
                </div>

                <img src="../../../../static/images/change/sreen.png">
            </div>

            <div class="fso-cen">
                <div class="oos">
                    <p v-for='item in pos'>{{item.fon}}</p>
                </div>

                <div class="oop">
                    <div class="oop-os pp">2018-6-6</div>
                    <div class="oop-os pp">12312</div>
                    <div class="oop-oo pp">
                        <img src="../../../../static/images/change/1.png">
                        <p>二手笔记本电脑 联想Thinkpad X220 X230 12寸 ibm超薄手提上网本</p>
                    </div>
                    <div class="oop-os pp">12312</div>
                    <div class="oop-os pp">12312</div>
                    <div class="oop-os pp">12312</div>
                    <div class="oop-os pp">12312</div>
                    <div class="oop-os pp">12312</div>
                </div>

                <p class="p">我要留言<input class="om" type="text"></p>
            </div>
        </div>
    </div>

</template>

<script>

    import { DatePicker } from 'iview'

    export default {

        components : {

            DatePicker,

        },

        data () {

            return {

                pos : [{
                    fon : '设备序列号'
                },{
                    fon : '订单号'
                },{
                    fon : '商品名称'
                },{
                    fon : '起租日'
                },{
                    fon : '租赁方式'
                },{
                    fon : '租赁进度'
                },{
                    fon : '租金'
                },{
                    fon : '租期'
                }]

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
