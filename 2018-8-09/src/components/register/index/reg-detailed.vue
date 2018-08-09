







<style scoped>

    .mos-left {
        float: left;
        font-size: 15px;
        padding-left: 49px;
    }
    .mos-left p {
        width: 100px;
        line-height: 38px;
        text-align: right;
        margin-right: 10px;
        float: left;
    }
    .mos-left input {
        width: 120px;
        height: 38px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
        float: left;
    }
    .paddword {
        height: 38px;
        position: relative;
        margin-top: 15px;
    }
    .paddword .ord {
        position: absolute;
        top: 6px;
        left: 330px;
    }
    .paddword input {
        width: 250px;
        padding: 0 36px 0 10px;
        outline: medium;
    }
    .mos-left .secur {
        font-size: 12px;
        padding-top: 12px;
        margin-left: 193px;
    }
    .secur span {
        color: #fff;
        padding: 3px 10px;
        background: #ccc;
        margin-right: 5px;
    }
    .secur span:last-child {
        margin-right: 0;
    }
    .source {
        height: 38px;
        text-align: center;
        line-height: 38px;
        margin-bottom: 15px;
        position: relative;
    }
    .source .fsp {
        width: 250px;
        height: 38px;
        border-radius: 4px;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        outline: medium;
        cursor: pointer;
        float: left;
    }
    .phone {
        height: 38px;
        margin-bottom: 15px;
        position: relative;
    }
    .gg {
        padding-right: 5px;
    }
    .codes {
        height: 38px;
    }
    .codes .ss {
        width: 120px;
        height: 38px;
        text-align: center;
        font-size: 14px;
        line-height: 38px;
        border-radius: 4px;
        background: #eee;
        border: 1px solid #ccc;
        margin-left: 10px;
        display: block;
        float: left;
    }
    .os {
        width: 120px;
        height: 38px;
        text-align: center;
        font-size: 14px;
        line-height: 38px;
        border-radius: 4px;
        background: #eee;
        border: 1px solid #ccc;
        margin-right: 10px;
        float: left;
        display: block;
        cursor: pointer;
    }
    .nex {
        width: 250px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        color: #fff;
        border-radius: 4px;
        background: #e60012;
        margin: 46px 0 0 110px;
    }
    .mos-right {
        width: 187px;
        overflow: hidden;
        text-align: center;
        float: right;
        margin-right: 49px;
    }
    .fon-top {
        width: 187px;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #5a5a5a;
        border-bottom: 1px solid #ddd;
    }
    .fon-top .nn {
        color: #5f97d8;
    }
    .fon-top img {
        position: relative;
        top: 4px;
    }
    .fon-top .span {
        float: left;
    }
    .mos-right .pp {
        color: #999;
        font-size: 14px;
        margin: 14px 0 25px 0;
    }
    .mos-left .xin {
        color: #e60012;
        padding: 0 5px;
        position: relative;
        top: 3px;
    }
    .img img {
        margin-right: 20px;
    }
    .img img:last-child {
        margin-right: 0;
    }
    .po p {
        font-size: 14px;
        color: #999;
    }
    .fff-right {
        float: left;
        font-size: 14px;
        color: #e60012;
        margin: 2px 0 0 10px;
    }
    .fff-right img {
        float: left;
        position: relative;
        top: 11px;
        z-index: 1;
    }
    .fff-right .right-right {
        float: left;
        padding: 5px;
        border: 1px solid #fac5c5;
        border-radius: 4px;
        background: #ffebeb;
        margin-left: -1px;
        position: relative;
        z-index: 0;
    }
    .fff-right .x {
        float: left;
        width: 15px;
        height: 15px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 15px;
        border-radius: 50%;
        background: #e60012;
        margin: 3px 5px 0 0;
    }
    .ffo-right {
        float: left;
        font-size: 14px;
        color: #666;
        margin: 2px 0 0 10px;
    }
    .ffo-right img {
        float: left;
        position: relative;
        top: 11px;
        z-index: 1;
    }
    .ffo-right .rights-right {
        float: left;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: #fff;
        margin-left: -1px;
        position: relative;
        z-index: 0;
    }
    .ffo-right .d {
        float: left;
        width: 15px;
        height: 15px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 15px;
        border-radius: 50%;
        background: #FAAD34;
        margin: 3px 5px 0 0;
    }
    .imm {
        margin: 11px 0 0 10px;
    }
    .source-down {
        width: 250px;
        overflow: hidden;
        border: 1px solid #d5d5d5;
        background: #fff;
        padding: 5px 0;
        position: absolute;
        left: 110px;
        top: 40px;
        z-index: 999;
    }
    .source-down p {
        width: 250px;
        text-align: center;
        cursor: pointer;
        margin: 0;
    }
    .source-down p:hover {
        color: #fff;
        background: #e60012;
    }
    .fsl-down {
        width: 120px;
        overflow: hidden;
        border: 1px solid #d5d5d5;
        background: #fff;
        position: absolute;
        left: 110px;
        top: 40px;
        z-index: 998;
    }
    .fsl-down p {
        width: 120px;
        text-align: center;
        cursor: pointer;
        margin: 0;
    }
    .fsl-down p:hover {
        color: #fff;
        background: #e60012;
    }
    .posit {
        width: 251px;
        position: absolute;
        top: 0;
        left: 360px;
    }
    .posit .p {
        padding-left: 20px;
    }

