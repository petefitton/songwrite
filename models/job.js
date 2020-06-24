'use strict';
module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define('job', {
    level: {
      type: DataTypes.INTEGER,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    weeklyIncome: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  job.associate = function(models) {
    // associations can be defined here
    models.job.hasMany(models.user)
  };
  return job;
};