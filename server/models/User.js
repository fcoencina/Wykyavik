
const { DataTypes } = require('sequelize');
const { sequelize } = require('../bd/db');

// Definición del modelo
const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
}/*, {
  tableName: 'usuarios' // Nombre personalizado de la tabla
  timestamps: false, // Deshabilitar los atributos createdAt y updatedAt
}*/
);

module.exports = User;
