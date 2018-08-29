

<style scoped>

    .model_pre {
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .revocation-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 30px;
    }
    .revocation-top span {
        float: right;
        margin-right: 20px;
    }
    .determine {
        width: 220px;
        overflow: hidden;
        margin: 50px auto 0;
    }
    .determine p {
        float: left;
        width: 100px;
        height: 40px;
        font-size: 16px;
        color: #fff;
        background-color: #e60012;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        margin-right: 20px;
    }
    .determine p:last-child {
        background: #fff;
        color: #666;
        border: 1px solid #999;
        margin-right: 0;
    }
    
</style>

<template>

    <!--only-refunds 买家申请仅退款-->
    <div class="only-refunds">

        <!--revocation-refunds 撤销申请-->
        <div class="revocation-refunds">
            <div class="revocation-top">
                <span @click="cancel">x</span>
            </div>
            <div class="determine">
                <p @click="deter">确定</p>
                <p @click="cancel">取消</p>
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

        watch : {

        },

        computed : {

        },

        methods : {
            
            cancel () {

                this.$store.commit('agins', false)

                setTimeout(() => {
                    this.$store.commit('agins', true)
                }, 10)

            },

            //确认撤销申请
            async deter () {

                let afterSaleAnnul = await this.$api.afterSaleAnnul({
                    orderNo : this.$route.query.orderNo,
                    productId : this.$route.query.productId
                })

                if (afterSaleAnnul.data.status == 1) {

                    this.$store.commit('next', false)

                    setTimeout(() => {
                        this.$store.commit('next', true)
                    }, 10)

                }

            }

        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