</style>

<template>

    <div class="reg">

        <div class="mos-left">
            <div class="source">
                <p><span class="xin">*</span>来源渠道</p>

                <div class="fsp" @click.stop='downs'>
                    <span class="gg">{{other}}</span>
                    <Icon type="arrow-down-b"></Icon>
                </div>

                <div class="source-down" v-show='down'>
                    <p v-for='(item, index) in pin' @click='lis(index)'>{{item.fon}}</p>
                </div>
            </div>

            <div class="phone">
                <p><span class="xin">*</span>手机号</p>
                <span class="os" @click.stop='main'>
                    <span class="gg">{{Mainland}}</span>
                    <Icon type="arrow-down-b"></Icon>
                </span>
                <input type="text" v-model='phone' @blur='blur'>

                <div class="fff-right" v-show='blurs'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>请输入手机号码</span>
                    </div>
                </div>

                <div class="fff-right" v-show='bluro'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>手机号码格式不正确</span>
                    </div>
                </div>

                <div class="fff-right" v-show='blurd'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>手机号码已存在</span>
                    </div>
                </div>

                <img class="imm" src="../../../../static/images/reg/dui.png" v-show='tu'>

                <div class="fsl-down" v-show='region'>
                    <p v-for='(item, index) in pos' @click='list(index)'>{{item.fon}}</p>
                </div>
            </div>

            <div class="codes">
                <p><span class="xin">*</span>短信验证码</p>
                <input type="text" v-model='des' @click='codes' @blur='yzm'>
                <span class="ss" @click='pcod'>获取短信验证码</span>

                <div class="fff-right" v-show='deo'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>请输入您收到的短信验证码</span>
                    </div>
                </div>

                <div class="fff-right" v-show='deos'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>请输入四位纯数字验证码</span>
                    </div>
                </div>

                <div class="fff-right" v-show='ood'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>验证码输入错误</span>
                    </div>
                </div>
            </div>

            <div class="paddword">
                <p><span class="xin">*</span>密码</p>
                <input type="password" v-model='padd' @blur='mm' @focus='mmm'>
                <img class="ord" src="../../../../static/images/reg/mm.png">

                <div class="ffo-right posit" v-show='pada'>
                    <img src="../../../../static/images/reg/sj1.png">
                    <div class="rights-right">
                        <div>
                            <div class="d">！</div>
                            <span>6-16字符，可由数字、字母、特殊</span>
                        </div>
                        <div class="p">符号组成，字母区分大小写</div>
                    </div>
                </div>

                <div class="fff-right" v-show='padb'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>密码必须包含长度为8-16位的字母和数字</span>
                    </div>
                </div>

                <div class="fff-right" v-show='padc'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>请设置您的密码</span>
                    </div>
                </div>
            </div>

            <!-- <div class="secur">安全程度：<span>弱</span><span>中</span><span>强</span></div> -->

            <div class="paddword">
                <p><span class="xin">*</span>确认密码</p>
                <input type="password" v-model='padds' @blur='mms' @focus='mmms'>
                <img class="ord" src="../../../../static/images/reg/mm.png">

                <div class="ffo-right" v-show='padda'>
                    <img src="../../../../static/images/reg/sj1.png">
                    <div class="rights-right">
                        <div class="d">！</div>
                        <span>请再次输入确认密码</span>
                    </div>
                </div>

                <div class="fff-right" v-show='paddb'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>请输入确认密码</span>
                    </div>
                </div>

                <div class="fff-right" v-show='paddc'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="right-right">
                        <div class="x">x</div>
                        <span>两次密码输入不一致</span>
                    </div>
                </div>
            </div>

            <div class="nex" @click='next'>下一步</div>
        </div>

        <div class="mos-right">
            <div class="fon-top">
                <p class="span">已有账号，</p>

                <div>
                    <router-link to='/login' target='_blank'>
                        <span class="nn">马上登录</span>
                        <img src="../../../../static/images/reg/tu.png">
                    </router-link>
                </div>
            </div>

            <p class="pp">使用其它方式快速注册</p>

            <div class="img">
                <img src="../../../../static/images/reg/qq.png">
                <img src="../../../../static/images/reg/wx.png">
            </div>

            <div class="po">
                <img src="../../../../static/images/wechat-2.png">
                <p>扫一扫，关注公众号</p>
            </div>
        </div>

    </div>

