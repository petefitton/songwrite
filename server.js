// imports
require('dotenv').config()
let express = require('express')
let cookieParser = require('cookie-parser')
let cors = require('cors')
// let jwt = require('jsonwebtoken')
let expressJwt = require('express-jwt')
// let {verify} = require('jsonwebtoken')
// let {hash, compare} = require('bcrypt')
let rowdyLogger = require('rowdy-logger')

// let db = require('./models')

// middleware & setup
let app = express()
let rowdyResults = rowdyLogger.begin(app)
// JWT tutorial uses extended: true so that there is support for URL-encoded bodies
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// possible: app.use(cors({origin: 'http://localhost:3000, credentials: true}))
app.use(cookieParser())
// unsure if I need this: I believe it would accept data from fetch or any AJAX call
// allows me to be able to read body data by supporting JSON-encoded data/bodies
app.use(express.json())



app.use('/auth', require('./controllers/auth'))

// controllers if have them
// app.use('/auth', expressJwt({
//     secret: process.env.JWT_SECRET,
//     algorithms: ['RS256']
// }).unless({
//     path: [
//         { url: '/auth/login', methods: ['POST'] },
//         { url: '/auth/signup', methods: ['POST'] }
//     ]
// }), require('./controllers/auth'))



// routes

// app.get('/', (req, res) => {
//     test = "tester"
//     res.send({test})
// })

// 404 Page/Catch-All
app.get('*', (req, res) => {
  res.status(404).send({message: 'Not Found'})
})

// port setup
let server = app.listen(process.env.PORT || 8000, () => {
    rowdyResults.print()
})

// LOOK THIS UP: don't think I need it
// module.exports = server