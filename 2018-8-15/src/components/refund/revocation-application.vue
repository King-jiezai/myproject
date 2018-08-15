

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
    .revocation-cent {
        width: 100%;
        height: 30px;
        line-height:30px; 
        text-align:center;
        padding: 0 10px;
        font-size: 15px;
        margin: 30px 0 10px 0;
    }
    .determine {
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
        margin: 20px 30px; 
    }
    .cancel {
        float: left;
        width: 100px;
        height: 40px;
        font-size: 16px;
        border:1px solid #ccc;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        margin: 20px 0; 
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
            <div class="revocation-cent">
                <p>您仅能主动撤销一次，撤销后将不能再主动撤销，且超出保障期后无法再次发起售后</p>
            </div>
            <div class="determine" @click="deter">
                <p>确定</p>
            </div>
            <div class="cancel" @click="cancel">
                <p>取消</p>
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

            deter () {

                this.$store.commit('rch', false)

                setTimeout(() => {
                    this.$store.commit('rch', true)
                }, 10)
            },

            

            
        },

        created () {
   
        },

        mounted () {

        }

    }

</script>
