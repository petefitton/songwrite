'use strict';
module.exports = (sequelize, DataTypes) => {
  const achievement = sequelize.define('achievement', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  achievement.associate = function(models) {
    // associations can be defined here
    models.achievement.belongsToMany(models.user, {through: "achievementsUsers"})
  };
  return achievement;
};