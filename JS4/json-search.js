document.getElementById("search").onsubmit = validate;

{
let John = {"name": "John", "sex": "M", "born": "1864", "died": "1951", "father": "Joe", "mother": "Jenn"};
let Jeff = {"name": "Jeff", "sex": "M", "born": "2000", "died": "NA", "father": "Bruce", "mother": "Helen"};
let Katie = {"name": "Katie", "sex": "F", "born": "2001", "died": "NA", "father": "Bruce", "mother": "Helen"};
let Emma = {"name": "Emma", "sex": "F", "born": "1969", "died": "2010", "father": "Greg", "mother": "Rachel"};
let Len = {"name": "Len", "sex": "M", "born": "1296", "died": "NA", "father": "Odoudr'rarc", "mother": "Ngiorrin"};
let Jane1 = {"name": "Jane Doe", "sex": "F", "born": "1876", "died": "1956", "father": "Petreus de Milliano", "mother": "Sophia van Damme"};
let Jane = {"name": "Jane Ramirez", "sex": "F", "born": "1102", "died": "NA", "father": "Themistocles Merovech", "mother": "Amara Floros"};

}

function validate(){
    let valid = true;

    let searched = document.getElementById("name").value;
    if(searched.name.contains(searched)){
        document.write(JSON.stringify(searched));
    }
    else{
        document.write("No person found")
    }
}