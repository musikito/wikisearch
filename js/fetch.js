/* global fetch */

function handleClick(){
    const input = document.getElementById("input").value;
   // console.log(input);
    
    const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json"
    
    fetch(url)
      .then(function(response){
        return response.json();
      }).then(function(response){
        //console.log(url);
        //console.log("response",response);
        //get the title,snippet and url
        displayResults(response[1],response[2],response[3]);
      })
  }

function displayResults(title,snip,links) {
  document.getElementById("res").innerHTML = " ";
  for (let index = 0; index < title.length; index++) {
    var titulo = title[index];
    var snippet = snip[index];
    var link = links[index];
    console.log(titulo+"\n"+snippet+"\n"+link);
    //create the div element and give a ID
   var divResult = document.createElement("div");
   divResult.id = "resultdiv";
   //add the html to the inner div
   divResult.innerHTML = "<h4>"+titulo+"</h4>" + "</br>"+snippet+ "</br>"+"<a href=\""+link+"\">"+link;
    //add the innerdiv to the result div  
    var res = document.getElementById("res");
    res.append(divResult);

    
  }
  
}//end function displayResults
