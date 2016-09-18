module.exports = function(app){
    var sequelize = app.config.database;
    sequelize.sync({}).then(function(){
        console.log
    }).catch(function(err){

    });
};