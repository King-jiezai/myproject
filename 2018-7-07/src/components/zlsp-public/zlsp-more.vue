







<style scoped>

    .ooo {
        width: 1200px;
        height: 38px;
        line-height: 38px;
        font-size: 17px;
        color: #000;
        border-bottom: 1px dashed #ccc;
    }
    .ooo-left {
        width: 135px;
        height: 38px;
        float: left;
    }
    .ooo-right {
        position: relative;
    }
    .ooo .sp2 {
        font-size: 15px;
        color: #5a5a5a;
        cursor: pointer;
        margin-right: 50px;
    }
    .ooo .sp2:hover {
        color: #e60012;
    }
    .col {
        color: #e60012;
    }


</style>

<template>

    <div class="bjb-more">
        <div class="ooo">
            <div class="ooo-left">{{res.ooo}}</div>

            <div class="ooo-right">
                <div class="on-left">
                    <span class="sp2" v-for='(item, index) in reo'>
                        <span :class='{col: coo == index}' @click='mix(index)'>{{item}}</span>
                    </span>
                </div>
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

                coo : false

            }
            
        },

        computed : {

        },

        methods : {

            mix (index) {

                this.coo = index

                if (this.reo[index] == '商务办公') {
                    // this.$router.push('/swbg')
                }

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
