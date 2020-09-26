const helper = require('../helper')
const { getContactById } = require('../model/contact')

module.exports = {
  getContactById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getContactById(id)
      return helper.response(res, 200, 'Get Contact Success', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
