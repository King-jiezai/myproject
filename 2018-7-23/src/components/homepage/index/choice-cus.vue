







<style scoped>

    .choice-oso {
        width: 257px;
        height: 236px;
        font-size: 12px;
        padding: 0 18px;
    }
    .oso-top {
        text-align: center;
    }
    .oso-cen {
        font-size: 26px;
        text-align: center;
        margin: 5px 0;
    }
    .oso-bottom {
        line-height: 25px;
    }

</style>

<template>

    <div class="choice-cus">
        <div class="choice-oso" v-for='item in res'>
            <div class="oso-top">
                <img :src="item.img">
            </div>

            <div class="oso-cen">{{item.cen}}</div>
            <div class="oso-bottom">{{item.bot}}</div>
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
