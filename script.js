input = document.getElementById("input")
button = document.getElementById("button-addon2")


let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  end = (valNum-32)/1.8;
    return end
}

function writeOn(weatherdata){
    let weather = document.getElementById("weather_current");
    let temprature = document.getElementById("temp");
    let maxTemprature = document.getElementById("tempmax");
    let minTemprature = document.getElementById("tempmin");
    let cityName = document.getElementById("city");

    let tempcelcius = document.getElementById("TempCelcius");
    let maxtempcelcius = document.getElementById("maxTempCelcius");
    let mintempcelcius = document.getElementById("minTempCelcius");

    cityName.innerText = weatherdata.name;
    weather.innerText = weatherdata.weather[0].description;
    temprature.innerText = weatherdata.main.temp;

    maxTemprature.innerText = weatherdata.main.temp_max;
    minTemprature.innerText = weatherdata.main.temp_min;
    

    tempcelcius.innerText = temperatureConverter(weatherdata.main.temp).toFixed(2);
    maxtempcelcius.innerText = temperatureConverter(weatherdata.main.temp_max).toFixed(2);
    mintempcelcius.innerText = temperatureConverter(weatherdata.main.temp_max).toFixed(2);


}

function getData(){
  const city = input.value;
  getWeatherData(city)
    .then((res) => {
      console.log(res.weather);
      console.log(res.main.temp_max);
      console.log(res.main.temp_min);
      writeOn(res);
    })
    .catch(
      console.log("there is no city named" + city)
    )
}
// res.weather[0].description => weather status
//


button.onclick = () => {

getData()

}