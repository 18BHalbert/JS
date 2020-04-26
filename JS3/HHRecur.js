function HeeHawRecur($input){
    if($input == 0){
        return;
    }
    if($input % 3 == 0){
        echo("Hee ");
        $check = true;
    }
    if($input % 5 == 0){
        echo("Haw");
        $check = true;
    }
    if($check){
        echo("!");
    }
    else{
        echo($input);
    }
    echo("<br>");
    HeeHawRecur($input-1);
}