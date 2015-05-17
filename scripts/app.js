(function() {

  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    // this.product = gem;
    this.products = gems;
  });

  var gem = {
    name: 'Emerald',
    price: 4.80,
    description: 'greeen as a lime',
    canPurchase: true,
    isSoldOut: false
  };

  var gems = [
    {
      name: 'Emerald',
      price: 4.80,
      description: 'greeen as a lime',
      canPurchase: true,
      isSoldOut: false
    },
    {
      name: 'Ruby',
      price: 3.60,
      description: 'Red as blood',
      canPurchase: true,
      isSoldOut: false
    },
    { 
      name: 'Azurite', 
      price: 2.95,
      description: 'Blue Rock',
      canPurchase: true,
      isSoldOut: false 
    },
    { 
      name: 'Bloodstone', 
      price: 5.95,
      description: 'Formed from the blood of a sorcerer',
      canPurchase: true,
      isSoldOut: false 
    },
    { 
      name: 'Zircon', 
      price: 3.95,
      description: 'Diamond troll',
      canPurchase: true,
      isSoldOut: false 
    }
  ];

}());