'use strict';
module.exports = (sequelize, DataTypes) => {
  var Postpraise = sequelize.define('Postpraise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  });
  return Postpraise;
};

// Make sure you complete other models fields