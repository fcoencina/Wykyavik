
// Importar los modelos
const User = require("../models/User");
const Post = require('../models/Post');

// Definir la relación "One-to-Many"
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// Definir la relación "Many-to-Many"
User.belongsToMany(User, { as: 'Followers', through: 'UserFollowers', foreignKey: 'userId' });
User.belongsToMany(User, { as: 'Following', through: 'UserFollowers', foreignKey: 'followerId' });

/*
Sequelize generará automáticamente los siguientes métodos para cada
modelo User:

    getFollowers(): Devuelve una lista de usuarios que siguen al
    usuario actual (los que tienen userId igual al ID del usuario
    actual).

    addFollowers(): Añade un usuario a la lista de seguidores del
    usuario actual.

    removeFollowers(): Elimina un usuario de la lista de seguidores
    del usuario actual.

    getFollowing(): Devuelve una lista de usuarios a los que el
    usuario actual sigue (los que tienen followerId igual al ID del
    usuario actual).

    addFollowing(): Añade un usuario a la lista de usuarios seguidos
    por el usuario actual.

    removeFollowing(): Elimina un usuario de la lista de usuarios
    seguidos por el usuario actual.
*/
