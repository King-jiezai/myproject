







<style scoped>

    .hot {
        height: 28px;
    }
    .hot span {
        padding: 13px 2px;
        background: #e60012;
        float: left;
    }
    .hot div {
        float: left;
        font-size: 18px;
        font-weight: bold;
        color: #000;
        letter-spacing: 3px;
        margin-left: 10px;
    }
    .process {
        width: 987px;
        height: 164px;
        margin: 38px auto 63px;
    }
    .process-top {
        width: 100%;
        height: 45px;
    }
    .box {
        float: left;
        margin-right: 5px;
        position: relative;
    }
    .box:last-child {
        margin-right: 0;
    }
    .process-top .oo {
        width: 243px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        font-size: 14px;
        background: #eee;
        cursor: pointer;
    }
    .process-top .os {
        width: 243px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        color: #fff;
        background: #e60012;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .process-bottom {
        width: 987px;
        height: 119px;
        border: 1px solid #e60012;
        padding: 40px 40px 0;
    }
    .max {
        width: 300px;
        float: left;
    }
    .bos {
        font-size: 16px;
        margin-bottom: 10px;
        position: relative;
    }
    .bos div {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #e60012;
        float: left;
        position: absolute;
        top: 7px;
        left: -15px;
    }

</style>

<template>

    <div class="center">
        <div class="hot">
            <span></span>
            <div>热门问题</div>
        </div>

        <div class="process">
            <div class="process-top">
                <div class="box" v-for='(item, index) in reo'>
                    <div class="oo" @click='oo(index)'>{{item.fon}}</div>
                    <div class="os" v-if='os == index'>{{item.fos}}</div>
                </div>
            </div>

            <div class="process-bottom" v-for='(item, index) in res' v-if='os == index'>
                <div class="max">
                    <div class="bos">
                        <div></div>
                        <span>{{item.fon}}</span>
                    </div>
                    <div class="bos">
                        <div></div>
                        <span>{{item.zin}}</span>
                    </div>
                </div>
                <div class="max">
                    <div class="bos">
                        <div></div>
                        <span>{{item.num}}</span>
                    </div>
                </div>
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

                reo : [{
                    fon : '付款方式',
                    fos : '付款方式'
                },{
                    fon : '押金退款',
                    fos : '押金退款'
                },{
                    fon : '物流配送',
                    fos : '物流配送'
                },{
                    fon : '我的发票',
                    fos : '我的发票'
                }],

                res : [{
                    fon : '什么是对公付款？',
                    zin : '什么是分期付款？',
                    num : '什么是分期付款？'
                },{
                    fon : '押金',
                    zin : '押金',
                    num : '押金'
                },{
                    fon : '配送',
                    zin : '配送',
                    num : '配送'
                },{
                    fon : '发票',
                    zin : '发票',
                    num : '发票'
                }],

                os : false

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {
            
            oo (index) {
                this.os = index
            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
