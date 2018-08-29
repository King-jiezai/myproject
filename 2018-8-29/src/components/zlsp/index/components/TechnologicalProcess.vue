<template>
	<div class="Tewrapper">
		<!-- Technological Process 流程 -->
		<div class="wrapperTePr">
			<!-- identical 完全一样的 -->
			<div class="teprId time">
				<div class="img">
					<img src="../../../../../static/images/page/yi.png"/>
				</div>
				<div class="notes">
					<div class="notesTop">1天起租</div>
					<div class="notesBottom">随租随退，方便快捷</div>
				</div>
			</div>
			<div class="teprId exempting">
				<div class="img">
					<img src="../../../../../static/images/page/mian.png"/>
				</div>
				<div class="notes">
					<div class="notesTop">免押金</div>
					<div class="notesBottom">提交资料申请免押金</div>
				</div>
			</div>
			<div class="teprId quarter">
				<div class="img">
					<img src="../../../../../static/images/page/ji.png"/>
				</div>
				<div class="notes">
					<div class="notesTop">支付便捷</div>
					<div class="notesBottom">租金可月付或按季度付</div>
				</div></div>
			<div class="teprId service">
				<div class="img">
					<img src="../../../../../static/images/page/fu.png"/>
				</div>
				<div class="notes">
					<div class="notesTop">全程服务</div>
					<div class="notesBottom">租赁期间全程跟进服务</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TechnologicalProcess'
	}
</script>

<style scoped>

.Tewrapper{
	padding: 1px 0;
	width: 100%;
	background: #FFFFFF;
}
.wrapperTePr{
	margin: 60px auto;
	width: 1200px;
	height: 44px;
}
.teprId{
	margin-left: 65px;
	margin-right: 65px;
	width: 170px;
	height: 44px;
}
.notes{
	float: right;
	width: 120px;
}
.notesTop{
	color: #333333;
	font-size: 18px;
	line-height: 22px;
}
.notesBottom{
	color: #666666;
	font-size: 12px;
	line-height: 22px;
}
/*                  时间                                                       */
.time{
	float: left;
}
.img{
	float: left;
	width: 45px;
	height: 44px;
}
.img img{
	width: 100%;
	height: 100%;
}
/*                  免押金                                                       */
.exempting{
	float: left;
}
/*                  季度                                                       */
.quarter{
	float: left;
}
/*                  服务                                                       */
.service{
	float: right;
}
</style>