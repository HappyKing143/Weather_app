var weather_icon=document.getElementById('weather_icon')
var weather_name=document.getElementById('weather_name')
var city_name=document.getElementById("city_name")
var temp_value=document.getElementById('temp_value')
var humidity_value=document.getElementById('humidity_value')
var pressure_value=document.getElementById('pressure_value')
var wind_value=document.getElementById('wind_value')

async function weather_data(){
    
    //Input City Value Get:
    var input_city=document.getElementById('input_city').value

    //API Value Get and Turn Json format:
    var api_site='https://api.openweathermap.org/data/2.5/weather?'
    var api_key='b2ade7f79aadb85ccac9797334d2a622'
    var response=await fetch(`${api_site}q=${input_city}&appid=${api_key}&units=metric`)
    var data=await response.json()

    //All Value Set in the Html Page:
    weather_icon.src=`/images/${data.weather[0].main}.png`
    weather_name.textContent=(data.weather[0].main)
    city_name.textContent=input_city.toUpperCase()
    temp_value.textContent=`${data.main.temp}°`
    humidity_value.textContent=`${data.main.humidity}%`
    pressure_value.textContent=`${data.main.pressure}hPa`
    wind_value.textContent=`${data.wind.speed}km/h`


}
