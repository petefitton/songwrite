'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    value: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    released: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  song.associate = function(models) {
    // associations can be defined here
    models.song.belongsTo(models.user)
  };
  return song;
};