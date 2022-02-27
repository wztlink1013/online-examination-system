console.log('页面加载之前就打印')
// 入口函数
$(function(){
    console.log('页面加载完成才打印（入口函数）')
//    选择器和样式改变 ===============================================================
    // 基本选择器
    console.log($(".nav"));
    // 层级选择器
    console.log($("ul li"));
    // 筛选选择器
    $("ul li:first").css("color", "red");
    $("ul li:eq(2)").css("color", "blue");
//    $("ul li:odd").css("color", "skyblue"); // 奇数
//    $("ul li:even").css("color", "pink"); // 偶数
    // 改变css样式
    $("#test-css").css({
        "color": "blue",
        "font-size": "30px"
    })
//    动画效果 ===============================================================
    // 滑入滑出
    $("button").eq(0).click(function() {
        // 下滑动 slideDown()
        $("div").slideDown();
    })
    $("button").eq(1).click(function() {
        // 上滑动 slideUp()
        $("div").slideUp(500);
    })
    $("button").eq(2).click(function() {
        // 滑动切换 slideToggle()
        $("div").slideToggle(500);
    });
    $("#test-animate").css({
        "background-color": "blue",
        "width": "150px",
        "height": "70px",
        "font-size": "2px"
    })
    $("button").eq(3).click(function() {
        $("#test-animate").animate({
            left: 500,
            top: 300,
            opacity: .4,
            width: 500
        }, 500);
    })
    console.log($("#test-animate").prop("id"))
    console.log($("button").eq(3).html())
    console.log($("button").eq(3).text())
//    $("div").each((index, ele) => {
//        console.log(index + ": ")
//        console.log(ele)
//    })
//    元素操作 ===============================================================
    $("#test-animate").append("<p>append add ele</p>")
    $("#test-animate").prepend("<p>prepend add ele</p>")
    exercise()
})



let exercise = function() {
//    第一题
    console.log('第一题答案：' + $("div:eq(5) > div:eq(1) > div:eq(0)").text())
//    第二题
    let result = $("div:eq(5) > div:eq(0)").html()
    $("div").eq(4).append(result)
//    FIXME: 第三题
    $("td").each((index, dom) => {
        $("td").eq(index).dblclick(function() {
            $(this).html("<input type='text'>")
            $(this).find("input").blur(function() {
                // 结合当前语境来看 this 含义
//                alert($(this).val())
                let tempVal = $(this).val()
            })
            $(this).html(tempVal)
        })
    })
}
// Ajax
let ajaxDemo = function(){
    $.ajax({
        type : "post",
        url : "http://127.0.0.1:8080/test/demo2",
        data : {
            "name" : "李四",
            "age" : 14
        },
//        dataType : "json",
        success : function(data) {// 后端的返回值
            alert(data);
        }
    });
}