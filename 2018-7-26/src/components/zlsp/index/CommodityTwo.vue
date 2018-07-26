<template>
	<div class="wrapper">
		<div class="title">
			<div class="commodity-title">2F&nbsp;办公设备</div>
			<div class="commodity-title-nav" >
				<div class="nav" v-for="(navItem,index) of navList" :key="index">
					<span> {{ navItem.nav }} </span>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<div class="commodity-ExSt">
			<div class="commodity-Lf">
				<img src="../../../../static/images/page/pop.jpg"/>
			</div>
			<div class="commodity-Ct">
				<div class="swiper"></div>
				<div class="recommend">
					<ul>
						<li v-for="(recommendItem,index) of recommendList" :key="index">
							<div class="recommend-Img">
								<img :src="recommendItem.recommendImg"/>
							</div>
							<div class="recommend-Name">
								{{ recommendItem.recommendName }}
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="commodity-Rg">
				<div class="status">
					<div class="status-title">
						人气浏览
					</div>
					<ul>
						<li v-for="(statusItem,index) of statusList" :key="index">
							<div class="status-img">
								<img :src="statusItem.statusImg"/>
							</div>
							<div class="status-name">{{ statusItem.statusName }}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{

		data () {
			return {
				navList: [{
						nav: '打印机'
					},{
						nav: '一体机'
					},{
						nav: '投影机'
					},{
						nav: '扫描设备'
					},{
						nav: '其他'
					}],
				statusList: [{
						statusImg: '../../../../static/images/page/hot/680KII.jpg',
						statusName: 'Epson 针式打印机'
					},{
						statusImg: '../../../../static/images/page/hot/C765XN.jpg',
						statusName: 'Epson 5000流明投影仪'
					},{
						statusImg: '../../../../static/images/page/hot/R330.jpg',
						statusName: 'Epson 照片打印机'
					},{
						statusImg: '../../../../static/images/page/hot/L8650CDW.jpg',
						statusName: 'Epson 符合一体机'
					}],
				recommendList: [{
						recommendImg: '../../../../static/images/page/HL-2240.jpg',
						recommendName: 'brother 黑白激光打印机'
					},{
						recommendImg: '../../../../static/images/page/EB-C735X.jpg',
						recommendName: 'Epson 商务投影仪'
					},{
						recommendImg: '../../../../static/images/page/DS-510.jpg',
						recommendName: 'Epson 馈纸试扫描仪'
					}]
			}
		}
	}
</script>

<style scoped>
	.clear{
		clear: both;
	}
	.wrapper{
		margin-top: 62px;
		width: 1200px;
	}
	.title{
		width: 1200px;
		height: 38px;
		line-height: 38px;
	}
	.commodity-title{
		float: left;
		font-size: 24px;
		color: #32abf8;
	}
	.commodity-title-nav{
		float: left;
		margin-left: 118px;
		height: 38px;
	}
	.nav{
		float: left;
		padding: 0 21px 0 21px;
		font-size: 14px;
		color: #333333;
	}
	.commodity-title-nav .nav span:hover{
		cursor: pointer;
		color: #e60012;
	}
	.commodity-ExSt{
		width: 1200px;
		height: 486px;
	}
	.commodity-Lf{
		float: left;
		width: 257px;
		height: 486px;
	}
	.commodity-Ct{
		float: left;
		width: 727px;
		height: 486px;
	}
	.swiper{
		width: 726px;
		height: 250px;
		background: darkcyan;
	}
	.recommend{
		height: 236px;
	}
	.recommend ul li{
		list-style: none;
		float: left;
		width: 241.6px;
		height: 236px;
		border-right: #f3f3f3 solid 1px;
		background: #FFFFFF;
	}
	.recommend ul li:nth-child(3){
		border-right: none;
	}
	.recommend-Img{
		height: 160px;
		text-align: center;
	}
	.recommend-Img img{
		padding-top: 6px;
	}
	.recommend-Name{
		text-align: center;
	}
	.commodity-Rg{
		float: right;
		width: 216px;
		height: 486px;
	}
	.status{
		float: right;
		width: 216px;
		height: 486px;
	}
	.status-title{
		color: #333333;
		text-align: center;
		font-size: 21px;
		line-height: 38px;
		background: #fef0e4;
	}
	.status li{
		padding: 17px 5px;
		list-style: none;
		font-size: 14px;
		height: 112px;
	}
	li:hover{
		cursor: pointer;
		color: #e60012;
		box-shadow: 2px 0 10px #C2C2C2 inset;
	}
	.status ul{
		background: #FFFFFF;
	}
	.status li:hover{
		box-shadow: 2px 0 10px #C2C2C2 inset;
	}
	.status-img{
		text-align: center;
		float: left;
		width: 80px;
		height: 80px;
	}
	.status-img img{
		width: 100%;
		height: 100%;
	}
	.status-name{
		float: right;
		line-height: 20px;
		padding-top: 25px;
		width: 120px;
	}
</style>