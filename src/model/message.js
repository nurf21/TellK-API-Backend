const connection = require('../config/mysql')

module.exports = {
  getMessageByRoomId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT message.message_id, message.room_id, message.user_id, message.message, message.message_created_at, user.user_name FROM message JOIN user ON message.user_id = user.user_id WHERE room_id = ?',
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
