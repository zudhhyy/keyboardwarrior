'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Game extends Model {

  }

  Game.init ({
    is_started: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          msg: 'Is_Started cannot be empty'
        }
      }
    },
    player_count: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Player_Count cannot be empty'
        }
      }
    },
  }, {sequelize});

  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};