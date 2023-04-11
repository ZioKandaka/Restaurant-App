const express = require("express")
const router = express.Router()
const {authentication, authorization} = require('../middleware/authenticationAndAuthorization')
const errorHandler = require('../middleware/errorHandler');
const Controller = require("../controllers/controller")

const food = require('./food')
const category = require('./category')
const pub = require('./pub')



router.post("/register", Controller.createAdmin)
router.post("/login", Controller.login)
router.post('/google-sign-in', Controller.googleLogin)

//customer nanti dibuat routing
// router.post("/pub/login", Controller.customerLogin)
// router.post("/pub/register", Controller.customerRegister)
// router.get("/pub/food", Controller.customerGetFood)
// router.get('/pub/food/:id', Controller.customerGetFoodById)
// router.get('/pub/QR/:id', Controller.createQR)

router.use('/pub', pub)

//authentication
router.use(authentication)

//pub
// router.get('/pub/favorites/:UserId', Controller.getFavorite)
// router.post('/pub/favorites/:UserId/:FoodId', Controller.postFavorite)

//day 1
router.use('/food', food)
router.use('/categories', category) //nanti ganti jadi categories

//C2
router.get('/history', Controller.getHistory)

// error handler
router.use(errorHandler)

module.exports = router