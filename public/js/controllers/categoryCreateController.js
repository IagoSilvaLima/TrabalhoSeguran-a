function categoryCreateController($state,serviceRest){
    var vm = this;
    vm.category = {}
    vm.save = save;
    function save(){
        serviceRest.post('/categoria',vm.category)
            .then(function(category){
                console.log(category);
                $state.go('Categorias')
            }).catch(function(err){
                console.log(err);
            })
    }
};

angular.module('Ecommmerce').controller('categoryCreateController',categoryCreateController);