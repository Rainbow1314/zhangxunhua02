
<?php
   
    $page=isset($_GET['page']) ? $_GET['page'] : '1';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '5';
    
    $rank=isset($_GET['rank']) ? $_GET['rank'] : 'no';

    //连接数据库
    include '../connect.php';//相当于复制connect.php的文件内容过这里
    
    $index=($page-1)*$qty;//计算下标的公式

    $index1=($page-1)*$qty+1;
    $index2=$index1+$qty-1;

    if($rank=='priUp'){
        $sql="SELECT * FROM goodlist ORDER BY price LIMIT $index,$qty";
        // $sql="SELECT * FROM goodlist WHERE id BETWEEN $index1 AND $index2 ORDER BY price";
    };
    if($rank=='PriDown'){
        $sql="SELECT * FROM goodlist ORDER BY price DESC LIMIT $index,$qty";
        // $sql="SELECT * FROM goodlist WHERE id BETWEEN $index1 AND $index2 ORDER BY price DESC";
    };
    if($rank=='PeoUp'){
        $sql="SELECT * FROM goodlist ORDER BY Popularity LIMIT $index,$qty";
        // $sql="SELECT * FROM goodlist WHERE id BETWEEN $index1 AND $index2 ORDER BY Popularity";
    };
    if($rank=='PeoDown'){
        $sql="SELECT * FROM goodlist ORDER BY Popularity DESC LIMIT $index,$qty";
        // $sql="SELECT * FROM goodlist WHERE id BETWEEN $index1 AND $index2 ORDER BY Popularity DESC";
    };
        
    //执行语句：得到结果集
    $res=$conn->query($sql);
    
    //获取内容部分
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    
    //再写一个查询语句
    $sql2='select * from goodlist';
    
    //执行语句
    $res2=$conn->query($sql2);
    $row=$res2->num_rows;//获取结果集里面的num_rows属性，记录的条数
    
    //把你要给前端数据，做成关联数组，再统一转成字符串
    
    $goodlist=array(
        'total'=>$row,//总条数
        'datalist'=>$data,//查询到的数据
        'page'=>$page,//第几页
        'qty'=>$qty//每页显示多少条
    );
    
    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
    
    $res->close();//关掉结果集
    $res2->close();//关掉结果集
    $conn->close();//断开连接
 
?>