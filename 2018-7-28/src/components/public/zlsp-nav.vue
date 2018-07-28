







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
        line-height: 25px;
    }
    .fsl .sp2 {
        font-size: 13px;
        margin-right: 12px;
        cursor: pointer;
    }

</style>

<template>

    <div class="zlsp-nav">
        <div class="mos">
            <div class="fsl-top">
                <img :src="red">
                <span class="sp">{{reo}}</span>
            </div>

            <div class="fsl-bottom">
                <span v-for='(item, index) in res' class="sp2" @click='lis(index)'>{{item}}</span>
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

            }
        },

        computed : {

        },

        methods : {

            lis (index) {
                
                if (this.res[index] == '笔记本') {
                    this.$router.push('/bjb')
                }

                if (this.res[index] == '一体机') {
                    this.$router.push('/ytj')
                }

                if (this.res[index] == '台式机') {
                    this.$router.push('/tsj')
                }

            }

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'res',
            'red',
            'reo'
        ]

    }

</script>
