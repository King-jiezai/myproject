


<style scoped>
    
    .body {
        width: 910px;
        overflow: hidden;
    }
    .invoice_cont {
        width: 100%;
        margin-top: 63px;
    }
    .invoice_type {
        height: 35px;
        line-height: 35px;
    }
    .invoice_cont p {
        margin-left: 180px;
    }
    .modify-pss {
        float: left;
        width:150px;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin-right: 10px;
    }
    .sp1 {
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .radiogroup {
        float: left;
        width: 260px;
    }
    .unit_type {
        margin:15px 0 ;
        height: 35px;
        line-height: 35px;
    }
    .corporate_name {
        height: 35px;
        line-height: 35px;
        margin:15px 0 ;
    }
    .corporate_name p:last-child {
        color: #e60012;
    }
    .invoice_cont input {
        float: left;
        width: 279px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        margin-top: 3px;
        margin-right: 10px;
        outline: medium;
    }
    .invoice_cont input::-webkit-input-placeholder {
        color: #ccc;
    }
    .idNu {
        height: 35px;
        line-height: 35px;
        margin:15px 0 ;
    }
    .idNu p:last-child {
        color: #e60012;
    }
    .regAdd {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .regAdd p:last-child {
        color: #e60012;
    }
    .rephone {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .rephone p:last-child {
        color: #e60012;
    }
    .acBank {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .acBank p:last-child {
        color: #e60012;
    }
    .bank_account {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .bank_account p:last-child {
        color: #e60012;
    }
    .inCo {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .inCo p:last-child {
        color: #e60012;
    }
    .inVa {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .inVa p:last-child {
        color: #e60012;
    }
    .tiPh {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .tiPh p:last-child {
        color: #e60012;
    }
    .maiAdd {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .detAdd {
        height: 35px;
        line-height: 35px;
        margin: 15px 0;
    }
    .detAdd p:last-child {
        color: #e60012;
    }
    .next {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #e60012;
        border-radius: 5px;
        margin:60px 0 60px 270px;
        cursor: pointer;
    }
    .next p {
        margin-left: 0!important;
        letter-spacing: 3px;
    }
    .reminder {
        margin-left: 270px;
    }
    .reminder p {
        margin-left: 0!important;
        color: #999;
        margin-top: 10px;
        letter-spacing: 1px;
    }
     .box-perinfo {
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        font-size: 14px;    
    }
    .box-perinfo_top:first-child {
          margin-top: 0px;
    }
    .box-ps {
        float: left;
        line-height: 30px;
        width: 120px;
        text-align: right;
        font-size: 14px;
        color: #333;
        position: relative;
    }
    .box-perinfo .sp1{
        color: #e60012;
        position: relative;
        top: 3px;
        right: 5px;
    }
    .box-bos {
        float: left;
        width: 320px;
        height: 35px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding-left: 10px;
        margin-left: 10px;
        outline:none;
    }
    .box-bs {
        float: left;
        height: 35px;
        padding-right: 10px;
        border: 1px solid #F9C3C3;
        line-height: 35px;
        color: #e60012;
        background: #ffE6D9;
        position: relative;
        z-index: 0;
        border-radius: 5px;
    }
    .box-perinfo_top img {
          float: left;
          margin: 10px 0 10px 10px;
          position: relative;
          left: 1px;
          z-index: 1;
    }
    .box-bs p {
        float: left;
        width: 15px;
        height: 15px;
        font-size: 12px;
        border-radius: 50%;
        background: #e60012;
        color: #fff;
        line-height: 15px;
        text-align: center;
        margin: 7px;
    }
    .box-pro {
        float: left;
        width: 85px;
        height: 35px;
        border: 1px solid #999;
        outline:none;
        position: relative;
        font-size: 12px;
        color: #555;
    }
    .box-pro:nth-child(3) {
        margin-left: 12px;
    }
    .box-pro:nth-child(4) {
        margin:0 10px 0 12px;
    }
    .pro-icon {
        float: left;
        width: 85px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }
    .pro-icon p {
        font-size: 12px;
        color: #999;
        margin-left: 0px!important;
    }
    .box-pro .spps {
        color: #999;
        float: right;
        margin: -24px 5px 0 0 ;
    }
    .box-pro .sps {
        color: #999;
        float: right;
        margin: -24px 5px 0 0 ;
    }
    .box-pros p {
        width: 168px;
        line-height: 29px;
        text-align: center;
        font-weight: bold;
    }
    .box-ss {
        width: 80px;
        height:100px;
        border:1px solid #ccc;
        background: #fff;
        overflow-y: auto;
        left: -1px;
        cursor: pointer;  
    }
    .box-pro .aa {
        line-height: 25px;
        text-align: center;
    }
    .aa:hover {
        background: #e60012;
        color: #fff;
    }
    .dress {
        float: left;
        margin-left: 0px!important;
        color: #e60012;
    }
    .popup {
        width: 450px;
        height: 200px;
        border:1px solid #ccc;
        background:#fff;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        border-radius: 5px;
        /*box-shadow: 0px 1px 9px #ccc;*/
    }
    .enterpriseSuccess {
        height: 130px;
    }
    .popup img {
        margin: 50px 10px 0 140px;
        float: left;
    }
    .popup .p3 {
        float: left;
        height: 30px;
        line-height: 30px;
        margin: 50px 0px 0 0px;
        font-size: 30px;
    }
    .popup_nav {
        height: 32px;
        background-color: #f1f1f1;
        line-height: 32px;
        font-size: 30px;
    }
    .popup_nav .p1{
        line-height: 30px;
        float: left;
        margin-left: 20px;
        font-size: 14px;
    }
    .popup_nav .p2 {
        float: right;
        font-size: 26px;
        line-height: 30px;
        margin-right: 10px;
        color: #ccc;
        cursor: pointer;
    }
    .queding {
        float: right;
        width: 35px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
        text-align: center;
        border:1px solid #65C0F7; 
        margin: 5px 10px 0 0;
        box-shadow: 0px 1px 9px #ccc;
        cursor: pointer;
    }
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


</style>

<template>
  
        <div class="body" @click="bos">
            
             <!-- invoice_cont 企业发票申请全部内容-->
            <div class="invoice_cont">

                <!-- invoice_type 发票类型：-->
                <div class="invoice_type">
                   <p class="modify-pss"><span class="sp1">*</span>发票类型：</p>
                   <div class="radiogroup" >
                         <RadioGroup v-model="animal" @on-change="changeall">
                            <Radio label="增值税普通发票"></Radio>
                            <Radio label="增值税专用发票"></Radio>
                        </RadioGroup>
                    </div>
                </div>
                
                <div v-if="all">
                    <!-- unit_type 单位类型：-->
                    <div class="unit_type">
                        <p class="modify-pss"><span class="sp1">*</span>单位类型：</p>
                        <div class="radiogroup">
                             <RadioGroup v-model="enterprise" @on-change="change">
                                <Radio label="企业" ></Radio>
                                <Radio label="个人"></Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    
                    <div v-if="one">
                        <!-- corporate_name 公司名称-->
                        <div class="corporate_name">
                            <p class="modify-pss"><span class="sp1">*</span>公司名称：</p>
                            <input type="text" placeholder="请填写公司发票抬头" @blur="blcorp" v-model="vcorp">
                            <p v-show="scorp">请填写公司发票抬头</p>
                        </div>
                        
                        <!-- identification_number 开票识别号-->
                        <div class="idNu">
                            <p class="modify-pss"><span class="sp1">*</span>纳税人识别号：</p>
                            <input type="text" v-model="vidNu" @blur="blidNu">
                            <p v-show="sidNu">请填写纳税人识别号</p>
                        </div>

                        <!-- registered_address 注册地址-->
                        <div class="regAdd">
                            <p class="modify-pss"><span class="sp1">*</span>注册地址：</p>
                            <input type="text" placeholder="请填写注册地址" v-model="vregAdd" @blur="blredAdd">
                            <p v-show="sregAdd">请填写纳税人识别号</p>
                        </div>
                        
                        <!-- rephone 电话-->
                         <div class="rephone">
                            <p class="modify-pss"><span class="sp1">*</span>电话：</p>
                            <input type="text" placeholder="请填写电话" v-model="vphone" @blur="blphone">
                            <p v-show="sphone">请填写电话</p>
                        </div>

                        <!-- account_bank 开户银行-->
                        <div class="acBank">
                            <p class="modify-pss"><span class="sp1">*</span>开户银行：</p>
                            <input type="text" v-model="vbank" @blur="blbank">
                            <p v-show="sbank">请填写开户银行</p>
                        </div>

                        <!-- bank_account 银行账户-->
                        <div class="bank_account">
                            <p class="modify-pss"><span class="sp1">*</span>银行账户：</p>
                            <input type="text" v-model="vbanks" @blur="blbanks">
                            <p v-show="sbankc">请填写银行账户</p>
                        </div>

                        <!-- invoic_content 发票内容-->
                        <div class="inCo">
                            <p class="modify-pss"><span class="sp1">*</span>发票内容：</p>
                            <input type="text" v-model="vinCo" @blur="blinCo">
                            <p v-show="sinCo">请填写发票内容</p>
                        </div>

                        <!-- invoice_value 开票金额-->
                        <div class="inVa">
                            <p class="modify-pss"><span class="sp1">*</span>开票金额：</p>
                            <input type="text" v-model="vinVa" @blur="blinVa">
                            <p v-show="sinVa">请填写开票金额</p>
                        </div>

                        <!-- ticket_phone 收票人手机-->
                        <div class="tiPh">
                            <p class="modify-pss"><span class="sp1">*</span>收票人手机：</p>
                            <input type="text" v-model="vtiPh" @blur="bltiPh">
                            <p v-show="stiPh">请填写收票人手机</p>
                        </div>

                        <!-- mailing_address 邮寄地址-->
                        <div class="maiAdd">                 
                            <div class="box-perinfo_top">
                                <div>
                                    <p class="modify-pss"><span class="sp1">*</span>邮寄地址：</p>
                                </div> 
                                
                                <!-- box-pro 省份-->
                                <div class="box-pro">
                                    <div class="pro-icon" @click.stop="btn">
                                        <p>{{vdl}}</p>
                                        <Icon type="arrow-up-b" class="spps" v-show="ps"></Icon>
                                        <Icon type="arrow-down-b" class="sps" v-show="pp"></Icon>                    
                                    </div>
                                    <div class="box-ss" v-show="bs">
                                        <div v-for="(item,index) in pro" @click="cls(index)" class="aa">
                                            {{item.pros}}
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- box-pro 市-->
                                <div class="box-pro">
                                    <div class="pro-icon" @click.stop="btnc">
                                        <p>{{city}}</p>
                                        <Icon type="arrow-up-b" class="spps" v-show="oo"></Icon>
                                        <Icon type="arrow-down-b" class="sps" v-show="os"></Icon>                    
                                    </div>
                                    <div class="box-ss" v-show="bsc">
                                        <div v-for="(item,index) in citys" @click="clcs(index)" class="aa">
                                            {{item.lis}}
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- box-pro 区/县-->
                                <div class="box-pro" >
                                    <div class="pro-icon" @click.stop="btns">
                                        <p>{{area}}</p>
                                        <Icon type="arrow-up-b" class="spps" v-show="ss"></Icon>
                                        <Icon type="arrow-down-b" class="sps" v-show="so"></Icon>                    
                                    </div>
                                    <div class="box-ss" v-show="bss">
                                        <div v-for="(item,index) in areas" @click="clss(index)" class="aa">
                                            {{item.reg}}
                                        </div>
                                    </div>                        
                                </div>             
                        
                                <p class="dress" v-show='odo'>请选择您的邮寄地址</p>

                            </div>
                        </div>

                        <!-- detailed_address 详细地址-->
                        <div class="detAdd">
                            <p class="modify-pss"><span class="sp1">*</span>详细地址：</p>
                            <input type="text" v-model="vdetAdd" @blur="bldetAdd" @focus="fodetAdd">
                             <p v-show="sdetAdd">请填写详细地址</p>
                        </div>

                        <!-- Submission 提交按钮-->
                        <div class="next" @click="Subm">
                            <p>提交</p>
                        </div>

                    </div>
                    
                    <!-- personalInvoice 个人发票申请-->
                    <div v-if="two">
                        <personalInvoice></personalInvoice>
                    </div>

                </div>
                
                <!-- specialInvoice 增值税专用发票-->
                <div v-if="special">
                    <specialInvoice></specialInvoice>
                </div>
                
                <!-- reminder 温馨提示：-->
                <div class="reminder">
                    <h3>温馨提示：</h3>
                    <p>1.增值税普通发票开票金额小于500元或者增值税专用发票开票金额小于2000元需要支付快递费。</p>
                    <p>2.发票的内容以真实的账单类型为准。</p>
                    <p>3.收到发票后请及时付款，延迟付款将会降低您的信用星级。</p>
                    <p>4.可开票金额为当月账单总金额。</p>
                </div>
            </div>
            
            <!-- popup 你的开票申请成功提示-->
            <div class="popup" v-show="success">
                <div class="popup_nav">
                    <p class="p1">你的开票申请</p>
                    <p class="p2" @click='que'>×</p>
                </div>
                <div class="enterpriseSuccess">
                    <img src="../../../../static/images/order/5555.png">
                    <p class="p3">提交成功</p>
                </div>
                <div class="queding" @click="que">
                    <p>确定</p>
                </div>
            </div>

            <!-- model_pre 你的开票申请成功提示-->
            <div class="model_pre" v-show="success"></div>
          
        </div>  

   
</template>

<script>

    import personalInvoice from '@/components/mylease/myinvoice/personal-invoice.vue'
    import specialInvoice from '@/components/mylease/myinvoice/special-invoice.vue'
        
    import { RadioGroup, Radio , Icon} from 'iview'

    export default {

        components : {

            RadioGroup,
            Radio,
            Icon,
            personalInvoice,
            specialInvoice,

        },

        data () {

            return {

                animal : '增值税普通发票',

                enterprise : '企业',

                pro :[{             
                            pros : "广东省" ,
                    city : [{
                        lis : '广州市',
                        region : [{
                            reg : '天河区'
                        },{
                            reg : '番禺区'
                        }]
                    },{
                        lis : '深圳市',
                        region : [{
                            reg : '宝安区'
                        },{
                            reg : '南山区'
                        }]
                    }]
                },{             
                    pros : "黑龙江省" ,
                    city : [{
                        lis : '大庆市',
                        region : [{
                            reg : '龙凤区'
                        },{
                            reg : '大同区'
                        }]
                    },{
                        lis : '伊春市',
                        region : [{
                            reg : '带岭区'
                        },{
                            reg : '西林区'
                        }]
                    }]
                }],

                city  : '市',

                area  : '区县', 

                citys : '',

                areas : '',

                odo   : false ,

                val   : ""    ,

                vcl   : ""    ,

                vdl   : "省"  ,

                bs    : false ,

                bss   : false ,

                bsc   : false ,

                pp    : false ,

                ps    : true ,

                oo    : true ,

                os    : false ,

                ss    : true ,

                so    : false , 

                vcorp  : '',

                vdetAdd : '',

                vidNu   : '',

                vregAdd : '',

                vphone  : '',

                vbank   : '',

                vbanks  : '',

                vinCo   : '',

                vinVa   : '',

                vtiPh   : '',

                sregAdd : false,

                sidNu   : false,

                scorp  : false,

                sphone : false, 

                sbank  : false, 

                sbankc : false,

                sinCo  : false,

                sinVa  : false,

                stiPh  : false,

                sdetAdd : false,

                one : true ,

                two : false,

                all : true,

                special : false,

                success : false,

            }
            
        },

        computed : {
          
        },

        watch : {

        },

        methods : {

            change () {

                if (this.enterprise == '企业') {

                    this.one = true

                    this.two = false
                }else {

                    this.two = true

                    this.one = false

                    this.sregAdd = false

                    this.sidNu = false

                    this.scorp = false

                    this.sphone = false

                    this.sbank = false 

                    this.sbankc = false

                    this.sinCo = false

                    this.sinVa = false

                    this.stiPh = false

                    this.sdetAdd = false

                    this.odo = false
                }
            },

            changeall () {

                if (this.animal == '增值税普通发票') {

                    this.all = true

                    this.special = false

                    this.one = true

                    this.two = false
                }else {

                    this.all = false

                    this.special = true

                    this.sregAdd = false

                    this.sidNu = false

                    this.scorp = false

                    this.sphone = false

                    this.sbank = false 

                    this.sbankc = false

                    this.sinCo = false

                    this.sinVa = false

                    this.stiPh = false

                    this.sdetAdd = false

                    this.odo = false
                }
            },

            Subm () {

                this.blcorp()
                this.blidNu()
                this.blredAdd()
                this.blphone()
                this.blbank()
                this.blbanks()
                this.blinCo()
                this.blinVa()
                this.bltiPh()
                this.bldetAdd()

                if (this.sregAdd == false && this.sidNu == false && this.scorp == false && this.sphone == false && 
                    this.sbank == false && this.sbankc == false && this.sinCo == false && this.sinVa == false && 
                    this.stiPh == false && this.sdetAdd == false && this.odo == false) {

                    this.success = true
                }else {

                    this.success = false
                }

                if (this.vdl == '省') {

                    this.odo = true

                } else {

                    this.odo = false

                }
            },

            que () {
                this.success = false
            },

            blcorp () {

                if (this.vcorp == '') {

                    this.scorp = true
                }else {

                    this.scorp = false
                }
            },

            blidNu () {

                if (this.vidNu == '') {

                    this.sidNu = true
                }else {

                    this.sidNu = false
                }
            
            },

            blredAdd () {

                if (this.vregAdd == '') {

                    this.sregAdd = true
                }else {

                    this.sregAdd = false
                }
            },

            blphone () {

                if (this.vphone == '') {
                    
                    this.sphone = true
                }else {

                    this.sphone = false
                }
            },

            blbank () {

                if (this.vbank == '') {

                    this.sbank = true
                }else {

                    this.sbank = false
                }
            },

            blbanks () {

                if (this.vbanks == '') {

                    this.sbankc = true
                }else {

                    this.sbankc = false
                }
            },

            blinCo () {

                if (this.vinCo == '') {

                    this.sinCo = true
                }else {

                    this.sinCo = false
                }
            },

            blinVa () {

                if (this.vinVa == '') {

                    this.sinVa = true
                }else {

                    this.sinVa = false
                }
            },

            bltiPh () {

                if (this.vtiPh == '') {

                    this.stiPh = true
                }else {

                    this.stiPh = false
                }
            },

            fodetAdd () {

                if (this.vdl == '省') {

                    this.odo = true
                }
            },

            bldetAdd () {

                if (this.vdetAdd == '') {

                    this.sdetAdd = true
                }else {

                    this.sdetAdd = false
                }
            },

            btn () {

                this.bs = !this.bs

                this.ps = !this.ps

                this.pp = !this.pp             

            },

            cls (index) {

                this.citys = this.pro[index].city

                this.vdl = this.pro[index].pros

                this.city = this.citys[0] ? this.citys[0].lis : ''

                this.area = this.citys[0].region[0] ? this.citys[0].region[0].reg : ''

                this.areas = this.citys[0].region
                
                this.bs = false

                this.odo = false

                this.ps = !this.ps

                this.pp = !this.pp
                    
            },

            btnc () {

                this.bsc = !this.bsc

                this.oo = !this.oo

                this.os = !this.os

                if (this.vdl == '省') {

                    this.odo = true

                } else {

                    this.odo = false

                }

            },

            clcs (index) {

                this.areas = this.citys[index].region

                this.city = this.citys[index].lis

                this.area = this.areas[0] ? this.areas[0].reg : ''

                this.bsc = false

                this.oo = !this.oo

                this.os = !this.os

            },

            btns () {

                this.bss = !this.bss

                this.ss = !this.ss

                this.so = !this.so

                if (this.vdl == '省' || this.city == '市') {

                    this.odo = true

                } else {

                    this.odo = false

                }

            },

            clss (index) {

                this.area = this.areas[index].reg

                this.bss = false

                this.ss = !this.ss

                this.so = !this.so

            },


            bos () {

                this.bs = false

                this.bss = false

                this.bsc = false
           
            },
        },

        created () {

           

        },

        mounted () {

        }

    }

</script>
