// imports
require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

// middleware & setup
// TODO: LOOK THIS UP AND SEE IF I NEED TO USE IT AND WHAT IT ACTUALLY DOES
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/', (req, res) => {
    res.send({test: "tester"})
})

// controllers if have them


// port setup
const server = app.listen(process.env.PORT || 8000)

// LOOK THIS UP: don't think I need it
// module.exports = server