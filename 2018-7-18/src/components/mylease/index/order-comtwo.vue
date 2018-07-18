

<style scoped>

    .top {
      	width: 100%;
      	overflow: hidden;
      	background-color: #fff;
    }
    .box-txt {
      	width:910px;
        height: 46px;
      	float: left;
      	font-size: 12px;
      	color: #333;
        margin-top: 39px;
        margin-bottom: 51px;
        background: #fffdf0;
        border: 1px solid #ffdfbe;
        line-height: 46px;
    }
    .box-txt p:first-child {
        float: left;
        width: 20px;
        height: 20px;
        background: #F8AD36;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin: 13px;
    }
    .box-left {
      	width: 910px;
        margin: 0 auto;
    }
    .box-perinfo {
      	width: 910px;
      	margin: 0 auto;
      	overflow: hidden;
      	font-size: 14px;	
    }
    .box-perinfo_top:first-child {
    	  margin-top: 0px;
    }
    .box-perinfo_top {
      	width: 85%;
      	height: 32px;
      	margin: 0 auto;
      	margin-top: 15px;
    }
    .box-ps {
        float: left;
        line-height: 32px;
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
        width: 350px;
        height: 32px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding-left: 10px;
        margin-left: 10px;
        outline:none;
      }
    .box-os {
	      float: left;
	      line-height: 32px;
	      font-size: 12px;
	      color: #999;
	      margin-left: 10px;
    }
    .box-bs {
	      float: left;
	      height: 32px;
          padding-right: 10px;
	      border: 1px solid #F9C3C3;
	      line-height: 30px;
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
	      width: 110px;
	      height: 32px;
	      margin-left: 10px;
	      border: 1px solid #d5d5d5;
	      border-radius: 5px;
	      outline:none;
	      position: relative;
          font-size: 12px;
          color: #555;
    }
    .pro-icon {
        float: left;
        width: 110px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }
    .box-pro .spps {
        float: right;
        margin: -20px 10px 0 0 ;
    }
    .box-pro .sps {
        float: right;
        margin: -20px 10px 0 0 ;
    }
    .box-pros p {
	      width: 168px;
	      line-height: 29px;
	      text-align: center;
	      font-weight: bold;
    }
    .box-ss {
	      width: 110px;
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
    .box-btn {
	    width: 175px;
        height: 38px;
        margin-top:60px;
        margin-bottom: 10px;
    }
    .box-btn p {
          background: #e60012;
          width: 175px;
          height: 38px;
          font-size: 14px;
          text-align: center;
          line-height: 38px;
          border-radius: 5px;
          color: #fff;
        margin-left: 167px;
    }
    .pic {
        margin-left: 10px;
        float: left;
    }
    .applicant {
        margin-top: 46px;
    }
    .applicant-ps {
        float: left;
        margin-left: 100px;
    }
    .applicant_cont {
        height: 261px;
        margin-top: 60px;
    }
    .applicant-bos {
        float: left;
        width: 250px;
        height: 32px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding-left: 10px;
        margin-left: 10px;
        outline:none;
    }
    .applicant-pss {
        float: left;
        line-height: 32px;
        width: 120px;
        text-align: right;
        font-size: 14px;
        color: #333;
        margin-left: 100px;
    }
    .applicant-bs {
        width: 195px;
        float: left;
        height: 32px;
        padding-right: 10px;
        border: 1px solid #F9C3C3;
        line-height: 30px;
        color: #e60012;
        background: #ffE6D9;
        z-index: 0;
        border-radius: 5px;
    }
    .applicant-bs p {
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

</style>

<template>

	  <div class="top" @click='bos'>            
        <div class="box-left">
        	  <div class="box-txt">
                <p>!</p>
      				  <p>为了进一步更全面的了解到您到企业，提升企业竞争力，实现轻资产运营，请完善如下企业资料：</p>
    			  </div>
    			
            <div class="box-perinfo">
			    <div class="box-perinfo_top">
		            <div>
                        <p class="box-ps"><span class="sp1">*</span>公司名称</p>
                    </div>

        			<input type="text" v-model='val' @focus="oas" @blur="oass" class="box-bos">
        			<div v-show="one" class="box-os">
                        <p class="box-os">请按照营业执照上的企业名称准确填写</p>
        		    </div>

    				<img src="../../../../static/images/reg/sj2.png" v-show="ooo">

                    <div v-show='ooo' class="box-bs">
                        <p>x</p>请填写公司名称
                    </div>
        		</div>

                <div class="box-perinfo_top">
                    <div>
                        <p class="box-ps"><span class="sp1">*</span>统一社会信用代码</p>
                    </div>

                    <input type="text" v-model='creas' @focus="cas" @blur="caos" class="box-bos">
                    <div v-show="credit" class="box-os">
                        <p class="box-os">请按照营业执照上的统一社会信用代码准确填写</p>
                    </div>

                    <img src="../../../../static/images/reg/sj2.png" v-show="credits">

                    <div v-show='credits' class="box-bs">
                        <p>x</p>请填写统一社会信用代码
                    </div>
                </div>

                <div class="box-perinfo_top">
                    <div>
                        <p class="box-ps"><span class="sp1">*</span>成立时间</p>
                    </div>

                    <DatePicker type="date" :clearable='false' class='pic' @on-change='chan'></DatePicker>

                    <div v-show='tim'>
                        <img src="../../../../static/images/reg/sj2.png">

                        <div class="box-bs">
                            <p>x</p>请选择成立时间
                        </div>
                    </div>
                </div>

                <div class="box-perinfo_top">
                    <div>
                        <p class="box-ps"><span class="sp1">*</span>企业所在地</p>
                    </div> 

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

                    <div v-show='four' class="box-os">
                          <p class="box-os">请如实填写区域，平台将就近安排为您服务的人员</p>
                    </div>

                    <img src="../../../../static/images/reg/sj2.png" v-show="odo" class="imgs">

                    <div v-show='odo' class="box-bs">
                        <p>x</p>请选择您的企业所在地
                    </div>
                </div>

			    <div class="box-perinfo_top">
    		        <div>
                        <p class="box-ps"><span class="sp1">*</span>详细地址</p>
                    </div>

                    <input type="text" v-model='det' @focus="per" @blur="pers" class="box-bos">

                    <div v-show='cors'>
                        <img src="../../../../static/images/reg/sj2.png">

                        <div class="box-bs">
                            <p>x</p>请填写详细地址
                        </div>
                    </div>
				</div>

                <div class="applicant">
                    <div>
                        <p class="applicant-ps"><span class="sp1">*</span>申请人是否法人代表本人申请：</p>
                        <RadioGroup v-model="animal" @on-change="change">
                            <Radio label="year">是</Radio>
                            <Radio label="no">否</Radio>
                        </RadioGroup>
                    </div>

                    <div class="applicant_cont" v-show="yes">
                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>法人姓名</p>
                            </div>
                            <input type="text"  @focus="per" @blur="pers" class="applicant-bos">

                            <div>
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请输入法人姓名
                                </div>
                            </div>
                        </div>
                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>法人联系电话</p>
                            </div>
                            <input type="text"  @focus="per" @blur="pers" class="applicant-bos">

                            <div>
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请输入法人联系电话
                                </div>
                            </div>
                        </div>
                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>法人身份号码</p>
                            </div>
                            <input type="text"  @focus="per" @blur="pers" class="applicant-bos">

                            <div>
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请输入法人身份号码
                                </div>
                            </div>
                        </div>
                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>紧急联系人</p>
                            </div>
                            <input type="text"  @focus="per" @blur="pers" class="applicant-bos">

                            <div>
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请输入紧急联系人
                                </div>
                            </div>
                        </div>
                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>紧急联系人手机号</p>
                            </div>
                            <input type="text"  @focus="per" @blur="pers" class="applicant-bos">

                            <div>
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请输入紧急联系人手机号
                                </div>
                            </div>
                        </div>

                       
                    </div>

                </div>

   				<div class="box-btn" @click="fin">
				    <p>完成</p>
				</div>           				             			
          	</div>
        </div>		
    </div>

</template>

<script>


    import { mapState } from 'vuex'

    import { Icon, DatePicker , RadioGroup ,Radio} from 'iview'

	  export default {
        
        components : {

            Icon,
            DatePicker,
            RadioGroup,
            Radio,

        },

        data () {

            return {

                animal : 'year',

                yes : true ,

                times: '',

                tim : false,

                cors: false,

                det : '',

                creas : '',

                credit: true,

                credits: false,
       
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
                   
                one   : true  ,

                four  : true  ,

                ooo   : false ,

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

                sel   : '请选择您的从事行业'    

            } 

        },               

        computed : {

             ...mapState([

                'hid'

            ])

        },

        watch : {

            hid () {

                this.bs = false

                this.bsc = false

                this.bss = false

                this.ses =false  
                
            }

        },

        methods : {

            change (index) {

                let obs = ''

                if (index == 'year') {
                    obs = '是'
                    this.yes = true
                }
                if (index == 'no') {
                    obs = '否'
                    this.yes = false
                }

            },

            fin () {

                this.btnc()

                this.oass()

                this.caos()

                this.pers()

                if (this.times == undefined) {

                    this.tim = true

                } else {

                    this.tim = false
                }

            },

            chan (index) {

                this.times = index

            },

          	bos () {

      			this.bs = false

      			this.bss = false

                this.bsc = false
         			
          	},

          	btn () {

      		    this.bs = !this.bs

      			this.odo = false

      			this.four = true

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

      			this.four = true

                this.ps = !this.ps

                this.pp = !this.pp
        			
          	},

            btnc () {

                this.bsc = !this.bsc

                this.oo = !this.oo

                this.os = !this.os

                if (this.vdl == '省') {

                    this.four = false

                    this.odo = true

                } else {

                    this.odo = false

                    this.four = true

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

    				this.four = false

    				this.odo = true

      			} else {

    				this.odo = false

    				this.four = true

      			}

          	},

          	clss (index) {

                this.area = this.areas[index].reg

      			this.bss = false

                this.ss = !this.ss

                this.so = !this.so

          	},

          	oas () {

      			this.one = true

      			this.ooo = false      

          	},

          	oass () {

      			if (this.val == '') {

    				this.one = false

    				this.ooo = true

	      		}     		     
          	},

            cas () {

                this.credit = true

                this.credits = false      

            },

            caos () {

                if (this.creas == '') {

                    this.credit = false

                    this.credits = true

                }                
            },

            per () {

                this.cors = false   

            },

            pers () {

                if (this.det == '') {

                    this.cors = true

                }

            }

        },

        created () {

            this.chan()
            
        },

        mounted () {

        }
        
    }

</script>