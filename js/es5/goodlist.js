"use strict";

document.addEventListener("DOMContentLoaded", function () {

  var maile = document.querySelector("#maile");
  var denglu = document.querySelector("#denglu");

  maile.onmouseover = function () {
    maile.style.color = "#CB351A";
  };
  maile.onmouseout = function () {
    maile.style.color = "#999999";
  };

  denglu.onmouseover = function () {
    denglu.style.color = "#CB351A";
  };
  denglu.onmouseout = function () {
    denglu.style.color = "#999999";
  };

  var bottom_r2 = document.querySelector("#header .bottom_r2");
  var collect = document.querySelector("#collect");

  bottom_r2.onmouseover = function () {
    bottom_r2.style.color = "#CB351A";
    collect.style.position = "-42px -26px;";
  };
  bottom_r2.onmouseout = function () {
    bottom_r2.style.color = "#999999";
  };

  var bottom_r4 = document.querySelector("#header .bottom_r4");
  var phone = document.querySelector("#phone");

  bottom_r4.onmouseover = function () {
    bottom_r4.style.color = "#CB351A";
    phone.style.position = "-42px -26px;";
  };
  bottom_r4.onmouseout = function () {
    bottom_r4.style.color = "#999999";
  };

  var bottom_r1 = document.querySelector("#header .bottom_r1");
  var bottom_r1ul = document.querySelector("#header .bottom_r1 ul");
  var jiantou = document.querySelector("#jiantou");

  bottom_r1.onmouseover = function () {
    bottom_r1.style.color = "#CB351A";
    bottom_r1ul.style.display = "block";
    jiantou.src = "../src/img/indexImg/jiantou2.png";
  };
  bottom_r1.onmouseout = function () {
    bottom_r1.style.color = "#999999";
    bottom_r1ul.style.display = "none";
    jiantou.src = "../src/img/indexImg/jiantou.png";
  };

  //滑过之后变成箭头向上，二级菜单菜单出来
  $("#banner .banner_l").hover(function () {
    $("#banner_lul").css("display", "block");
  }, function () {
    $("#banner_lul").css("display", "none");
  });

  $("#banner .banner_l").hover(function () {
    $("#banner .banner_l h3 img").attr("src", "../src/img/indexImg/listimg/bannerjiantou22.png");
  }, function () {
    $("#banner .banner_l h3 img").attr("src", "../src/img/indexImg/listimg/bannerjiantou.png");
  });

  $('#banner_lul').find('li').mouseover(function () {

    $('#banner_lul li').attr('class', ''); //清空样式
    $(this).attr('class', 'bannermenu'); //点击高亮
    $('#twomenu .milk').css('display', 'none'); //清空
    $('#twomenu .milk').eq($(this).index()).css('display', 'block');
  });

  $('#banner_lul').mouseout(function () {

    $('#banner_lul li').attr('class', ''); //清空样式

    $('#twomenu .milk').css('display', 'none'); //清空
  });

  //点击加减号可以对元素的值进行加减
  var add = document.querySelector("#add");
  var reduce = document.querySelector("#reduce");
  var amount = document.querySelector("#amount");

  add.onclick = function () {
    console.log(123);
    var num = amount.value;

    ++num;
    amount.value = num;
    console.log(num);
  };
  reduce.onclick = function () {

    var num = amount.value;

    --num;
    if (num < 1) {
      num = 1;
    }
    amount.value = num;
    console.log(num);
  };

  //接收传列表页过来的id值
  var title = document.querySelector("#title");
  var goodlist1 = document.querySelector("#goodlist1");
  var goodlist2 = document.querySelector("#goodlist2");
  var goodlist3 = document.querySelector("#goodlist3");
  var goodlist4 = document.querySelector("#goodlist4");
  var goodlist5 = document.querySelector("#goodlist5");
  var Theprice = document.querySelector("#Theprice");

  var data = decodeURI(location.search);
  var str = data.slice(1); //id=01;

  var ID = str.split("=")[1];

  var url = "../src/api/Myajax/details/goodlistDetail.php";
  var data = "id=" + ID + "&time=new Date()";

  ajax("POST", url, data, function (str) {

    var arr = JSON.parse(str);
    console.log(arr);
    title.innerHTML = arr[0].title;
    goodlist1.src = arr[0].goodlistimg1;
    goodlist2.src = arr[0].goodlistimg2;
    goodlist3.src = arr[0].goodlistimg3;
    goodlist4.src = arr[0].goodlistimg4;
    goodlist5.src = arr[0].goodlistimg5;
    Theprice.innerHTML = "￥" + arr[0].price;

    var magnifierConfig = {
      magnifier: "#magnifier1", //最外层的大容器
      width: 500, //承载容器宽
      height: 500, //承载容器高
      moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
      zoom: 5 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

    //点击购物车，把id存到cookie里面 
    var shoppingcart = document.querySelector("#shoppingcart");

    shoppingcart.onclick = function () {
      location.href = "../html/buycar.html";
      //document.cookie="id="+arr[0].id+";number="+5; //这里还需要修改
      document.cookie = "id=" + arr[0].id;
      document.cookie = "num=" + amount.value;
    };
  });

  //点击属性获取每一个属性值
  //
  //
  //
  var aspans = document.querySelectorAll("#attribute span");

  for (var i = 0; i < aspans.length; i++) {
    aspans[i].onclick = function () {

      for (var j = 0; j < aspans.length; j++) {
        aspans[j].style.border = "2px solid #DDDDDD";
      }

      this.style.border = "2px solid #FF1D02";
    };
  }

  var packages = document.querySelectorAll("#package span");

  for (var i = 0; i < packages.length; i++) {
    packages[i].onclick = function () {

      for (var j = 0; j < packages.length; j++) {
        packages[j].style.border = "2px solid #DDDDDD";
      }

      this.style.border = "2px solid #FF1D02";
    };
  }
}); //最终的箭头