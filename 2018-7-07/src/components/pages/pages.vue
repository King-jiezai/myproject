







<style scoped>
    
    .pages {
        position: relative;
    }
    .pages .pages-bottom {
        width: 100%;
        height: 100%;
        border-top: 2px solid #000;
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .bot-crumbs {
        width: 1200px;
        font-size: 12px;
        margin: 10px auto;
    }
    .bot-crumbs span {
        color: #6a6969;
    }
    .bot-detailed {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    .detailed-left {
        float: left;
        margin-right: 30px;
    }
    .fs-top {
        width: 400px;
        height: 326px;
        text-align: center;
        border: 1px solid #eee;
    }
    .fs-cen {
        width: 400px;
        height: 58px;
        margin: 20px 0;
    }
    .oo-left {
        width: 16px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 1px solid #eee;
        margin: 4px 15px 0 0;
        float: left;
        cursor: pointer;
    }
    .oo-cen {
        width: 58px;
        height: 58px;
        text-align: center;
        border: 1px solid #eee;
        border-radius: 4px;
        padding-top: 4px;
        margin-right: 12px;
        float: left;
        cursor: pointer;
    }
    .oo-cen:last-child {
        margin-right: 0;
    }
    .oo-right {
        width: 16px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 1px solid #eee;
        margin-top: 4px;
        float: right;
        cursor: pointer;
    }
    .fs-bottom {
        width: 400px;
        overflow: hidden;
    }
    .lis {
        float: left;
        font-size: 12px;
        margin-right: 20px;
    }
    .lis img {
        position: relative;
        top: 4px;
    }
    .detailed-right {
        width: 629px;
        float: left;
    }
    .os-top {
        color: #555;
        font-size: 15px;
        margin-bottom: 18px;
    }
    .os-rent {
        width: 629px;
        height: 38px;
        line-height: 35px;
        background: #f7f7f7;
        padding: 0 8px;
        position: relative;
    }
    .os-rent p {
        float: left;
        font-size: 15px;
        color: #555;
        margin-right: 18px;
    }
    .os-rent .sp1 {
        font-size: 26px;
        color: #e60012;
    }
    .os-rent .sp2 {
        width: 64px;
        height: 22px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        line-height: 22px;  
        background: #f17070;
        border-radius: 4px;
        margin-top: 10px;
        float: left;
        cursor: pointer;
    }
    .os-con {
        width: 629px;
        overflow: hidden;
        margin: 13px 0 3px;
        padding-left: 20px;
    }
    .cons {
        overflow: hidden;
        text-align: center;
        line-height: 35px;
        color: #555;
        font-size: 12px;
        margin-bottom: 5px;
    }
    .cons p {
        float: left;
        line-height: 35px;
    }
    .pages .os-bos {
        height: 35px;
    }
    .os-bos .das {
        float: left;
        margin-bottom: 10px;
    }
    .os-bos span {
        margin: 0 20px;
        float: left;
    }
    .os-bos .op {
        letter-spacing: 2px;
    }
    .os-bos .pps {
        color: #fff;
        text-align: center;
        line-height: 25px;
        letter-spacing: 2px;
        border-radius: 4px;
        background: #f17070;
        margin: 4px 3px 0 0;
        padding: 0 10px;
        float: left;
    }
    .os-bos .ppo {
        color: #f17070;
        font-size: 18px;
        font-weight: bold;
        float: left;
    }
    .os-box {
        overflow: hidden;
    }
    .os-con .oos {
        width: 177px;
        height: 35px;
        border: 1px solid #e6e6e6;
        margin: 0 10px 10px 0;
        float: left;
        position: relative;
        cursor: pointer;
    }
    .oos img {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .oop {
        width: 80px;
        height: 35px;
        border: 1px solid #e6e6e6;
        margin: 0 10px 10px 0;
        float: left;
        position: relative;
        cursor: pointer;
    }
    .oop img {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .os-box span {
        float: left;
        color: #f17070;
        margin-left: 10px;
    }
    .bos {
        margin-bottom: 10px;
    }
    .reduce {
        width: 35px;
        height: 35px;
        border: 1px solid #e6e6e6;
        float: left;
        cursor: pointer;
    }
    .num {
        width: 60px;
        height: 35px;
        text-align: center;
        border: 0;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        outline: medium;
        float: left;
    }
    .plus {
        width: 35px;
        height: 35px;
        border: 1px solid #e6e6e6;
        float: left;
        cursor: pointer;
    }
    .stock {
        float: left;
        margin-left: 20px;
    }
    .os-total {
        width: 614px;
        height: 107px;
        background: #f7f7f7;
        margin-left: 15px;
        padding: 5px;
    }
    .total-top {
        width: 604px;
        margin-bottom: 13px;
        font-size: 16px;
    }
    .total-top p {
        margin-top: 5px;
        padding: 0 2px;
    }
    .total-top span {
        color: #e60012;
        font-size: 16px;
    }
    .total-cen {
        width: 604px;
        overflow: hidden;
    }
    .total-cen .p1 {
        position: relative;
        bottom: 5px;
    }
    .total-cen p {
        float: left;
    }
    .total-cen .ros {
        width: 144px;
        height: 24px;
        font-size: 14px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        border-radius: 4px;
        background: #f17070;
        margin-right: 82px;
        float: right;
    }
    .foc {
        margin-top: 3px;
    }
    .os-bot {
        width: 614px;
        overflow: hidden;
        font-size: 16px;
        margin: 21px 0 0 15px;
        padding: 0 5px;
    }
    .car {
        width: 130px;
        height: 35px;
        text-align: center;
        color: #e60012;
        border: 1px solid #e60012;
        margin-right: 25px;
        float: left;
    }
    .car img {
        position: relative;
        top: 5px;
    }
    .lease {
        width: 130px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        color: #fff;
        background: #e60012;
        float: left;
    }
    .calls {
        float: left;
        color: #f17070;
        margin: 5px 0 0 45px;
    }
    .calls img {
        position: relative;
        top: 5px;
    }
    .recom {
        width: 1200px;
        margin: 80px auto 60px;
    }
    .cor {
        border: 1px solid #e60012;
    }
    .vos {
        border: 1px solid #e60012!important;
    }
    .message {
        width: 260px;
        height: 284px;
        border-radius: 4px;
        border: 1px solid #e60012;
        box-shadow: 3px 5px 5px 0px #666;
        background: #fff;
        position: absolute;
        top: 38px;
        left: 0;
        z-index: 999;
    }
    .message-top {
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        text-align: left;
        letter-spacing: 1px;
        background: #e60012;
        padding: 0 7px;
    }
    .message-top .cos {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 11px;
        font-size: 29px;
        letter-spacing: 0;
        border-radius: 50%;
        border: 2px solid #fff;
        margin-top: 4px;
        float: right;
    }
    .message-bottom {
        overflow: hidden;
        letter-spacing: 2px;
        padding: 0 7px;
    }
    .message-bottom .teas {
        width: 244px;
        height: 80px;
        font-size: 11px;
        line-height: 18px;
        letter-spacing: 1px;
        resize: none;
        outline: medium;
        border: 1px solid #e5e5e5;
        padding: 10px;
        margin: 14px 0 1px 0;
        display: block;
    }
    .message-bottom input {
        width: 244px;
        height: 30px;
        font-size: 11px;
        letter-spacing: 2px;
        outline: medium;
        border: 1px solid #e5e5e5;
        margin-top: 7px;
        padding: 0 7px;
    }
    .message-bottom .mess {
        width: 244px;
        height: 34px;
        font-size: 13px;
        line-height: 34px;
        text-align: center;
        background: #e60012;
        margin-top: 7px;
    }
    .rent {
        height: 35px;
        line-height: 35px;
        margin-bottom: 15px;
    }
    .rent p {
        margin-right: 20px;
        float: left;
    }
    .rent span {
        color: #e60012;
        font-size: 16px;
    }

</style>

<template>

    <div class="pages">
        <div class="pages-top">
            <zlsp-hear></zlsp-hear>
        </div>

        <div class="pages-bottom">
            <div class="bot-crumbs">
                <router-link to='/'>
                    <span>首页</span>
                </router-link>

                <span>></span>

                <router-link to='/zlsp'>
                    <span>租赁频道</span>
                </router-link>

                <span>></span>
                <span>笔记本</span>

                <span>></span>
                <span>ThinkPad T420商务版租赁</span>
            </div>

            <div class="bot-detailed">
                <div class="detailed-left">
                    <div class="fs-top">
                        <span v-for='(item, index) in res' v-if='con == index'>
                            <img :src="item.img">
                        </span>
                    </div>

                    <div class="fs-cen">
                        <div class="oo-left" @click='les'><</div>

                        <div>
                            <div
                                class="oo-cen"
                                :class="{cor: cos == index}"
                                v-for='(item, index) in obs'
                                @click='lio(index)'
                            >
                                <img :src="item.img">
                            </div>
                        </div>

                        <div class="oo-right" @click='ris'>></div>
                    </div>

                    <div class="fs-bottom">
                        <div class="lis">
                            <span>分享：</span>
                            <img :src="fenx">
                            <img :src="fens">
                        </div>

                        <div class="lis">
                            <img :src="soc">
                            <span>收藏</span>
                        </div>
                    </div>
                </div>

                <div class="detailed-right">
                    <div class="os-top">
                        <span>【短租】联想ThinkPad T420笔记本电脑 I5/4G/320G</span>
                    </div>

                    <div class="os-rent">
                        <p>日租金：￥<span class="sp1">2.8</span>元/天</p>

                        <div class="sp2" @mouseenter='mes'>
                            <span>留言</span>
                            <div class="message" v-if='hos'>
                                <div class="message-top">
                                    <span>请您留言/MESSAGE</span>
                                    <div class="cos" @click='clos'>-</div>
                                </div>

                                <div class="message-bottom">
                                    <textarea class="teas" placeholder="请在此输入留言内容，我们会尽快与您联系，谢谢！"></textarea>
                                    <input type="text" placeholder="输入您的名字">
                                    <input type="text" placeholder="输入您的手机号码">
                                    <input type="text" placeholder="产品使用地址">
                                    <div class="mess">租赁留言</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="os-con">
                        <div class="cons">
                            <p>配置：</p>

                            <div class="os-box">
                                <div
                                    class="oos"
                                    :class="{vos: von == index}"
                                    v-for='(item, index) in reo'
                                    @click='voo(index)'
                                >
                                    {{item.com}}
                                    <img :src="xun" v-if='von == index'>
                                </div>
                            </div>
                        </div>

                        <div class="cons">
                            <p>服务：</p>

                            <div class="os-box">
                                <div
                                    class="oop"
                                    :class="{vos: vom == index}"
                                    v-for='(item, index) in red'
                                    @click='vov(index)'
                                >
                                    {{item.fon}}
                                    <img :src="xun" v-if='vom == index'>
                                </div>

                                <span>什么是增值服务>></span>
                            </div>
                        </div>

                        <div class="cons">
                            <p>租期：</p>

                            <div class="os-bos">
                                <div class="das">
                                    <DatePicker
                                        :clearable="false"
                                        type="date"
                                        v-model="dated"
                                        :options="options2"
                                        @on-change="dats"
                                    ></DatePicker>
                                </div>

                                <span>至</span>

                                <div class="das">
                                    <DatePicker
                                        :clearable="false"
                                        type="date"
                                        v-model="dateo"
                                        :options="options3"
                                        @on-change="dato"
                                    ></DatePicker>
                                </div>

                                <span class="op">1天起租</span>
                                <div class="pps">{{this.term}}</div>
                                <div class="ppo">？</div>
                            </div>
                        </div>

                        <div class="rent">
                            <p>租期天数：<span>{{liu}}</span>天</p>
                            <p>租金：<span>{{lis}}</span>元/天</p>
                        </div>

                        <div class="cons">
                            <p>数量：</p>

                            <div class="os-box bos">
                                <div class="reduce" @click='reds'>-</div>
                                <input class="num" type="text" v-model='val'>
                                <div class="plus" @click='plss'>+</div>
                                <div class="stock">库存：{{nus}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="os-total">
                        <div class="total-top">
                            <p>合计：￥<span>{{total}}</span>（含 租金 ￥120 + 押金 ￥1500）</p>
                        </div>

                        <div class="total-cen">
                            <p>
                                <img :src="ses">
                                <span class="p1">开通芝麻企业信用分，1500分以上可享受免押金租机</span>
                            </p>

                            <div class="ros">
                                <span>申请芝麻信用免押金</span>
                            </div>
                        </div>

                        <div class="total-cen foc">
                            <p>
                                <img :src="cre">
                                <span class="p1">提交个人征信报告或者企业征信，可享受免押金租机</span>
                            </p>

                            <div class="ros">
                                <span>申请征信免押金</span>
                            </div>
                        </div>
                    </div>

                    <div class="os-bot">
                        <div class="car" @click='adds'>
                            <img :src="ces">
                            <span>加入租赁箱</span>
                        </div>

                        <div class="lease">
                            <span>立即租赁</span>
                        </div>

                        <div class="calls">
                            <img :src="pho">
                            <span>客服电话：400-881-9131</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recom">
                <pages-rec></pages-rec>
            </div>
        </div>
    </div>

</template>

<script>

    import zlspHear from '@/components/public/zlsp-hear.vue'
    import pagesRec from './index/pages-rec.vue'

    import { DatePicker } from 'iview'

    export default {

        components : {

            zlspHear,
            pagesRec,
            DatePicker,

        },

        data () {

            return {

                res : [{
                    img : '../../../static/images/comclass-3/master/T420.jpg'
                },{
                    img : '../../../static/images/comclass-3/master/T420_2.jpg'
                },{
                    img : '../../../static/images/comclass-3/master/T420_3.jpg'
                },{
                    img : '../../../static/images/comclass-3/master/T420_4.jpg'
                }],

                obs : [{
                    img : '../../../static/images/comclass-3/master/T420_5.jpg'
                },{
                    img : '../../../static/images/comclass-3/master/T420_6.jpg'
                },{
                    img : '../../../static/images/comclass-3/master/T420_7.jpg'
                },{
                    img : '../../../static/images/comclass-3/master/T420_8.jpg'
                }],

                reo : [{
                    com : 'T420 i5/4G/320G/集显'
                },{
                    com : 'T420 i5/8G/128G/集显'
                },{
                    com : 'T420 i5/8G/128G/集显'
                },{
                    com : 'T420 i5/8G/128G/独显'
                },{
                    com : 'T420 i5/8G/128G/独显'
                },{
                    com : 'T420 i5/8G/128G/独显'
                }],

                red : [{
                    fon : '标准服务'
                },{
                    fon : '增值服务'
                }],

                fenx: '../../../static/images/comclass-3/blog.jpg',

                fens: '../../../static/images/comclass-3/wechat.jpg',

                soc : '../../../static/images/comclass-3/collection.jpg',

                xun : '../../../static/images/comclass-3/11.png',

                ses : '../../../static/images/comclass-3/sesame.png',

                cre : '../../../static/images/comclass-3/credit.png',

                ces : '../../../static/images/case_2.png',

                pho : '../../../static/images/comclass-3/phone.png',

                con : false,

                cos : false,

                von : false,

                vom : false,

                val : 1,

                total: 1620,

                nus : 20,

                options2: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000
                    }
                },

                options3: {
                    disabledDate (date) {
                        let initdate = new Date()+1 - 86400000
                        return (date && date.valueOf() < initdate) || (date && date.valueOf() <= new Date())
                    }
                },

                dason: '',

                dasto: '',

                dated: new Date().toLocaleDateString(),

                dateo: new Date().toLocaleDateString(),

                term : '随租随退',

                day  : '',

                hos  : false,

                liu  : 1,

                lis  : 5.5,

                ss   : ''

            }

        },
        
        computed : {

        },

        watch : {

            val () {

                let obs = this.nus

                if (this.val > 20) {

                    this.val = 20

                    this.total = 20 * 1620

                }

                if (this.val < 0) {

                    this.val = 1

                    this.total = 1620

                }

                if (this.val == '') {
                    this.total = 0
                }

                for (let i = 1; i <= obs; i++) {

                    if (this.val == i) {
                        this.total = i * 1620
                    }

                }

                return this.val

            }

        },

        methods : {

            lio (index) {

                this.cos = index

                this.con = index

            },

            mes () {

                this.hos = true

            },

            clos () {

                this.hos = false
                
            },

            les () {

                this.con--

                if (this.con < 0) {
                    this.con = this.res.length-1
                }

                this.cos = this.con

            },

            ris () {

                this.con++

                if (this.con > this.res.length-1) {
                    this.con = 0
                }

                this.cos = this.con

            },

            voo (index) {

                this.von = index

            },

            vov (index) {

                this.vom = index

            },

            reds () {

                if (this.val > 1) {

                    this.val--

                    this.total = this.total - 1620

                }

            },

            plss () {

                if (this.val < 20) {

                    this.val++

                    this.total = this.total + 1620

                }

            },

            oob () {

                this.term = this.day > 7 ? '短租' : '随租随退'

                if (this.day > 30) {

                    this.term = '长租'

                    this.lis = 3.5

                } else {

                    this.lis = 5.5
                    
                }

                if (this.day < 0) {

                    this.term = '租期不能小于0'

                    this.day = 0

                    this.lis = 0

                }

            },

            dats (date) {

                this.dason = date

                var sdate = new Date(date.replace(/-/g, "/"))

                var sdato = new Date(this.dasto.replace(/-/g, "/"))

                var days  = sdato.getTime() - sdate.getTime()

                this.day  = parseInt(days / (1000 * 60 * 60 * 24))

                this.oob()

                this.liu = this.day

            },

            dato (dates) {

                this.dasto = dates

                var sdate = new Date(this.dason.replace(/-/g, "/"))

                var sdato = new Date(dates.replace(/-/g, "/"))

                var days  = sdato.getTime() - sdate.getTime()

                this.day  = parseInt(days / (1000 * 60 * 60 * 24))

                this.oob()

                this.liu = this.day

            },

            adds () {

            }

        },

        created () {

            Date.prototype.Format = function (fmt) { //author: meizz

                var o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                }

                if (/(y+)/.test(fmt)) fmt = 
                    fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))

                for (var k in o)

                if (new RegExp("(" + k + ")").test(fmt)) fmt = 
                    fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))

                return fmt

            }

            var time = new Date().Format("yyyy-MM-dd")

            if (this.dasto == '') {
                this.dasto = time
            }

            if (this.dason == '') {
                this.dason = time
            }
            this.ss = this.$route.query.pid
            console.log(this.ss)

        },

        mounted () {

        }

    }

</script>
