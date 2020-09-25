const bcrypt = require('bcrypt')
const helper = require('../helper')
const jwt = require('jsonwebtoken')
const { getUserByEmail, postUser } = require('../model/user')

module.exports = {
  regUser: async (req, res) => {
    const salt = bcrypt.genSaltSync(8)
    const encryptPassword = bcrypt.hashSync(req.body.user_password, salt)
    const checkEmail = await getUserByEmail(req.body.user_email)
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
        const result = await postUser(setData)
        return helper.response(res, 200, 'Register Success', result)
      }
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  loginUser: async (req, res) => {
    try {
      const checkEmail = await getUserByEmail(req.body.user_email)
      if (checkEmail.length < 1) {
        return helper.response(res, 400, 'Email is not registered')
      } else {
        const checkPassword = bcrypt.compareSync(
          req.body.user_password,
          checkEmail[0].user_password
        )
        if (!checkPassword) {
          return helper.response(res, 400, 'Wrong password')
        } else {
          let payload = {
            user_id: checkEmail[0].user_id,
            user_name: checkEmail[0].user_name,
            user_email: checkEmail[0].user_email,
            user_image: checkEmail[0].user_image,
            user_phone: checkEmail[0].user_phone,
            user_lat: checkEmail[0].user_lat,
            user_lng: checkEmail[0].user_lng
          }
          if (checkEmail[0].user_status === 0) {
            return helper.response(
              res,
              400,
              'Your account is not activaed, please check your Email'
            )
          } else {
            const token = jwt.sign(payload, process.env.KEY, {
              expiresIn: '6h'
            })
            payload = { ...payload, token }
            return helper.response(res, 200, 'Login Success', payload)
          }
        }
      }
    } catch (err) {}
  }
}
