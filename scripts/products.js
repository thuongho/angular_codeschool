(function(){
  var app = angular.module('store-directives', []);

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-gallery.html',
      controller: function(){
        this.current = 0;

        this.setCurrent = function(newVal) {
          if (newVal){
            this.current = newVal;
          }
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-description.html'
    };
  });

  app.directive('productSpecs', function(){
    return {
      restrict: 'A',
      templateUrl: 'views/product-specs.html'
    };
  });

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
}());