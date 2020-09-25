const connection = require('../config/mysql')

module.exports = {
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE user_email = ?',
        email,
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  },
  postUser: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, res) => {
        if (!err) {
          const newRes = {
            id: res.insertId,
            ...data
          }
          delete newRes.user_password
          resolve(newRes)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
