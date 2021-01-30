//'use strict';
//module.exports = (sequelize, DataTypes) => {
  //var User = sequelize.define('User', {
    //username: DataTypes.STRING
  //});

  //User.associate = function(models) {
    //models.User.hasMany(models.Task);
  //};

  //return User;
//};


'use strict';
module.exports = (sequelize, DataTypes) => {
  var userpraises = sequelize.define('userpraises', {
    id: {
      type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
    },
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
    }},
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        // is: ["^[a-z]+$",'i'],
      }
    },
    created_dt: DataTypes.DATE,
  });

  return userpraises;
};
 