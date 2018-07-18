<template>
	<div class="orWrapper">
		<div class="orRise">
			<div class="riseTitle">发票抬头</div>
			<div class="risePersonal">个人</div>
		</div>
		<div class="clear"></div>
		<div class="curpoi newCompany" @click="newCompany" v-show="newCom">新增单位发票</div>
		<div class="perdet"  v-show="perDet">
			<div class="invoInput">
				<input type="text" id="invoInput" placeholder="请填写公司发票开头"/>
				<div class="invoHook">
					<span class="invohookText">✓</span>
				</div>
			</div>
			<div class="recNumber">
				<div class="recTitle">纳税人识别号</div>
				<div class="recInput">
					<input type="text" id="recInput" placeholder="纳税人识别码"/>
				</div>
			</div>
		</div>
		<div ref="orContent" class="orContent">
			<div class="conTitle">发票内容</div>
			<div class="conType">
				<div  class="curpoi" :class="{ 'noinvoiceCss' : noCss , 'noinvoice' : !noCss}" @click="noinvoice">
					不开发票
					<div class="noHook" v-show="noHook">
						<span class="hookText">✓</span>
					</div>
				</div>
				<div  class="curpoi" :class="{ ' detailedCss' : deCss, ' detailed' : !deCss }" @click="detailed">
					商品明细
					<div class="deHook" v-show="deHook">
						<span class="hookText">✓</span>
					</div>
				</div>
			</div>
		</div>
		<div class="inventory" v-show="inventory">
			<div class="careful">
				ⓘ发票内容将显示详细商品名称与价格信息
			</div>
			<div class="recIphone">
				<div class="recIphTitle">
					<span class="asterisk">*</span>
					收票人手机号
				</div>
				<div class="recIphInput">
					<input type="text" id="recIphInput" />
				</div>
			</div>
			<div class="mailbox">
				<div class="mailboxTitle">收票人邮箱</div>
				<div class="maiInput">
					<input type="text" id="maiInput" />
				</div>
			</div>
		</div>
		<div ref="orOperation" class="orOperation">
			<div class="curpoi orSubmit">
				保存
			</div>
			<div class="curpoi orCancel">
				取消
			</div>
		</div>
	</div>
</template>

<script>

	export default{

		data () {

			return {

				wrapperH: 0,
				/* 新增单位发票 */
				newCom: true,
				/* 不开发票 */
				noCss: true,
				noHook: true,
				/* 商品明细 */
				deCss: false,
				deHook: false,
				/* 纳税人识别号 */
				perDet: false,
				/* 商品明细显示内容 */
				inventory: false

			}

		},

		methods: {

			/* 新增单位发票点击函数 */
			newCompany () {

				this.newCom = false
				this.perDet = true
				this.wrapperH = 600
				this.$emit('wrapperH', this.wrapperH)
				this.$refs.orContent.style.marginTop = 0 + 'px'
				this.$refs.orOperation.style.marginTop = 20 + 'px'

			},

			/* 不开发票点击函数 */
			noinvoice () {

				/* 不开发票 */
				this.noCss = true
				this.noHook = true
				/* 商品明细 */
				this.deCss = false
				this.deHook = false
				/* 商品明细显示内容 */
				this.inventory = false
				this.$refs.orOperation.style.marginTop = 20 + 'px'
				if( this.perDet == false ){
					this.wrapperH = 423
				} else {
					this.wrapperH = 484
				}
				this.$emit('wrapperH', this.wrapperH)

			},

			/* 商品明细点击函数 */ 
			detailed () {

				/* 不开发票 */
				this.noCss = false
				this.noHook = false
				/* 商品明细 */
				this.deCss = true
				this.deHook = true
				/* 商品明细显示内容 */
				this.inventory = true
				this.wrapperH = 584
				this.$emit('wrapperH', this.wrapperH)
				this.$refs.orOperation.style.marginTop = 0 + 'px'

			}

		}

	}

</script>

