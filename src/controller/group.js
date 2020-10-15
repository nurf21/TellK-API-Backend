const helper = require('../helper')
const { getAllGroup } = require('../model/group')
const { getRecentMessage } = require('../model/room')

module.exports = {
  getAllGroup: async (req, res) => {
    try {
      const result = await getAllGroup()
      for (let i = 0; i < result.length; i++) {
        result[i].recent = await getRecentMessage(result[i].group_id)
      }
      return helper.response(res, 200, 'Get Room Success', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
