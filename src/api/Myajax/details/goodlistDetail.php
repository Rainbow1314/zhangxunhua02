<?php
    //连接数据库 
    include '../connect.php';  
    //接收参数
    $id=isset($_POST['id']) ? $_POST['id'] : '';
    //查询语句
    $sql="select * from list where id='$id'";
    //执行语句
    $res=$conn->query($sql);//得到结果集
    $row=$res->fetch_all(MYSQLI_ASSOC);//只要内容部分
    // var_dump($res);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    //关闭结果集和数据库
    $res->close();
    $conn->close();   
?>