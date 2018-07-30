

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
        float: left;
	    width: 175px;
        height: 38px;
        margin-top:60px;
        margin-bottom: 10px;
        cursor: pointer;
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
    .rech_data {
        margin-top:70px;
        border-bottom: 1px solid #ccc;
    }
    .data-cont {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
    }
    .data-cont p:first-child {
        float: left;
        margin-left: 60px;
    }
    .data-cont p:last-child {
        float: left;
        font-size: 14px;
        color: #999;
        margin-left: 10px;
    }
    .rech_upload {
        overflow: hidden;
        width: 100%;
        margin-top: 30px;
    }
    .upload-pss {
        float: left;
        text-align: left;
        font-size: 14px;
        color: #333;
        margin-left: 80px;
    }
    .upload-img {
        float: left;
        height: 140px;
        line-height: 115px;
    }
    .uploads {
        float: left;
        height: 140px;
    }
    .zimg {
        float: left;
        height: 140px;
        margin: 15px;
    } 
    .zimg p {
        line-height: 30px;
        text-align: center;
        color: #999;
        font-size: 12px;
    }
    .rech_gai {
        float: left;
        color: #999;
        height: 109px;
        margin-right: 140px;
    }
    .rech_gai p {
        float: left;
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        background: #999;
        color: #fff;
        text-align: center;
        margin: 50px 5px;
    }
    .positive {
        height: 20px;
        line-height: 20px;
        float: left;
        color: #e60012;
    }
    .positive:last-child {
        margin-left: 50px;
    }
    .positive p {
        width: 15px;
        height: 15px;
        line-height: 13px;
        border-radius: 50%;
        background: #e60012;
        color: #fff;
        text-align: center;
        float: left;
        margin: 3px;
    }
    .upload_business {
        width: 100%;
        float: left;
        height: 140px;
        margin-top: 20px;
    }
    .business-pss {
        float: left;
        line-height: 115px;
        margin-left: 247px;
    }
    .business_gai {
        float: left;
        width: 480px;
        height:90px;
        line-height: 88px;
        margin:15px 0 0 0 ;
        color: #999;
    }
    .business_gai p {
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        background: #999;
        color: #fff;
        text-align: center;
        float: left;
        margin: 36px 3px 0 0;
    }
    .business_up {
        float: left;
        line-height: 20px;
        margin-top: 3px;
        color: #e60012;
    }
    .business_up p {
         width: 15px;
        height: 15px;
        line-height: 13px;
        border-radius: 50%;
        background: #e60012;
        color: #fff;
        text-align: center;
        float: left;
        margin: 3px;
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
                            <input type="text" v-model="mname" @focus="fname" @blur="bname" class="applicant-bos">

                            <div v-show="sname">
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请填写法人姓名
                                </div>
                            </div>
                        </div>

                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>法人联系电话</p>
                            </div>
                            <input type="text" v-model="mpone" @focus="fpone" @blur="bpone" class="applicant-bos">

                            <div v-show="spone">
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请填写法人联系电话
                                </div>
                            </div>
                        </div>

                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>法人身份号码</p>
                            </div>
                            <input type="text" v-model="midentity" @focus="fidentity" @blur="bidentity" class="applicant-bos">

                            <div v-show="sidentity">
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请填写法人身份号码
                                </div>
                            </div>
                        </div>

                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>紧急联系人</p>
                            </div>
                            <input type="text" v-model="murgent" @focus="furgent" @blur="burgent" class="applicant-bos">

                            <div v-show="surgent">
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请填写紧急联系人
                                </div>
                            </div>
                        </div>

                        <div class="box-perinfo_top">
                            <div>
                                <p class="applicant-pss"><span class="sp1">*</span>紧急联系人手机号</p>
                            </div>
                            <input type="text" v-model="mcontact" @focus="fcontact" @blur="bcontact" class="applicant-bos">

                            <div v-show="scontact">
                                <img src="../../../../static/images/reg/sj2.png">

                                <div class="applicant-bs">
                                    <p>x</p>请填写紧急联系人手机号
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="rech_data">
                    <div class="data-cont">
                        <p>免押金资料</p>
                        <p>以下图片上传仅支持JPG,GIF,PNG,BMP,JPEG,,TIFF 格式，文件小于5M</p>
                    </div>
                </div>

                <div class="rech_upload">
                    <div class="upload-img">
                        <p class="upload-pss"><span class="sp1">*</span>法人代表或股东身份证正、反面照片</p>
                        <div class="uploads">
                            <div class="zimg">
                                <zupImg></zupImg>
                                <p>(身份证正面)</p>
                            </div>
                            <div class="zimg">
                                <zupImg></zupImg>
                                <p>(身份证反面)</p>
                            </div>            
                        </div>
                        <div class="rech_gai"><p>！</p>原件拍照件或原件盖公章扫件</div>
                        <div class="positive" v-show="pos"><p>-</p>请上传身份证正面照</div>
                        <div class="positive" v-show="pos"><p>-</p>请上传身份证反面照</div>
                    </div>
                    <div class="upload_business">
                        <p class="business-pss"><span class="sp1">*</span>营业执照</p>
                        <div class="uploads">
                            <div class="zimg">
                                <zupImg></zupImg>
                                <p>(正面营业执照)</p>
                            </div>                                    
                        </div>
                        <div class="business_gai"><p>！</p>原件拍照件或原件盖公章扫件</div>
                        <div class="business_up" v-show="pos"><p>-</p>请上传正面营业执照</div>
                    </div>
                   
                </div>
                

   				<div class="box-btn" @click="fin">
				    <p>下一步</p>
				</div>         				             			
          	</div>
        </div>		
    </div>

</template>

<script>

    import zupImg from '@/components/mylease/upimg/up-img.vue'

    import { mapState } from 'vuex'

    import { Icon, DatePicker , RadioGroup ,Radio} from 'iview'

	  export default {
        
        components : {

            Icon,
            DatePicker,
            RadioGroup,
            Radio,
            zupImg,

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

                sel   : '请选择您的从事行业',
                
                sname : false,

                mname : '',

                mpone : '',

                mcontact  : '',

                murgent   : '',

                midentity : '',   

                spone     : false,

                sidentity : false,

                scontact  : false,

                surgent   :  false,

                pos : false ,

               
            } 

        },               

        computed : {

             ...mapState([

                'hid',

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

                // this.btnc()

                // this.oass()

                // this.caos()

                // this.pers()

                // this.bpone()

                // this.bcontact()

                // this.burgent()

                // this.bidentity()

                // this.bname()

                // if (this.times == undefined) {

                //     this.tim = true

                // } else {

                //     this.tim = false
                // }

                // if (this.loo == '') {
                //     this.pos = true
                // }

                this.$store.commit('shqi',false)

                setTimeout(() => {
                    this.$store.commit('shqi',true)
                }, 10)

                console.log(4545545)

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

            },

            fname () {

                this.sname = false
            },

            bname () {
                if (this.mname == '') {
                    this.sname = true
                }
            },

            fpone () {

                this.spone = false
            },

            bpone () {
                if (this.mpone == '') {
                    this.spone = true
                }
            },

            fidentity () {

                this.sidentity = false
            },

            bidentity () {
                if (this.midentity == '') {
                    this.sidentity = true
                }
            },

            furgent () {

                this.surgent = false
            },

            burgent () {
                if (this.murgent == '') {
                    this.surgent = true
                }
            },

            fcontact () {

                this.scontact = false
            },

            bcontact () {
                if (this.mcontact == '') {
                    this.scontact = true
                }
            }

        },

        created () {

            this.chan()

            this.loo =   this.$store.state.poo  
            
        },

        mounted () {

        }
        
    }

</script>