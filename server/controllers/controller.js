const {Category, Food, User, History, Customer, Favorite} = require('../models/index')
const bcrypt = require('bcrypt')
const axios = require('axios');
const { Op, JSON } = require("sequelize")
const {crypt, currency, timeSetter} = require('../helpers/helper')
const {createToken, decodeToken} = require('../middleware/jwt')
const {OAuth2Client, auth} = require('google-auth-library');
const CLIENT_ID = '941736208536-snm23rd97s32753hgrilgpcmd5o3qi0p.apps.googleusercontent.com'
const CLIENT_SECRET = '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'


class Controller {
    //challange 1 (10)
    //nomor 1
    static async createFood(req, res, next) {
        try {
            const food = await Food.create({
                name: req.body.name,
                categoryId: req.body.categoryId,
                description: req.body.description,
                price: req.body.price,
                imgUrl: req.body.imgUrl,
                authorId: req.user.id,
            })
            res.status(201).json(food)
        } catch (err) {
            next(err)
        }
    }

    //nomor 2
    static async getFood(req, res, next) {      
        try {
            const foods = await Food.findAll({
                include: 'User',
                // offset: 5,
                // limit: 10,
                order: [['id', 'ASC']]
            })
            foods.forEach(el => el.price = currency(el.price))

            res.status(200).json(foods)
        } catch (err) {
            next(err)
        }
    }

    //nomor 3
    static async getFoodById(req, res, next) {
        try {
            const food = await Food.findByPk(req.params.id)
            if(!food) {
                throw {name: 'NotFound'}
            } else {
                res.status(200).json(food)
            }
        } catch (err) {
            next(err)
        }
    }
    
    //nomor 4
    static async deleteFoodById(req, res, next) {
        try {
            let id = +req.params.id
            const food  = await Food.findByPk(id)
            if(!food) {
                throw {message: 'NotFound'}
            } else {
                let name = food.name
                Food.destroy({
                    where: {id: id}
                })
                res.status(200).json({message: `${name} has been deleted`, name: name})
            }
        } catch (err) {
            next(err)
        }
    }

    //nomor 5
    static async getCategory(req, res, next) {      
        try {
            const categories = await Category.findAll({
                order: [['id', 'ASC']]
            })
            res.status(200).json(categories)
        } catch (err) {
            next(err)
        }
    }

    //day 2
    //nomor 1
    static async createAdmin(req, res, next) {
        try {
            const {username, email, password, phoneNumber, address} = req.body

            const user = await User.create({
                username : username,
                email: email,
                password : password, //hash via model
                role: 'admin',
                phoneNumber : phoneNumber,
                address : address                
            })

            res.status(201).json({id: user.id, email: user.email})
        } catch(err) {
            next(err)
        }
    }
    
