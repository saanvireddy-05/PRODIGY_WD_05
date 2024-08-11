let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let country = document.querySelector(".city");
let condition = document.querySelector(".condition");
let temp = document.querySelector(".temp");
let feels = document.querySelector(".feels");
let windIcon = document.querySelector(".fa-wind");
let humidIcon = document.querySelector(".fa-droplet");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let tempImg = document.querySelector("#temp-img");
let secondContainer = document.querySelector(".second-container");
let spinner = document.querySelector(".spinner");
let loader = false;



async function weather(city){
	spinnerWork();
	let apiKey = "c49d40e8ae1a483b9e6175844240108";
	let url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=India&q=";
	loader = true;
	spinnerWork();
	let response = await fetch(url + city + "&timestamp=" + new Date().getTime());
	var data = await response.json();
	loader = false;
	spinnerWork();
	console.log(data);
	if(data.location.name === "La India (La India Calosa)"){
		alert("Please enter a valid city name");
		return;
	}
	windIcon.style.visibility = "visible";
	humidIcon.style.visibility = "visible";
	tempImg.src = data.current.condition.icon;
	country.innerHTML = data.location.name;
	condition.innerHTML = data.current.condition.text;
	feels.innerHTML = "Feels like " + Math.round(data.current.feelslike_c);
	temp.innerHTML = Math.round(data.current.temp_c) + "°C";
	humidity.innerHTML =  +data.current.humidity + "%";
	wind.innerHTML =  data.current.wind_kph + "Km/h";
}

function spinnerWork(){
	if(!loader){
		spinner.style.display = "none";
		secondContainer.style.display = "block";
	}else {
		spinner.style.display = "block";
		secondContainer.style.display = "none";
	}
}
btn.onclick=()=>{
	weather(input.value);
	
}
document.addEventListener("keydown", (event)=>{
	if(event.key === "Enter"){
		event.preventDefault();
		weather(input.value);
	}
})






