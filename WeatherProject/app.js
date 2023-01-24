const express = require('express')
const https = require('https')

const app = express()

app.get('/', function(req, res) {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Araguari&appid=619f527bda3f88b2bbd1906c6ae7e032&units=metric'

  https.get(url, function(response) {
    console.log(response.statusCode)

    response.on('data', function(data) {
     const weatherData = JSON.parse(data)
     const temp = weatherData.main.temp
     const description = weatherData.weather[0].description
     const icon = weatherData.weather[0].icon
     const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
     res.write('<p>The weather is currently ' + description + '</p>')
     res.write('<h1>The temperature in Araguari is ' + temp + ' degrees Celcius</h1>')
     res.write('<img src=' + imageUrl + '>')
     res.send()
    })
  })
})




app.listen(3000, function() {
  console.log('Server is running on port 3000.')
})