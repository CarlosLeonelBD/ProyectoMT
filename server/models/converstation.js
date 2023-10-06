"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Converstation extends Model {
    static associate({ Messenger, User }) {
    }
  }
  Converstation.init(
    {
      user1Id: DataTypes.STRING,
      user2Id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Converstation",
    }
  );
  return Converstation;
};
