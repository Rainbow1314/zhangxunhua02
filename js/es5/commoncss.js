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
    jiantou.src = "src/img/indexImg/jiantou2.png";
  };
  bottom_r1.onmouseout = function () {
    bottom_r1.style.color = "#999999";
    bottom_r1ul.style.display = "none";
    jiantou.src = "src/img/indexImg/jiantou.png";
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

  // //墨迹回到顶部

  // slowBacktotop("backtop");


  //滑过背景颜色改变
  //console.log($("#Shoppingcartbar i"));
  // $("#Shoppingcartbar i").hover(function(){


  //   $(this).css("backgroundColor","#EC1E06");
  // },function(){
  //   $(this).css("backgroundColor","#444851")

  // })


  // //console.log($("#Shoppingcartbar .custom"))


  // $("#Shoppingcartbar .custom").hover(function(){


  //   $("#Shoppingcartbar .custom").css("backgroundColor","#EC1E06");


  // },function(){
  //   $("#Shoppingcartbar .custom").css("backgroundColor","#444851")

  // })


  // $("#Shoppingcartbar .custom2").hover(function(){


  //   $("#Shoppingcartbar .custom2").css("backgroundColor","#EC1E06");
  // $("#Shoppingcartbar .dog").css(
  // "background-position"," -6px -426px")

  // },function(){
  //   $("#Shoppingcartbar .custom2").css("backgroundColor","#444851")
  //   $("#Shoppingcartbar .dog").css(
  // "background-position"," -2px -192px")
});