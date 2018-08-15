<template>
	<div class="wrapper">
		<div class="title">
			<div class="commodity-title">1F&nbsp;电脑设备</div>
			<div class="commodity-title-nav" >
				<div class="nav" v-for="(navItem,index) of navList" :key="index">
					<span> {{ navItem.nav }} </span>
				</div>
			</div>
			<div class="clear"></div>
			<div class="commodity-ExSt">
				<div class="swiper"></div>
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
			<div class="commodity">
				<ul>
					<li v-for="(commodityItem,index) of commodityList" :key="index">
						<div class="commodity-img">
							<img :src="commodityItem.commodityImg"/>
						</div>
						<div class="commodity-name">
							{{ commodityItem.commodityName }}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				navList: [{
						nav: '笔记本'
					},{
						nav: '一体机'
					},{
						nav: '台式机'
					},{
						nav: '游戏电脑'
					},{
						nav: '平板电脑'
					},{
						nav: '服务器'
					}],
				statusList: [{
						statusImg: '../../../../static/images/page/hot/C765XN.jpg',
						statusName: 'Epson 针式打印机'
					},{
						statusImg: '../../../../static/images/page/hot/680KII.jpg',
						statusName: 'Epson 5000流明投影仪'
					},{
						statusImg: '../../../../static/images/page/hot/R330.jpg',
						statusName: 'Epson 照片打印机'
					}],
				commodityList: [{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					},{
						commodityImg: '../../../../static/images/page/Thinkpad-X240.jpg',
						commodityName: 'Thinkpad X240 12寸便携笔记本电脑'
					}]
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		margin-top: 87px;
		width: 1200px;
	}
	.title{
		padding-top: 53px;
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
		height: 338px;
	}
	.swiper{
		float: left;
		width: 982px;
		height: 338px;
		background: coral;
	}
	.status{
		float: right;
		width: 218px;
		height: 338px;
	}
	.status-title{
		color: #333333;
		text-align: center;
		font-size: 21px;
		line-height: 38px;
		background: #fef0e4;
	}
	.status li{
		padding: 10px 5px;
		list-style: none;
		font-size: 14px;
		height: 100px;
	}
	li:hover{
		cursor: pointer;
		color: #e60012;
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
	.commodity{
		width: 1200px;
		height: 551px;
	}
	.commodity li{
		float: left;
		margin: 15px 0  0 15px;
		list-style: none;
		width: 228px;
		height: 260px;
		background: #FFFFFF;
	}
	.commodity li:hover{
		box-shadow: 2px 2px 10px #C2C2C2;
	}
	.commodity li:nth-child(1){
		margin-left: 0px;
	}
	.commodity li:nth-child(6){
		margin-left: 0px;
	}
	.commodity-img{
		height: 170px;
		text-align: center;
	}
	.commodity-img img{
		width: 100%;
		height: 100%;
	}
	.commodity-name{
		width: 190px;
		color: #333333;
		line-height: 20px;
		padding: 20px 19px 0 19px;
		text-align: center;
	}
	.commodity-name:hover{
		color: #e60012;
	}
</style>