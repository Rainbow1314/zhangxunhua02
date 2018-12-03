'use strict';

$(function () {

	var cart = document.querySelector("#cart");

	$iD = Cookie.get('id');
	$Num = Cookie.get('num');
	console.log($iD, $Num); //  能拿到id和num


	function creat(arr) {
		//数据渲染函数封装
		var res = arr.map(function (item) {
			return ' <li data-id=' + item.id + '>\n                <p class="good_check"><input type="checkbox" name="good" value="" /></p>\n                <p class="good_name">\n                        <img src="' + item.buycarimg + '"  alt="" />\n                     <span>' + item.title + '</span></p>   \n             \n                <p class="good_price">\uFFE5&nbsp;' + item.price + '</p>\n                <p class="num">\n                    <span class="cutnum">-</span>\n                    <input class="nownum" type="text" value="' + item.number + '" />\n                    <span class="addnum">+</span>\n                </p>\n                <p class="good_total">\uFFE5&nbsp;' + item.price + '</p>\n                <p class="good_del">\n                    <a href="javascript:;">\u5220\u9664</a>\n                </p>\n            </li> ';
		}).join('');

		cart.innerHTML = res;
	}

	if ($iD && $Num) {

		//把添加的购物车id值传给数据库，拿到
		var url = "../src/api/Myajax/car/insertOrders.php";
		var data = 'id=' + $iD + '&number=' + $Num + '&time=' + new Date();
		ajax("GET", url, data, function (str) {
			var arr = JSON.parse(str);
			console.log(arr);
			creat(arr);
		});
	} else {

		var url = "../src/api/Myajax/car/buylist.php";
		var data = '';
		ajax("GET", url, data, function (str) {
			// 去做一个订单表的数据库  开始只需要三条数据  进行数据渲染
			var arr = JSON.parse(str);
			console.log(arr); //进行渲染  封装函数

			creat(arr);
		});
	}

	Cookie.remove('id');
	Cookie.remove('num');

	// var url="../src/api/Myajax/car/buylist.php";
	// var data=``;
	// ajax("GET",url,data,function(str){
	// // 去做一个订单表的数据库  开始只需要三条数据  进行数据渲染
	// var arr=JSON.parse(str);
	//  console.log(arr);//进行渲染  封装函数

	// creat(arr);

	// })//接下来的接口是到cart.js去做


	/*
  需求：
  	* 加数量
  	* 减数量
  	* 删除当行
  	* 小计
  	* 全选
  	* 总数量和总价跟着变
 
 */

	//接口1:查询订单表的数据，渲染到购物车：建议用字符串模板
	var arr = []; //存被选中的复选框下标
	//加数量:事件委托方式
	$('#cart').on('click', '.addnum', function () {

		//点击获取对应行的数量，加1在赋值
		var val = $(this).prev().val();
		val++;
		if (val >= 100) {
			//库存量
			val = 100;
		}
		//接口2：更新数据库数量
		$(this).prev().val(val);

		subTotal($(this)); //刷新小计
		$id = $(this).parent().parent().attr("data-id");

		//console.log($id);
		//接口2：
		var url = "../src/api/Myajax/car/update.php";
		var data = 'id=' + $id + '&number=' + val + '&time=' + new Date();
		ajax("GET", url, data, function (str) {
			// 去做一个订单表的数据库  开始只需要三条数据  进行数据渲染
			if (str == "yes") {
				//console.log(123);
			}
		});
	});

	//减去数量
	$('#cart').on('click', '.cutnum', function () {

		//点击获取对应行的数量，加1在赋值
		var val = $(this).next().val();
		val--;
		if (val <= 1) {
			//库存量
			val = 1;
		}
		//接口2：更新数据库数量
		$(this).next().val(val);

		subTotal($(this)); //刷新小计
		$id = $(this).parent().parent().attr("data-id");
		var url = "../src/api/Myajax/car/update.php";
		var data = 'id=' + $id + '&number=' + val + '&time=' + new Date();
		ajax("GET", url, data, function (str) {
			// 去做一个订单表的数据库  开始只需要三条数据  进行数据渲染
			if (str == "yes") {
				console.log(123);
			}
		});
	});

	function subTotal(now) {
		//小计
		var num = now.parent().find('input').val(); //数量
		var price = now.parent().prev().text();
		price = $.trim(price); //工具方法：去除前后空格
		price = price.substring(2);
		//		console.log(num,price);
		var all = (num * price).toFixed(2); //保留两个小数，小计：数量*单价
		now.parent().next().html('￥&nbsp;' + all);
		updateNum();
	}

	//删除当行
	$('#cart').on('click', '.good_del', function () {
		var mes = confirm('您确定要删除该行吗？');
		if (mes) {
			$(this).parent().remove();
			//接口3：删除数据库的某行
			//

			$id = $(this).parent().attr("data-id");
			var url = "../src/api/Myajax/car/orderCarDelete.php";
			var data = 'id=' + $id + '&time=' + new Date();
			ajax("GET", url, data, function (str) {
				console.log(str);
			});
		}
		update(); //最后一行是否显示判断
		updateNum();
	});

	//更新状态
	function update() {
		if ($('.addnum').size() == 0) {
			//意味着没有商品数据了
			$('#del').css('display', 'none');
		}
	}

	//全选
	var isok = true;
	$('#allchecked').on('click', function () {
		if (isok) {
			//全选 attr()只能帮到普通属性  id class title ;prop()添加有行为的属性：一般用在单选和复选框
			$(this).find('input').prop('checked', 'checked'); //设置
			$('.good_check input').prop('checked', 'checked');
		} else {
			//不选
			$(this).find('input').removeAttr('checked');
			$('.good_check input').removeAttr('checked');
		}
		isok = !isok;
		updateNum();
	});

	//复选框被勾选

	$('#cart').on('click', '.good_check input', function () {
		updateNum();
		if (arr.length == $('.good_check').size()) {
			//控制是否全选勾上
			//证明全被勾选
			$('#allchecked input').prop('checked', 'checked');
			isok = false;
		} else {
			$('#allchecked input').removeAttr('checked');
			isok = true;
		}
	});

	//总数量和总价格改变：封装成函数


	function updateNum() {
		//空数组：存被勾选的行的下标
		arr.length = 0;
		var le = $('.good_check input').size(); //复选框的总个数
		for (var i = 0; i < le; i++) {
			if ($('.good_check input').eq(i).prop('checked')) {
				//意味着这一行被勾选
				arr.push(i);
			}
		}

		//		console.log(arr);

		//统计被勾选的行对应的数量，累加放到底部对应位置
		//统计被勾选的行对应的小计，累加放到底部对应位置
		var num = 0; //总数量
		var totalPrice = 0; //存总价
		for (var i = 0; i < arr.length; i++) {
			num += $('.nownum').eq(arr[i]).val() * 1;
			var price = $('.good_total').eq(arr[i]).text(); //￥ 199.98
			price = $.trim(price); //去掉前后空格
			price = price.substring(2) * 1; //199.98
			//			console.log(price);
			totalPrice += price;
		}

		//		console.log(num);

		$('#allnum').html('已选 ' + num + ' 件商品');

		//		console.log(totalPrice.toFixed(2));
		$('#totalprice').html('总计（不含运费）：￥ ' + totalPrice.toFixed(2));
	}

	//全删
	$('#delall').on('click', function () {
		console.log(123);
		updateNum();
		var mes = confirm('您确定要删除多行吗？');
		if (mes) {
			console.log(234);
			for (var i = arr.length - 1; i >= 0; i--) {
				//找到对应的行，删除
				$id = $('.good_check').eq(arr[i]).parent().attr("data-id");

				console.log($id);

				var url = "../src/api/Myajax/car/orderCarDelete.php";
				var data = 'id=' + $id + '&time=' + new Date();
				ajax("GET", url, data, function (str) {
					console.log(str);
				});

				$('.good_check').eq(arr[i]).parent().remove();
				//接口3：删除数据库订单表多条数据

			}
		}updateNum();
		//console.log(arr); //0 1 2

		update();
	});

	//手动输入价格
	$('#cart').on('blur', '.nownum', function () {
		subTotal($(this)); //小计变化
		updateNum(); //刷新总数量和总价格
	});
});