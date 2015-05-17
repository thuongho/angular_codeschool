(function() {

  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    // this.product = gem;
    this.products = gems;
  });

  app.controller('PanelController', function(){
    // ng-init="tab = 1"
    this.tab = 1;
    // create a function to set the tab
    // assign to ng-click panel.selectTab(number)
    this.setTab = function(newValue){
      this.tab = newValue;
    };

    // create a function to compare the select tab
    this.isSelected = function(tabValue){
      return this.tab === tabValue;
    };

  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
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
      isSoldOut: false,
      images: [
        "images/emerald.png"
      ]
    },
    {
      name: 'Ruby',
      price: 3.60,
      description: 'Red as blood',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/ruby.png"
      ]
    },
    { 
      name: 'Azurite', 
      price: 2.95,
      description: 'Blue Rock',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/azurite.png"
      ] 
    },
    { 
      name: 'Bloodstone', 
      price: 5.95,
      description: 'Formed from the blood of a sorcerer',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/bloodstone.png"
      ] 
    },
    { 
      name: 'Zircon', 
      price: 3.95,
      description: 'Diamond troll',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/zircon.png"
      ] 
    }
  ];

}());