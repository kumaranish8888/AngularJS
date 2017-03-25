(function(){
    
    angular.module("products").controller("productsCtrl", ["productsSvc", "$scope", "$rootScope",  productsCtrl]);
    
    function productsCtrl(productsSvc, $scope, $rootScope){
        
        var pm = this;
        $scope.extra = 10;
        $scope.priceCriteria="Price";
        $scope.modelCriteria="Model";
        $scope.indexCriteria="index";
        
        $scope.addProductToCart = function(data){
            $scope.selectedProduct = data;
            $rootScope.$broadcast("ADD-ITEM-TO-CART");
        }
        
        productsSvc.getProducts().then(function(response){
            
            $scope.myProducts = response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        $scope.sortByPrice = function(){
            if($scope.priceCriteria=="Price"){
                $scope.priceCriteria="-Price"; 
            }else{
                $scope.priceCriteria="Price"; 
            }
        }; 
        
        $scope.sortByModel=function(){
            if($scope.modelCriteria=="Model"){
                $scope.modelCriteria="-Model"
            }else{
                $scope.modelCriteria="Model"
            }
        };
        
        $scope.sortByIndex=function(){
            if($scope.indexCriteria=="index"){
                $scope.indexCriteria="-index";
            }else{
                $scope.indexCriteria="index";
            }
        }
        
        $scope.showMore = function(){
            $scope.extra += 10;
        }
    }
    
})();