const helper = require('../helper')
const { getMessageByRoomId, postMessage } = require('../model/message')
const { patchRoom } = require('../model/room')

module.exports = {
  getMessageByRoomId: async (req, res) => {
    try {
      const { roomId, userId } = req.query
      const result = await getMessageByRoomId(roomId)
      for (let i = 0; i < result.length; i++) {
        if (parseInt(result[i].user_id) === parseInt(userId)) {
          result[i].class = 'receiver'
        } else {
          result[i].class = 'sender'
        }
      }
      return helper.response(res, 200, 'Get Room Success', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  sendMessage: async (req, res) => {
    try {
      const setData = {
        room_id: req.body.roomId,
        user_id: req.body.userId,
        message: req.body.message,
        message_created_at: new Date()
      }
      await postMessage(setData)
      const setDataRoom = {
        room_updated_at: new Date()
      }
      await patchRoom(setDataRoom, req.body.roomId)
      return helper.response(res, 200, 'Message Sent')
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
