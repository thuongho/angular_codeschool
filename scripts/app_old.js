(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function($scope){
    $scope.products = gems;
  });

  app.controller('PanelController', function($scope){
    $scope.tab = 1;

    $scope.setTab = function(tab){
      $scope.tab = tab;
    };

    $scope.isSet = function(tab){
      return $scope.tab === tab;
    };
  });

  var gems = [
              { 
                name: 'Azurite', 
                price: 110.50,
                canPurchase: false,
                soldOut: true,
                cuts: []
              },
              { 
                name: 'Bloodstone', 
                price: 5.95 ,
                canPurchase: true,
                soldOut: false,
                cuts: [1, 2]
              },
              { 
                name: 'Zircon', 
                price: 3.95,
                canPurchase: true,
                soldOut: false,
                cuts: [1,4] 
              }
            ];
})();

