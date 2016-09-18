module.exports = function(app){
    var Sequelize = require('Sequelize');
    var sequelize = app.config.database;
    var Category = app.models.category;
    var Product =  sequelize.define('produto',{
        codeProduct :{
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        name :{
            type : Sequelize.STRING,
            allowNull : false
        }
        ,price:{
            type : Sequelize.DOUBLE,
            allowNull : false
        }
    });
    Product.belongsTo(Category,{foreignKey:{allowNull : false}});
    return Product;
}