<?php 
   include 'config.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Weekend ideas</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
    crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>

</head>

<body class="container mt-3">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
        aria-selected="true">General</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="datenight-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
        aria-selected="false">Date Night</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="guys-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
        aria-selected="false">With the Guys</a>
    </li>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="girls-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
        aria-selected="false">Girls</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <div id="ideas"> What do do...</div>
      <br>
      <button id="btnRandom" class="btn btn-danger">Spin</button>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2..
      <div id="ideas2"> What do do...</div>
      <button id="btnRandom2" class="btn btn-danger">hoo</button>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">..3.</div>
  </div>

  <button id >hnkjn</button>


  <script src="ideaAjax.js"></script>

</body>

</html>