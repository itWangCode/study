/**
 * Created by wangyang on 2019-01-20.
 * itwangyang@gmail.com
 * http://itwangyang.xyz
 */

var InterValObj; //timer变量，控制时间
var count = 30; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var code = ""; //验证码
var codeLength = 6;//验证码长度
function sendMessage() {
    curCount = count;
    var dealType; //验证方式
    var uid = $("#uid").val();//用户uid
    if ($("#phone").attr("checked") == true) {
        dealType = "phone";
    } else {
        dealType = "email";
    }
//产生验证码
    for (var i = 0; i < codeLength; i++) {
        code += parseInt(Math.random() * 9).toString();
    }
//设置button效果，开始计时
    $("#btnSendCode").attr("disabled", "true");
    $("#btnSendCode").val(+curCount + "秒再获取");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
//向后台发送处理数据
    $.ajax({
        type: "POST", //用POST方式传输
        url: '', //目标地址
        data: {
            "phone": $("#userTel").val()
        },
        error: function (data) {
            console.log(JSON.stringify(data))
        },
        success: function (msg) {
            console.log(JSON.stringify(msg))
        }
    });
}
$("#userTel").focus();
$("#userTel").blur(function () {
    var tel123 = $("#userTel").val();
    var fle = /^1[345789]\d{9}$/;
    if (fle.test(tel123)) {
        $.ajax({
            url: "",
            type: "post",
            data: {
                "phone": tel123,
            },
            success: function (data) {
                console.log(JSON.stringify(data));
                if (data.code == 500) {
                    alert("该号码未注册，请先注册");
                    $("#btnSendCode").attr("disabled", "disabled");
                    $("#btnSendCode").css("background-color", "#d3d3d3");
                } else if (data.code == 200) {
                    $("#btnSendCode").removeAttr("disabled");
                    $("#btnSendCode").css("background-color", "#1e81d2");
                }
            },
            error: function () {
                alert("错误");
            }
        })
    } else {
        alert("请输入正确的手机号");
        // $("#btnSendCode").attr("disabled", "disabled");
    }


});

//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#btnSendCode").removeAttr("disabled");//启用按钮
        $("#btnSendCode").val("重新发送");
        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
    } else {
        curCount--;
        $("#btnSendCode").val(+curCount + "秒再获取");
    }
}
