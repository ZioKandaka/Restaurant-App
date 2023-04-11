const express = require("express")
const app = express()
const { Category, Food, User } = require("../models")
const {createToken, decodeToken} = require('../middleware/jwt')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


async function authentication(req, res, next) {
    try {
        let token = req.headers.token
        // console.log(token, '++++');
        if (!token) {
          throw { name: "InvalidToken" }
        }

        let decoded = decodeToken(token)
        console.log(decoded, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        
        const user = await User.findByPk(decoded.userId)
        // console.log(user, 'TOKOKK');
        if (!user) {
          throw { name: "InvalidToken" }
        }
        req.user = {
          id: user.id,
          email: user.email,
          role: user.role
        }
        next()
      } catch (err) {
        next(err)
      }
}

async function authorization (req, res, next) {
    try {
        let food = await Food.findByPk(req.params.id)
        // console.log(req.params);
        // console.log(req.user.id, req.body.authorId, '<<<<<<<<<<<<<<');
        if (!food) {
          throw { name: "NotFound" }
        }
        if (req.user.id == req.body.authorId || req.user.role === 'admin') {
          next()
        } else {
            throw {name: 'forbidden'}
        }

      } catch (err) {
        next(err)
      }
}

module.exports = {authentication, authorization}