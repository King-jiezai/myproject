







<style scoped>

    .fors-os {
        width: 333px;
        overflow: hidden;
        padding-bottom: 8px;
        border-bottom: 1px solid #ccc;
        margin-top: 20px;
    }
    .fsl-left {
        width: 120px;
        height: 85px;
        margin-right: 20px;
        float: left;
    }
    .fsl-right {
        width: 192px;
        float: right;
    }
    .fsl-right p {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .fsl-right span {
        line-height: 15px;
    }

</style>

<template>

    <div class="fors-ins">
        <div class="fors-os" v-for='item in res'>
            <div class="fsl-left">
                <img :src="item.img">
            </div>

            <div class="fsl-right">
                <p>{{item.fon}}</p>
                <span>{{item.zin}}</span>
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

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'res'
        ]

    }

</script>
