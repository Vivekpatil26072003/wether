var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="024dd355d59d9ccf24e7493212354481"
function convertion(val)
{
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function()
{
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML=`weather: <span>${nameval}</span>`
        temp.innerHTML=`temperature: <span>${convertion(tempature)}c</span>`
        descrip.innerHTML=`description: <span>${data['weather']['0']['description']}</span>`
        wind.innerHTML=`wind: <span>${wndspeed}km/h</span>`
    })
    .catch(error)
    {
    console.error(error);
    alert('Error: ' + error.message);
  }
});