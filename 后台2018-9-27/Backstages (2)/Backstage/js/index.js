code = ""

/* 验证码生成 */
window.onload = function createCode() {
	code = ""
	var codeLength = 4; // 验证码的长度
	var checkCode = document.getElementById("VerificationCode");
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
		'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
		'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); // 随机数
	for(var i = 0; i < codeLength; i++) { // 循环操作
		var index = Math.floor(Math.random() * 36); // 取得随机数的索引（0~35）
		code += random[index]; // 根据索引取得随机数加到code上
	}
	checkCode.innerHTML = code; // 把code值赋给验证码
	console.log(code)
}

/* 更改验证码 */
function createCodeAgain() {
	code = ""
	var codeLength = 4; // 验证码的长度
	var checkCode = document.getElementById("VerificationCode");
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
		'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
		'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); // 随机数
	for(var i = 0; i < codeLength; i++) { // 循环操作
		var index = Math.floor(Math.random() * 36); // 取得随机数的索引（0~35）
		code += random[index]; // 根据索引取得随机数加到code上
	}
	checkCode.innerHTML = code; // 把code值赋给验证码
	console.log(code)
}

/* 登录按钮 */
function login() {
	phone = $("#phone").val()
	pass = $("#pass").val()
	veco = $("#veco").val()
	
	if( veco.toUpperCase() != code.toUpperCase() ){
		$(".Tips").html("验证码不正确")
		setTimeout(function(){$(".Tips").css("display","none")},2000);
	} else {
		$.ajax({
		//请求方式
		type: "POST",
		//文件位置
		url: "http://120.78.142.125:8080/dg/user/login.do",
//		url: "http://192.168.1.130:8080/dg/user/login.do",
		data: {
			phone: phone, //账号
			password: pass //密码
		},
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			if(data.status == 1) {
				window.location.href = 'index1.html'
			} else {
				$(".Tips").html("账号或者密码不正确")
				setTimeout(function(){$(".Tips").css("display","none")},2000);
			}
		}
	})
	}
}