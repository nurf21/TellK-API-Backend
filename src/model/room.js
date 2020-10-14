const connection = require('../config/mysql')

module.exports = {
  getRoomByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM room WHERE user_id = ? ORDER BY room_updated_at DESC',
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
        'SELECT room.room_id, room.user_id, room.room_updated_at, user.user_name, user.user_image, user.user_activity FROM room JOIN user ON room.user_id = user.user_id WHERE room.room_id = ? ORDER BY room.room_updated_at DESC',
        id,
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  },
  searchRoom: (id, keyword) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT room.room_id, room.user_id, room.room_updated_at, user.user_name, user.user_image FROM room JOIN user ON room.user_id = user.user_id WHERE room.room_id = ? AND user.user_name LIKE ? ORDER BY room.room_updated_at DESC',
        [id, `%${keyword}%`],
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err))
        }
      )
    })
  },
  getRecentMessage: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * from message WHERE room_id = ? ORDER BY message_created_at DESC LIMIT 1', id, (error, result) => {
        !error? resolve(result[0]) : reject(new Error(error))
      })
    })
  },
  postRoom: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO room SET ?', setData, (err, res) => {
        !err ? resolve(res) : reject(new Error(err))
      })
    })
  },
  patchRoom: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE room SET ? WHERE room_id = ?', [setData, id], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}
