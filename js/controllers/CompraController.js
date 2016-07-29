app.controller('CompraController', ['$scope', 'CompraService','$timeout',

function ($scope,CompraService,$timeout) {
    $scope.compra = [];
    
    CompraService.compra = $scope.compra;
    
    $scope.precioTotal = function(){
        var total = 0;
        angular.forEach($scope.compra, function(item){
            total = total + (item.cantidad * item.producto.precio);
        });
        
        return total;
    };
    
    $scope.eliminar = function(item){
        CompraService.eliminar(item);
		$scope.eliminadoProducto = true;
		$scope.nombreLibro = item.producto.producto;
		$timeout( function(){ $scope.callAtTimeout(); }, 3000);
    };
	
	$scope.callAtTimeout = function() {
		$scope.eliminadoProducto =false;
    }
    
}]);