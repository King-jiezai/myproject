var test
var url1
var mortgageId

function parseURL(url) {

	url1 = url.split("=")[1];
	mortgageId = url1.split('&')[0]
}
/* 初始执行 */
window.onload = function tetstt() {
	var test = location.href.split('?')[1]
	parseURL(test)
	testtt()
}

/* 数据渲染 */
function testtt() {
	$.ajax({
		//请求方式
		type: "GET",
		//文件位置
		url: "http://120.78.142.125:8080/dg/manage/morgage/detail.do", //售后服务接口
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		data: {
			mortgageId: mortgageId, //id
		},
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			
			//第一行
			$('.LeName').html(data.data.corporationName)
			$('.LePhone').html(data.data.corporationPhone)
			$('.LeId').html(data.data.corporationId)
			$('.UrName').html(data.data.urgentName)
			$('.UrPhone').html(data.data.urgentPhone)
			
			//第二行
			$('.CoName').html(data.data.companyName)
			$('.CrCode').html(data.data.code)
			$('.EsTime').html(data.data.foundTime)
			
			//第三行
			$('.ARess').html( data.data.area+data.data.address)
			
			
			$(".FaceImage").html("<img class='FaceImage' src='" + data.data.corporationIdFaceImage + "'>")
			$(".BackImage").html("<img class='BackImage' src='" + data.data.corporationIdBackImage + "'>")
			$(".AuthorizationImage").html("<img class='AuthorizationImage' src='" + data.data.corporationIdFaceImage + "'>")
			$(".ReportImage").html("<img class='ReportImage' src='" + data.data.creditReportImage + "'>")
			$(".Account1Image").html("<img class='Account1Image' src='" + data.data.bankAccount1Image + "'>")
			$(".Account2Image").html("<img class='Account2Image' src='" + data.data.bankAccount2Image + "'>")
			$(".LicenseImage").html("<img class='LicenseImage' src='" + data.data.businessLicenseImage + "'>")
			
			if (data.data.deposit == 1) {
				$('.result').html(data.data.message)
			}
			//法人代表或股东身份证正面照片鼠标移开图片变回原来大小
			$('.FaceImage img').mouseleave(function() {
					$(this).stop().animate({
							width: "135",
							height: "180",
							left: "0px",
							top: "0px",
							position: 'relative',
							zIndex: '0',
						}, 1000);
					});
			
			//法人代表或股东身份证反面照片，鼠标移开图片变回原来大小
			$('.BackImage img').mouseleave(function() {
				$(this).stop().animate({
					width: "135",
					height: "180",
					left: "0px",
					top: "0px",
					position: 'relative',
					zIndex: '0',
				}, 1000);
			});
			
			//法人授权照片，鼠标移开图片变回原来大小
			$('.AuthorizationImage img').mouseleave(function() {
				$(this).stop().animate({
					width: "135",
					height: "180",
					left: "0px",
					top: "0px",
					position: 'relative',
					zIndex: '0',
				}, 1000);
			});
			
			//法人征信书照片，鼠标移开图片变回原来大小
			
			$('.ReportImage img').mouseleave(function() {
				$(this).stop().animate({
					width: "135",
					height: "180",
					left: "0px",
					top: "0px",
					position: 'relative',
					zIndex: '0',
				}, 1000);
			});
			
			//公司银行流水照片，鼠标移开图片变回原来大小
			$('.Account1Image img').mouseleave(function() {
				$(this).stop().animate({
					width: "135",
					height: "180",
					left: "0px",
					top: "0px",
					position: 'relative',
					zIndex: '0',
				}, 1000);
			});
			
			//公司银行流水照片，鼠标移开图片变回原来大小
			$('.Account2Image img').mouseleave(function() {
				$(this).stop().animate({
					width: "135",
					height: "180",
					left: "0px",
					top: "0px",
					position: 'relative',
					zIndex: '0',
				}, 1000);
			});
			
			//营业执照照片，鼠标移开图片变回原来大小
			$('.LicenseImage img').mouseleave(function() {
				$(this).stop().animate({
					width: "135",
					height: "180",
					left: "0px",
					top: "0px",
					position: 'relative',
					zIndex: '0',
				}, 1000);
			});
			
		}	
	})
}

function adopt() {
	
	var test = document.getElementById("tesera").style.display
	if(test === "block") {
		document.getElementById("tesera").style.display = "none"
		document.getElementById("three").style.marginTop = "50px"
	}
	
}

function Notadopt() {
	var test = document.getElementById("tesera").style.display
	if(test === "none") {
		document.getElementById("tesera").style.display = "block"
	}
}


function Submit() {
	var deposit = $('input:radio:checked').val()
	var message =document.getElementById('texs').value
	
	if(deposit == '全免押金') {
		deposit = 3
	}else if(deposit == '免部分押金') {
		deposit = 2
	}else if(deposit == '审核不通过') {
		deposit = 1
	}
	console.log(message)
	$.ajax({
		//请求方式
		type: "POST",
		//文件位置
		url: "http://120.78.142.125:8080/dg/manage/morgage/auditing.do", //售后服务接口
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		data: {
			id : mortgageId, //id
			deposit : deposit,
			message : message
		},
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			console.log(mortgageId)
		}
	})
}


		




