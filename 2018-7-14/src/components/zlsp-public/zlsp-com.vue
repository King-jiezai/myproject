







<style scoped>

    .lis-left {
        float: left;
    }
    .lis-left ul {
        height: 28px;
        border: 1px solid #ccc;
        background: #fff;
        margin-top: 3px;
        float: left;
        position: relative;
    }
    .lis-left ul li {
        width: 64px;
        height: 26px;
        color: #0a0a0a;
        text-align: center;
        line-height: 26px;
        list-style: none;
        float: left;
        cursor: pointer;
        position: relative;
    }
    .lis-left ul li p {
        width: 64px;
        height: 26px;
        border: 1px solid #e60012;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    .lis-left ul li:hover p {
        color: #e60012;
        display: block;
    }
    .cor {
        color: #fff!important;
        background: #e60012;
    }
    .ins {
        float: left;
        margin: 3px 0 0 15px;
        position: relative;
    }
    .hc {
        position: relative;
        z-index: 1;
    }
    .hc span {
        margin: 0 5px;
    }
    .hc .inps {
        width: 50px;
        height: 28px;
        border: 1px solid #ccc;
        padding: 0 5px;
        outline: medium;
    }
    .hd {
        width: 152px;
        height: 70px;
        border: 1px solid #ccc;
        background: #fff;
        position: absolute;
        top: -3px;
        left: -16px;
    }
    .hd .p1 {
        width: 46px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        border: 1px solid #ccc;
        position: absolute;
        bottom: 5px;
        left: 22px;
        cursor: pointer;
    }
    .hd .p1:hover {
        color: #e60012;
    }
    .hd .p2 {
        width: 46px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        background: #e60012;
        position: absolute;
        bottom: 5px;
        right: 22px;
        cursor: pointer;
    }
    .lis-right {
        float: right;
    }
    .lis-right span {
        font-size: 14px;
        line-height: 34px;
        margin: 0 10px;
        float: left;
    }
    .lis-right .num {
        width: 32px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #ccc;
        background: #fff;
        margin-top: 4px;
        float: left;
    }

</style>

<template>

    <div class="zlsp-com">
        <div class="lis-left">
            <ul>
                <li v-for='(item, index) in lis' :class="{cor: ooo == index}" @click='nvs(index)'>
                    <span>{{item}}</span>
                    <p></p>
                </li>
            </ul>

            <div class="ins">
                <div class="hc">
                    <input class="inps" type="text" placeholder="￥" @click.stop='onin'>
                    <span>-</span>
                    <input class="inps" type="text" placeholder="￥" @click.stop='onin'>
                </div>

                <div class="hd" v-if='sos'>
                    <p class="p1" @click='err'>取消</p>
                    <p class="p2" @click='suc'>确定</p>
                </div>
            </div>
        </div>

        <div class="lis-right">
            <span>1/10</span>
            <div class="num"><</div>
            <div class="num">></div>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                ooo : false,

                sos : false

            }

        },

        methods : {

            nvs (index) {

                this.ooo = index

            },

            onin () {

                this.sos = true

            },

            err () {

                this.sos = false

            },

            suc () {

            }


        },

        created () {

            
        },

        mounted () {

        },

        props : [
            'lis'
        ]

    }

</script>
