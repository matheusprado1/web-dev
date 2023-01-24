//jshint esversion:6

const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hello, world!</h1>')
})

app.get('/contact', function(req, res) {
  res.send('Contact me at: matheusprado@gmail.com')
})

app.get('/about', function(req, res) {
  res.send('Meu nome é Matheus Prado, tenho 26 anos e estou cursando Análise e Desenvolvimento de Sistemas, tenho conhecimentos em desenvolvimento web com HTML, JS e Css além de Jquery, Bootstrap e NodeJs com Express')
})

app.get('/hobbies', function(req, res) {
  res.send('Gatos e Games')
})

app.listen(3000, function() {
  console.log('Server started on port 3000')
})