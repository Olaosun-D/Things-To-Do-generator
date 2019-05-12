<?php
// session_start();

// php code to Update data from mysql database Table

   $hostname = "localhost";
   $username = "root";
   $password = "";
   $databaseName = "idea_selector";

   $connect = mysqli_connect($hostname, $username, $password, $databaseName);

   if (!$connect) {
     die('unable to connect' . mysqli_connect_error());
   };

  // $ideaNewCount = $_POST['ideaNewCount'];
      // $ideaCurrentCount = 1;

      // $sql = "SELECT * FROM datenight 
      // -- LIMIT $ideaNewCount, $ideaCurrentCount";
      // $result = mysqli_query($connect, $sql);
      // if(mysqli_num_rows($result) > 0){
      //     while ($row = mysqli_fetch_assoc($result)) {

      //         echo "<br>";
      //         echo $row ['Idea'];
      //     };
      // } else {
      //     echo "there are no ideas";
      // };
      
// echo "<br>";
// echo '<script>console.log("connection Succesfull")</script>';
?>