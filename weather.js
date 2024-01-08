
const init=document.getElementById('x');
const submitbtn=document.getElementById('submitbtn');
submitbtn.addEventListener('click', (event)=>{
  event.preventDefault();
  checkWeather(init.value);
});

async function checkWeather(city){

  console.log('Checking weather for city:', city);

try{
  const api_key="91ffeb1df209afbc0ff4c828ac2cda46";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const response = await fetch(url);
  const weather_data = await response.json();


  console.log('API Response:', weather_data);
  const temperature = document.querySelector('.temperature');
  const description = document.querySelector('.description');
  const humidity = document.getElementById('humidity');
  const wind_speed = document.getElementById('wind-speed');


  if(weather_data.cod === `404`){
    
      weather_body.style.display = "none";
      console.log("error");
      return;
  }

  console.log("run");

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  temperature.style.color="yellow";
  description.innerHTML = `${weather_data.weather[0].description}`;
  description.style.color="olivedrab";
  
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  humidity.style.color="orange";
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
  wind_speed.style.color="chartreuse";



  console.log(weather_data);
  }
  catch(error) {
    console.error('Error fetching weather data:', error);
}
}


  
