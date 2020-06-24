'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    bedroomId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        len: {
          args: [1, 50],
          msg: 'Name must be between 1 and 50 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: {
          args: [8, 99],
          msg: 'Password must be between 8 and 99 characters'
        }
      }
    },
    savings: DataTypes.INTEGER,
    fans: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(newUser, options) {
        if (newUser && newUser.password) {
          let hash = bcrypt.hashSync(newUser.password, 12)
          newUser.password = hash
        }
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
    models.user.belongsTo(models.bedroom)
    models.user.belongsTo(models.job)
    models.user.hasMany(models.instrument)
    models.user.hasMany(models.song)
    models.user.belongsToMany(models.achievement, { through: "achievementsUsers" })
  };

  user.prototype.validPassword = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
  }

  user.prototype.toJSON = function() {
    let userData = this.get()
    delete userData.password
    return userData
  }

  return user;
};