function productListController(serviceRest){
    var vm = this;
    vm.products = [];

    serviceRest.list('/produto')
        .then(function(data){
            vm.products = data.data;
        }).catch(function(err){
            alert("Erro "+ err);
        });
};


angular.module('Ecommmerce').controller('productListController',productListController);