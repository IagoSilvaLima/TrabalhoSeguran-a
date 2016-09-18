module.exports = function(app){
    var Category = app.models.category;
    app.get('/categoria',function(req,res){
        Category.findAll()
            .then(function(categories){
                res.json({status : true,data : categories})
            }).catch(function(err){
                res.json({status : false,data : []})
            });
    });

    app.post('/categoria',function(req,res){
        var category = Category.build(req.body);
        category.save()
            .then(function(category){  
                res.json({status : true,data : category})
            }).catch(function(err){
                res.json({status : false,data : {err}})
            });
    });
}