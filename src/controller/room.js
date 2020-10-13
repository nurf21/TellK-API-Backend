const helper = require('../helper')
const { getRoomByUserId, getRoomByRoomId, postRoom, searchRoom, getRecentMessage } = require('../model/room')

module.exports = {
  getRoomByUserId: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getRoomByUserId(id)
      const roomIds = result.map((el) => {
        return el.room_id
      })
      let result4 = []
      for (let i = 0; i < roomIds.length; i++) {
        result2 = await getRoomByRoomId(roomIds[i])
        const result3 = result2.filter((el) => el.user_id !== parseInt(id))
        result4 = result4.concat(result3)
        for (let i = 0; i < result4.length; i++) {
          result4[i].recent = await getRecentMessage(result4[i].room_id)
        }
      }
      return helper.response(res, 200, 'Get Room Success', result4)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  searchRoom: async (req, res) => {
    try {
      const { id, keyword } = req.query
      const result = await getRoomByUserId(id)
      const roomIds = result.map((el) => {
        return el.room_id
      })
      let result4 = []
      for (let i = 0; i < roomIds.length; i++) {
        result2 = await searchRoom(roomIds[i], keyword)
        const result3 = result2.filter((el) => el.user_id !== parseInt(id))
        result4 = result4.concat(result3)
        for (let i = 0; i < result4.length; i++) {
          result4[i].recent = await getRecentMessage(result4[i].room_id)
        }
      }
      return helper.response(res, 200, 'Get Room Success', result4)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  createRoom: async (req, res) => {
    try {
      const roomId = Math.round(Math.random() * 100000)
      const setData1 = {
        room_id: roomId,
        user_id: req.body.user_id,
        room_created_at: new Date()
      }
      await postRoom(setData1)
      const setData2 = {
        room_id: roomId,
        user_id: req.body.target_id,
        room_created_at: new Date()
      }
      await postRoom(setData2)
      return helper.response(res, 200, 'Room Created', roomId)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
