var apikey = "835121233ccd3bdfcb7fe43c106cbcf0"
var searchButton = document.querySelector(".search-button")
searchButton.addEventListener("click",searchWeather)
let recentsearch = JSON.parse(localStorage.getItem('recentsearch')) || []
getCities()

function getCities(){
    
    for(let i=0; i<recentsearch.length; i++){
        var newElement = document.createElement("button")
        newElement.className="tile"
        newElement.textContent= recentsearch[i]
        document.getElementById("history").appendChild(newElement)
    }
}


document.getElementById("history").addEventListener("click",function(e){
    let city = e.target.innerText;
    fetchWeather(city)
})


function fetchWeather(cityname) {

    if(!recentsearch.includes(cityname)){
    recentsearch.push(cityname)}

    localStorage.setItem("recentsearch", JSON.stringify(recentsearch));

    console.log(recentsearch)
    localStorage.setItem("recentsearch", JSON.stringify(recentsearch));

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        console.log (data)
        document.querySelector("#searchedCity").textContent = cityname;

var today = new Date().toJSON().slice(0, 10);
        console.log(data.weather[0].icon)

        document.querySelector('#date0').innerHTML=`
        Date: ${today}`
        document.querySelector('#icon0').innerHTML=
        `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>`
        
        //https://openweathermap.org/img/wn/10d@2x.png
        document.querySelector("#temp0").textContent ="Temp: " + data.main.temp + " Celcius"
        document.querySelector("#wind0").textContent ="Wind: " + data.wind.speed + " MPH"
        document.querySelector("#hum0").textContent ="Humidity: " + data.main.humidity + "%"
    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        console.log (data)
        // Day 1 forecast
        document.querySelector('#date1').innerHTML=`
        Date: ${data.list[5].dt_txt.substring(0, 10)}`
        document.querySelector('#icon1').innerHTML=
        `<img class="forecastIcon" src="https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png"></img>`

        document.querySelector("#temp1").textContent ="Temp: " + data.list[5].main.temp + " Celcius"
        document.querySelector("#wind1").textContent ="Wind: " + data.list[5].wind.speed + " MPH"
        document.querySelector("#hum1").textContent ="Humidity: " + data.list[5].main.humidity + "%"
       // Day 2 forecast
       document.querySelector('#date2').innerHTML=`
       Date: ${data.list[13].dt_txt.substring(0, 10)}`
       document.querySelector('#icon2').innerHTML=
       `<img class="forecastIcon" src="https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png"></img>`

        document.querySelector("#temp2").textContent ="Temp: " + data.list[13].main.temp + " Celcius"
        document.querySelector("#wind2").textContent ="Wind: " + data.list[13].wind.speed + " MPH"
        document.querySelector("#hum2").textContent ="Humidity: " + data.list[13].main.humidity + "%"

        // Day 3 forecast
        document.querySelector('#date3').innerHTML=`
        Date: ${data.list[21].dt_txt.substring(0, 10)}`
        document.querySelector('#icon3').innerHTML=
        `<img class="forecastIcon" src="https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png"></img>`
        document.querySelector("#temp3").textContent ="Temp: " + data.list[21].main.temp + " Celcius"
        document.querySelector("#wind3").textContent ="Wind: " + data.list[21].wind.speed + " MPH"
        document.querySelector("#hum3").textContent ="Humidity: " + data.list[21].main.humidity + "%"

        // Day 4 forecast
        document.querySelector('#date4').innerHTML=`
        Date: ${data.list[29].dt_txt.substring(0, 10)}`
        document.querySelector('#icon4').innerHTML=
        `<img class="forecastIcon" src="https://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png"></img>`
        document.querySelector("#temp4").textContent ="Temp: " + data.list[29].main.temp + " Celcius"
        document.querySelector("#wind4").textContent ="Wind: " + data.list[29].wind.speed + " MPH"
        document.querySelector("#hum4").textContent ="Humidity: " + data.list[29].main.humidity + "%"

        // Day 5 forecast
        document.querySelector('#date5').innerHTML=`
        Date: ${data.list[37].dt_txt.substring(0, 10)}`
        document.querySelector('#icon5').innerHTML=
        `<img class="forecastIcon" src="https://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png"></img>`
        document.querySelector("#temp5").textContent ="Temp: " + data.list[37].main.temp + " Celcius"
        document.querySelector("#wind5").textContent ="Wind: " + data.list[37].wind.speed + " MPH"
        document.querySelector("#hum5").textContent ="Humidity: " + data.list[37].main.humidity + "%"
    })

}



function searchWeather(e) {
    e.preventDefault()
    var cityname = document.querySelector(".form-input").value
    var newElement = document.createElement("button")
    newElement.className="tile"
    newElement.textContent= cityname
    document.querySelector("#history").appendChild(newElement)
    fetchWeather(cityname)
}
