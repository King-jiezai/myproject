







<style scoped>

    .menus {
        width: 1100px;
        height: 260px;
        border-radius: 8px;
        box-shadow: 2px 8px 10px 0px #666;
        background: #fff;
        padding: 45px 43px 0;
        margin: 0 auto;
    }
    .menus-left {
        width: 592px;
        height: 215px;
        float: left;
    }
    .menus .sea {
        height: 50px;
    }
    .menus .sea-left {
        font-size: 22px;
        margin-right: 100px;
        float: left;
    }
    .menus .sea-right {
        width: 372px;
        height: 50px;
        border: 1px solid #e60012;
        border-radius: 50px;
        float: left;
        position: relative;
    }
    .menus .box-left {
        width: 290px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 15px;
        float: left;
    }
    .box-left span {
        color: #999;
        cursor: pointer;
    }
    .box-left .lower {
        width: 530px;
        height: 300px;
        border: 1px solid #eee;
        background: #fff;
        position: absolute;
        top: 55px;
        left: -79px;
        z-index: 1;
    }
    .menus .box-right {
        width: 80px;
        height: 48px;
        background: #e60012;
        border-radius: 0 50px 50px 0;
        float: right;
    }
    .box-right img {
        width: 38px;
        height: 28px;
        margin: 11px 21px;
    }
    .menus .equ {
        height: 130px;
        margin-top: 35px;
    }
    .menus .equ-os {
        color: #e60012;
        line-height: 30px;
        text-align: center;
        float: left;
        position: relative;
        cursor: pointer;
    }
    .lowers {
        width: 530px;
        height: 300px;
        border: 1px solid #eee;
        background: #fff;
        position: absolute;
        left: -223px;
        display: none;
    }
    .equ-os:hover .lowers {
        display: block;
    }
    .equ-os .img {
        position: absolute;
        top: 5px;
        left: 0;
    }
    .menus-spos {
        font-size: 14px;
        color: #e60012;
        margin-left: 28px;
    }
    .menus-right {
        width: 323px;
        height: 215px;
        float: right;
    }
    .menus-right span {
        font-size: 14px;
    }
    .sub-top {
        width: 323px;
        line-height: 25px;
        border: 0;
        border-bottom: 1px solid #999;
        margin: 5px 0 10px 0;
        outline: medium;
    }
    .sub-cen {
        width: 323px;
        height: 50px;
        resize: none;
        outline: medium;
        border: 1px solid #999;
        margin: 5px 0 15px 0;
        display: block;
    }
    .sub-bottom {
        width: 323px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        background: #e60012;
    }

</style>

<template>

    <div class="menus">
        <div class="menus-left">
            <div class="sea">
                <div class="sea-left">热门租赁</div>

                <div class="sea-right">
                    <div class="box-left">
                        <span @click.stop='lower'>选择类目</span>
                        <div class="lower" v-if='ooo'></div>
                    </div>

                    <div class="box-right">
                        <img :src="imgs">
                    </div>
                </div>
            </div>

            <div class="equ">
                <div>
                    <menus-equ :res='res'></menus-equ>
                </div>

                <span class="equ-os">
                    <img class="img" :src="imgo">
                    <span class="menus-spos">更多设备</span>
                    <div class="lowers"></div>
                </span>
            </div>
        </div>

        <div class="menus-right">
            <div>
                <span>您的联系方式</span>

                <div>
                    <input class="sub-top" type="text">
                </div>
            </div>

            <div>
                <span>您的留言内容</span>

                <div>
                    <textarea class="sub-cen"></textarea>
                </div>
            </div>

            <div class="sub-bottom">提交租赁</div>
        </div>
    </div>

</template>

<script>

    import menusEqu from './menus-equ.vue'

    import { mapState } from 'vuex'

    export default {

        components : {

            menusEqu,

        },

        data () {

            return {

                res : [{
                    img : '../../../../static/images/tu5.png',
                    eqs : '办公电脑',
                    day : '2.8/天',
                    name: 'Thinkpad'
                },{
                    img : '../../../../static/images/tu6.png',
                    eqs : '办公设备',
                    day : '12.8/天',
                    name: '复合一体机'
                },{
                    img : '../../../../static/images/tu7.png',
                    eqs : '数码影音',
                    day : '65/天',
                    name: 'DV摄像机'
                },{
                    img : '../../../../static/images/tu8.png',
                    eqs : '网络设备',
                    day : '150/天',
                    name: '上网宝'
                }],

                imgs : '../../../../static/images/search.png',

                imgo : '../../../../static/images/tu8_9.png',

                ooo  : false

            }

        },

        computed : {

            ...mapState([

                'poo'

            ])

        },

        watch : {

            poo () {

                this.ooo = false

            }

        },

        methods : {

            lower () {

                this.ooo = !this.ooo

            }

        },

        created () {
            
        },

        mounted () {}

    }

</script>
