const connection = require('../config/mysql')

module.exports = {
  getAllGroup: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM groups ORDER BY group_created_at', (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  }
}
