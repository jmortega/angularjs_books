app.controller('ContactoController', ['$scope','$http',controladorPrincipal]);

function controladorPrincipal($scope,$http){

        //inicializar datos del formulario
        $scope.datos = {};
		$scope.nombre = '';
		$scope.apellidos = '';
		$scope.email = '';
		$scope.mensaje = '';
		
		//realizar peticion post http al script datos_contacto.php
        $scope.enviar = function(){
          $http.post("datos_contacto.php", $scope.datos)
            .success(function(result){
              console.log(result);
			  $scope.nombre = result['nombre'];
			  $scope.apellidos = result['apellidos'];
			  $scope.email = result['email'];
			  $scope.mensaje = result['mensaje'];
            })
			.error(function(err){
				return err;
			});
			  
        }    
    }