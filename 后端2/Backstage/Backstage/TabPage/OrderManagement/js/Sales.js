
//分页，每页10条数据
layui.use(['laypage', 'layer'], function() {
	var laypage = layui.laypage,
		layer = layui.layer;

	$(function() {
		$.ajax({
			//请求方式
			type: "GET",
			//文件位置
			url: "http://120.78.142.125/dg/afterSaleOrder/list.do",
			//返回数据格式为json,也可以是其他格式如
			dataType: "json",
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			//请求成功后要执行的函数，拼接html
			success: function(data) {
				console.log(data)
				var test = data.afterSaleOrderVoList
				//调用分页
				laypage.render({
					elem: 'PageNumberOne',
					count: test.length,
					jump: function(obj) {
						//模拟渲染
						document.getElementById('ContentOne').innerHTML = function() {
							var arr = [],
								thisData = test.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
								layui.each(thisData, function(index, item) {
								var rendering = ""
								
									/* 实际付款 */
									Payment = "<div class='Payment'>实际付款：<span>" + data.afterSaleOrderVoList[index].payment + "</span></div>"
									/* 优惠 */
									Discount = "<div class='Discount'>优惠数据：" + data.afterSaleOrderVoList[index].offer + "</div>"
									/* 运费 */
									Expresscost = "<div class='Expresscost'>(含快递费：" + data.afterSaleOrderVoList[index].postage + ")</div>"

									NotrMo = "<div class='No_trMo'>" + Expresscost + Discount + Payment + "</div>"

									/* 订单内容 */
									coInNumber = ''

									var Statuss, AfterSale
									
									/* 状态 */
									if(data.afterSaleOrderVoList[index].refund == 1) {
										
										if(data.afterSaleOrderVoList[index].status == 0){
											
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/Refund/Refund_Page.html?orderNo="+ data.afterSaleOrderVoList[index].orderNo +"&productskuId=" + data.afterSaleOrderVoList[index].productskuId + "' target='_blank'>审核不通过</a></div>"
											
										} else if(data.afterSaleOrderVoList[index].status == 2) {
											
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/Refund/Refund_Page.html?orderNo="+ data.afterSaleOrderVoList[index].orderNo +"&productskuId=" + data.afterSaleOrderVoList[index].productskuId + "' target='_blank'>审核中</a></div>"
											
										} else if(data.afterSaleOrderVoList[index].status == 3) {
	
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/Refund/Refund_Page.html?orderNo=" + data.afterSaleOrderVoList[index].orderNo +"&productskuId=" + data.afterSaleOrderVoList[index].productskuId + "' target='_blank'>审核通过</a></div>"
	
										} 
									}else if(data.afterSaleOrderVoList[index].refund == 2) {
										
										if(data.afterSaleOrderVoList[index].status == 0) {
	
											Statuss = "<div class='Status'>退款关闭</div>"
	
										} else if(data.afterSaleOrderVoList[index].status == 1) {
	
											Statuss = "<div class='Status'>退货/换货成功</div>"
	
										} else if(data.afterSaleOrderVoList[index].status == 2) {
											
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/RefundOfRefunds/Sales_Page.html?orderNo="+ data.afterSaleOrderVoList[index].orderNo +"&productskuId=" + data.afterSaleOrderVoList[index].productskuId + "' target='_blank'>审核中</a></div>"
											
										} else if(data.afterSaleOrderVoList[index].status == 3) {
	
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/RefundOfRefunds/Barter.html?orderNo=" + data.afterSaleOrderVoList[index].orderNo + "' target='_blank'>审核通过</a></div>"
	
										} else if(data.afterSaleOrderVoList[index].status == 4) {
	
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/RefundOfRefunds/Barter.html?orderNo=" + data.afterSaleOrderVoList[index].orderNo + "' target='_blank'>买家已付款</a></div>"
	
										}
									}
									else if(data.afterSaleOrderVoList[index].refund == 3) {
										
										if(data.afterSaleOrderVoList[index].status == 0) {
	
											Statuss = "<div class='Status'>退款关闭</div>"
	
										} else if(data.afterSaleOrderVoList[index].status == 1) {
	
											Statuss = "<div class='Status'>退货/换货成功</div>"
	
										} else if(data.afterSaleOrderVoList[index].status == 2) {
											
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/RefundOfRefunds/Sales_Page.html?orderNo="+ data.afterSaleOrderVoList[index].orderNo +"&productskuId=" + data.afterSaleOrderVoList[index].productskuId + "' target='_blank'>审核中</a></div>"
											
										} else if(data.afterSaleOrderVoList[index].status == 3) {
	
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/RefundOfRefunds/Barter.html?orderNo=" + data.afterSaleOrderVoList[index].orderNo + "' target='_blank'>审核通过</a></div>"
	
										} else if(data.afterSaleOrderVoList[index].status == 4) {
	
											Statuss = "<div class='Status'><a href='../../TabPage/OrderManagement/pages/RefundOfRefunds/Barter.html?orderNo=" + data.afterSaleOrderVoList[index].orderNo + "' target='_blank'>买家已付款</a></div>"
	
										}
									}

									/* 单价 * 数量 */
									sePr = "<div class='sePr'>" + data.afterSaleOrderVoList[index].totalSingle + "*" + data.afterSaleOrderVoList[index].quantity + "</div>"

									coSta = "<div class='coSta'>" + sePr + Statuss + "</div>"

									/* 租期时间 */
									StartTime = "<div class='StartTime'>起租：" + data.afterSaleOrderVoList[index].rentalCreateTime + "</div>"
									EndTime = "<div class='EndTime'>截止：" + data.afterSaleOrderVoList[index].rentalEndTime + "</div>"
									StartEnd = "<div class='StartEnd'>" + StartTime + EndTime + "</div>"

									coFu = "<div class='coFu'>" +
										"<span>押金（单件）：" + data.afterSaleOrderVoList[index].deposit + "</span>" +
										"<span>租金（单件）：" + data.afterSaleOrderVoList[index].rent + "</span>" +
										"<span>租期天数：" + data.afterSaleOrderVoList[index].heaven + "</span>" +
										"</div>"
									coMo = "<div class='coMo'>电脑配置：" + data.afterSaleOrderVoList[index].productSubtitle + "</div>" //电脑配置
									shNa = "<div class='shNa'>" + data.afterSaleOrderVoList[index].productName + "</div>" //商品名称
									coInlf = "<div class='coInlf'>" + shNa + coMo + coFu + "</div>"
									shImg = "<div class='shImg'><img src='" + data.afterSaleOrderVoList[index].productImage + "'/></div>" //商品图片
									coIn = "<div class='coIn'>" + shImg + coInlf + StartEnd + coSta + "</div>"
									coInNumber = coInNumber + coIn

									commodityNumber = "<div class='commodity_Number'>" + coInNumber + "</div>"
									ordeBottom = "<div class='ordeBottom'>" + commodityNumber + NotrMo + "</div>"

									/* 订单详情 */
									SeSNo = "<div class='SeSNo'>卖家备注：<span></span>" +
										"<i class='layui-icon curpoi' onclick='moSellerMessage(" + data.afterSaleOrderVoList[index].orderNo + ")'>&#xe642;</i></span></div>" +
										"</div>"
									buSNo = "<div class='buSNo'>买家备注：<span>" + data.afterSaleOrderVoList[index].message + "</span></div>"
									reIn = "<div class='reIn'> 收货信息：<span id='reIn" + data.afterSaleOrderVoList[index].orderNo + "'>" + data.afterSaleOrderVoList[index].receiverName + " " + //收件人姓名
										data.afterSaleOrderVoList[index].receiverMobile + " " + data.afterSaleOrderVoList[index].receiverPhone + " " + //收件人固定电话  移动电话
										data.afterSaleOrderVoList[index].receiverRegion + " " + data.afterSaleOrderVoList[index].receiverArea + " " + //地区  省份-市-区
										data.afterSaleOrderVoList[index].receiverAddress + " " + data.afterSaleOrderVoList[index].receiverZip //详细地址  邮政编码
										+
										"</span>" +
										"<textarea id='input'></textarea>" +
										"<span class='reInOp curpoi' onclick='copy(" + data.afterSaleOrderVoList[index].orderNo + ")'>复制</span>" +
										"</div>"
									middle = "<div class='middle'>" + reIn + buSNo + SeSNo + "</div>"

									/* 顶部内容 */
									ShopName = "<div class='ShopName'><i class='layui-icon'>&#xe68e;</i>&nbsp;&nbsp;广州大广信息技术有限公司</div>"
									TrTi = "<div class='trTi'>交易时间：" + data.afterSaleOrderVoList[index].createTime + "</div>"
									OrNumber = "<div class='orNumber'>订单号：" + data.afterSaleOrderVoList[index].orderNo + "</div>"

									if(data.afterSaleOrderVoList[index].refund == 1) {
										AfterSale = "<div class='WFPstate'>仅退款</div>"
									}

									if(data.afterSaleOrderVoList[index].refund == 2) {
										AfterSale = "<div class='WFPstate' style='background:#e60012'>退款退货</div>"
									}

									if(data.afterSaleOrderVoList[index].refund == 3) {
										AfterSale = "<div class='WFPstate' style='background:#00c17d'>仅换货/维修</div>"
									}

									Checkbox = "<div class='checkbox'><input type='checkbox'/></div>"

									ordeTop = "<div class='ordeTop'>" + Checkbox + AfterSale + OrNumber + TrTi + ShopName + "</div>"

									/* 外层包裹器 */
									Content = "<div class='orDe'>" + ordeTop + middle + ordeBottom + "</div>"

									rendering = Content

								
								arr.push(rendering);
							});
							return arr.join('');
						}();
					}
				});
			}
		})
	});
});


