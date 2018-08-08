







<style scoped>

    .hel {
        width: 100%;
        height: 830px;
        background: url('../../../../static/images/bj1.jpg') center center no-repeat;
        padding-top: 80px;
        position: relative;
    }
    .hel .hean-top {
        color: #010101;
        text-align: center;
        font-size: 40px;
        margin-bottom: 5px;
    }
    .hean-top span {
        color: #e60012;
    }
    .hel .hean-cen {
        font-size: 19px;
        color: #eee;
        text-align: center;
        letter-spacing: 5px;
    }
    .hel-bottom {
        width: 1096px;
        height: 553px;
        margin: 50px auto 0;
    }
    .oo-top {
        width: 1096px;
        height: 138px;
    }
    .mos-left {
        float: left;
    }
    .mos-cen {
        width: 732px;
        height: 276px;
        float: left;
        position: relative;
    }
    .mos-cen p {
        color: #010101;
        font-size: 48px;
        position: absolute;
        top: 60px;
        left: 110px;
    }
    .mos-cen .fsl {
        color: #010101;
        font-size: 48px;
        position: absolute;
        bottom: 65px;
        left: 285px;
    }
    .mos-right {
        float: left;
    }
    .hel-ooo {
        width: 181px;
        height: 136px;
        margin: 0 2px 2px 0;
        float: left;
        position: relative;
    }
    .hel-oos {
        width: 181px;
        height: 136px;
        margin: 0 2px 2px 0;
        position: relative;
    }
    .hel-ooo:last-child {
        margin-right: 0;
    }
    .hel-oop {
        width: 181px;
        height: 136px;
        margin-bottom: 2px;
        position: relative;
    }
    .hel-opo {
        width: 730px;
        height: 274px;
        background: #fff;
        opacity: 0.4;
    }
    .oo-cen {
        width: 1096px;
        overflow: hidden;
    }

</style>

<template>

    <div class="hel">
        <div class="hel-top">
            <div class="hean-top">
                <p>我们能<span>做什么？</span></p>
            </div>

            <div class="hean-cen">只要你想得到，我们就能帮你实现！</div>

        </div>

        <div class="hel-bottom">
            <div class="oo-top">
                <hel-lease class="hel-ooo" v-for='(item, key) in res' :key='key' :item='item'></hel-lease>
            </div>

            <div class="oo-cen">
                <div class="mos-left">
                    <hel-lease class="hel-oos" v-for='(item, key) in oop' :key='key' :item='item'></hel-lease>
                </div>

                <div class="mos-cen">
                    <div class="hel-opo"></div>
                    <p>广租一站式</p>
                    <div class="fsl">多样化服务项目</div>
                </div>

                <div class="mos-right">
                    <hel-lease class="hel-oop" v-for='(item, key) in oos' :key='key' :item='item'></hel-lease>
                </div>
            </div>

            <div class="oo-top">
                <hel-lease class="hel-ooo" v-for='(item, key) in red' :key='key' :item='item'></hel-lease>
            </div>

        </div>
    </div>

</template>

<script>

    import helLease from './hel-lease.vue'

    export default {

        components : {

            helLease,

        },

        data () {

            return {

                res : [{
                    pos : '租赁',
                    blo : '服务器工作站'
                },{
                    pos : '出租',
                    blo : '笔记本电脑'
                },{
                    pos : '租赁',
                    blo : '平板电脑'
                },{
                    pos : '出租',
                    blo : '台式电脑'
                },{
                    pos : '租赁',
                    blo : '一体机电脑'
                },{
                    pos : '出租',
                    blo : '网络设备'
                }],

                red : [{
                    pos : '出租',
                    blo : '显示器'
                },{
                    pos : '租赁',
                    blo : 'LED液晶屏'
                },{
                    pos : '出租',
                    blo : '液晶电视'
                },{
                    pos : '租赁',
                    blo : '投影仪'
                },{
                    pos : '出租',
                    blo : '音响设备'
                },{
                    pos : '租赁',
                    blo : 'DV摄像机'
                }],

                oop : [{
                    pos : '出租',
                    blo : '复印机'
                },{
                    pos : '租赁',
                    blo : '打印机'
                }],

                oos : [{
                    pos : '租赁',
                    blo : '扫描仪'
                },{
                    pos : '出租',
                    blo : '扫描枪'
                }]

            }
            
        },

        computed : {

        },

        methods : {

        },

        created () {
            
        },

        mounted () {}

    }

</script>
