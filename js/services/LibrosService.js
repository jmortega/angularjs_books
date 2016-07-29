app.factory('LibrosService',['$http',function($http){
    return $http.get("json/libros.json")
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);