<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="HeeHawRecur.php" method="post">
    <input type="text" name="input" id="input">

    <button type="submit" class="btn btn-primary">print</button>
</form>

<?php
    if(!($_POST['input']) == ""){
        if(is_numeric($_POST['input'])){
            HeeHawRecur($_POST['input']);
        }
        else{
            echo("Please enter a numeric value");
        }
    }
?>

</body>
<script src="HHRecur.js"></script>
</html>
