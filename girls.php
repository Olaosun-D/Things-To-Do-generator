<?php
include 'config.php';
    $sql = "SELECT * FROM girly";
    $result = mysqli_query($connect, $sql);
    if(mysqli_num_rows($result) > 0){
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<br>";
            echo $row ['idea'];
        };
    } else {
        echo "there are no ideas";
    };
?> 