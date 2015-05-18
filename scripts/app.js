(function() {

  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    // this.product = gem;
    this.products = gems;
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(newVal) {
      if (newVal){
        this.current = newVal;
      }
    };

    // this.setCurrent = function(newVal) {
    //   if (newVal !== null){
    //     this.current = newVal;
    //   } else {
    //     this.current = 0;
    //   }
    // };
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

  app.controller('ReviewController', function(){
    this.review = {};

    this.placeReview = function(product){
      // add timestamp for review creation
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-description.html'
    };
  });

  // attribute directive
  app.directive('productSpecs', function(){
    return {
      restrict: 'A',
      templateUrl: 'views/product-specs.html'
    };
  });

  // this controller is now combined with the productTabs directive
  // app.controller('PanelController', function(){
  //   // ng-init="tab = 1"
  //   this.tab = 1;
  //   // create a function to set the tab
  //   // assign to ng-click panel.selectTab(number)
  //   this.setTab = function(newValue){
  //     this.tab = newValue;
  //   };

  //   // create a function to compare the select tab
  //   this.isSelected = function(tabValue){
  //     return this.tab === tabValue;
  //   };
  // });

  // element directive with panel controller
  app.directive('productTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-tabs.html',
      // add PanelController to this directive
      controller: function(){
        this.tab = 1;
        this.setTab = function(newValue){
          this.tab = newValue;
        };
        this.isSelected = function(tabValue){
          return this.tab === tabValue;
        };
      },
      // give alias
      controllerAs: 'panel'
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
      shine: 8,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      description: 'greeen as a lime',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/emerald.png"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Ruby',
      price: 3.60,
      shine: 5,
      rarity: 7,
      color: '#CCE',
      faces: 6,
      description: 'Red as blood',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/ruby.png"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    { 
      name: 'Azurite', 
      price: 2.95,
      shine: 3,
      rarity: 9,
      color: '#CFC',
      faces: 10,
      description: 'Blue Rock',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/azurite.png"
      ],
      reviews: [{
        stars: 1,
        body: "Out of this world!",
        author: "gemcollector1923@jeve.com",
        createdOn: 1397490980837
      }] 
    },
    { 
      name: 'Bloodstone', 
      price: 5.95,
      shine: 2,
      rarity: 10,
      color: '#FFF',
      faces: 13,
      description: 'Formed from the blood of a sorcerer',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/bloodstone.png"
      ],
      reviews: [{
        stars: 1,
        body: "Never seen anything this miraculous.",
        author: "geewiz@spotty.org",
        createdOn: 1397490980837
      }] 
    },
    { 
      name: 'Zircon', 
      price: 3.95,
      shine: 9,
      rarity: 8,
      color: '#FCC',
      faces: 4,
      description: 'Diamond troll',
      canPurchase: true,
      isSoldOut: false,
      images: [
        "images/zircon.png"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }] 
    }
  ];

}());