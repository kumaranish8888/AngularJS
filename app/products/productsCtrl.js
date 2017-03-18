(function(){
    
    angular.module("products").controller("productsCtrl", ["productsSvc", productsCtrl]);
    
    function productsCtrl(productsSvc){
        
        var pm = this;
        
        productsSvc.getProducts().then(function(response){
            
           pm.myProducts = response; 
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
    }
    
})();