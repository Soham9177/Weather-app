const apiKey="e5cd96f2e0bea067288d7b29bd3781ce";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
async function checkWeather(city){
     const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
     var data = await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=data.main.temp + "°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
      document.querySelector(".wind").innerHTML=data.wind.speed;
 }

checkWeather()
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})