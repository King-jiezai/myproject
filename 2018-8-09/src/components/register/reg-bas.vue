







<style scoped>

    .reg {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .reg-bottom {
        width: 100%;
        height: 100%;
        border-top: 2px solid #000;
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .fsl-top {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto 80px;
        padding: 39px 0 0 0;
    }
    .oos-top {
        width: 1000px;
        overflow: hidden;
        border-bottom: 2px solid #eee;
        margin: 0 auto 30px;
    }
    .nav {
        font-size: 16px;
        line-height: 45px;
        border-bottom: 2px solid #e60012;
        margin-left: 49px;
        float: left;
    }
    .nav:first-child {
        border-bottom: 0;
    }
    .nav:first-child div {
        background: #ccc!important;
    }
    .nav:first-child span {
        color: #ccc!important;
    }
    .nav div {
        width: 28px;
        height: 28px;
        color: #fff;
        text-align: center;
        line-height: 28px;
        border-radius: 50%;
        background: #e60012;
        margin: 8px 10px 0 0;
        float: left;
    }
    .nav span {
        color: #e60012;
    }
    .oos-cen {
        width: 1000px;
        overflow: hidden;
        margin: 0 auto;
    }
    .fsl-bottom {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .fsl-bottom .heas {
        border-bottom: 1px solid #666;
    }

</style>

<template>

    <div class="reg" @click='boxs'>
        <div class="reg-top">
            <zlsp-hear></zlsp-hear>
        </div>

        <div class="reg-bottom">
            <div class="fsl-top">
                <div class="oos-top">
                    <div class="nav">
                        <div>1</div>
                        <span>注册账号</span>
                    </div>

                    <div class="nav">
                        <div>2</div>
                        <span>填写基本情况</span>
                    </div>
                </div>
<!--  -->
                <div class="oos-cen">
                    <reg-basic></reg-basic>
                </div>
            </div>

            <div class="fsl-bottom">
                <div class="heas">
                    <tail-hear></tail-hear>
                </div>

                <tail-foor></tail-foor>
            </div>
        </div>
    </div>

</template>

<script>

    import zlspHear from '@/components/public/zlsp-hear.vue'
    import tailHear from '@/components/public/tail-hear.vue'
    import tailFoor from '@/components/public/tail-foor.vue'
    import regBasic from './index/reg-basic.vue'

    export default {

        components : {

            zlspHear   ,
            tailHear   ,
            tailFoor   ,
            regBasic   ,

        },

        data () {

            return {

            }
            
        },

        computed : {

        },

        methods : {

            boxs () {

                this.$store.commit('bas', false)

                setTimeout(() => {
                    this.$store.commit('bas', true)
                }, 10)

            }

        },

        created () {

        },

        mounted () {

        }

    }

</script>
