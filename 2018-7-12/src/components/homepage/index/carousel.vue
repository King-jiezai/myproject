







<style scoped>

    .slideBox {
        width: 100%;
        height: 500px;
        position: relative;
    }
    .slideBox .bd img {
        width: 100%;
        height: 500px;
    }
    .slideBox .prev, .slideBox .next {
        position: absolute;
        left: 3%;
        top: 50%;
        margin-top: -25px;
        display: block;
        width: 32px;
        height: 40px;
        background: url(../../../../static/images/slider-arrow.png) -110px 5px no-repeat;
        filter: alpha(opacity=50);
        opacity: 0.5;
    }
    .slideBox .next {
        left: auto;
        right: 3%;
        background-position: 8px 5px;
    }
    .slideBox .prev:hover, .slideBox .next:hover {
        filter: alpha(opacity=100);
        opacity: 1;
    }

</style>

<template>

    <div class="slideBox">

        <div class="bd">
            <span v-for='item in res'>
                <img :src="item.img">
            </span>
        </div>

        <a class="prev"></a>
        <a class="next"></a>

    </div>

</template>

<script>


    export default {

        components : {


        },

        data () {

            return {

                res  : [{
                    img : '../../../../static/images/banner.jpg'
                    
                },{
                    img : 'https://www.rrzuji.com/zj_pc/v/home-sram/index/images/flash_222.jpg'
                }],

            }
            
        },

        computed : {

        },

        methods : {

        },

        created () {

        },

        mounted () {

            $(".slideBox").slide({

                mainCell : ".bd",
                autoPlay : true,
                effect   : "leftLoop",
                delayTime: 1000

            })

        }

    }

</script>
