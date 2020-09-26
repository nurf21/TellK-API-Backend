const helper = require('../helper')
const { getContactById } = require('../model/contact')

module.exports = {
  getContactById: async (req, res) => {
    try {
      const { id } = req.params
      let { keyword } = req.query
      if (keyword === undefined) {
        keyword = ''
      }
      const result = await getContactById(id, keyword)
      return helper.response(res, 200, 'Get Contact Success', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
