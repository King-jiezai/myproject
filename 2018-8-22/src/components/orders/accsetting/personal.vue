







<style scoped>

    .presonal {
        width: 910px;
        overflow: hidden;
    }
    .hear {
        width: 910px;
        height: 38px;
        font-size: 16px;
        line-height: 38px;
        padding: 0 15px;
        background: #f1f1f1;
    }
    .presonal_cen {
        width: 910px;
        overflow: hidden;
        padding: 50px 0 40px 120px;
        border-bottom: 1px solid #ccc;
    }
    .presonal_cen img {
        float: left;
        margin-right: 15px;
    }
    .presonal_cen .pre_right {
        float: left;
        padding-top: 35px;
    }
    .pre_right input{
        width: 200px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 5px;
        margin-bottom: 10px;
        outline: medium;
    }
    .pre_right .p1 {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        color: #fff;
        border-radius: 5px;
        padding: 0 10px;
        background: #e60012;
        margin-bottom: 10px;
    }
    .pre_right .p2 {
        color: #000;
    }
    .presonal_bottom {
        padding: 30px 0 30px 155px;
    }
    .pre_bos {
        margin-bottom: 15px;
        font-size: 15px;
    }
    .pre_bos .xin {
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .pre_bos p {
        width: 100px;
        text-align: right;
        line-height: 30px;
        float: left;
    }
    .pre_bos .los {
        height: 30px;
        margin-left: 10px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        outline: medium;
        padding: 0 10px;
    }
    .pre_bos .m_left {
        margin-left: 10px;
        line-height: 30px;
    }
    .ress {
        width: 320px;
    }
    .re {
        color: #e60012;
    }
    .sub {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #e60012;
        font-size: 15px;
        border: 1px solid #e60012;
        border-radius: 5px;
        margin: 30px 0 0 110px;
        cursor: pointer;
    }

</style>

<template>

    <div class="presonal">
        <div class="hear">个人信息</div>

        <div class="presonal_cen">
            <img src="../../../../static/images/pre/333.png">

            <div class="pre_right">
                <input type="text" placeholder="我是大傻逼！">
                <div>
                    <p class="p1">会员：顶级大傻逼</p>
                </div>
                <p class="p2">会员类型：<span>个人会员</span></p>
            </div>
        </div>

        <div class="presonal_bottom">
            <div class="pre_bos">
                <p><span class="xin">*</span>真实姓名</p>
                <input class="los m_left" type="text">
            </div>

            <div class="pre_bos">
                <p><span>昵称</span></p>
                <input class="los m_left" type="text">
            </div>

            <div class="pre_bos">
                <p><span class="xin">*</span>性别</p>

                <span class="m_left">
                    <RadioGroup v-model="sex" size='large'>
                        <Radio label="male" size='large'>
                            <span>男</span>
                        </Radio>

                        <Radio label="famale" size='large'>
                            <span>女</span>
                        </Radio>
                    </RadioGroup>
                </span>
            </div>

            <div class="pre_bos">
                <p>手机</p>
                <input class="los m_left" type="text">
            </div>

            <div class="pre_bos">
                <p>邮箱</p>
                <input class="los m_left" type="text">
            </div>

            <div class="pre_bos">
                <p>出生日期</p>
                <input class="los m_left" type="text">
            </div>

            <div class="pre_bos">
                <p><span class="xin">*</span>居住地址</p>
                <input class="los m_left ress" type="text">
            </div>

            <div class="pre_bos">
                <p><span class="xin">*</span>客户经理</p>
                <span class="m_left re">陈总</span>
            </div>

            <div class="sub">提交</div>
        </div>
    </div>

</template>

<script>

    import { RadioGroup, Radio } from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,

        },

        data () {

            return {

                sex : 'male'

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
