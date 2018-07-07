







<style scoped>

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
        margin-left: 50px;
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
        margin: 8px 0 0 20px;
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
    .oos p:nth-child(2) {
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
                    <div class="oop-oo pp">
                        <img src="../../../../static/images/change/1.png">
                        <p>二手笔记本电脑 联想Thinkpad X220 X230 12寸 ibm超薄手提上网本</p>
                    </div>
                    <div class="oop-os pp">123123123123</div>
                    <div class="oop-os pp">123123123123</div>
                    <div class="oop-os pp">123123123123</div>
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
                    fon : '换设备时间'
                },{
                    fon : '商品名称'
                },{
                    fon : '换前设备序列号'
                },{
                    fon : '换后设备序列号'
                },{
                    fon : '订单号'
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
