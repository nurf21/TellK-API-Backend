const connection = require('../config/mysql')

module.exports = {
  getMessageByRoomId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM message WHERE room_id = ?',
        id,
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  },
  postMessage: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO message SET ?', setData, (err, res) => {
        !err ? resolve(res) : reject(new Error(err))
      })
    })
  }
}
