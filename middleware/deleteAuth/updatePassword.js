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