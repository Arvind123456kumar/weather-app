const apiKey='9857ae27919fb1f4e30d14a0bdc145c6';
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const weather=document.querySelector('.icon');
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{                   
    let data=await response.json();
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+" %";
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
if(data.weather[0].main=="Clouds"){
weather.src='clouds.png'
}
else if(data.weather[0].main=="Clear"){
weather.src='clear.png'
}
else if(data.weather[0].main=="Rain"){
weather.src='rain.png'

}
else if(data.weather[0].main=="Drizzle"){
weather.src='drizzle.png'
}
else if(data.weather[0].main=="Mist"){
weather.src='mist.png'
}
document.querySelector('.weather').style.display='block';
document.querySelector('.error').style.display='none';
searchBox.value=''
    }
}
searchbtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);

})
searchBox.addEventListener('keyup',(e)=>{
    if(e.code==="Enter"){
    checkWeather(searchBox.value);
    }
})