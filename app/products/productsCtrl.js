(function(){
    
    angular.module("products").controller("productsCtrl", ["productsSvc", "$scope", "$rootScope",  productsCtrl]);
    
    function productsCtrl(productsSvc, $scope, $rootScope){
        
        var pm = this;
        $scope.extra = 5;
        
        $scope.addProductToCart = function(data){
            $scope.selectedProduct = data;
            $rootScope.$broadcast("ADD-ITEM-TO-CART");
        }
        
        productsSvc.getProducts().then(function(response){
            
          // pm.myProducts = response; 
            
            $scope.myProducts = response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        $scope.showMore = function(){
            $scope.extra += 5;
        }
    }
    
})();