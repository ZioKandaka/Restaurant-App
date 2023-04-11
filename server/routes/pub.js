const express = require("express")
const router = express.Router()
const {authentication, authorization} = require('../middleware/authenticationAndAuthorization')
const errorHandler = require('../middleware/errorHandler');
const Controller = require("../controllers/controller")

router.post("/login", Controller.customerLogin)
router.post('/google-sign-in', Controller.googleLoginCustomer)
router.post("/register", Controller.customerRegister)
router.get("/food", Controller.customerGetFood)
router.get('/food/:id', Controller.customerGetFoodById)
router.get('/QR/:id', Controller.createQR)

router.use(authentication)

router.get('/favorites/:UserId', Controller.getFavorite)
router.post('/favorites/:UserId/:FoodId', Controller.postFavorite)
//authorization
// router.delete("/:id", authorization, Controller.deleteFoodById)


module.exports = router