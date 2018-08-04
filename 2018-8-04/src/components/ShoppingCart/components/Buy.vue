<template>
	<div class="wrapper">
		<!-- Buy标题 -->
		<div class="buyTitle">
			<div class="titleLf">买什么</div>
			<div class="titleRg curpoi">查看更多商品专辑</div>
		</div>
		<div class="clear"></div>
		<div class="buyContent">
			<!-- content Wrapper -->
			<div class="contentW" v-for="(item, index) of testList" :key="index">
				<div class="content">
					<!-- content Title -->
					<div class="coTitle">{{item.coTitle}}</div>
					<div class="coSubtitle">{{item.coSubtitle}}</div>
					<div class="coLf curpoi">
						<img :src="item.coLf"/>
					</div>
					<div class="coRg">
						<div class="rgOne curpoi">
							<img :src="item.rgOne"/>
						</div>
						<div class="rgTwo curpoi">
							<img :src="item.rgTwo"/>
						</div>
						<div class="rgThree curpoi">
							更多﹥
						</div>
					</div>
					<div class="clear"></div>
					<!-- 操作 -->
					<div class="operation">
						<div class="opLf">
							<div class="lfImg curpoi">
								<img :src="item.lfImg"/>
							</div>
							<div class="lfName">点赞{{item.lfNumber}}</div>
						</div>
						<div class="opRg">
							<div class="rgImg curpoi">
								<img :src="item.rgImg"/>
							</div>
							<div class="rgName">关注{{item.rgNumber}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="height: 400px;"></div>
	</div>
</template>

<script>
	export default{
		name: 'Buy',
		data () {
			return {
				testList: [{
					coTitle: 'Think Pad X230 轻薄便携',
					coSubtitle: '专业商务轻薄本',
					coLf: '../../../static/images/230.png',
					rgOne: '../../../static/images/percent/1-14.png',
					rgTwo: '../../../static/images/percent/1-15.png',
					lfImg: '../../../static/images/7.png',
					lfNumber: 2012,
					rgImg: '../../../static/images/6.png',
					rgNumber: 601
				},{
					coTitle: 'Think Pad X230 轻薄便携',
					coSubtitle: '专业商务轻薄本',
					coLf: '../../../static/images/230.png',
					rgOne: '../../../static/images/percent/1-14.png',
					rgTwo: '../../../static/images/percent/1-15.png',
					lfImg: '../../../static/images/7.png',
					lfNumber: 234,
					rgImg: '../../../static/images/6.png',
					rgNumber: 43
				},{
					coTitle: 'Think Pad X230 轻薄便携',
					coSubtitle: '专业商务轻薄本',
					coLf: '../../../static/images/230.png',
					rgOne: '../../../static/images/percent/1-14.png',
					rgTwo: '../../../static/images/percent/1-15.png',
					lfImg: '../../../static/images/7.png',
					lfNumber: 250,
					rgImg: '../../../static/images/6.png',
					rgNumber: 650
				},{
					coTitle: 'Think Pad X230 轻薄便携',
					coSubtitle: '专业商务轻薄本',
					coLf: '../../../static/images/230.png',
					rgOne: '../../../static/images/percent/1-14.png',
					rgTwo: '../../../static/images/percent/1-15.png',
					lfImg: '../../../static/images/7.png',
					lfNumber: 240,
					rgImg: '../../../static/images/6.png',
					rgNumber: 670
				}]
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		margin-top: 40px;
		width: 1200px;
		height: 330px;
	}
	.buyTitle{
		width: 100%;
		height: 40px;
		background: #f5f5f5;
		border-top: #888888 solid 2px;
		line-height: 40px;
		font-size: 16px;
		text-indent: 10px;
	}
	.titleLf{
		float: left;
	}
	.titleRg{
		float: right;
		padding-right: 10px;
		font-size: 14px;
		color: #eb6877;
	}
	.buyContent{
		width: 100%;
		height: 290px;
	}
	.contentW{
		float: left;
		padding: 15px 15px;
		width: 25%;
		height: 320px;
	}
	.content{
		width: 100%;
		height: 100%;
		border: #dddddd solid 1px;
	}
	.coTitle{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #333333;
		font-size: 16px;
	}
	.coSubtitle{
		width: 100%;
		height: 25px;
		line-height: 25px;
		text-align: center;
		font-size: 15px;
		color: #e4393c;
	}
	.coLf{
		float: left;
		margin-top: 10px;
		margin-left: 31.5px;
		padding: 25px 10px;
		width: 155px;
		height: 150px;
		border: #DDDDDD solid 1px;
	}
	.coLf img{
		width: 100%;
		height: 100%;
	}
	.coRg{
		float: right;
		margin-top: 10px;
		margin-right: 31.5px;
		width: 50px;
		height: 150px;
	}
	.coRg img{
		width: 100%;
		height: 100%;
	}
	.rgOne{
		width: 50px;
		height: 50px;
		border-top: #DDDDDD solid 1px;
		border-right: #DDDDDD solid 1px;
		border-bottom: #DDDDDD solid 1px;
	}
	.rgTwo{
		width: 50px;
		height: 50px;
		border-right: #DDDDDD solid 1px;
		border-bottom: #DDDDDD solid 1px;
	}
	.rgThree{
		width: 50px;
		height: 50px;
		border-right: #DDDDDD solid 1px;
		border-bottom: #DDDDDD solid 1px;
		text-align: center;
		line-height: 50px;
		color: #888888;
		background: #f0f0f0;
	}
	.operation{
		margin-top: 20px;
		margin-left: 30px;
		width: 205px;
		height: 35px;
	}
	.opLf{
		float: left;
		padding: 5px 10px;
		width: 102px;
		height: 35px;
	}
	.lfImg{
		float: left;
		width: 25px;
		height: 25px;
		line-height: 32px;
		text-align: center;
		border-radius: 50%;
		background: #f1f1f1;
	}
	.lfName{
		float: right;
		padding-top: 3px;
	}
	.opRg{
		float: right;
		padding: 5px 10px;
		border-left: #DDDDDD solid 1px;
		width: 103px;
		height: 35px;
	}
	.rgImg{
		float: left;
		width: 25px;
		height: 25px;
		line-height: 32px;
		text-align: center;
		border-radius: 50%;
		background: #f1f1f1;
	}
	.rgName{
		float: right;
		padding-top: 3px;
	}
</style>