/* 数据返回后端 */
function NewgetListData(curr, limit) {
	$.ajax({
		//请求方式
		type: "GET",
		//文件位置
		url: "http://120.78.142.125/dg/afterSaleOrder/list.do",
		data: {
			pageNum: curr, //页数
			PageSize: limit //每页条数
		},
		xhrFields: {
			withCredentials: true
		},
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			PrintingData(data)
		}
	})
}

/* 分页 */
function table() {
	//完整功能
	laypage.render({
		elem: 'PageNumberOne',
		count: Count //---数据总数
			,
		limit: Limit //---每页条数
			,
		layout: ['count', 'prev', 'page', 'next', 'skip'],
		jump: function(obj, first) {
			//obj包含了当前分页的所有参数，比如：
			console.log("获取当前的页:" + obj.curr); //得到当前页，以便向服务端请求对应页的数据。
			console.log("获取每页显示显示条数:" + obj.limit); //得到每页显示的条数

			//首次不执行
			if(!first) {
				NewgetListData(obj.curr, obj.limit)
			}

		}
	});
}


/* 订单号查询 */
function OrderQuery() {
	var inOrderNo = $("#inOrderNo").val()
	$("#ContentOne").empty()
	$("#PageNumberOne").empty()
	$.ajax({
		//请求方式
		type: "POST",
		//文件位置
		url: "http://120.78.142.125/dg/manage/order/search.do",
		data: {
			orderNo: inOrderNo
		},
		//url:"http://192.168.1.172:8080/dg/manage/order/list.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		//请求成功后要执行的函数，拼接html
		success: function(data) {

		}
	})
}

/* 复制代码 */
function copy(id) {
	var text = document.getElementById("reIn" + id).innerText;
	console.log(text)
	
	var input = document.getElementById("input");
	input.value = text; // 修改文本框的内容
	
	input.select(); // 选中文本
	document.execCommand("copy"); // 执行浏览器复制命令
	alert("复制成功");
}