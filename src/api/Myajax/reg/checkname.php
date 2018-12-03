<?php
    //连接数据库 
    include '../connect.php';  
    //接收参数
    $name=isset($_GET['username']) ? $_GET['username'] : '';   
    //查询语句
    $sql="select * from user_inf where name='$name'";
    //执行语句
    $res=$conn->query($sql);//得到结果集
    //var_dump($res);
    if($res->num_rows>0){//num_rows存记录的条数，所有超过0就意味着存在
        echo 0;
    }else{
        echo 1;
    }
    //关闭结果集和数据库
    $res->close();
    $conn->close();   
?>