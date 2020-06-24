'use strict';
module.exports = (sequelize, DataTypes) => {
  const bedroom = sequelize.define('bedroom', {
    size: {
      type: DataTypes.INTEGER,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    weeklyRent: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    slots: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  bedroom.associate = function(models) {
    // associations can be defined here
    models.bedroom.hasMany(models.user)
  };
  return bedroom;
};