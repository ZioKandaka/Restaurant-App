const express = require("express")
const router = express.Router()
const {authentication, authorization} = require('../middleware/authenticationAndAuthorization')
const errorHandler = require('../middleware/errorHandler');
const Controller = require("../controllers/controller")

//day 1
router.post('/', Controller.createCategory)
router.get("/", Controller.getCategory)
router.get("/:id", Controller.getCategoryById)
router.delete("/:id", Controller.deleteCategory)

//C2
router.patch('/:id', Controller.patchCategory)
router.post('/history/:id', Controller.historyCategory)


module.exports = router