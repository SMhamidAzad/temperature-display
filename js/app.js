const API_KEY = `3c7beeabe68cf9958143b3b209000b32`;
const searchTemperature= ()=>{
    const cityfield =document.getElementById('city-name')
    const city = cityfield.value;
    cityfield.value="";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}
const setInnerText = (id,text)=>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature =>{
    console.log(temperature);
    setInnerText('city',temperature.name);
    setInnerText('temp',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    const id = temperature.weather[0].icon
    const url =` http://openweathermap.org/img/wn/${id}@2x.png`;
    const imgIcon = document.getElementById('img-icon');
    imgIcon.setAttribute('src',url);
}