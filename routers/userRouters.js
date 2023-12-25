const express = require('express')
const {registerUser,loginUser,getusers} = require('../controllers/userControllers.js')
const router = express.Router()
const {registerDataValidate} = require('../middlewares/registerDataValidate.js')
const {loginDataValidate} = require('../middlewares/loginDataValidate.js')

router.post('/registerUser',registerDataValidate,registerUser)
router.post('/loginUser',loginDataValidate,loginUser)
router.get('/getusers',getusers)



module.exports = router