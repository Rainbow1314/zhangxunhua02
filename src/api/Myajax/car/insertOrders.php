<?php
    /*
        点击加入购物车，把数据写入订单表
            get：
                num：商品数量,
                id：商品id
            返回：
                订单表商品所有数据
     */

    //加入购物车，把数据写入订单表
    include '../connect.php';

    $num=isset($_GET['number']) ? $_GET['number'] : '1';
    $id=isset($_GET['id']) ? $_GET['id'] : '1';

       // echo $num;
       // echo $id;
    //试插入订单表
    $sql="INSERT INTO orderlist(id,number) VALUES ('$id','$num')";
    
    $res=$conn->query($sql);
    
    if(!$res){
        //若id已存在，无法插入订单表，则更新num    
        $sql2="UPDATE orderlist SET number=number+$num WHERE id=$id";
       
        $res2=$conn->query($sql2);

    }else{
        $sql3="SELECT * FROM  list WHERE id=$id";
        $res3=$conn->query($sql3);
        //var_dump($res3);
        $data=$res3->fetch_all(MYSQLI_ASSOC);
       //  var_dump($data);
       //  echo $data[0][$price];
        $gname = $data[0]['title'];
        $gimg = $data[0]['buycarimg'];
        $price = $data[0]['price'];

        $sql4="UPDATE orderlist SET title='$gname',buycarimg='$gimg',price='$price' WHERE id=$id";
        $res2=$conn->query($sql4);

    }
    
    if($res2){
        $sql5="SELECT * FROM orderlist";
        $res5=$conn->query($sql5);
        $data2=$res5->fetch_all(MYSQLI_ASSOC);
        
        echo json_encode($data2,JSON_UNESCAPED_UNICODE);
    }


?>