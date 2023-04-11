'use strict'
const {crypt} = require('../helpers/helper')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Food,  {foreignKey: 'authorId'})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exist'
      },
      validate: {
        notEmpty: {msg: 'Username can not be empty'},
        notNull: {msg: 'Username can not be empty'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email already used'},
      validate: {
        notEmpty: {msg: 'Email can not be empty'},
        notNull: {msg: 'Email can not be empty'},
        isEmail: {args: true, msg:'Email format is not recognized'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password can not be empty'},
        notNull: {msg: 'Password can not be empty'},
        len: {
          args: [5, Infinity],
          msg: 'Password length must be at least 5 characters'
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = crypt(User.password)
        // User.name = User.name + 'OK'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};