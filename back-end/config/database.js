import sequelize from "sequelize";
const db = new sequelize("sia_nodejs", "Admin", "5etVi-ZSYBrs5E)2", {
    host: "localhost",
    dialect: "mysql",
});

export default db;