var test
var url1
var url2
var order

function parseURL(url) {

	url1 = url.split("=")[1];
	order = url1.split('&')[0]
	url2 = url.split("=")[2];
	console.log(order)
	console.log(url2)

}

window.onload = function tetstt() {
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
				$(".img").html("<img src='" + data.afterSaleManagerVo.productImage + "'>")
				$(".shoppingName").html(data.afterSaleManagerVo.productName)
				$(".oponTopRg").html("金额：￥" + data.afterSaleManagerVo.payment)
				$(".span").html(data.afterSaleManagerVo.nickName)
				$(".reInLfBottom").html("申请时间：" + data.afterSaleManagerVo.createTime)
				$(".reInCtTop").html("订单编号：" + data.afterSaleManagerVo.orderNo)
				if(data.afterSaleManagerVo.goodsStatus == 1) {

					$(".reInCtBottom").html("货物状态：已收到货")

				} else if(data.afterSaleManagerVo.goodsStatus == 0) {

					$(".reInCtBottom").html("货物状态：未收到货")

				}

				$(".reInRgTop").html("退款编号：" + data.afterSaleManagerVo.refundNumber)
				$(".reInRgBottom").html("退款原因：" + data.afterSaleManagerVo.reason)

				for(var i = 0; i < data.negotiationHistoryList.length; i++) {

					$(".meBoimg").html("<img src='" + data.negotiationHistoryList[i].avatar + "'>")
					$(".meBoCoLf").html(data.negotiationHistoryList[i].createTime)
					$(".meBoName").html(data.negotiationHistoryList[i].createBy)
					$(".meBoCoRg").html(data.negotiationHistoryList[i].content)
				}
				$(".orDeImg").html("<img src='" + data.afterSaleManagerVo.productImage + "'>")
				$(".orDeTiTop").html(data.afterSaleManagerVo.productName)
				$(".orDeTiBottom").html(data.afterSaleManagerVo.rentalCreateTime)
				$(".orDeTiBottoms").html(data.afterSaleManagerVo.rentalEndTime)
				$(".Name").html(data.afterSaleManagerVo.nickName)
				$(".OrderNumbers").html(data.afterSaleManagerVo.orderNo)
				$(".deposits").html(data.afterSaleManagerVo.totalPrice)
				$(".rents").html(data.afterSaleManagerVo.totalRent)
				$(".Discounts").html(data.afterSaleManagerVo.offer)
				$(".Postages").html(data.afterSaleManagerVo.postage)
				$(".payments").html(data.afterSaleManagerVo.payment)
				$(".RefundNumbers").html(data.afterSaleManagerVo.refundNumber)
				$(".RefundAmounts").html(data.afterSaleManagerVo.refundMoney)
				$(".Numbers").html(data.afterSaleManagerVo.quantity)
				$(".Reasons").html(data.afterSaleManagerVo.reason)

				if(data.afterSaleManagerVo.refund == 1) {
					$(".Requirements").html("仅退款")
				} else if(data.afterSaleManagerVo.refund == 2) {
					$(".Requirements").html("退货退款")
				} else if(data.afterSaleManagerVo.refund == 3) {
					$(".Requirements").html("仅换货/维修")
				}

				$(".Explains").html(data.afterSaleManagerVo.remarks)
			}
		})
	}

/* 同意退款 */
function agree() {
	$.ajax({
		//请求方式
		type: "POST",
		//文件位置
//		url: "http://120.78.142.125/dg/afterSaleManager/reviewBy.do",
		url: "http://192.168.1.172:8080/dg/afterSaleManager/reviewFail.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		data: {
			productskuId: url2,
			orderNo: order
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			if(data.status == 1) {
				layer.msg('提交成功', {
					time: 2000, //20s后自动关闭
				});
				setTimeout("window.close()",3000)//三秒页面自动关闭
				
			} else {
				layer.msg('提交失败', {
					time: 2000, //20s后自动关闭
				});
			}
		}
	})
	/*var Consignee = $("#reAdRgTop span").text()
	var address = $("#reAdRgBottom span").text()
	console.log(Consignee)
	console.log(address)*/
}

/* 拒绝退货申请 */
function disagree() {
	var test = document.getElementById("diOp").style.display
	if(test === "none") {
		document.getElementById("diOp").style.display = "block"
		document.getElementById("prSe").style.display = "none"
		document.getElementById("handle").style.height = "470px"
		document.getElementById("handleLf").style.height = "450px"
	}
	
}

function submits() {
	
	var rtl = $("#interest option:selected").text()
	
	var tes = $("#textar").val()
	
	console.log(url2)
	console.log(order)
	console.log(rtl)
	console.log(tes)
	
		$.ajax({
		//请求方式
		type: "POST",
		//文件位置
		url: "http://192.168.1.172:8080/dg/afterSaleManager/reviewFail.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		data: {
			productskuId: url2,
			orderNo: order,
			reason: rtl,
			remarks: tes
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			
		}
	})
}

/* 取消拒绝退货申请 */
function cancel() {
	document.getElementById("diOp").style.display = "none"
	document.getElementById("prSe").style.display = "block"
	document.getElementById("handle").style.height = "470px"
	document.getElementById("handleLf").style.height = "450px"
}