document.getElementById("HHform").onsubmit = Validate;

function Validate(){
    let num = document.getElementById("input").value;
    if(typeof num == 'number'){
        HeeHawRecur(num);
    }
    else{
        document.write("please enter a number");
        document.write(typeof num);
    }
}

function HeeHawRecur(num){
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