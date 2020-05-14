'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Word extends Model { }
  
  Word.init({
    kalimat: DataTypes.STRING
  }, { sequelize });
  Word.associate = function(models) {
    // associations can be defined here
  };
  return Word;
};