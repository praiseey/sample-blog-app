'use strict';
module.exports = (sequelize, DataTypes) => {
  var authorPraise = sequelize.define('authorPraise', {
    id: {
      type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
    }},
  });

  return authorPraise;
};
 