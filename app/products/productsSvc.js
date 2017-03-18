(function(){
    
    angular.module("products").service("productsSvc", ["$http", "$q", productsSvc]);
    
    function productsSvc($http, $q){
        
        var ps = this;
        
        ps.getProducts = function(){
            var dfd = $q.defer();
            
            $http.get("api/products.json")
            .then(function(response){
                
                dfd.resolve(response.data.products);
                
            })
            .catch(function(response){
                
                dfd.reject({message:"Error"});
            });
            
            return dfd.promise; 
            
        }
    };
    
})();