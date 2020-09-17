'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models, {
      //   foreignKey: 'username',
      // })
      // models.belongsTo(this)
    }
  }
  Player.init(
    {
      player: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'Players',
    }
  )
  // Player.associate(models.PlayerLog)
  return Player
}
