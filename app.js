var input = document.getElementById('city');
var button = document.getElementById('submit');

button.onclick = function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=7009623cb86613fa3cce04e30a6864b9')
        .then(response => response.json())
        .then(data => {
            var temp = data['main']['temp']; //Temprature
            var name = data['name']; //Name OF the place you searched for 
            var desc = data['weather'][0]['description']; // Weather type
            var feels = data['main']['feels_like']; // Feels like temp
            var humidity = data['main']['humidity']; // Humidity in percentahe
            var wind = data['wind']['speed']; // speed in MP/H
           // var icon = data['weather']['icon']
           // console.log(feels, humidity,wind);
          //  console.log(data);
            document.getElementById('data').innerHTML = `
            <h1> Place: ${name}</h1>
            <h2> Temprature: ${temp}</h2>
            <h3> Feels like: ${feels}</h3>
            <h3>weather: ${desc}</h3>
            <h3>Wind speed: ${wind} mp/h</h3>
            <h3>Humidity: ${humidity}%</h3>


            
            
            `


        })





        .catch(err => {
            document.getElementById('error').innerText = '*Please Enter valid name'
        })


}
