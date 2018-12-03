<?php
    //查询订单表
    include '../connect.php';
    
    $id=$_GET['id'];

    $sql="SELECT * FROM orderlist WHERE id='$id'";
    
    //执行语句：得到结果集
    $res=$conn->query($sql);
    // var_dump($res);
    
    $data=$res->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
    // //关闭结果集和数据库
    $res->close();
    $conn->close();
?>