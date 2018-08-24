







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
    .setUsername {
        height: 30px;
        line-height: 30px;
    }
    .setUsername p {
        float: left;
        width: 15px;
        height: 15px;
        border-radius: 50px;
        background-color: #e60012;
        color: #fff;
        text-align: center;
        line-height: 15px;
        margin: 7px 5px;
    }
    .setUsername input{
        float: left;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 5px;
        outline: medium;
    }
    .member {
        float: left;
        width: 100%;
        height: 25px;
        margin-top: 10px;
    }
    .member .p1 {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        color: #fff;
        border-radius: 5px;
        padding: 0 10px;
        background: #e60012;
        margin-bottom: 10px;
    }
    .member .p2 {
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
    .pre_bos .modify {
        font-size: 12px;
        color: #62BBFF;
        margin-left:5px;
        cursor: pointer;
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
                <div class="setUsername">
                    <input type="text" placeholder="请设置用户名" v-model="this.username">
                    <p>!</p>
                    <span>用户名可用来登录，只能有中文、英文、数字、-和_组成</span>
                </div>
                <div class="member">
                    <p class="p1">会员：{{this.meb}}</p>
                </div>
                <div class="member">
                    <p class="p2">会员类型：<span>{{mebtype}}</span></p>
                </div>
            </div>
        </div>

        <div class="presonal_bottom">
            <div class="pre_bos">
                <p><span class="xin">*</span>真实姓名</p>
                <input class="los m_left" type="text" v-model="this.name">
            </div>

            <div class="pre_bos">
                <p><span>昵称</span></p>
                <input class="los m_left" type="text" v-model="this.nickname">
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

                        <Radio label="secrecy" size='large'>
                            <span>保密</span>
                        </Radio>

                    </RadioGroup>
                </span>
            </div>

            <div class="pre_bos">
                <p>手机</p>
                <input class="los m_left" type="text" v-model="this.phone" disabled="true">
                <span class="modify" @click="modify">修改</span>
            </div>

            <div class="pre_bos">
                <p>个人邮箱</p>
                <input class="los m_left" type="text" v-model="this.emial" disabled="true">
                <span class="modify" @click="binding">立即绑定</span>
            </div>

            <div class="pre_bos">
                <p><span class="xin">*</span>从事行业</p>
                <input class="los m_left" type="text" v-model="this.industry">
            </div>

            <div class="pre_bos">
                <p><span class="xin">*</span>设备使用地址</p>
                <input class="los m_left ress" type="text" v-model="this.address">
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

                sex : '',

                username : '',              

                meb : '普通会员',

                mebtype : '个人会员',

                name : '',

                nickname : '',

                phone : '',

                emial : '400568911@qq.com',

                industry : '',

                address : '',      

            }

        },

        methods : {

            modify () {

                this.$store.commit('modifyphone',false)

                setTimeout(() => {
                    this.$store.commit('modifyphone',true)
                }, 10)
            },

            binding () {

                this.$store.commit('modifymail',false)

                setTimeout(() => {
                    this.$store.commit('modifymail',true)
                }, 10)
            },

            async pop () {

                let reo = await this.$api.getUserInfo()

                this.name = reo.data.data.fullName

                this.nickname = reo.data.data.username

                if (reo.data.data.sex == 1) {

                    this.sex = 'male'
                }
                else if (reo.data.data.sex == 0) {
                    this.sex = 'famale'
                }
                else {
                    this.sex = 'secrecy'
                }

                let phone =  reo.data.data.phone
                let phones = phone.substr(0,3)+"****"+phone.substr(7);
                this.phone = phones

                this.industry = reo.data.data.industry

                this.address = reo.data.data.address

            },

        },

        created () {
            
            this.pop()

        },

        mounted () {

        }

    }

</script>
