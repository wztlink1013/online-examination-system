var login = function(){
  var username = $("#username").val();
  var password = $("#password").val();
  $.ajax({
          type : "post",
          url : "/user/login",
          data : {
              "username" : username,  /*注意，前面的username是字符串，后面的是第二行申请的变量，下面password同*/
              "password" : password
          },
          dataType : "json",
          success : function(data) {//

             if(data.code =="999"){
             alert(data.msg);
             return false;//登陆失败，中断程序
             }
             location.href = "index.html";
          }
      });

}