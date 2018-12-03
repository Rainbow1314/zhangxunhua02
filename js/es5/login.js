"use strict";

/* 
* @Author: Marte
* @Date:   2018-11-28 19:13:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 20:00:37
*/

document.addEventListener("DOMContentLoaded", function () {

    var uname = document.querySelector("#uname");
    var password = document.querySelector("#password");
    var random = document.querySelector("#randomnum");
    var num = document.querySelector("#num");
    var login = document.querySelector("#login");
    var inf1 = document.querySelector("#inf1");
    var inf2 = document.querySelector("#inf2");

    var ok1 = false;
    var str = "";
    for (var i = 0; i < 4; i++) {
        var res = randomNum(0, 9);
        str += res;
    }
    random.innerHTML = str;

    num.onblur = function () {
        var val = num.value;
        if (val == random.innerHTML) {
            inf1.innerHTML = "正确";
            ok1 = true;
        } else {
            inf1.innerHTML = "请重新输入";
            ok1 = false;
        }
    };

    login.onclick = function () {
        var tex = uname.value.trim();
        var psw = password.value.trim();
        if (tex && psw && ok1) {
            var url = "../src/api/Myajax/reg/login.php";
            var data = "username=" + tex + "&password=" + psw + "&time=" + new Date();

            ajax("POST", url, data, function (str) {
                if (str == 1) {

                    Cookie.set("name", tex, { "path": "/zhangxunhua/" });
                    location.href = "../indey.html";
                } else {
                    inf2.innerHTML = "用户名或密码错误";
                }
            });
        }
    };
});