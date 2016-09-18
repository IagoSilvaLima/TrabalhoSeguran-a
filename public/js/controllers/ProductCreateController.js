function productCreateController($state,serviceRest){
    var vm = this;
    vm.product = {};
    vm.categories = [];

    vm.save = save;

    loadCategories();

    function save(){
        serviceRest.post('/produto',vm.product)
            .then(function(resource){
                $state.go('Produtos');
            }).catch(function(err){
                alert(err);
            })
    }

    function loadCategories(){
        serviceRest.list('/categoria')
            .then(function(resource){
                vm.categories = resource.data;
            }).catch(function(err){
                alert(err);
            });
    }
}

angular.module('Ecommmerce').controller('productCreateController',productCreateController);