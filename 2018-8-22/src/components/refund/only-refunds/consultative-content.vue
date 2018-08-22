

<style scoped>

    .only-refunds {
        width: 100%;
        overflow: hidden;
    }
    .first-history {
        width: 100%;
        height: 100px;
        margin-top: 20px;
        border-bottom: 1px solid #ccc; 
    }
    .history-cents {
        font-size: 14px;
        float: left;
        line-height: 30px;
    }
    .history-cents p {
        width: 620px;
        float: left;
    }
    .history-cents span {
        color: #32A5FE;
    }
    .history-img {
        float: left;
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
    .history-img img {
        width: 80px;
        height: 80px;
    }
    .history-name {
        float: left;
        width: 620px;
        height: 20px;
        line-height: 20px;       
    }
    .history-name p:first-child {
        float: left;
        color: #666;
    }
    .history-name p:last-child {
        float: right;
        color: #999;
    }
    .history-name span {
        margin-left: 10px;
    }
    .history-cent {
        float: left;
        font-size: 12px;
        line-height: 20px;
        color: #666;
    }
    .history-cent span {
        margin: 0 3px;
    }
    
</style>

<template>

    <!--only-refunds 买家申请仅退款-->
    <div class="only-refunds">             
        <!--left-consult 协商记录-->
        <div class="left-consult">

            <!-- first-history 商家协商记录内容
            <div class="first-history" v-show="two">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>1</p>
                    <p>4<span>4</span></p>
                </div>
                <div class="history-cent">
                    <p>商家主动同意，退款给买家7元。</p>
                </div>
            </div>
            
            first-history 商家协商记录内容
            <div class="first-history" v-show="four">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>2</p>
                    <p>8<span>3</span></p>
                </div>
                <div class="history-cent">
                    <p>8</p>
                </div>
            </div>
            
            first-history 商家协商记录内容
            <div class="first-history" v-show="three">
                <div class="history-img">
                    <img :src="item.imgs">
                </div>
                <div class="history-name">
                    <p>25</p>
                    <p>2<span>5</span></p>
                </div>
                <div class="history-cent">
                    <p>2</p>
                </div>
            </div> -->

            <!--first-history 商家协商记录内容-->
            <div class="first-history" v-for='item in negotiationHistoryList' v-show="one">
                <div class="history-img">
                    <img :src="item.avatar">
                </div>
                <div class="history-name">
                    <p>{{item.createBy}}</p>
                    <p>{{item.createTime}}</p>
                </div>
                <div class="history-cents">
                    <P>{{item.content}}</P>
                </div>
            </div>

        </div>
    </div>

</template>

<script>

    import { mapState } from 'vuex'

    export default {

        components : {

        },

        data () {

            return {

                img : '../../../../static/images/refund/999.jpg',

                negotiationHistoryList : '',

                one : true
                
            }
            
        },

        watch : {

            res () {

                this.one = true

            },

            next () {

                this.one = true

                // this.two = true

                // this.three = true
            },

            rch () {

                this.one = true

                // this.four = true
            }
    
        },

        computed : {
            
            ...mapState([

                'res',

                'next',

                'rch'

            ])
        },

        methods : {

            async handle () {

                let afterSaleListAfterSale = await this.$api.afterSaleListAfterSale({
                    orderNo : this.$route.query.orderNo,
                    productId : this.$route.query.productId
                })

                this.negotiationHistoryList = afterSaleListAfterSale.data.negotiationHistoryList

            }

        },

        created () {
            
            this.handle()
        
        },

        mounted () {

        }

    }

</script>
