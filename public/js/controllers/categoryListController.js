function categoryListController(serviceRest){
    var vm = this;
    this.message = 'iagos'
    vm.categories = [];

    serviceRest.list('/categoria')
        .then(function(data){
            vm.categories = data.data;
        }).catch(function(err){
            alert("Erro "+ err);
        });
};


angular.module('Ecommmerce').controller('categoryListController',categoryListController);