//const axios = require('axios');

function handleClick() {
    input = document.getElementById("input").value;
    var url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=' + input + '&format=json';
    axios.get(url).then(function(response) {
        displayResults(response.data);
    });
}//end of unction handleClick

function displayResults(data){
    //clean the results div
    document.getElementById("res").innerHTML = " ";

    //for loop
    var title = data[1];
    for (let index = 0; index < title.length; index++) {
        var titulo = data[1][index];
        var snippet = data[2][index];
        var link = data[3][index];

       //create the div element and give a ID
        var divResult = document.createElement("div");
        divResult.id = "resultdiv";
   //add the html to the inner div
   divResult.innerHTML = "<h4>"+titulo+"</h4>" + "</br>"+snippet+ "</br>"+"<a href=\""+link+"\">"+link;
    //add the innerdiv to the result div  
    var res = document.getElementById("res");
    res.append(divResult);
        
    }
    

}//end of unction displayResults


