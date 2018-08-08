







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
        margin: 0 auto 80px;
        padding: 39px 0 0 400px;
    }
    .fsl-top .sp {
        font-size: 18px;
        color: #666;
        margin-bottom: 24px;
    }
    .ooo {
        overflow: hidden;
        margin-bottom: 40px;
    }
    .ooo span {
        font-size: 24px;
        color: #333;
    }
    .ooo p {
        font-size: 14px;
        color: #444;
        line-height: 28px;
        margin-left: 25px;
    }
    .obs {
        overflow: hidden;
    }
    .obs-left {
        width: 250px;
        height: 56px;
        line-height: 56px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        border-radius: 8px;
        background: #e60012;
        float: left;
        margin: 24px 25px 0 0;
        cursor: pointer;
    }
    .obs-right {
        margin-top: 24px;
        line-height: 56px;
    }
    .obs-right img {
        position: relative;
        top: 2px;
    }
    .fsl-bottom {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .fsl-bottom .heas {
        border-bottom: 1px solid #666;
    }
    .redo {
        margin: 40px 0 28px 0;
    }
    .redo:first-child {
        margin-top: 0;
    }

</style>

<template>

    <div class="reg">
        <div class="reg-top">
            <zlsp-hear></zlsp-hear>
        </div>

        <div class="reg-bottom">
            <div class="fsl-top">
                <p class="sp">请选择身份</p>

                <div class="ooo">
                    <RadioGroup v-model="vertical" vertical @on-change='list'>
                        <Radio label="personal" class='redo'>
                            <span>个人</span>
                        </Radio>

                        <p>可长租，短租，广租一站式服务 + 定制服务</p>
                        <p>满足你一切需求</p>

                        <Radio label="enterprise" class='redo'>
                            <span>企业</span>
                        </Radio>

                        <p>提交企业资料，通过审核，可享受免押金服务</p>
                    </RadioGroup>
                </div>

                <div class="obs">
                    <div class="obs-left" @click='reg'>立即注册</div>

                    <div class="obs-right">
                        <img src="../../../static/images/reg/jianyi1.png">
                        <span>意见反馈</span>
                    </div>
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

    import { RadioGroup, Radio } from 'iview'

    export default {

        components : {

            zlspHear  ,
            tailHear  ,
            tailFoor  ,
            RadioGroup,
            Radio     ,

        },

        data () {

            return {

                vertical : 'personal',

                preo     : ''

            }
            
        },

        computed : {

        },

        methods : {

            list (index) {

                this.preo = index

            },

            reg () {

                if (this.preo == 'enterprise') {

                    this.$router.push('/regCompanyo')

                } else {

                    this.$router.push('/regPers')

                }

            }

        },

        created () {

            this.list()

        },

        mounted () {

        }

    }

</script>
