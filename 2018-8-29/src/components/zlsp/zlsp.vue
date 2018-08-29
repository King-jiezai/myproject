







<style scoped>

    .zlsp {
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .top-hear {
        position: relative;
        z-index: 1;
    }
    .right-car {
        width: 100%;
        height: 620px;
        position: relative;
        top: 0;
        z-index: 0;
    }
    .slideBox {
        width: 100%;
        height: 620px;
        overflow: hidden;
        position: relative;
    }
    .slideBox .bd img {
        width: 100%;
        height: 620px;
    }
    .slideBox .prev, .slideBox .next {
        position: absolute;
        left: 3%;
        top: 50%;
        margin-top: -25px;
        display: block;
        width: 32px;
        height: 40px;
        background: url(../../../static/images/slider-arrow.png) -110px 5px no-repeat;
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
    .comclass-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .comclass-foor .heas {
        border-bottom: 1px solid #666;
    }
    .clear {
        clear: both;
    }

</style>

<template>

    <div class="zlsp">
        <div class="top-hear">
            <zlsp-hear></zlsp-hear>
        </div>
        
        <div class="right-car">
            <div class="slideBox">
                <div class="bd">
                    <span v-for='item in res'>
                        <img :src="item.img">
                    </span>
                </div>

                <a class="prev"></a>
                <a class="next"></a>
            </div>
        </div>

        <div>
            <zlspIndex></zlspIndex>
        </div>

        <div class="comclass-foor">
            <div class="heas">
                <tail-hear></tail-hear>
            </div>

            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>

    import zlspHear  from '@/components/public/zlsp-hear.vue'
    import zlspIndex from '@/components/zlsp/index/index.vue'
    import tailHear  from '@/components/public/tail-hear.vue'
    import tailFoor  from '@/components/public/tail-foor.vue'

    export default {

        components : {

            zlspHear ,
            zlspIndex,
            tailHear ,
            tailFoor ,

        },

        data () {

            return {

                res  : [{
                    img : '../../../static/images/banner-2.jpg'
                },{
                    img : '../../../static/images/banner.jpg'
                }]

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
