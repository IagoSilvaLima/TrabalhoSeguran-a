angular.module('Ecommmerce',['ui.router','ngResource']);


angular.module('Ecommmerce').config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/inicio');


    $stateProvider.state("Inicial",{
            url : "/inicio",
            templateUrl : "views/Inicio.html"
        }).state("Categoria",{
            url : "/categoria",
            templateUrl : "Views/CategoriasForm.html",
            controller : 'categoryCreateController',
            controllerAs : 'vm'
        }).state("Categorias",{
            url : "/categorias",
            controller : 'categoryListController',
            controllerAs : 'vm',
            templateUrl : "views/Categorias.html"
        }).state("Produto",{
            url : "/produto",
            templateUrl : "views/ProdutoForm.html",
            controller : 'productCreateController',
            controllerAs : 'vm'
        }).state("Produtos",{
            url : "/produtos",
            templateUrl : "views/Produtos.html",
            controller : 'productListController',
            controllerAs : 'vm'
        });
});

angular.module("Ecommmerce").run(function($rootScope,$state){
   $state.go("Inicial"); 
});