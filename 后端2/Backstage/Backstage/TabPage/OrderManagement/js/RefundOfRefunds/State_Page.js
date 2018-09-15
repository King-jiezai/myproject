
var test
var url1
var url2
var order

function parseURL(url){
	
    url1 = url.split("=")[1];
    order= url1.split('&')[0]
    url2 = url.split("=")[2];
    console.log(order)
    console.log(url2 )

}

window.onload = function tetstt(){
	var test = location.href.split('?')[1]
	parseURL(test)
	testtt()
}

function testtt() {
	$.ajax({
		//请求方式
		type: "GET",
		//文件位置
		url: "http://120.78.142.125/dg/afterSaleManager/listAfterSale.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		data: {
			productskuId: url2,
			orderNo: order
		},
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			
			console.log(data)
			$(".img").html("<img src='"+data.afterSaleManagerVo.productImage+"'>")
			$(".shoppingName").html(data.afterSaleManagerVo.productName)
			$(".oponTopRg").html("金额：￥"+ data.afterSaleManagerVo.payment)
			$(".span").html(data.afterSaleManagerVo.nickName)
			$(".reInLfBottom").html("申请时间："+data.afterSaleManagerVo.createTime)
			$(".reInCtTop").html("订单编号："+data.afterSaleManagerVo.orderNo)
			if(data.afterSaleManagerVo.goodsStatus == 1) {
				
				$(".reInCtBottom").html("货物状态：已收到货")
		
			}else if(data.afterSaleManagerVo.goodsStatus == 0) {
				
				$(".reInCtBottom").html("货物状态：未收到货")
		
			}
			
			$(".reInRgTop").html("退款编号："+data.afterSaleManagerVo.refundNumber)
			$(".reInRgBottom").html("退款原因："+data.afterSaleManagerVo.reason)
			
			for (var i=0; i<data.negotiationHistoryList.length; i++) {
				
				$(".meBoimg").html("<img src='"+data.negotiationHistoryList[i].avatar+"'>")
				$(".meBoCoLf").html(data.negotiationHistoryList[i].createTime)
				$(".meBoName").html(data.negotiationHistoryList[i].createBy)
				$(".meBoCoRg").html(data.negotiationHistoryList[i].content)				
			}
			
		
		}
	})
}

/* 同意退款 */
function agree(){
	var Consignee = $("#reAdRgTop span").text()
	var address = $("#reAdRgBottom span").text()
	console.log(Consignee)
	console.log(address)
}

/* 拒绝退货申请 */
function disagree(){
	var test = document.getElementById("diOp").style.display
	if( test === "none" ){
		document.getElementById("diOp").style.display="block"
		document.getElementById("coOp").style.display="none"
		document.getElementById("prSe").style.display="none"
		document.getElementById("handle").style.height="470px"
		document.getElementById("handleLf").style.height="450px"
	}
}

/* 取消拒绝退货申请 */
function cancel(){
	document.getElementById("diOp").style.display="none"
	document.getElementById("coOp").style.display="block"
	document.getElementById("prSe").style.display="block"
	document.getElementById("handle").style.height="470px"
	document.getElementById("handleLf").style.height="450px"
}
