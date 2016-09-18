var Sequelize = require('sequelize');
var sequelize = new Sequelize('Ecommerce','root','',{
    host : 'localhost',
    port : 3306,
    dialect : 'mysql'
});


sequelize.authenticate()
    .then(function(){
        console.log('banco conectado')
    }).catch(function(err){
        console.log('Erro =>',err);
});

sequelize.sync({})
    .then(function(){
        console.log('configurações aplicadas')
    }).catch(function(err){
        console.log("Erro =>",err)
});

module.exports = sequelize;

