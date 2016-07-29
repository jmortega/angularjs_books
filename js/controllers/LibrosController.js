app.controller('LibrosController', ['$scope','LibrosService', 'CompraService','$timeout',

function ($scope, LibrosService, CompraService,$timeout) {
    $scope.productos = [];
    
    $scope.comprar = function (p) {
        var product = CompraService.agregarProducto(p);
		if (product){
			$scope.nuevoProducto = true;
			$scope.nombreLibro = p.producto;
		}else{
			$scope.nuevoProducto =false;
		}
		$timeout( function(){ $scope.callAtTimeout(); }, 3000);
    }
    
    $scope.formatoMoneda = function(valor){
        var valor = parseFloat(valor);
        return  Math.floor(valor) + "." + (valor * 100) % 100;
    }
    
	$scope.callAtTimeout = function() {
		$scope.nuevoProducto =false;
    }
	
    LibrosService.success(function(data){
        $scope.productos = data;
    });
	
	
}]);

app.filter('formatoMoneda', function() {
    return function(input) {
      var out = "";
      var valor = parseFloat(input);
      out = Math.floor(valor) + "." + ((valor * 100) % 100 + '00').substr(0,2);
      return out;
    }
  });

app.
  directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: [ "$scope", function($scope) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
		
		
        this.addPane = function(pane) {
          if (panes.length == 0){
			$scope.select(pane);
		  };
          panes.push(pane);
        }
      }],
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  });

app.
  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })