"use strict"
searchButton.addEventListener("click",searchweather);
function searchweather(){
    // loadingText.style.display="block";
    weatherBox.style.display="none";
    var cityName =searchCity.value;
    if (cityName.trim().length==0) {
        alert("Please enter the City Name")
    }
    
    var http= new XMLHttpRequest();
    var apikey = "9f109f6b303b21ed9023843e21f17b1c";
    var url = "http://api.openweathermap.org/data/2.5/weather?q= "+ cityName+"&units=matric&appid="+apikey;
    var method="GET";
    http.open(method,url);
    http.onreadystatechange=function(){
        if( http.readyState == XMLHttpRequest.DONE && http.status === 200){
            var  data = JSON.parse(http.responseText);
            var weatherData=new weather(cityName,data.weather[0].description.toUpperCase());
            weatherData.temperature=data.main.temp;
            updateWeather(weatherData);

            console.log(weatherData);
       } else if (http.readyState==XMLHttpRequest.DONE){
           alert("Something went wrong");
       }
    };
    http.send();
}
function updateWeather(weatherData){
    weathercity.textContent=weatherData.cityName;
    
    weatheDescription.textContent=weatherData.description;
    weatherTemperature.textContent=weatherData.temperature;
    loadingtext.style.display="none";
    weatherBox.style.display="block";  

}
