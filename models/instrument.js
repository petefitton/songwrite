'use strict';
module.exports = (sequelize, DataTypes) => {
  const instrument = sequelize.define('instrument', {
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
    slots: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    skill: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  instrument.associate = function(models) {
    // associations can be defined here
    models.instrument.belongsTo(models.user)
  };
  return instrument;
};