'use strict';
module.exports = (sequelize, DataTypes) => {
  const achievementsUsers = sequelize.define('achievementsUsers', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    achievementId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  achievementsUsers.associate = function(models) {
    // associations can be defined here
  };
  return achievementsUsers;
};