<template>
	<div class="seflWrapper">
		<div class="grflNav">
			<div class="grflTitle">2F 办公设备</div>
			<ul>
				<li>打印机</li>
				<li>一体机</li>
				<li>投影仪</li>
				<li>扫描仪</li>
				<li>其他</li>
			</ul>
			<div class="clear"></div>
		</div>
		<!-- Content display 内容展示 -->
		<div class="coDi">
			<div class="coDiLf">
				<img src="../../../../../static/images/page/pop.jpg"/>
			</div>
			<div class="coDiCt">
				<div class="coDiCtTop"></div>
				<div class="coDiCtBottom">
					<div class="bottom">
						<div class="img"><img src="../../../../../static/images/page/HL-2240.jpg"/></div>
						<div class="title">brother 黑白激光打印机</div>
					</div>
					<div class="bottom">
						<div class="img"><img src="../../../../../static/images/page/EB-C735X.jpg"/></div>
						<div class="title">Epson  商务投影仪 </div>
					</div>
					<div class="bottom">
						<div class="img"><img src="../../../../../static/images/page/DS-510.jpg"/></div>
						<div class="title">Epson  馈纸试扫描仪</div>
					</div>
				</div>
			</div>
			<div class="coDiRg">
				<div class="rgTitle">人气浏览</div>
				<ul>
					<li class="curpoi" v-for="(item,index) of testList" :key="index">
						<div class="Rgimg"><img :src="item.Rgimg"/></div>
						<div class="RgName">{{ item.RgName }}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SecondFloor',
		data () {
			return{
				testList:[{
					Rgimg: "../../../../../static/images/page/hot/680KII.jpg",
					RgName: "Epson 针式打印机"
				},{
					Rgimg: "../../../../../static/images/page/hot/C765XN.jpg",
					RgName: "Epson 5000流明投影仪"
				},{
					Rgimg: "../../../../../static/images/page/hot/R330.jpg",
					RgName: "Epson 照片打印机"
				},{
					Rgimg: "../../../../../static/images/page/hot/L8650CDW.jpg",
					RgName: "Brother 复合一体机"
				},]
			}
		}
	}
</script>

<style scoped>

.seflWrapper{
	width: 1200px;
	padding-top: 40px;
	padding-bottom: 5px;
}
.grflNav{
	padding-bottom: 5px;
	width: 100%;
	height: 30px;
}
.grflTitle{
	float: left;
	line-height: 30px;
	font-size: 24px;
	color: #ef802e;
}
.grflNav ul{
	float: left;
	margin-left: 120px;
	line-height: 30px;
	list-style: none;
}
.grflNav ul li{
	float: left;
	margin-left: 20px;
	color: #333333;
	font-size: 14px;
}
.grflNav ul li:hover{
	cursor: pointer;
	color: #e60012;
}
/* 内容展示 */
.coDi{
	width: 1199px;
	height: 486px;
	border: #e6e6e6 solid 1px;
}
/* 左边 */
.coDiLf{
	float: left;
	width: 257px;
	height: 100%;
}
.coDiLf img{
	width: 100%;
	height: 100%;
}
/* 中间  */
.coDiCt{
	float: left;
	width: 729px;
	height: 100%;
}
.coDiCtTop{
	widows: 100%;
	height: 260.5px;
	background: #dff2f4;
}
.coDiCtBottom{
	widows: 100%;
	height: 225.5px;
	background: #FFFFFF;
}
.bottom{
	float: left;
	width: 243px;
	height: 100%;
}
.img{
	padding: 20px 40px;
	width: 243px;
	height: 167px;
}
.img img{
	width: 100%;
	height: 100%;
}
.title{
	padding-top: 10px;
	text-align: center;
	color: #333333;
	font-size: 14px;
}
.bottom:nth-child(2){
	float: left;
	width: 243px;
	height: 100%;
	border-left: #e6e6e6 solid 1px;
	border-right: #e6e6e6 solid 1px;
}
.bottom:nth-child(3){
	float: right;
	width: 243px;
	height: 100%;
}
.bottom:hover{
	cursor: pointer;
}
.bottom:hover .title{
	color: #e60012;
}
/* 右边 */
.coDiRg{
	float: right;
	width: 211px;
	height: 100%;
}
.rgTitle{
	width: 211px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	color: #0a0a0a;
	background: #fef0e4;
}
.coDiRg ul{
	list-style: none;
	background: #FFFFFF;
}
.coDiRg ul li{
	padding: 20px 10px;
	width: 211px;
	height: 112.75px;
	font-size: 12px;
}
.coDiRg ul li:hover{
	background: rgba(222,222,222,.3);
	color: #e60012;
}
.Rgimg{
	float: left;
	width: 78px;
	height: 78px;
	border: #f3f3f3 solid 1px;
}
.Rgimg img{
	width: 100%;
	height: 100%;
}
.RgName{
	float: right;
	padding-top: 25px;
	width: 105px;
	height: 56px;
}
</style>