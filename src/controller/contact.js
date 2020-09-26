const helper = require('../helper')
const {
  getContactById,
  postContact,
  deleteContact
} = require('../model/contact')

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
  },
  addContact: async (req, res) => {
    try {
      const setData = {
        user_id: req.body.user_id,
        target_id: req.body.target_id,
        contact_created_at: new Date()
      }
      const result = await postContact(setData)
      return helper.response(res, 200, 'Add Contact Success', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  deleteContact: async (req, res) => {
    try {
      const { id, targetId } = req.query
      await deleteContact(id, targetId)
      return helper.response(res, 200, 'Contact deleted')
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
