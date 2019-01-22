/**
 * Created by wangyang on 2019-01-22.
 * itwangyang@gmail.com
 * http://itwangyang.xyz
 */

$(".black-js").click(function () {
    window.history.back();
});


/*获取系统时间*/
$(function () {
    var date = new Date();
    var strMonth = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHour = date.getHours();
    var strMin = date.getMinutes();
    var strSec = date.getSeconds();
    if (strMonth >= 1 && strMonth <= 9) {
        strMonth = "0" + strMonth;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHour >= 0 && strHour <= 9) {
        strHour = "0" + strHour;
    }
    if (strMin >= 0 && strMin <= 9) {
        strMin = "0" + strMin;
    }
    if (strSec >= 0 && strSec <= 9) {
        strSec = "0" + strSec;
    }
    var currentdate = date.getFullYear() + '-'
        + strMonth + '-'
        + strDate + ' '
        + strHour + ':'
        + strMin + ':'
        + strSec;

   /* var currentdate = date.getFullYear() + '年'
        + strMonth + '月'
        + strDate + '日   '
        + strHour + '点'
        + strMin + '分'
        + strSec;*/
    $(".orderTime").html(currentdate);
    //alert(currentdate);
});

