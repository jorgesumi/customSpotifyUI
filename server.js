const express = require('express')
const http = require('http')
const fs = require('fs')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/js'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('app')
})

// Listen  on port
app.listen(port, () => console.info(`Listening on port ${port}`))