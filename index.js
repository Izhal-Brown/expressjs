const express = require('express')
const app = express()


// membuat layout :
app.set('view engine', 'ejs')

// mengambil berbagai asset di dalam direktori public
app.use(express.static('public'))


// membuat route untuk masing" halaman:
app.get('/', function (req, res) {
  res.render('pages/index')
})

app.get('/skill', function (req, res) {
  res.render('pages/skill')
})

app.get('/contactme', function (req, res) {
  res.render('pages/contactme')
})

app.get('/myclosefriend', function (req, res) {
  res.render('pages/myclosefriend')
})

app.listen(port, () => {
  console.log('App is running at the port ${port}')
})