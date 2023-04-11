'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.Food)
      Favorite.belongsTo(models.User)
    }
  }
  Favorite.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'User ID can not be empty'},
        notNull: {msg: 'User ID can not be null'}
      }
    },
    FoodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Food ID can not be empty'},
        notNull: {msg: 'Food ID can not be null'}
      }
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};