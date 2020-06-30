export const getUserDetails = (db, userName) => {
  return new Promise((resolve, reject) => {
    db.user.findOne({where: {name: userName}})
    .then(userInfo => {
        resolve(userInfo)
    })
    .catch(err => reject(err))
  })
}