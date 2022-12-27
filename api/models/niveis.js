'use strict';
module.exports = (sequelize, DataTypes) => {
  const niveis = sequelize.define('niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  niveis.associate = function(models) {
    // associations can be defined here
  };
  return niveis;
};