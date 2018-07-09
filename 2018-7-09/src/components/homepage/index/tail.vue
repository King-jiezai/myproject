







<style scoped>

    .tail {
        width: 100%;
        background: #fff;
        padding-bottom: 50px;
    }
    .tail-top {
        border-bottom: 1px solid #666;
    }
    .tail-sp {
        width: 936px;
        overflow: hidden;
        font-size: 16px;
        padding-top: 30px;
        margin: 0 auto;
    }
    .tail-sp .fsl {
        width: 100px;
        height: 35px;
        color: #fff;
        text-align: center;
        line-height: 35px;
        background: #666;
    }
    .tail-zin {
        margin-top: 10px;
    }
    .tail-zin p {
        margin-right: 30px;
        float: left;
    }

</style>

<template>

    <div class="tail">
        <div class="tail-top">
            <tail-hear></tail-hear>
        </div>

        <div class="tail-bottom">
            <div class="tail-sp">
                <p class="fsl">友情链接</p>

                <div class="tail-zin">
                    <p>友情链接</p>
                    <p>友情链接</p>
                    <p>友情链接</p>
                    <p>友情链接</p>
                    <p>友情链接</p>
                    <p>友情链接</p>
                </div>
            </div>

            <tail-foor></tail-foor>
        </div>
    </div>

</template>

<script>

    import tailHear from '@/components/public/tail-hear.vue'
    import tailFoor from '@/components/public/tail-foor.vue'

    export default {

        components : {

            tailHear,
            tailFoor,

        },

        data () {

            return {

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
