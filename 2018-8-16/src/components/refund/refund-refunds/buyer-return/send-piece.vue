

<style scoped>

    .buyer-return {
        width: 100%;
        margin-bottom: 110px;
    }
    .return-way {
        height: 30px;
        width: 758px;
        line-height: 30px;
        overflow: hidden;
        margin-top: 30px ;
    }
    .inpcom {
        float: left;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border:1px solid #ccc;
        padding-left: 10px;
        border-radius: 5px;
        color: #999;
    }
    .modify-pss {
        float: left;
        width:85px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin:0 10px 0 50px;
    }
    .sp1 {
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .inpcom p {
        float: left;
    }
    .select {
        width: 200px;
        height: 150px;
        overflow: hidden;
        background-color: #fff;
        border:1px solid #ccc;
        overflow-y: auto;
        position: absolute;
        z-index: 99999;
        margin: 30px 0 0 145px;
        border-top: 0px;
    }
    .select p {
        padding-left: 40px;
    }
    .select p:hover {
        background-color: #ccc;
        cursor: pointer;
    }
    .inps {
        color: #666!important;
    }
    .destination {
        margin:5px 0 0 145px ;
        color: #999;
    }
    .take-part {
        height: 97px;
        width: 758px;
        overflow: hidden;
        margin-top: 30px ;
    }
    .part-name {
        float: left;
        margin-right: 20px;
        width: 100px;
        height: 97px;
        border: 1px solid #ccc;
        overflow: hidden;
        text-align: center;
        border-radius: 5px;
    }
    .part-name:last-child {
        margin-right: 0;
    }
    .part-img {
        width: 80px;
        height: 70px;
        margin: 10px 9px 0 9px;
    }
    .part-name p {
        background-color:rgba(0,0,0,0.6);
        height: 25px;
        line-height: 25px;
        margin-top: -10px;
        position: relative;
        z-index: 9999;
        color: #fff;
    }
    .take-time {
        height: 30px;       
        line-height: 30px;
        margin-top:40px ;
    }
    .time {
        float: left;
    }
    .take-addres {
        width: 100%;
        line-height: 30px;
        margin-top: 40px ;
        height: 70px;
    }
    .addres-info {
        float: left;
        width: 500px;
        height: 70px;
        line-height: 25px;
        border:1px solid #ccc;
        padding: 10px 0 10px 10px;
        color: #999;
        border-radius: 5px;
    }
    .addres-info p:first-child span {
        margin-left: 50px;
    }

</style>

<template>
    
    <!--refund 买家退货信息-->
    <div class="buyer-return" @click="close">

        <!--return-way 退货方式-->
        <div class="return-way">
            <p class="modify-pss"><span class="sp1">*</span>退货方式：</p>
            <div class="inpcom" @click.stop="clses" :class="{'inps': inpus}">
                <p>{{ val }}</p>
                <Icon type="ios-arrow-down" />
            </div>
            <div class="select" v-show="sels">
                <p v-for="(item,index) in sel" @click="clisel(index)">{{ item.fon }}</p>
            </div>
        </div>
        
        <!--destination 目的地-->
        <p class="destination">将送到广东省广州市，1Kg内快递费8.00元</p>

        <!--take-part 取件商品-->
        <div class="take-part">
            <p class="modify-pss"><span class="sp1">*</span>取件商品：</p>
            <div class="part-name" v-for="item in part">
                <div class="part-img">
                    <img :src="item.img">
                </div>
                <p>￥{{item.price}}</p>
            </div>
        </div>

        <!--take-time 取件时间-->
        <div class="take-time">
            <p class="modify-pss"><span class="sp1">*</span>取件时间：</p>
            <div class="time">
                <Row>
                    <Col span="12">
                        <DatePicker type="date" placeholder="选择时间" style="width: 200px"></DatePicker>
                    </Col>     
                </Row>
            </div>
        </div>

        <!--take-addres 取件地址-->
        <div class="take-addres">
            <p class="modify-pss"><span class="sp1">*</span>取件地址：</p>
            <div class="addres-info" v-for="item in addres">
                <p>收货人：{{item.name}} <span>{{item.phone}}</span></p>
                <p>收货地址：{{item.adds}}</p>
            </div>
        </div>
    </div>

</template>

<script>
    
    import { Icon ,Row ,Col ,DatePicker} from 'iview'
    
    export default {

        components : {

            Icon,
            Row,
            Col,
            DatePicker
        
        },

        data () {

            return {

                val : '快递上门取件',

                inpus : false,

                sels : false,

                sel : [{
                    fon : '顺丰快递'
                },{
                    fon : '圆通快递'
                },{
                    fon : 'Al万象物流'
                },{
                    fon : '安能物流'
                },{
                    fon : '安世通国际快递'
                },{
                    fon : '安迅物流'
                },{
                    fon : '百世国际'
                },{
                    fon : '百世快递'
                },{
                    fon : '韵达'
                },{
                    fon : '申通'
                },{
                    fon : '中通'
                },{
                    fon : 'EMS'
                },{
                    fon : '优速'
                },{
                    fon : '天天'
                },{
                    fon : '汇通'
                },{
                    fon : '邮政包裹'
                },{
                    fon : '宅急送'
                }],

                part : [{
                    img : '../../../../static/images/refund/11.png',
                    price: 2160,
                }],

                addres : [{
                    name : '某某某',
                    phone: '18816789156',
                    adds : '武汉东西湖110街道11巷'
                }]
                
            }
            
        },

        watch : {

            
            
        },

        computed : {

            
            
        },

        methods : {

            clses () {

                this.sels = !this.sels
      
            },

            clisel (index) {

                this.val = this.sel[index].fon

                this.inpus = true

                this.sels = false

            },

            close () {

                this.sels = false
            },
        },

        created () {
            
            

        },

        mounted () {

        }

    }

</script>
