







<style scoped>

    .oos {
        overflow-y: hidden;
        font-size: 17px;
        color: #000;
        border-bottom: 1px dashed #ccc;
        padding: 17px 0;
    }
    .oos-left {
        float: left;
        margin-top: 13px;
    }
    .oos-right {
        width: 1065px;
        float: right;
        position: relative;
    }
    .fs {
        width: 153px;
        height: 50px;
        border: 1px solid #f2f2f2;
        margin: 0 -1px -1px 0;
        overflow: hidden;
        float: left;
        position: relative;
        cursor: pointer;
    }
    .fs img {
        position: absolute;
        top: 6px;
        left: 25px;
    }
    .dis {
        width: 151px;
        height: 48px;
        color: #e60012;
        text-align: center;
        line-height: 50px;
        border: 1px solid #e60012;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    .fs:hover .dis {
        display: block;
    }
    .ooo-right {
        position: relative;
        z-index: 999;
    }
    .on-right {
        position: absolute;
        top: 6px;
        right: 200px;
    }
    .on-right .inp {
        width: 50px;
        height: 25px;
        line-height: 25px;
        font-size: 15px;
        padding: 0 5px;
        border: 1px solid #ccc;
        outline: medium;
    }
    .on-right span {
        margin: 0 5px;
    }
    .on-right .deter {
        text-align: center;
        font-size: 15px;
        color: #5c5a5a;
        padding: 3px 8px;
        border: 1px solid #ccc;
        background: #eee;
        cursor: pointer;
    }
    .pops {
        width: 1200px;
        height: 29px;
        font-size: 14px;
        text-align: center;
        border-top: 1px solid #ccc;
        position: absolute;
        bottom: -28px;
        transition: border-color .15s ease-in-out;
    }
    .pops:hover {
        border-top: 1px solid #e60012;
    }
    .pops:hover span {
        color: #e60012;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #e60012;
        border-left: 1px solid #e60012;
        border-right: 1px solid #e60012;
    }
    .pops span {
        display: inline-block;
        padding: 3px 25px;
        border: 1px solid #ccc;
        border-top: 1px solid #fff;
        position: relative;
        top: -1px;
        cursor: pointer;
        transition: border-color .15s ease-in-out;
    }
    .nnn:nth-child(n+6) {
        display: none;
    }

</style>

<template>

    <div class="screen">
        <div class="oos">
            <div class="oos-left">品牌：</div>

            <div class="oos-right">
                <div class="fs" v-for='item in reo'>
                    <img :src="item.img">
                    <div class="dis">{{item.zin}}</div>
                </div>
            </div>
        </div>

        <div class="ooo-right" v-if='pos[0]'>
            <div class="on-right">
                <input v-model='val1' class="inp" type="text">
                <span>-</span>
                <input v-model='val2' class="inp" type="text">
                <span class="deter" @click='deter'>确定</span>
            </div>
        </div>

        <bjb-more
            :class='{nnn: ns}'
            v-for='(item, key) in pos'
            :key='key'
            :res='item'
            :reo='item.fon'
        ></bjb-more>

        <div class="pops">
            <span @click='open'>{{this.btn}}</span>
        </div>
    </div>

</template>

<script>

    import bjbMore  from './zlsp-more.vue'

    export default {

        components : {

            bjbMore,

        },

        data () {

            return {

                val1 : null,

                val2 : null,

                ns   : true,
                
                btn : '更多选项'

            }

        },

        methods : {

            deter () {

            },

            open () {

                if (this.btn == '收起') {

                    this.btn = '更多选项'

                    this.ns = true

                } else {

                    this.btn = '收起'

                    this.ns = false

                }

            }

        },

        created () {

            
        },

        mounted () {

        },

        props : [
            'pos',
            'reo'
        ]

    }

</script>
