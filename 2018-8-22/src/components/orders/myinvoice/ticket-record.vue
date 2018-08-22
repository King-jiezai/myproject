


<style scoped>
    
    .ticketRecord {
        width: 910px;
        overflow: hidden;

    }
    .page {
        margin-top: 20px;
        float: right;
    }
    .noTransmission {
        width: 100%;
        height: 70px;
        border:1px solid #ccc;
        border-top: 0px;
        line-height: 70px;
        text-align: center;
    }

</style>

<template>
            
    <div class="ticketRecord">

        <!-- noTransmission 暂无数据-->
        <div class="noTransmission" v-show="noshows">
            <p>暂无数据！</p>
        </div> 

        <!-- Table 数据表--> 
        <div v-show="shows">  
            <Table  :columns="columns1" :data="data1" size="small" ref="table"></Table>
            <div class="page">
                <Page 
                    :total="round" 
                    :page-size="num"
                    :page-size-opts="pages"
                    show-sizer
                    @on-change="changepage" 
                    @on-page-size-change="onch"
                    :transfer=true>                   
                </Page>
            </div>
        </div>
    </div>
   
</template>

<script>
        
    import {Table, Page} from 'iview'

    export default {

        components : {

            Table,
            Page,

        },

        data () {

            return {

                adata  : [], 

                num    :  5 ,

                page   : 1,

                pages  : [5,10,15,20,100] ,

                shows  : true,

                noshows: false,

                columns1: [
                    {
                        title: '发票类型',
                        key: 'invoiceType',
                        width :100
                    },
                    {
                        title: '发票抬头',
                        key: 'raised',
                        width:190
                    },
                    {
                        title: '开票金额',
                        key: 'Invoicevalue',
                        width :100
                    },
                    {
                        title: '收货人',
                        key: 'consignee',
                        width :100
                    },
                    {
                        title: '收货电话',
                        key: 'phone',
                        width :120
                    },
                    {
                        title: '申请状态',
                        key: 'status',
                        width :100
                    },
                    {
                        title: '申请日期',
                        key: 'date'
                    },
                    {
                        title: '操作',
                        width :100
                        
                    }
                ],

                data1: [
                    {
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    },{
                        invoiceType : '普通发票',
                        raised  : '1235461151077777770000',
                        Invoicevalue : '2000',
                        consignee: '李帅哥',
                        phone: '13059384166',
                        status: "已提交",
                        date : "2018-7-25",
                    }
                ]     

            }
            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            pop () {

                this.adata = this.data1

                this.round = this.data1.length

                if (this.data1.length < this.num) {

                    this.data1 = this.adata

                } else {

                    this.data1 = this.adata.slice(0,this.num)

                }
               
            },       

            changepage (index) {

                this.page = index

                var start = (index - 1) * this.num

                var end = index * this.num

                this.data1 = this.adata.slice(start, end)

            },

            onch (kk) {

                this.num = kk

                this.changepage(this.page)

            }

        },

        created () {

           this.pop()

           if (this.data1 == 0) {

                this.shows = false

                this.noshows = true

            } else {

                this.shows = true

                this.noshows = false

            }

        },


        mounted () {

        }

    }

</script>
