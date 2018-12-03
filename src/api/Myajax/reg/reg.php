<?php    
    //连接数据库
    include '../connect.php';    
    //接收数据
    $name=isset($_POST['username']) ? $_POST['username'] : '';
    $psw=isset($_POST['password']) ? $_POST['password'] : '';
    //sql语句，把输入的姓名与密码插入数据库
    $sql="INSERT INTO user_inf(name,password) VALUES('$name','$psw')"; 
    //执行语句
    $res=$conn->query($sql);//返回布尔值 
    // var_dump($res);
    if($res){
        echo 1;
    }else{
        echo 0;
    } 
    //关闭数据库
    $conn->close();
?>