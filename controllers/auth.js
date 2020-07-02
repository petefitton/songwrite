require('dotenv').config()
let db = require('../models')
let jwt = require('jsonwebtoken')
let router = require('express').Router()

// TEST ROUTE
router.get('/', (req, res) => {
  res.send({test: "testum"})
})

// POST /auth/login
router.post('/login', (req, res) => {
  db.user.findOne({where: {name: req.body.name}
  }).then(user => {
    if (!user || !user.password) {
      return res.status(404).send({message: 'User not found'})
    }

    if (!user.validPassword(req.body.password)) {
      return res.status(404).send({message: 'Invalid credentials'})
    }

    let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 8
    })
    res.send({token})
  }).catch(err => {
    res.status(503).send({message: 'Database or server-side error'})
  })
})

// POST /auth/signup
router.post('/signup', (req, res) => {
  db.user.findOne({where: {name: req.body.name}
  }).then(user => {
    if (user) {
      return res.status(409).send({message: 'Username already in use'})
    }

    db.user.create({name: req.body.name, password: req.body.password, savings: 500, fans: 0})
    .then(newUser => {
      let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 8
      })
      res.send({token})
    }).catch(err => {
      if (err.name === 'ValidationError') {
        res.status(406).send({message: 'Validation error'})
      } else {
        res.status(500).send({message: 'Error creating user'})
      }
    })
  }).catch(err => {
    res.status(503).send({message: 'Database or server error'})
  })
})

module.exports = router