let login = function() {
    let username = $("#username").val()
    let password = $("#password").val()

    $.ajax({
        type : "post",
        url : "/user/login",
        data : {
            "username" : username,
            "password" : password
        },
        dataType : "json",
        success : function(data) {// 后端的返回值
            alert(data);
        }
    });
}