'use strict';
module.exports = (sequelize, DataTypes) => {
  const matriculas = sequelize.define('matriculas', {
    status: DataTypes.STRING
  }, {});
  matriculas.associate = function(models) {
    // associations can be defined here
  };
  return matriculas;
};