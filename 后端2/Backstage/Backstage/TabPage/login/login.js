  
  
  	/* 数据返回后端 */
  	function login(){
  	
  		var phones = document.getElementById("phone").value
  		var passwords = document.getElementById("password").value
  		
  		$.ajax({
	    	//请求方式
	    	type:"POST",
	    	//文件位置
	    	url:"http://120.78.142.125/dg/user/login.do",
	    	
	    	data: {
	    		phone :'18888888888',
	    		password: '123456',
				},
		    //返回数据格式为json,也可以是其他格式如
		    dataType:'json',
		    //请求成功后要执行的函数，拼接html
		    success: function(data){
		    	
		    	if (data.status == 1) {
		    	
		    		window.open("index1.html")
		    	}
		    		    	
		    	
		    }
		})
  		
	}   