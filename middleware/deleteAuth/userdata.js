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