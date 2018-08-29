







<style scoped>

    .pages-details {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto 100px;
    }
    .details {
        float: left;
        width: 980px;
        overflow: hidden;
    }
    .details_top {
        height: 50px;
        background: #f1f1f1;
    }
    .details_top p {
        float: left;
        line-height: 50px;
        font-size: 16px;
        color: #000;
        padding: 0 30px;
        cursor: pointer;
    }
    .detail {
        color: #fff!important;
        background: #e60012;
    }
    .Recommend {
        float: right;
        width: 200px;
        overflow: hidden;
        border: 1px solid #f1f1f1;
    }
    .rec_hear {
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: #000;
        background: #f1f1f1;
    }

</style>

<template>

    <div class="pages-details">
        <div class="details">
            <div class="details_top">
                <p :class='{detail: dil == index}' v-for='(item, index) in datails' @click='datails_c(index)'>{{item.parameter}}</p>
            </div>
        </div>

        <div class="Recommend">
            <div class="rec_hear">企业都在租</div>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                datails : [{
                    parameter : '商品详情'
                },{
                    parameter : '基本参数'
                },{
                    parameter : '商品评价'
                }],

                dil : false

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

            datails_c (index) {

                this.dil = index

            }

        },

        created () {

            
        },

        mounted () {

        }

    }

</script>
