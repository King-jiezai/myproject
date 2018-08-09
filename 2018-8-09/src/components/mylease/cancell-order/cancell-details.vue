

<style scoped>

    .cancel-orders {
        width: 910px;
        overflow: hidden;
    }
    .cancel-success {
        width: 500px;
        height: 250px;
        background-color: #fff;
        border:4px solid #cccbcb;
        border-radius: 5px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin: 0 auto;
        position: fixed;
        transform: translate(-50%, -50%);
        z-index: 999;
        cursor: pointer;
    }
    .cancel-success img {
        margin:  30px 220px 10px 220px;
    }
    .cancel-success p {
        text-align: center;
        line-height: 25px;
    }
    .cancel-success p:nth-child(2) {       
        font-size: 16px;
        font-weight: bold;
    }
    .cancel-success p:last-child {       
        color: #999999;
    }
    .cancel-success span {
        color: #0F78CF;        
    }
    .top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding:0 10px;
    }
    .top p {
        font-size: 16px;
        color: #999;
        float: right;
    }

</style>

<template>

    <div class="cancel-orders">
        <div class="cancel-success">
            <div class="top">
                <p @click="think">X</p>
            </div>
            <img src="../../../../static/images/sett/333-4.png">
            <p>取消申请已提交，系统正在审核</p>
            <p>请耐心等待，您可在<span @click="clideta">"取消详情"</span>中查看退款进度</p>
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

            think () {

                this.$store.commit('res', false)

                setTimeout(() => {
                    this.$store.commit('res', true)
                }, 10)

            },

            clideta () {
                window.open('/details')
            }
        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
