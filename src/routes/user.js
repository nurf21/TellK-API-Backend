const router = require('express').Router()
const {
  getUserById,
  regUser,
  loginUser,
  patchImageUser,
  patchUserProfile
} = require('../controller/user')
const uploadImage = require('../middleware/multer')

router.get('/:id', getUserById)

router.post('/register', regUser)
router.post('/login', loginUser)

router.patch('/update/image/:id', uploadImage, patchImageUser)
router.patch('/update/profile/:id', patchUserProfile)

module.exports = router
