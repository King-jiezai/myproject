







<style scoped>

    .mos {
        border-bottom: 1px solid #999;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .fsl-top {
        height: 35px;
        position: relative;
    }
    .fsl .sp {
        font-size: 17px;
        line-height: 30px;
        position: absolute;
        top: 0;
        left: 40px;
    }
    .fsl-bottom {
        overflow: hidden;
        line-height: 25px;
    }
    .fsl .sp2 {
        font-size: 13px;
        margin-right: 10px;
        float: left;
        cursor: pointer;
    }

</style>

<template>

    <div class="zlsp-nav">
        <div class="mos">
            <div class="fsl-top">
                <img :src="this.computer" v-show="reo == '电脑设备'">
                <img :src="this.office" v-show="reo == '办公设备'">
                <img :src="this.digital" v-show="reo == '数码产品'">
                <img :src="this.audiovisual" v-show="reo == '影音设备'">
                <img :src="this.network" v-show="reo == '网络设备'">
                <img :src="this.other" v-show="reo == '其他设备'">
                <span class="sp">{{reo}}</span>
            </div>

            <div class="fsl-bottom">
                <p v-for='(item, index) in res' class="sp2" @click='lis(index)'>{{item.name}}</p>
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

                computer : '../../../static/images/computer.png',

                office : '../../../static/images/printer-2.png',

                digital : '../../../static/images/camera-2.png',

                audiovisual : '../../../static/images/video.png',

                network : '../../../static/images/network.png',

                other : '../../../static/images/other.png'

            }
        },

        computed : {

        },

        methods : {

            async lis (index) {

                localStorage.removeItem("val")

                window.open('/bjb?classification=' + this.res[index].id)

            }

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'res',
            'reo'
        ]

    }

</script>
