import jwt from 'jsonwebtoken'
require('dotenv').config()
const newSessionRoutes = [{path: '/user/login', method: 'POST'}]
const authRoutes = [{path: '/user/password', method: 'PUT'}]
const SECRET_KEY = process.env.JWT_SECRET

export const getUserDetails = (db, userName) => {
  return new Promise((resolve, reject) => {
    db.user.findOne({where: {name: userName}})
    .then(userInfo => {
        resolve(userInfo)
    })
    .catch(err => reject(err))
  })
}

export const clientApiKeyValidation = async(req, res, next) => {
  let clientApiKey = req.get('api_key')
  if(!clientApiKey) {
    return res.status(400).send({
      status: false,
      response: 'Missing Api Key'
    })
  }
  try {
    let clientDetails = await getUserDetails(req.db, clientApiKey)
    if (clientDetails) {
      next()
    }
  } catch(e) {
    console.log('&&&&&&& error: ', e)
    return res.status(400).sen({
      status: false,
      response: 'Invalid Api Key'
    })
  }
}

export const isNewSessionRequired = (httpMethod, url) => {
  for (let routeObj of newSessionRoutes) {
    if (routeObj.method === httpMethod && routeObj.path === url) {
      return true
    }
  }
  return false
}

export const isAuthRequired = (httpMethod, url) => {
  for (let routeObj of authRoutes) {
    if (routeObj.method === httpMethod && routeObj.path === url) {
      return true
    }
  }
  return false
}

export const generateJWTToken = userData => {
  return jwt.sign(userData, SECRET_KEY)
}

export const verifyToken = jwtToken => {
  try {
    return jwt.verify(jwtToken, SECRET_KEY)
  } catch(e) {
    console.log('e: ', e)
    return null
  }
}




export const updatePassword = (db, userName, pwd) => {
  return db.user.update({ password: pwd }, {
    where: { name: userName }
  })
  .then(r => {
    return Promise.resolve('Success')
  })
  .catch(err => {
    return Promise.reject(err)
  })
}