    static async login(req, res, next) {
        try {
            let {email, password} = req.body
            if(!email || !password) {
                throw {name: 'emptyInput'}
            }
            
            const user = await User.findOne({where: {email: email}})
            if(!user) {
                // console.log('error di email')
                throw {name: 'InvalidCredential'}
            } 
            // console.log(user);
            if (await bcrypt.compare(password, user.password)) {
                const token = createToken({userId: user.id, email: email})
                
                req.user = {
                    username: user.username,
                    email: user.email,
                    role: user.role
                }

                // console.log(req.user, '<<<<<<<<<<<<<<<<<<<');
                res.status(200).json({token: token, userId: user.id, role: user.role, username: user.username})
            } else {
                throw {name: 'InvalidCredential'}
            }
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async deleteCategory(req, res) {
        try {
            let id = +req.params.id
            const category = await Category.findByPk(id)
            if(!category) {
                throw {name: 'NotFound'}
            } else {
                let name = category.name
                Category.destroy({
                    where: {id: id}
                })
                console.log(category);
                res.status(200).json({message: `Category ${name} has been deleted`, name: name})
            }
        } catch (err) {
            next(err)
        }
    }

    static async createCategory(req, res, next) {
        try {
            const category = await Category.create({
                name: req.body.name
            })
            res.status(201).json(category)
        } catch (err) {
            next(err)
        }
    }
    
    static async googleLogin(req, res, next) {
        try {
            const client = new OAuth2Client(CLIENT_ID)
            const ticket = await client.verifyIdToken({
                idToken: req.headers.token,
                audience: CLIENT_ID
            })
            const payload = ticket.getPayload()
            console.log(payload)

            //buat user jika belum terdaftar di database
            const [user, created] = await User.findOrCreate({
                where: {email: payload.email},
                defaults: {
                    username: payload.name,
                    password: 'password',
                    email: payload.email,
                    role: 'staff'
                },
                hooks: false
            })

            const token = createToken({userId: user.id, email: user.email})
            res.status(200).json({token: token, userId: user.id, role: user.role, username: user.username, message: 'Logged in with google account'})

        } catch (err) {
            console.log(err, '<<< error login using google')
            next(err)
        }
    }

    //Challange 2 (7)
    static async historyFood(req, res, next) {
        try {
            // console.log(req.user, '<<<<<<<<')
            let id = +req.params.id
            let email = req.user.email

            let status = req.body.status
            let {type} = req.body

            let description

            let food = await Food.findByPk(id)
            if(!food) {
                throw {name: 'NotFound'}
            }

            if(type === 'put') {
                description = `Product with id ${food.id} has been updated`
            } else if(type === 'patch') {
                description = `Product status with id ${food.id} has changed from ${food.status} to ${status}`
            } else if(type === 'post') {
                description = `Product ${food.name} has been created`
            }

            let history = await History.create({
                name:food.name,
                description: description,
                updatedBy: email
            })

            if(type === 'put' || type === 'patch') {
                res.status(200).json({history: history})
            } else {
                res.status(201).json({history: history})
            }
        } catch (err) {
            next(err)
        }
    }

    static async historyCategory(req, res, next) {
        try {
            let id = +req.params.id
            let email = req.user.email
            let {type} = req.body
            let description
            // console.log(type)
            let category = await Category.findByPk(id)
            if(!category) {
                throw ({name: 'NotFound'})
            }

            if(type === 'patch') {
                description = `Category ${category.name} has been updated`
            } else if(type === 'post') {
                description = `Category ${category.name} has been created`
            } else if(type === 'delete') {
                description = `Category ${category.name} has been deleted`
            }
            let history = await History.create({
                name: category.name,
                description: description,
                updatedBy: email
            })
            
            if(type === 'patch') {
                res.status(200).json({history: history})
            } else {
                res.status(201).json({history: history})
            }
        } catch (err) {
            next(err)
        }
    }

    static async putFood(req, res, next) {
        try {
            let id = +req.params.id
            // console.log(id);
            let {name, description, price, imgUrl, authorId, categoryId} = req.body

            // console.log(name, description, price, imgUrl, authorId, categoryId);

            if(!name || !description || !price || !imgUrl || !authorId || !categoryId) {
                throw {name: `incompleteInput`}
            }
            let food = await Food.findByPk(id)
            if(!food) {
                throw ({name: 'NotFound'})
            }
            // console.log(food);
            let updatedFood = await food.update({
                name: name,
                description: description,
                price: price,
                imgUrl: imgUrl,
                authorId: authorId,
                categoryId: categoryId
            })

            res.status(200).json(updatedFood)
        } catch (err) {
            next(err)
        }
    }

    static async patchCategory(req, res, next) {
        try {
            let id = req.params.id
            let {name} = req.body
            if(!name) {
                throw {name: 'incompleteInput'}
            }
            let category = await Category.findByPk(id)
            if(!category) {
                throw {name: 'NotFound'}
            }
            let updatedCategory = await category.update({
                name: name
            })
            res.status(201).json(updatedCategory)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async patchFood(req, res, next) {
        try {
            let id = req.params.id
            let {status} = req.body
            
            let food = await Food.findByPk(id)
            if(!food) {
                throw ({name: 'NotFound'})
            }
            let updatedStatus = await food.update({
                status: status
            })
            console.log(updatedStatus);
            res.status(201).json(updatedStatus)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getHistory(req, res, next) {
        try {
            let history = await History.findAll({
                order: [['createdAt', 'ASC']]
            })
            // console.log(history);
            let historyFormatted = history.map(el => {
                el.dataValues.formattedTime = timeSetter(el.createdAt)
                return el
            })
            // console.log(historyFormatted);
            res.status(200).json(historyFormatted)
        } catch (err) {
            next(err)
        }
    }

    static async getCategoryById(req, res, next) {
        try {
            const category = await Category.findByPk(req.params.id)
            if(!category) {
                console.log(category);
                throw {name: 'NotFound'}
            } else {
                // console.log('masuk', '<<<<<<') 
                res.status(200).json(category)
            }
        } catch (err) {
            next(err)
        }
    }


    //Challange 3 (7)
    static async customerLogin(req, res, next) {
        try {
            let {email, password} = req.body
            if(!email || !password) {
                throw {name: 'emptyInput'}
            }

            const customer = await User.findOne({where: {email: email}})
            if(!customer) {
                throw {name: 'InvalidCredential'}
            } 
            // console.log(customer);
            const compared = bcrypt.compareSync(password, customer.password)

            if (compared) {
                const token = createToken({userId: customer.id, email: email})
                
                req.customer = {
                    email: customer.email,
                    role: customer.role
                }

                // console.log(req.user, '<<<<<<<<<<<<<<<<<<<');
                res.status(200).json({token: token, userId: customer.id, role: customer.role, username: customer.username})
            } else {
                throw {name: 'InvalidCredential'}
            }
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async customerRegister(req, res, next) {
        try {
            const {username, email, password, phoneNumber, address} = req.body

            const user = await User.create({
                username : username,
                email: email,
                password : password, //hash via model
                role: 'customer',
                phoneNumber : phoneNumber,
                address : address                
            })

            res.status(201).json({id: user.id, email: user.email})
        } catch(err) {
            next(err)
        }
    }

    static async customerGetFood(req, res, next) {      
        try {
            let {page} = req.query
            let {search} = req.query
            let {minPrice, maxPrice} = req.query
            // console.log(search, '<<<')
            // console.log(maxPrice), '<<<';
            // console.log(page), '<<<';
            // console.log(minPrice, maxPrice), '<<<';
            let input = {
                include: 'Category',
                order: [['id', 'ASC']],
                where: {status: 'active'}
            }

            if(page) {
                input.offset = (page - 1) * 9
                input.limit = 9
            }

            if(minPrice && maxPrice) {
                input.where.price = {[Op.between]: [minPrice, maxPrice]}
                
            } else if(minPrice) {
                input.where.price = {[Op.gte]: minPrice}
                
            } else if(maxPrice) {
                input.where.price = {[Op.lte]: maxPrice}
                
            }

            if(search) {
                input.where.name = {[Op.iLike]: `%${search}%`}
            }
            // console.log((input), 'OOO');

            const foods = await Food.findAndCountAll(input)
            foods.rows.forEach(el => {
                el.price = currency(el.price)
                el.createdAt = timeSetter(el.createdAt)
            })

            // console.log(foods, '+++++');

            res.status(200).json(foods)
        } catch (err) {
            console.log(err, '<<<<<<<<<<<< YO,')
            next(err)
        }
    }

    static async customerGetFoodById(req, res, next) {
        try {
            // console.log(req.params.id, 'PPP');
            let food = await Food.findByPk(req.params.id, {
                include: Category
            })
            if(!food) {
                throw {name: 'NotFound'}
            } else {
                food.price = currency(food.price)
                food.dataValues.formattedTime = timeSetter(food.createdAt)
                // console.log(food)
                // console.log(food)
                res.status(200).json(food)
            }
        } catch (err) {
            next(err)
        }
    }

    static async createQR(req, res, next) {
        try {
            let foodId = req.params.id
            let { data } = await axios({
                method: 'POST',
                url: `https://api.qr-code-generator.com/v1/create?access-token=${process.env.TOKEN_QR}`,
                data: {
                    "frame_name": "no-frame",
                    "qr_code_text": `https://challange3-69d2a.web.app/${foodId}`,
                    "image_format": "SVG",
                    "background_color": "#ffffff",
                    "foreground_color": "#fa6e79",
                    "marker_right_inner_color": "#2d7cda",
                    "marker_right_outer_color": "#00bfff",
                    "marker_left_template": "version13",
                    "marker_right_template": "version13",
                    "marker_bottom_template": "version13"
                }
            })
            console.log(data, 'QR+++++')
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getFavorite(req, res, next) {
        // console.log('MKOL')
        try {
            let {UserId} = req.params
            if(!UserId) {
                throw {name: 'EmptyUserId'}
            } 

            let favorite = await Favorite.findAll({
                where: {UserId: UserId},
                include: [{
                    model: Food,
                    include: Category
                }]
            })
            if(!favorite) {
                throw {name: 'NotFound'}
            } 
            console.log(favorite, '--++--++');
            favorite.forEach(el => el.Food.price = currency(el.Food.price))
            res.status(200).json(favorite)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async postFavorite(req, res, next) {
        try {
            // console.log('MASUK KE POST FAV');
            let {UserId, FoodId} = req.params
            if(!UserId) {
                throw {name: 'EmptyUserId'}
            } else if(!FoodId) {
                throw {name: 'EmptyFoodId'}
            }

            let food = await Food.findByPk(FoodId)
            if(!food) {
                throw {name: 'NotFound'}
            }

            let [favorite, created] = await Favorite.findOrCreate({
                where: {
                    UserId: UserId,
                    FoodId: FoodId
                }, 
                default: {
                    UserId: UserId,
                    FoodId: FoodId
                }
            })

            if(!created) {
                throw {name: 'DuplicateRecord'}
            }

            res.status(201).json(favorite)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async googleLoginCustomer(req, res, next) {
        try {
            const client = new OAuth2Client(CLIENT_ID)
            const ticket = await client.verifyIdToken({
                idToken: req.headers.token,
                audience: CLIENT_ID
            })
            const payload = ticket.getPayload()
            console.log(payload)

            //buat user jika belum terdaftar di database
            const [user, created] = await User.findOrCreate({
                where: {email: payload.email},
                defaults: {
                    username: payload.name,
                    password: 'password',
                    email: payload.email,
                    role: 'customer'
                },
                hooks: false
            })

            const token = createToken({userId: user.id, email: user.email})
            res.status(200).json({token: token, userId: user.id, role: user.role, username: user.username, message: 'Logged in with google account'})

        } catch (err) {
            console.log(err, '<<< error login using google')
            next(err)
        }
    }




    //kelebihan
    static async getUserById(req, res, next) {
        try {
            const user = await User.findByPk(+req.body.id)
            user.password = 'hidden'
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }

    static async getUser(req, res, next) {      
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (err) {
            next(err)
        }
    }
    
    
}

module.exports = Controller