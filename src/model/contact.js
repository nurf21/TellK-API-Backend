const connection = require('../config/mysql')

module.exports = {
  getContactById: (id, keyword) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT user.user_id, user.user_name, user.user_email, user.user_image, user.user_phone, user.user_lat, user.user_lng FROM contact JOIN user on contact.target_id = user.user_id WHERE contact.user_id = ? AND user.user_name LIKE ?
        ORDER BY user.user_name ASC`,
        [id, `%${keyword}%`],
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  }
}
