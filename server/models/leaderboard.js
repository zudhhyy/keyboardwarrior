'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Leaderboard extends Model {

  }
  
  Leaderboard.init({
    username: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate: (user, options) => {
        user.username += ` #${user.id}` 
      }
    },
    sequelize
  });

  Leaderboard.associate = function(models) {
    
  };
  return Leaderboard;
};