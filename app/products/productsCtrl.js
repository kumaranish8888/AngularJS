(function(){
    
    angular.module("products").controller("productsCtrl", ["productsSvc", "$scope", "$rootScope",  productsCtrl]);
    
    function productsCtrl(productsSvc, $scope, $rootScope){
        
        var pm = this;
        
        pm.addProductToCart = function(data){
            $rootScope.$broadcast("ADD-ITEM-TO-CART");
        }
        
        productsSvc.getProducts().then(function(response){
            
          // pm.myProducts = response; 
            
            pm.myProducts = response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
    }
    
})();