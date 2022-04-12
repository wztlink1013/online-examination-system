$(function(){
console.log('++++++++++++++++++++++++++++')
    // 加载院系
    $.ajax({
        type : "post",
        url : "/faculty/loadFaculty",
        dataType : "json",
        async : false,   //同步ajax（一般用异步）
        success : function(data) {// 后端的返回值
            let opt = "<option value=''>--请选择--</option>";
            $.each(data, function(index, menu){
                opt += "<option value='" + menu.id + "'>" + menu.facultyName + "</option>";
            });
            $("#facultyId").html(opt);
        }
    });
});

var loadMajor = function(obj){
    var faculty_level = $(obj).val(); // 菜单级别
    // 根据院系查询所有的该院系所有专业
    $.ajax({
        type : "post",
        url : "/major/loadMajor",
        dataType : "json",
        data : {
          "id" : faculty_level
        },
        async : false,   //同步ajax（一般用异步）
        success : function(data) {// 后端的返回值
            var opt = "<option value=''>--请选择--</option>";
            $.each(data, function(index, menu){
                opt += "<option value='" + menu.id + "'>" + menu.majorName + "</option>";
            });
            $("#majorId").html(opt);
        }
    });
}

var loadClass = function(obj){
    let faculty_id = $("#facultyId").val()
    let major_id = $(obj).val(); // 菜单级别
    if (major_id < 1) return false

    // 根据院系查询所有的该院系所有专业
    $.ajax({
        type : "post",
        url : "/class/loadClass",
        dataType : "json",
        data : {
          "major_id" : major_id,
          "faculty_id" : faculty_id
        },
        async : false,   //同步ajax（一般用异步）
        success : function(data) {// 后端的返回值
        console.log('+++++++++++++++++++++++++++++++++++++')
        console.log(data)
            var opt = "<option value=''>--请选择--</option>";
            $.each(data, function(index, menu){
                opt += "<option value='" + menu.id + "'>" + menu.className + "</option>";
            });
            $("#classId").html(opt);
        }
    });
}

var userAdd = function(){
   addOrUpdate_1({
       "hiddenId" : "menuId",//隐藏域id
       "url" : "/user/user-adddddddd", //新增或修改的ajax的url的一级路径
        "ids" : ["id",'username','realName','sex','sno','admissionDate','facultyId','majorId','classId']
   });


//    console.log('+++++++++++++++++++++++++++++++++++++++++++')
//    let id = $("#id").val()
//    let username = $("#username").val()
//    let realName = $("#realName").val()
//    let sex = $("#sex").val()
//    let sno = $("#sno").val()
//    let admissionDate = $("#admissionDate").val()
//    let facultyId = $("#facultyId").val()
//    let majorId = $("#majorId").val()
//    let classId = $("#classId").val()
//    console.log('===========')
//    var ids = [id,username,realName,sex,sno,admissionDate,facultyId,majorId,classId];
//    if (ids[3] == 1) {
//        ids[3] = '男'
//    } else (ids[3] == 2) {
//       ids[3] = '女'
//    }
//    console.log('------------------------------------')
//    console.log(ids)


// $.ajax({
//     type : "post",
//     url : addOrUpdateJson.url,
//     data : jsonParams,
//     dataType : "json",
//     success : function(data) {// 后端的返回值
//         alert(data.msg);
//     }
// });
};