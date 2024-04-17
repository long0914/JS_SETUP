//make a button to submit the search
let btnSearch = document.getElementById("btnSearch");
let inputSearch = document.getElementById("inputSearch");
btnSearch.addEventListener("click", async function(){
  let search = inputSearch.value;
  try{DOM = await weatherGetPosts(search);}
  catch(error){
    alert(error);
  }
  try{DOM = await newsGetPosts(search);}
  catch(error){
    alert(error);
  }

  try{DOM = await holidaysGetPosts(search);}
  catch(error){
    alert(error);
  }
});


//make a button to submit the search
// let btnSearchNews = document.getElementById("btnSearchNews");
// let inputSearchNews = document.getElementById("inputSearchNews");
// btnSearchNews.addEventListener("click", async function(){
//   let search = inputSearch.value;
//   try{DOM = await newsGetPosts(search);}
//   catch(error){
//     alert(error);
//   }
// });





//search function weather
async function weatherGetPosts(search) {
  const apiKeyWeather ="88833963506943ecb51193430241404";
  const urlWeather =`https://api.weatherapi.com/v1/current.xml?key=${apiKeyWeather}&q=${search}&aqi=yes&format=xml`;

  const response = await fetch(urlWeather);
  if(!response.ok){
    throw new Error("enter a valid city name");
  }else{
    

    readStreamAsText(response);
  }
}

async function newsGetPosts(search) {
  const apiKey ="c19c38d9-04e5-44d1-a653-ee91d86e1d5e";
  const urlNews = `https://content.guardianapis.com/search?q=${search}&api-key=c19c38d9-04e5-44d1-a653-ee91d86e1d5e&format=xml`;

  const response = await fetch(urlNews);
  if(!response.ok){
    throw new Error("no news found");
  }else{
  
    readStreamAsText(response);
  }
}


async function holidaysGetPosts(search) {
  
  const url = "https://holidays.abstractapi.com/v1/?api_key=e38d6b49ae7f4404b55105c679ab4426&country=US";

  try {
    const response = await fetch(url);
    if(!response.ok){
      const errorData = await response.text(); // Get response text
      throw new Error(`Error ${response.status}: ${errorData}`);
    }else{
      readStreamAsText(response);
    }
  } catch (error) {
    console.log(error.toString()); // Log error message
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
  console.log("before parse to xlm"+result);

}
//dompasrser is an interface to parse source code to dom
//parseFromString is a method to parse string to xml
function parseXML(xmlStr) {
  const parser = new DOMParser();//dont know
  const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
  
  if(xmlStr.includes("guardian")){
    newsAdder(xmlDoc);}else if(xmlStr.includes("weatherapi")){
      weatherAdder(xmlDoc);
    }
  
}





function weatherAdder(xmlDoc){


  
  // Extract data from the XML Document object
const locationName = xmlDoc.querySelector('name').textContent;
const temperatureC = xmlDoc.querySelector('temp_c').textContent;
const conditionText = xmlDoc.querySelector('condition > text').textContent;
const iconUrl = xmlDoc.querySelector('condition > icon').textContent;




// Create HTML elements to represent the data
const container = document.createElement('div');
container.classList.add('weather-container');
const locationElement = document.createElement('h1');
const temperatureElement = document.createElement('p');
const conditionElement = document.createElement('p');
const iconElement = document.createElement('img');

locationElement.textContent = `Location: ${locationName}`;
temperatureElement.textContent = `Temperature: ${temperatureC}°C`;
conditionElement.textContent = `Condition: ${conditionText}`;
iconElement.src = iconUrl;

container.appendChild(locationElement);
container.appendChild(temperatureElement);
container.appendChild(conditionElement);
container.appendChild(iconElement);

let weather = document.getElementById("weather");
// Append the container to the document body or any other desired element

  weather.prepend(container);
}


function newsAdder(xmlDoc) {
  // Extract data from the XML Document object as array
  const results = xmlDoc.querySelectorAll('result');

  // Create a container to hold all news
  const container = document.createElement('div');
  container.classList.add('news-container');

  // Loop through each result and create HTML elements to represent the data
  results.forEach(result => {
    const titleElement = document.createElement('h3');
    const urlElement = document.createElement('a');
    const dateElement = document.createElement('p');

    titleElement.textContent = `Title: ${result.getAttribute('web-title')}`;
    urlElement.href = result.getAttribute('web-url');
    urlElement.textContent = 'Read more';
    dateElement.textContent = `Publication Date: ${new Date(result.getAttribute('web-publication-date')).toLocaleDateString()}`;

    const newsElement = document.createElement('div');
    newsElement.classList.add('news');
    newsElement.appendChild(titleElement);
    newsElement.appendChild(dateElement);
    newsElement.appendChild(urlElement);

    container.appendChild(newsElement);
  });

  // Append the container to the document body or any other desired element
  let news = document.getElementById("news");
  news.prepend(container);
}

function holidayAdder(xmlDoc){
  let 


}