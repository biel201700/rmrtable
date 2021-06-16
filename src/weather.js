const weather = document.querySelector(".js-weather");
const jsPlace = document.querySelector(".js-place");

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = 'coords';

function getWeather(latitude, longitude){
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
		)
	.then(function(response){
		return response.json();
	})
	.then(function(json){
		console.log(json);
		const temprature = json.main.temp;
		const place = json.name;
		const weatherImage = json.weather[0].main;
		const icon = json.weather[0].icon;
	
		const image = new Image(30,30);
		image.src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
		console.log(image.src)
		weather.innerText = `temp: ${temprature}℃`;
		weather.appendChild(image);
		jsPlace.innerText = ` place: ${place}`;
		
		
	});
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude: latitude,
		longitude: longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}
function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoord(){
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoords();
	} else{
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init(){
	loadCoord();
}
init();