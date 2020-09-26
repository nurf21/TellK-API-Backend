const router = require('express').Router()
const {
  getUserById,
  getUserByEmail,
  regUser,
  loginUser,
  patchImageUser,
  patchUserProfile,
  patchLocation
} = require('../controller/user')
const uploadImage = require('../middleware/multer')

router.get('/:id', getUserById)
router.get('/search/:email', getUserByEmail)

router.post('/register', regUser)
router.post('/login', loginUser)

router.patch('/update/image/:id', uploadImage, patchImageUser)
router.patch('/update/profile/:id', patchUserProfile)
router.patch('/update/location/:id', patchLocation)

module.exports = router
