/**
 * Created by wangyang on 2019-01-21.
 * itwangyang@gmail.com
 * http://itwangyang.xyz
 */
$(function () {
    var currYear = (new Date()).getFullYear();
    var opt={};
    opt.date = {preset : 'date'};
    opt.datetime = {preset : 'datetime'};
    opt.time = {preset : 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        nowText: "今天",
        startYear: currYear - 0, //开始年份
        endYear: currYear + 1 //结束年份
    };

    $("#appDate").mobiscroll($.extend(opt['date'], opt['default']));
    var optDateTime = $.extend(opt['datetime'], opt['default']);
    var optTime = $.extend(opt['time'], opt['default']);
    $("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
    $("#appTime").mobiscroll(optTime).time(optTime);

});
$("#appDateTime").click(function () {
    $(this).val()
});

function show_sub() {
    //alert($("#test").find("option:selected").attr("value"));//原生
    //console.log($("#test").find("option:selected").val());//加入jq库
    var perNum = $("#test").find("option:selected").val();
    var unitPrice = $(".unit-price-money").text();
    console.log(unitPrice);
    console.log(perNum);
    $(".number-of-people").text(perNum+"人");
    var zongjia = unitPrice * perNum;
    console.log(zongjia);
    $(".total").text("共"+zongjia+"元");
}
