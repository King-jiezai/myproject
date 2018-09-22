var returnedgoods = []
//买家已退货
layui.use(['laypage', 'layer'], function() {
	var laypage = layui.laypage,
		layer = layui.layer;

	$(function() {
		$.ajax({
			//请求方式
			type: "GET",
			//文件位置
			url: "http://120.78.142.125:8080/dg/afterSaleOrder/list.do",
			//返回数据格式为json,也可以是其他格式如
			dataType: "json",
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			//请求成功后要执行的函数，拼接html
			success: function(data) {

				for(var z = 0; z < data.afterSaleOrderVoList.length; z++) {

					if(data.afterSaleOrderVoList[z].refund == 2 || data.afterSaleOrderVoList[z].refund == 3) {

						if(data.afterSaleOrderVoList[z].status == 1) {

							/* 售后详情 */
							var list = {}
							list["buyerRemarks"] = data.afterSaleOrderVoList[z].buyerRemarks//卖家留言
							list["createTime"] = data.afterSaleOrderVoList[z].createTime//创建时间
							list["deposit"] = data.afterSaleOrderVoList[z].deposit//单个押金
							list["heaven"] = data.afterSaleOrderVoList[z].heaven//租期天数
							list["offer"] = data.afterSaleOrderVoList[z].offer//优惠
							list["orderNo"] = data.afterSaleOrderVoList[z].orderNo//订单号
							list["payment"] = data.afterSaleOrderVoList[z].payment//实际付款
							list["postage"] = data.afterSaleOrderVoList[z].postage//运费
							list["productImage"] = data.afterSaleOrderVoList[z].productImage//产品图片
							list["productName"] = data.afterSaleOrderVoList[z].productName//产品名称
							list["productSubtitle"] = data.afterSaleOrderVoList[z].productSubtitle//商品配置
							list["productskuId"] = data.afterSaleOrderVoList[z].productskuId//商品配置Id
							list["quantity"] = data.afterSaleOrderVoList[z].quantity//数量
							list["receiverAddress"] = data.afterSaleOrderVoList[z].receiverAddress//详细地址
							list["receiverArea"] = data.afterSaleOrderVoList[z].receiverArea//省市区
							list["receiverMobile"] = data.afterSaleOrderVoList[z].receiverMobile//收货电话
							list["receiverName"] = data.afterSaleOrderVoList[z].receiverName//收货人姓名
							list["receiverPhone"] = data.afterSaleOrderVoList[z].receiverPhone//收货人手机号
							list["receiverRegion"] = data.afterSaleOrderVoList[z].receiverRegion//地区
							list["receiverZip"] = data.afterSaleOrderVoList[z].receiverZip//邮编
							list["rent"] = data.afterSaleOrderVoList[z].rent//单个租金
							list["rentalCreateTime"] = data.afterSaleOrderVoList[z].rentalCreateTime//出租开始时间
							list["rentalEndTime"] = data.afterSaleOrderVoList[z].rentalEndTime//出租结束时间
							list["rentalMethod"] = data.afterSaleOrderVoList[z].rentalMethod//租赁方式
							list["totalSingle"] = data.afterSaleOrderVoList[z].totalSingle//单个租金*单个押金
							list["refund"] = data.afterSaleOrderVoList[z].refund//仅退款、退货退款、换货/维修
							list["status"] = data.afterSaleOrderVoList[z].status//订单状态
							returnedgoods.push(list)
							document.getElementById("NodataTwo").style.display = "none"

						} else if(data.afterSaleOrderVoList[z].status == 0 || data.afterSaleOrderVoList[z].status == 3 || data.afterSaleOrderVoList[z].status == 2 || data.afterSaleOrderVoList[z].status == 4) {
							$(".Nodata").html('暂无数据！')
						}

					}
				}

				//调用分页
				laypage.render({
					elem: 'PageNumberSix',
					count: returnedgoods.length,
					jump: function(obj) {
						//模拟渲染
						document.getElementById('ContentSix').innerHTML = function() {
							var arr = [],
								thisData = returnedgoods.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
							layui.each(thisData, function(index, item) {
								var rendering = ""

								/* 实际付款 */
								Payment = "<div class='Payment'>实际付款：<span>" + item.payment + "</span></div>"
								/* 优惠 */
								Discount = "<div class='Discount'>优惠数据：" + item.offer + "</div>"
								/* 运费 */
								Expresscost = "<div class='Expresscost'>(含快递费：" + item.postage + ")</div>"

								NotrMo = "<div class='No_trMo'>" + Expresscost + Discount + Payment + "</div>"

								/* 订单内容 */
								coInNumber = ''

								/* 状态 */

								if(item.refund == 2) {

									if(item.status == 1) {

										productskuId = item.productskuId
										orderNo = item.orderNo
										Statuss = "<div class='Status' onclick='Submission(" + orderNo + "," + productskuId + ")'>退货退款成功</div>"

									}
								} else if(item.refund == 3) {

									if(item.status == 1) {

										productskuId = item.productskuId
										orderNo = item.orderNo
										Statuss = "<div class='Status' onclick='Submission(" + orderNo + "," + productskuId + ")'>换货成功</div>"

									}
								}

								/* 单价 * 数量 */
								sePr = "<div class='sePr'>" + item.totalSingle + "*" + item.quantity + "</div>"

								coSta = "<div class='coSta'>" + sePr + Statuss + "</div>"

								/* 租期时间 */
								StartTime = "<div class='StartTime'>起租：" + item.rentalCreateTime + "</div>"
								EndTime = "<div class='EndTime'>截止：" + item.rentalEndTime + "</div>"
								StartEnd = "<div class='StartEnd'>" + StartTime + EndTime + "</div>"

								coFu = "<div class='coFu'>" +
									"<span>押金（单件）：" + item.deposit + "</span>" +
									"<span>租金（单件）：" + item.rent + "</span>" +
									"<span>租期天数：" + item.heaven + "</span>" +
									"</div>"
								coMo = "<div class='coMo'>电脑配置：" + item.productSubtitle + "</div>" //电脑配置
								shNa = "<div class='shNa'>" + item.productName + "</div>" //商品名称
								coInlf = "<div class='coInlf'>" + shNa + coMo + coFu + "</div>"
								shImg = "<div class='shImg'><img src='" + item.productImage + "'/></div>" //商品图片
								coIn = "<div class='coIn'>" + shImg + coInlf + StartEnd + coSta + "</div>"
								coInNumber = coInNumber + coIn

								commodityNumber = "<div class='commodity_Number'>" + coInNumber + "</div>"
								ordeBottom = "<div class='ordeBottom'>" + commodityNumber + NotrMo + "</div>"

								/* 订单详情 */
								reIn = "<div class='reIn'> 收货信息：<span id='reIn" + item.orderNo + "'>" + item.receiverName + " " + //收件人姓名
									item.receiverMobile + " " + item.receiverPhone + " " + //收件人固定电话  移动电话
									item.receiverRegion + " " + item.receiverArea + " " + //地区  省份-市-区
									item.receiverAddress + " " + item.receiverZip //详细地址  邮政编码
									+
									"</span>" +
									"<textarea id='input'></textarea>" +
									"<span class='reInOp curpoi' onclick='copy(" + item.orderNo + ")'>复制</span>" +
									"</div>"
								middle = "<div class='middle'>" + reIn + "</div>"

								/* 顶部内容 */
								ShopName = "<div class='ShopName'><i class='layui-icon'>&#xe68e;</i>&nbsp;&nbsp;广州大广信息技术有限公司</div>"
								TrTi = "<div class='trTi'>交易时间：" + item.createTime + "</div>"
								OrNumber = "<div class='orNumber'>订单号：" + item.orderNo + "</div>"

								if(item.refund == 1) {
									AfterSale = "<div class='WFPstate'>仅退款</div>"
								}

								if(item.refund == 2) {
									AfterSale = "<div class='WFPstate' style='background:#e60012'>退款退货</div>"
								}

								if(item.refund == 3) {
									AfterSale = "<div class='WFPstate' style='background:#00c17d'>仅换货/维修</div>"
								}

								Checkbox = "<div class='checkbox'><input type='checkbox'/></div>"

								ordeTop = "<div class='ordeTop'>" + Checkbox + AfterSale + OrNumber + TrTi + ShopName + "</div>"

								/* 外层包裹器 */
								Content = "<div class='orDe'>" + ordeTop + middle + ordeBottom + "</div>"

								rendering = Content

								arr.push(rendering);
							});
							scrollTo(0, 0) //跳回顶部
							return arr.join('');
						}();
					}
				});
			}
		})
	});
});