module.exports = function(app){
    var Sequelize = require('sequelize');
    var sequelize = app.config.database;
    return  sequelize.define('categoria', {
    codeCategory :{
        type :Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description :{
        type : Sequelize.STRING,
        allowNull : false
    }
});
    
}
 

