<?php
    //连接数据库
    include '../connect.php';
    //接收数据
    $name=isset($_POST['username']) ? $_POST['username'] : '';
    $psw=isset($_POST['password']) ? $_POST['password'] : '';
    //查询语句
    $sql="select * from user_inf where name='$name' and password='$psw'";
    //执行语句
    $res=$conn->query($sql);//返回结果集
    // var_dump($res);//运行时一定要注释
    if($res->num_rows>0){//num_rows存记录的条数，所有超过0就意味着存在
        echo 1;
    }else{
        echo 0;
    }
    //关闭结果集和数据库
    $res->close();
    $conn->close();
?>