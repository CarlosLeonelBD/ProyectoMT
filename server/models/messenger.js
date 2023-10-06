"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Messenger extends Model {
    static associate({ Converstation, User }) {
      Messenger.belongsTo(User, { foreignKey: "senderId" });
      Messenger.belongsTo(User, { foreignKey: "receiverId" });
    }
  }
  Messenger.init(
    {
      senderId: DataTypes.INTEGER,
      receiverId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      idConverstation: DataTypes.INTEGER,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Messenger",
    }
  );
  return Messenger;
};
