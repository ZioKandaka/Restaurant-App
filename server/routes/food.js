const express = require("express")
const router = express.Router()
const {authentication, authorization} = require('../middleware/authenticationAndAuthorization')
const errorHandler = require('../middleware/errorHandler');
const Controller = require("../controllers/controller")

//day 1
router.post("/", Controller.createFood)
router.get("/", Controller.getFood)
router.get("/:id", Controller.getFoodById)

//c2
router.post('/history/:id', Controller.historyFood)
router.put('/:id', authorization, Controller.putFood)
router.patch('/:id', authorization, Controller.patchFood)

//authorization
// router.delete("/:id", authorization, Controller.deleteFoodById)


module.exports = router