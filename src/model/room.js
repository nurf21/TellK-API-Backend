const connection = require('../config/mysql')

module.exports = {
  getRoomByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM room WHERE user_id = ?',
        id,
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  },
  getRoomByRoomId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT room.room_id, room.user_id, room.room_updated_at, user.user_name, user.user_image FROM room JOIN user ON room.user_id = user.user_id WHERE room.room_id = ? ORDER BY user.user_name ASC',
        id,
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  },
  postRoom: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO room SET ?', setData, (err, res) => {
        !err ? resolve(res) : reject(new Error(err))
      })
    })
  }
}
