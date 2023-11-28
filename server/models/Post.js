
const { DataTypes } = require('sequelize');
const { sequelize } = require('../bd/db');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    subtitle: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    // Almacena la URL de la imagen
    // Puede ser nulo si no se proporciona una imagen
    imageUrl: { type: DataTypes.STRING, allowNull: true}
});

module.exports = Post;
