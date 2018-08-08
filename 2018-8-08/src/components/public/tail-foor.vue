







<style scoped>

    .tail-foor {
        padding-top: 40px;
    }
    .tail-oo {
        width: 181px;
        height: 49px;
        margin: 0 auto 40px;
        position: relative;
    }
    .tail-oo .img {
        width: 55px;
        height: 49px;
        margin-right: 8px;
        float: left;
        cursor: pointer;
    }
    .tail-oo .img:hover .code {
        display: block;
    }
    .tail-oo .img:last-child {
        margin-right: 0;
    }
    .code {
        width: 167px;
        height: 167px;
        position: relative;
        bottom: 220px;
        left: -56px;
        display: none;
    }
    .tail-os {
        font-size: 16px;
        text-align: center;
    }
    .os-oo {
        width: 500px;
        margin: 0 auto 10px;
    }
    .os-oo span {
        margin-right: 20px;
    }
    .os-oo span:last-child {
        margin-right: 0;
    }
    .os-op {
        width: 500px;
        margin: 0 auto;
    }

</style>

<template>

    <div class="tail-foor">
        <div class="tail-oo">
            <div class="img">
                <img :src="img">

                <div class="code">
                    <img :src="ims">
                </div>
            </div>

            <div class="img">
                <img :src="imo">
            </div>

            <div class="img">
                <img :src="imx">

                <div class="code">
                    <img :src="imy">
                </div>
            </div>
        </div>

        <div class="tail-os">
            <p class="os-oo">
                <span>广租广租广租广租广租</span>
                <span>粤ICP备14052794号﹣1</span>
            </p>

            <p class="os-op">地址：广州市天河区石牌西路8号展望数码广场九楼908﹣910</p>
        </div>
    </div>

</template>

<script>

    export default {

        components : {

        },

        data () {

            return {

                img : '../../../static/images/tu20.png',

                ims : '../../../static/images/blog-2.png',

                imo : '../../../static/images/tu21.png',

                imx : '../../../static/images/tu22.png',

                imy : '../../../static/images/wechat-2.png'

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
