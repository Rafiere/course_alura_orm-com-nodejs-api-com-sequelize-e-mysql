'use strict';
module.exports = (sequelize, DataTypes) => {
  const turma = sequelize.define('turma', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  turma.associate = function(models) {
    // associations can be defined here
  };
  return turma;
};