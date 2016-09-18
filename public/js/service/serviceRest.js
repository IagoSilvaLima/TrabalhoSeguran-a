function serviceRest($resource){
    this.post = post;
    this.list = list;
    

    function post(nameResource,model){
        return $resource(nameResource).save(model).$promise;
    }

    function list(nameResource){
        return $resource(nameResource).get().$promise;
    }
}

angular.module('Ecommmerce').service('serviceRest',serviceRest);