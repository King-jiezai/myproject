<template>
	<div class="invoiceType">
		<div class="curpoi" :class="{ 'ordinaryCss': orCss, 'ordinary' : !orCss}" @click="ordinary">
			普通发票
			<div class="orHook"  v-show="orHook">
				<span class="hookText">✓</span>
			</div>
		</div>
		<div class="curpoi" :class="{ 'incrementCss': inCss, 'increment' : !inCss}" @click="increment">
			增值税专用发票
			<div class="inHook"  v-show="inHook">
				<span class="hookText">✓</span>
			</div>
		</div>
	</div>
</template>

<script>

	export default{

		data () {

			return {

				wrapperH: 0,
				/* 普通发票 */
				orCss: true, /* 红色边框 */
				orHook: true, /* 钩子 */
				/* 增值发票 */
				inCss: false,
				inHook: false,
				/* 发票格式 */
				invoType: true

			}

		},

		methods: {

			/* 普通发票点击函数 */
			ordinary () {

				/* 增值发票 */
				this.inCss = false
				this.inHook = false
				/* 普通发票 */
				this.orCss = true
				this.orHook = true
				this.invoType = true
				this.$emit('invoType', this.invoType)

			},

			/* 增值发票点击函数 */
			increment () {

				/* 普通发票 */
				this.orCss = false
				this.orHook = false
				/* 增值发票 */
				this.inCss = true
				this.inHook = true
				this.invoType = false
				this.$emit('invoType', this.invoType)
				this.wrapperH = 647
				this.$emit('wrapperH', this.wrapperH)
			}
			
		}

	}

</script>

<style scoped>

	.invoiceType{
		position: relative;
		margin-top: 20px;
		padding-left: 10px;
		padding-top: 2px;
		width: 623px;
		height: 38px;
		text-align: center;
		color: #434444;
	}
	.ordinary{
		float: left;
		line-height: 32px;
		width: 98px;
		border: #d3d3d3 solid 2px;
	}
	.orHook{
		position: absolute;
		top: 16px;
		left: 90px;
		width: 0;
	    height: 0;
	    border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.hookText{
		font-size: 14px;
		position: absolute;
		left: -11px;
		top: -2px;
		color: #FFFFFF;
	}
	.ordinaryCss{
		float: left;
		width: 98px;
		line-height: 32px;
		border: #ff0000 solid 2px
	}
	.increment{
		margin-left: 9px;
		float: left;
		width: 132px;
		line-height: 32px;
		border: #d3d3d3 solid 2px;
	}
	.inHook{
		position: absolute;
		top: 16px;
		left: 235px;
		width: 0;
	    height: 0;
	    border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.incrementCss{
		margin-left: 9px;
		float: left;
		width: 132px;
		line-height: 32px;
		border: #ff0000 solid 2px
	}
	
</style>