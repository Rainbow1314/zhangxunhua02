数据库名称：

xiangmu

表1 
users

用户名验证：
api/checkname.php

传参：(GET)
username 
用户名
返回：
0 存在，验证失败
1 不存在，



验证成功

注册：
api/reg.php
传参：

(POST)
username 用户名
password 密码
返回：
0 注册失败
1 



注册成功

登录：
api/login.php
传参：(POST)
username 用户名
password 密码
返回：
0 不存在，登录失败
1 存在，登录成功

表2 goodlist

列表页数据输出：
api/goodlist.php
传参：(POST)
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

列表页价格降序输出：
api/goodlistdown.php
传参：(POST)
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

列表页价格升序输出：
api/goodlistup.php
传参：(POST)
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}
列表页人气降序输出：
api/goodlisthotdown.php
传参：(POST)
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

列表页人气升序输出：
api/goodlisthotup.php
传参：(POST)
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

详情页数据输出：
api/goodlistDetail.php
传参：(POST)
id 商品id
返回：
相应id的数据 可渲染
1 数据不存在

表3 order

加入购物车：
api/addOrderCar.php
传参：(POST)
title 商品名称
num 加入的数量
商品其它各种信息...(具体什么信息传什么)
返回：
1 购物信息插入成功
0 购物信息插入不成功

购物车信息输出：
api/orderCar.php
传参：(POST)
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

购物车数量变化：
api/orderCarNum.php
传参：(POST)
id 商品id
num 商品数量
返回：
1 更新成功
0 更新失败

购物车删除数据：
api/orderCarDelete.php
传参：(POST)
id 商品id
返回：
1 删除成功
0 删除失败

购物车删除全部：
api/orderCarDeleteAll.php
传参：(POST)
无
返回：
1 删除成功
0 删除失败