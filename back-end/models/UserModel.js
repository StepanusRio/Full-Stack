// Berisi struktur tabel
import {Sequelize} from 'sequelize';
import db from '../config/database.js';

const {DataTypes} = Sequelize
const User = db.define('user',{
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
},{
    freezeTableName: true,
});

export default User;

// Asyncronous function
(async () => {
    await db.sync();
})();