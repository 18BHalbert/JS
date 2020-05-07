let people = [
{"name": "John", "sex": "M", "born": "1864", "died": "1951", "father": "Joe", "mother": "Jenn"},
{"name": "Jeff", "sex": "M", "born": "2000", "died": "NA", "father": "Bruce", "mother": "Helen"},
{"name": "Katie", "sex": "F", "born": "2001", "died": "NA", "father": "Bruce", "mother": "Helen"},
{"name": "Emma", "sex": "F", "born": "1969", "died": "2010", "father": "Greg", "mother": "Rachel"},
{"name": "Len", "sex": "M", "born": "1296", "died": "NA", "father": "Odoudr'rarc", "mother": "Ngiorrin"},
{"name": "Jane Doe", "sex": "F", "born": "1876", "died": "1956", "father": "Petreus de Milliano", "mother": "Sophia van Damme"},
{"name": "Jane Ramirez", "sex": "F", "born": "1102", "died": "NA", "father": "Themistocles Merovech", "mother": "Amara Floros"}
];

function search(){
    let found = false;
    let searched = document.getElementById("name").value;
    document.getElementById("result").innerHTML = "";
    for(let i = 0; i < people.length; i++){
        if(people[i].name.includes(searched)){
            let result = "Name: " + people[i].name + "<br>Sex: " +
                people[i].sex + "<br>Born: " + people[i].born + "<br>Died: " +
                people[i].died + "<br>Father: " + people[i].father + "<br>Mother: " + people[i].mother + "<br><br>";
            document.getElementById("result").innerHTML =
                document.getElementById("result").innerHTML +result;
            found = true;
        }
    }
    if(!found){
        document.getElementById("result").innerHTML = "No person found";
    }

}