const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
  
  let num1 = Number(req.body.n1)
  let num2 = Number(req.body.n2)
  
  let result = num1 + num2
  
  res.send('The result of the calculation is ' + result)
})

app.get('/bmi', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html')

})

app.post('/bmi', function(req, res) {

  let weight = parseFloat(req.body.weight)
  let heigth = parseFloat(req.body.height)

  let bmi = weight / (heigth * heigth)

  res.send('Your BMI is ' + bmi)
})

app.listen(3000, function() {
  console.log('Server is running on Port 3000')
})