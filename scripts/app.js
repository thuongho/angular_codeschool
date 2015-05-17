(function() {

  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Emerald',
    price: 4.80,
    description: 'greeen as a lime'
  };

}());