const bcrypt = require('bcrypt')
const helper = require('../helper')
const { checkUserByEmail, regUser } = require('../model/user')

module.exports = {
  regUser: async (req, res) => {
    const salt = bcrypt.genSaltSync(8)
    const encryptPassword = bcrypt.hashSync(req.body.user_password, salt)
    const checkEmail = await checkUserByEmail(req.body.user_email)
    const setData = {
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: encryptPassword,
      user_image: 'blank-profile.jpg',
      user_phone: req.body.user_phone,
      user_lat: '',
      user_lng: '',
      user_key: 0,
      user_status: 1,
      user_created_at: new Date()
    }
    try {
      if (checkEmail.length > 0) {
        return helper.response(res, 400, 'Email is already registered')
      } else if (
        req.body.user_password.length < 8 ||
        req.body.user_password.length > 16
      ) {
        return helper.response(res, 400, 'Password must be 8-16 characters')
      } else if (
        setData.user_phone.length < 10 ||
        setData.user_phone.length > 13
      ) {
        return helper.response(res, 400, 'Invalid phone number')
      } else {
        const result = await regUser(setData)
        return helper.response(res, 200, 'Success Register User', result)
      }
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
