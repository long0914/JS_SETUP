//make a button to submit the search
let btnSearch = document.getElementById("btnSearch");
let inputSearch = document.getElementById("inputSearch");
btnSearch.addEventListener("click", function(){
  let search = inputSearch.value;
  DOM=getPosts(search);
  console.log(DOM);

  let weather = document.getElementById("weather");
  

});



//search function
async function getPosts(search) {
  const apiKeyWeather ="88833963506943ecb51193430241404";
  const urlWeather =`https://api.weatherapi.com/v1/current.xml?key=${apiKeyWeather}&q=${search}&aqi=yes`;

  const response = await fetch(urlWeather);
  if(!response.ok){
    throw new Error("response error");
  }else{
    console.log(`type of response is ${typeof response}`);
    console.log(response);
    
    readStreamAsText(response);
  }
}

//responsebody is stream, get reader is a method to read the stream,
//decoder is a method to decode the stream, value is the value of the stream
async function readStreamAsText(response){
  const reader = response.body.getReader();

  const decoder = new TextDecoder(); //dont know what is this
  let result = '';

  while (true) {
    const { done, value } = await reader.read();//dont know what is this
    if (done) break;
    result += decoder.decode(value);//dont know what is this
  }

  parseXML(result);
}

//dompasrser is an interface to parse source code to dom
//parseFromString is a method to parse string to xml
function parseXML(xmlStr) {
  const parser = new DOMParser();//dont know
  const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
  console.log(xmlDoc);
}

