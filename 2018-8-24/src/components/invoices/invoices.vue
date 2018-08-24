<template>
	<div class="wrapper" ref="wrapper">
		<div class="title">
			发票信息
		</div>
		<invoice-type @wrapperH='wrapperH' @invoType='invoType'></invoice-type>
		<invoice-notice :invoTypes='invoTypes'></invoice-notice>
		<div v-show="invoTypes">
			<ordinary @wrapperH='wrapperH'></ordinary>
		</div>
		<div v-show="!invoTypes">
			<invoice-rise @wrapperH='wrapperH'></invoice-rise>
		</div>
	</div>
</template>

<script>

	import invoiceType   from '@/components/invoices/index/invoiceType'
	import invoiceNotice from '@/components/invoices/index/invoiceNotice'
	import ordinary      from '@/components/invoices/index/ordinary'
	import invoiceRise   from '@/components/invoices/index/invoiceRise'

	export default{

		components: {

			invoiceType,
			invoiceNotice,
			ordinary,
			invoiceRise,

		},

		data ( ) {

			return {
				/* 发票格式 */
				invoTypes: true
			}

		},

		methods: {

			/* 接受ordinary子级传输过来的高度 */
			wrapperH ( wrapperH ) {

				this.$refs.wrapper.style.height = wrapperH +'px'

			},

			invoType ( invoType ) {

				this.invoTypes = invoType

			}

		}

	}

</script>

<style>

	.clear{
		clear:both;
	}
	.curpoi{
		cursor: pointer;
	}
	.asterisk{
		color: #FF0000;
	}
	.hookText{
		font-size: 14px;
		position: absolute;
		left: -11px;
		top: -2px;
		color: #FFFFFF;
	}
	.wrapper{
		margin: 10px auto;
		width: 623px;
		height: 423px;
		background: #FFFFFF;
		border-radius: 10px;
	}
	.title{
		padding-left: 10px;
		width: 613px;
		height: 31px;
		line-height: 31px;
		background: #f3f3f3;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

</style>