<style scoped>

	.orWrapper{
		margin-left: 71px;
		margin-top: 18px;
		width: 420px;
	}
	.orRise{
		line-height: 34px;
		font-size: 13px;
		color: #2a2a2a;
	}
	.riseTitle{
		float: left;
		width: 67px;
		text-align: right;
	}
	.risePersonal{
		float: left;
		margin-left: 40px;
		line-height: 34px;
		width: 311px;
		border: #ff0000 solid 1px;
		text-indent: 10px;
	}
	.newCompany{
		margin-top: 10px;
		margin-left: 109px;
		font-size: 13px;
		color: #1296db;
	}
	.perdet{
		margin-top: 11px;
		width: 420px;
		height: 123px;
	}
	.invoInput{
		position: relative;
		margin-left: 107px;
		width: 311px;
		height: 33px;
		border: #FF0000 solid 1px;
	}
	#invoInput{
		outline: none;
		width: 311px;
		height: 33px;
		border: transparent;
		text-indent: 10px;
	}
	.invoHook{
		position: absolute;
		top: 13px;
		left: 291px;
		border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.invohookText{
		font-size: 14px;
		position: absolute;
		left: -11px;
		top: 3px;
		color: #FFFFFF;
	}
	.recNumber{
		margin-top: 28px;
		width: 420px;
		height: 35px;
		line-height: 35px;
	}
	.recTitle{
		float: left;
		width: 92px;
		height: 35px;
		font-size: 13px;
		color: #434444;
		text-align: right;
	}
	.recInput{
		float: right;
		margin-top: -1px;
		width: 312px;
		height: 35px;
	}
	#recInput{
		outline: none;
		width: 310px;
		height: 34px;
		border: #d3d3d3 solid 1px;
		text-indent: 10px;
	}
	.orContent{
		margin-top: 22px;
		width: 295px;
		height: 35px;
		line-height: 35px;
		font-size: 13px;
		color: #2a2a2a;
	}
	.conTitle{
		float: left;
		width: 67px;
		text-align: right;
	}
	.conType{
		float: left;
		position: relative;
		margin-left: 40px;
		width: 188px;
		height: 35px;
		text-align: center;
		color: #434444;
	}
	.noinvoice{
		float: left;
		width: 80px;
		line-height: 32px;
		border: #d3d3d3 solid 2px;
	}
	.noHook{
		position: absolute;
		top: 14px;
		left: 62px;
	    border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.noinvoiceCss{
		float: left;
		width: 80px;
		line-height: 32px;
		border: #FF0000 solid 2px
	}
	.detailed{
		margin-left: 10px;
		float: right;
		width: 80px;
		line-height: 32px;
		border: #d3d3d3 solid 2px
	}
	.deHook{
		position: absolute;
		top: 14px;
		left: 166px;
	    border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.detailedCss{
		margin-left: 10px;
		float: right;
		width: 80px;
		line-height: 32px;
		border: #FF0000 solid 2px
	}
	.inventory{
		margin-top: 13px;
		width: 420px;
		height: 110px;
	}
	.careful{
		margin-left: 112px;
		font-size: 12.5px;
		color: #868585;
	}
	.recIphone{
		margin-top: 13px;
		width: 308px;
		height: 24px;
		line-height: 24px;
	}
	.recIphTitle{
		float: left;
		width: 92px;
		font-size: 13px;
		color: #434444;
		text-align: right;
	}
	.recIphInput{
		margin-top: -1px;
		float: right;
		width: 197px;
	}
	#recIphInput{
		outline: none;
		width: 197px;
		height: 23px;
		border: #d3d3d3 solid 1px;
		text-indent: 10px;
	}
	.mailbox{
		margin-top: 17px;
		width: 308px;
		height: 24px;
		color: #434444;
		line-height: 24px;
	}
	.mailboxTitle{
		float: left;
		width: 92px;
		font-size: 13px;
		text-align: right;
	}
	.maiInput{
		margin-top: -1px;
		float: right;
		width: 197px;
	}
	#maiInput{
		outline: none;
		width: 197px;
		height: 23px;
		border: #d3d3d3 solid 1px;
		text-indent: 10px;
	}
	.orOperation{
		margin-top: 37px;
		margin-left: 110px;
		width: 198px;
		height: 35px;
	}
	.orSubmit{
		float: left;
		width: 90px;
		height: 33px;
		border: #cfcfcf solid 1px;
		border-radius: 5px;
		background: #FF0000;
		color: #FFFFFF;
		text-align: center;
		line-height: 33px;
	}
	.orCancel{
		float: left;
		margin-left: 14px;
		width: 90px;
		height: 33px;
		border: #cfcfcf solid 1px;
		border-radius: 5px;
		background: #e8e8e8;
		text-align: center;
		line-height: 33px;
	}
	
</style>