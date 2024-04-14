
//make a button to submit the search
let btnSearch = document.getElementById("btnSearch");
let inputSearch = document.getElementById("inputSearch");
btnSearch.addEventListener("click", function(){
  search = inputSearch.value;
  getPosts(search);
});



//search function
async function getPosts(search) {
  // let appId ="111cafe7";
  // let appKey = "8fd24ad7ec497a9b870540a46518ae0d";
  // const url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=111cafe7&app_key=8fd24ad7ec497a9b870540a46518ae0d  ";

  //weather api
  const apiKeyWeather ="88833963506943ecb51193430241404";
  const urlWeather ="https://api.weatherapi.com/v1/current.xml?key=88833963506943ecb51193430241404&q=" + search + "&aqi=yes";
  

  const response = await fetch(urlWeather);
  if(!response.ok){
    throw new Error("response error");
  }else{
    console.log( `type of response is ${typeof(response)}`);
    

  //response body is readableStream
  
  readStreamAsText(response);


    

  }
}

//make a stream reader of xml
async function readStreamAsText(response){

  const reader = response.body.getReader();

  const decoder = new TextDecoder();

  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value);
  }
  console.log(result);


}
//make a manipulation of xml

