'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.User, {foreignKey: 'authorId'})
      Food.belongsTo(models.Category, {foreignKey: 'categoryId'})
      Food.hasMany(models.Favorite)
    }
  }
  Food.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Name can not be empty'},
        notNull: {msg: 'Name can not be empty'}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Description can not be empty'},
        notNull: {msg: 'Description can not be empty'}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Price can not be empty'},
        notNull: {msg: 'Price can not be empty'},
        min: {args: 25000, msg: `Price must be at least Rp25.000`},
        isInt: {
          args: true,
          msg: 'Price must be number'
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Image URL can not be empty'},
        notNull: {msg: 'Image URL can not be empty'},
        isUrl: {
          args: true,
          msg: 'URL is not valid'
        }
      }
    },
    authorId: DataTypes.INTEGER,
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Please select food category'},
        notNull: {msg: 'Please select food category'}
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Food',
  });
  Food.addHook('beforeCreate', (Food, options) => {
    Food.status = 'active';
  })
  return Food;
};