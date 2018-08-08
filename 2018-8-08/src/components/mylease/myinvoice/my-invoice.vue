


<style scoped>
    
    .body {
        width: 910px;
        overflow: hidden;
    }
    .invoice_top {
        height: 40px;
        line-height: 40px;
        background: #eff9fe;
    }
    .invoice_top p {
        float: left;
        margin-left: 16px;
        font-size: 14px;
        cursor: pointer;
    }
    .invoice_top span {
        margin-left: 15px;
        color: #ccc;
    }
    .invoice_top p:last-child span {
        display: none;
    }
    .lon {
        color: #42C9FF;
    }



</style>

<template>
  
        <div class="body">

            <!-- invoice_top 头部导航-->
            <div class="invoice_top">
                <p v-for='(item,index) in invo' :class="{'lon' : fons == index}" @click="invos(index)">{{ item.fon }}<span>|</span></p>
            </div>
                          
            <div v-if="applica">
                <application></application>
            </div>

            <div v-if="icketRecord">
                <ticket></ticket>
            </div>
          
        </div>  

   
</template>

<script>

    import application from '@/components/mylease/myinvoice/application-ticket.vue'
    import ticket from '@/components/mylease/myinvoice/ticket-record.vue'
        
    import { RadioGroup, Radio , Icon} from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,
            Icon,
            application,
            ticket,

        },

        data () {

            return {

                invo : [{
                    fon : '开票申请' 
                },{
                    fon : '开票记录' 
                }],

                fons : false,

                applica : true,

                icketRecord : false,

                
            }
            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            invos (index) {

                if (this.invo[index].fon == '开票申请') {

                    this.applica = true

                    this.icketRecord = false

                }else {
                    
                    this.icketRecord = true

                    this.applica = false
                }

                this.fons = index
            },

            
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
