// imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

// const db = require('./models')

// middleware & setup
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// routes
app.get('/', (req, res) => {
    test = "tester"
    res.send({test})
})

// controllers if have them


// port setup
const server = app.listen(process.env.PORT || 8000)

// LOOK THIS UP: don't think I need it
// module.exports = server