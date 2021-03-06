'use strict';

module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define(
    'Todo',
    {
      text: DataTypes.STRING,
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      UserId: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Todo.belongsTo(models.User);
        }
      }
    }
  );
  return Todo;
};
