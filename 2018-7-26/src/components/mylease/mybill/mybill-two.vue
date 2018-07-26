


<style scoped>

    .mybill {
        width: 910px;
        overflow: hidden;
    }
    .mybill p {
        float: left;
        width: 100px;
        line-height: 40px;
        text-align: center;
    }
    .page {
        margin-top: 20px;
        float: right;
    }

</style>

<template>
 

        <div class="mybill">        
            <Table  :columns="columns1" :data="data1" size="small" ref="table"></Table>
            <div class="page">
                <Page 
                        :total="round" 
                        :page-size="num"
                        @on-change="changepage" 
                        @on-page-size-change="onch" >                   
                </Page>
            </div> 
        </div>

</template>

<script>

    import {Icon , Table , Page} from 'iview'

     import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            Table,
            Page

        },

        data () {

            return { 

                round  : '' ,

                num    :  7 ,

                adata  : [], 

                columns1: [
                    {
                        title: '产品',
                        key: 'name',
                        width :80
                    },
                    {
                        title: '订单号',
                        key: 'dan',
                        width:150
                    },
                    {
                        title: '起止日期',
                        key: 'date'
                    },
                    {
                        title: '支付状态',
                        key: 'zhtai'
                    },
                    {
                        title: '月租金',
                        key: 'month'
                    },
                    {
                        title: '应付期数',
                        key: 'qishu'
                    },
                    {
                        title: '应付金额',
                        key: 'rech'
                    },
                    {
                        title: '付款日',
                        key: 'time'
                    },
                    {
                        title: '操作',
                        
                    }
                ],

                 data1: [
                    {
                        name : 'X230',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20',
                    },{
                         name : 'X420',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20'
                    },{
                        name : 'X230',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20'
                    },{
                        name : 'X230',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20'
                    },{
                        name : 'X230',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20'
                    },{
                         name : 'X230',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20'
                    },{
                        name : 'X230',
                        dan  : '12354611510',
                        date : '2018-7-01',
                        zhtai: '微信支付',
                        month: 1300,
                        qishu: 3,
                        rech : 2000,
                        time : '2018-7-20'
                    }
                ],        

                
            }

            
        },

        computed : {

             ...mapState([

              'expr'

            ])

        },

        watch : {
            
            expr () {
                   this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
            }
        },

        methods : {


            changepage (index) {

                this.page = index

                var start = (index - 1) * this.num

                var end = index * this.num

                this.data1 = this.adata.slice(start, end)
            },

            onch (kk) {

                this.num = kk

                this.changepage(this.page)

            },

            pop () {

                this.adata = this.data1

                this.round = this.data1.length

                if(this.data1.length < this.num){

                    this.data1 = this.adata

                }else{

                    this.data1 = this.adata.slice(0,this.num)

                }
               
            },        
       
        },

        created () {

            this.pop()
  
        },

        mounted () {

        }

    }

</script>
