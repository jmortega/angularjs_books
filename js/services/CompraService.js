app.factory('CompraService', ['$http', function($http){
    var servicio = {};
    
    servicio.compra = [];
    
    var filtrar = function(id){
        for (var i = 0; i < servicio.compra.length; i++) {
            if (servicio.compra[i].producto.id == id) {
                return servicio.compra[i];
            }
        };
        return null;
    };
    
    servicio.agregarProducto = function(product){
        var itemActual = filtrar(product.id);

        if (!itemActual) {
            servicio.compra.push({
                producto: product,
                cantidad: 1
            });
			nuevoProducto = true;
			
        } else {
            itemActual.cantidad++;
			nuevoProducto = false;
			
        }
        
		return nuevoProducto;
    };
    
    servicio.eliminar = function(item){
        servicio.compra.splice(servicio.compra.indexOf(item),1);
		
    };
    
    return servicio;
}]);