</template>

<script>

    import { Icon } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,

        },

        data () {

            return {

                blurs: false,

                bluro: false,

                blurd: false,

                phone: '',

                tu   : false,

                des  : '',

                deo  : false,

                deos : false,

                ood  : false,

                padb : false,

                padc : false,

                pada : false,

                padd : '',

                padda: false,

                paddb: false,

                paddc: false,

                padds: '',

                down : false,

                other: '其它广告',

                pin  : [{
                    fon : '其它广告'
                },{
                    fon : '地推活动'
                },{
                    fon : '展会了解'
                },{
                    fon : '业务联系'
                },{
                    fon : '百度推广'
                },{
                    fon : '朋友推荐'
                }],

                Mainland : '中国大陆86',

                region   : false,

                pos      : [{
                    fon : '中国大陆86'
                },{
                    fon : '香港'
                },{
                    fon : '澳门'
                }]

            }
            
        },

        computed : {

             ...mapState([

                'hid'

            ])

        },

        watch : {

            hid () {

                this.down = false

                this.region = false
                
            }

        },

        methods : {

            async pcod () {

                let reo = await this.$api.checkPhone({
                    phone:this.phone
                })

                this.blur()

                if (this.tu == true) {

                    let res = await this.$api.phoneCode({
                        phone:this.phone
                    })

                }

            },

            downs () {

                this.down = !this.down

            },

            lis (index) {

                this.other = this.pin[index].fon

                this.down = false

            },

            main () {

                this.region = !this.region

            },

            list (index) {

                this.Mainland = this.pos[index].fon

                this.region = false

            },

            async blur () {

                let blur = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/

                if (this.phone == '') {

                    this.blurs = true

                    this.bluro = false

                    this.blurd = false

                    this.tu = false

                } else if (!blur.test(this.phone)) {

                    this.bluro = true

                    this.blurs = false

                    this.blurd = false

                    this.tu = false

                }

                if (blur.test(this.phone)) {

                    this.blurs = false

                    this.bluro = false

                    let reo = await this.$api.checkPhone({
                        phone:this.phone
                    })

                    if (reo.data.status == 1) {

                        this.blurd = true

                    } else {

                        this.tu = true

                    }

                }

            },

            codes () {

                this.code = true

            },

            yzm () {

                let patrn = /^[0-9]*$/

                if (patrn.test(this.des) && this.des.length == 4) {

                    this.deo = false

                    this.deos = false

                } else {

                    this.deo = false

                    this.deos = true

                }

                if (this.des == '') {

                    this.deo = true

                    this.deos = false

                }

            },

            mm () {

                let pat = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,16})$/

                if (this.padd == '') {

                    this.pada = false

                    this.padb = false

                    this.padc = true

                } else if (pat.test(this.padd) && 6 <= this.padd.length <= 16) {

                    this.pada = false

                    this.padb = false

                    this.padc = false

                } else {

                    this.pada = false

                    this.padb = true

                    this.padc = false

                }

                if (!pat.test(this.padd) && this.padd != '') {

                    this.pada = false

                    this.padb = true

                    this.padc = false

                }

                if (this.padds != this.padd && this.padds != '') {

                    this.padda = false

                    this.paddb = false

                    this.paddc = true

                }

            },

            mmm () {

                this.padc = false

                this.pada = true

                this.padb = false

            },

            mms () {

                if (this.padds == '') {

                    this.padda = false

                    this.paddb = true

                }

                if (this.padds != this.padd && this.padds != '') {


                    this.padda = false

                    this.paddb = false

                    this.paddc = true

                }

                if (this.padds == this.padd) {

                    this.padda = false

                }

            },

            mmms () {

                this.padda = true

                this.paddb = false

                this.paddc = false

            },

            next () {

                this.code = true

                this.blur()

                this.yzm()

                this.mm()

                this.mms()

                if (this.tu == true && this.deo == false && this.deos == false 
                    && this.pada == false && this.padb == false && this.padc == false 
                    && this.padda == false && this.paddb == false && this.paddc == false) {

                    let res = {
                        type:1,
                        source:this.other,
                        phone:this.phone,
                        phoneCode:this.des,
                        password:this.padd
                    }

                    this.$store.commit('info', res)

                    this.$router.push('/regBas')

                }

            }

        },

        created () {

        },

        mounted () {

        }

    }

</script>
