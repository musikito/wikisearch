/* global fetch */



function handleClick(){
    const input = document.getElementById("input").value;
    console.log(input);
    
    const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json"
    
    fetch(url)
      .then(function(response){
        return response.json();
      }).then(function(response){
       // console.log("response",response[3]);
        displayResults(response[3]);
      })
  }
  
  
  // var myResults = ["Nelson Mandela", "Death of Nelson Mandela", "Presidency of Nelson Mandela"];
  
  function displayResults(myResults){
    //console.log("myResults", myResults);
    var list = myResults.map(function(item){
        console.log(item);
        //return item;
      //return "<li>"+  item  + "</li>"
      return "<li>"+"<a href=\"" + item + "\">"+item+""+ "</li>";
    })
    list = list.join("\n");
    console.log("list",list);
    
    document.getElementById("results").innerHTML=list;
   //document.getElementById("results").setAttribute("href", list);
  }