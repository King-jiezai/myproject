<template>
	<div class="wrapper">
		<div class="title">
			<div class="commodity-title">3F&nbsp;办公设备</div>
			<div class="commodity-title-nav" >
				<div class="nav" v-for="(navItem,index) of navList" :key="index">
					<span> {{ navItem.nav }} </span>
				</div>
			</div>
		</div>
		<div class="commodity">
			<div class="commodity-Lf"></div>
			<div class="commodity-Ct">
				<div class="exhibition-top">
					<div class="exhi-wrapper" v-for="(exhitItem,index) of exhitList" :key="index">
						<div class="exhibition-tlf">
							<img :src="exhitItem.exhitImg"/>
						</div>
						<div class="exhibition-trg">
							<span class="exhi-title">{{ exhitItem.exhitTitle }}</span>
							<br />
							<span class="exhi-stitle">{{ exhitItem.exhitSTitle }}</span>
						</div>
					</div>
				</div>
				<div class="clear"></div>
				<div class="exhibition-bottom">
					<div class="exhi-wrapper"  v-for="(exhibItem,index) of exhibList" :key="index">
						<div class="exhibition-blf">
							<span class="exhi-title">{{ exhibItem.exhibTitle }}</span>
							<br />
							<span class="exhi-stitle">{{ exhibItem.exhibSTitle }}</span>
						</div>
						<div class="exhibition-brg"><img :src="exhibItem.exhibImg"/></div>
					</div>
				</div>
			</div>
			<div class="commodity-Rg">
				<div class="status">
					<div class="status-title">人气浏览</div>
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
		<div class="commodity-foer">
			<ul>
				<li v-for="(foerItem,index) of foerList" :key="index">
					<div class="foer-top">
						<img :src="foerItem.foerImg"/>
					</div>
					<div class="foer-bottom">{{ foerItem.foerTitle }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				navList: [{
						nav: '相机'
					},{
						nav: 'DV/摄像机'
					},{
						nav: '显示器'
					},{
						nav: '液晶电视'
					},{
						nav: '幕布/支架'
					},{
						nav: '音响/功放'
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
					}],
				exhitList: [{
						exhitImg: '../../../../static/images/page/TV.jpg',
						exhitTitle: '赏心悦目 一眼之缘',
						exhitSTitle: '超大高清液晶显示器'
					}],
				exhibList: [{
						exhibImg: '../../../../static/images/page/mc2500.jpg',
						exhibTitle: '高清摄影一体机',
						exhibSTitle: '为您塑造专业形象'
					}],
				foerList: [{
						foerImg: '../../../../static/images/page/650D.jpg',
						foerTitle: 'Canon 单反相机'
					},{
						foerImg: '../../../../static/images/page/pj675.jpg',
						foerTitle: 'Sony 高清Dv摄影机'
					},{
						foerImg: '../../../../static/images/page/LED.jpg',
						foerTitle: 'LED 液晶拼接屏'
					},{
						foerImg: '../../../../static/images/page/mu.jpg',
						foerTitle: '高清投影幕 "未来电视"'
					},{
						foerImg: '../../../../static/images/page/yin.jpg',
						foerTitle: '天籁之音 体验非凡'
					}]
			}
		}
	}
</script>

<style scoped>
.clear{
	clear: both;
}
	.bgcolor{
		background: red;
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
		color: #7cc921;
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
	.commodity{
		width: 1200px;
		height: 388px;
	}
	.commodity-Lf{
		float: left;
		width: 470px;
		height: 388px;
		background: wheat;
	}
	.commodity-Ct{
		float: left;
		width: 512px;
		height: 388px;
		background: #FFFFFF;
	}
	.exhibition-top{
		padding: 35px 10px;
		width: 492px;
		height: 124px;
	}
	.exhi-wrapper{
		width: 480px;
		height: 130px;
	}
	.exhibition-tlf{
		float: left;
		width: 220px;
		height: 130px;
	}
	.exhibition-tlf img{
		width: 100%;
		height: 100%;
	}
	.exhibition-trg{
		float: right;
		padding-top: 45px;
		color: #5c5b5b;
		width: 260px;
		height: 85px;
		text-align: center;
	}
	.exhi-title{
		font-size: 22px;
	}
	.exhi-stitle{
		font-size: 14px;
	}
	.exhibition-bottom{
		padding: 35px 10px;
		width: 492px;
		height: 124px;
	}
	.exhibition-blf{
		float: left;
		padding-top: 45px;
		color: #5c5b5b;
		width: 260px;
		height: 85px;
		text-align: center;
	}
	.exhibition-brg img{
		width: 100%;
		height: 100%;
	}
	.exhibition-brg{
		float: right;
		width: 220px;
		height: 130px;
	}
	.exhi-title{
		font-size: 22px;
	}
	.exhi-stitle{
		font-size: 14px;
	}
	.commodity-Rg{
		float: left;
		width: 218px;
		height: 388px;
	}
	.status-title{
		color: #333333;
		text-align: center;
		font-size: 21px;
		line-height: 38px;
		background: #fef0e4;
	}
	.status li{
		padding: 18px 5px;
		list-style: none;
		font-size: 14px;
		height: 117px;
	}
	.status li:hover{
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
	.commodity-foer{
		margin-top: 16px;
		width: 1200px;
		height: 260px;
	}
	.commodity-foer li{
		width: 228px;
		height: 240px;
		background: red;
		list-style: none;
		float: left;
		margin-left: 15px;
		padding-top: 20px;
		text-align: center;
		background: #FFFFFF;
	}
	.commodity-foer li:first-child{
		margin-left: 0;
	}
	.commodity-foer li .foer-bottom{
		margin-top: 20px;
		font-size: 13px;
		color: #333333;
	}
	.commodity-foer li:hover{
		cursor: pointer;
		box-shadow: 2px 2px 10px #C2C2C2;
	}
</style>