



<style scoped>


   .memtimes {
        float: left;
        width: 400px;
        height: 400px;
        box-shadow:0px 2px  1px 1px #ccc;
        background: #fff;
        position: relative;
    }
    .access {
        float: left;
        width: 400px;
        height: 50px;
        background: #FFC928;
        line-height: 50px;
        color: #fff;     
    }
    .access p {
        float: left;
        font-size: 16px;
        margin-left: 20px;
    }
    .chevs {
        float: right;
        margin-top: 20px;
        margin-right: 20px;
    }
    .cont {
        width: 100%;
        overflow: hidden;
        height: 300px;
        overflow-y:auto;
    } 
   .page {
        float: left;
        width: 400px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        position: absolute;
        box-shadow: 0px 10px 15px #ccc;
        background:#F3F3F3; 
    }
    .page-oo {
        float: right;
    }
    .page-ss {
        width: 105px;
        float: left;
    }
    .page-ss .page-p {
        float: left;
        color: #000;
        padding-left: 5px;
    }
    .cls {
        float: left;
        width: 20px;
        height: 20px;
        border:1px solid #ccc;
        margin: 15px 2px ;            
    }
    .cls-oo {
        text-align: center;
        color: #000;
        line-height: 20px;
    }
 
   

</style>

<template>

     <div class="memtimes">
         <div class="access">
            <p>会员注册</p>
            <Icon type="chevron-right" class="chevs"></Icon>
        </div>

        <div class="cont">
            <Table border :columns="columns1" :data="data1"></Table>
        </div>

        <div class="page">
            <div class="page-ss">
                <p class="page-p">当前显示条数:</p>
                <div class="cls">
                    <p class="cls-oo">{{this.data1.length}}</p>
                </div>
            </div>
            <template>
                <Page 
                    :total="round" 
                    :page-size="num"
                    :page-size-opts="pages"  
                    @on-change="changepage" 
                    @on-page-size-change="onch" >                   
                </Page>
            </template>
        </div>

    </div>

</template>

<script>

    import { Icon,Page ,Table} from 'iview'

    export default {

        components : {
      
            Icon,
            Table,
            Page
        },

        data () {

            return {

                round  : ''          ,

                num    :  5         ,

                page   : 1           ,

                pages  : [5,10,15]   ,

                adata  : [],   

                  columns1: [
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: '登录名',
                        key: 'reg'
                    },
                    {
                        title: '联系方式',
                        key: 'phone'
                    },
                    {
                        title: '注册时间',
                        key: 'times'
                    }
                ],
                data1: [
                    {
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    },{
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    },{
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    },{
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    },{
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    },{
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    },{
                        name: '华法林',
                        reg: 'admin',
                        phone: '12655454515',
                        times: '2016-10-03'
                    }
                ],
             
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

                if(this.data1.length < this.num){

                    this.data1 = this.adata

                }else{

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

        },

        mounted () {


        }

    }

</script>
