const helper = require('../helper')
const { getRoomByUserId, getRoomByRoomId } = require('../model/room')

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
      }
      return helper.response(res, 200, 'Get Room Success', result4)
    } catch (err) {
      console.log(err)
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
