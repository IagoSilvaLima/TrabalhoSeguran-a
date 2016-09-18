module.exports = function(app){
    var Product = app.models.product;
    var Categoy = app.models.category;

    app.get('/produto',function(req,res){
        Product.findAll({include:[
            {model : Categoy }
        ]})
            .then(function(products){
                res.json({status : true,data : products})
            })
            .catch(function(err){
                res.json({status : false,data :[]});
            });
    });

    app.post('/produto',function(req,res){
        var product = Product.build(req.body);
        product.save()
            .then(function(product){
                res.json({status : true,data : product})
            }).catch(function(err){
                res.json({status : false,data : err})
            });
    });
};