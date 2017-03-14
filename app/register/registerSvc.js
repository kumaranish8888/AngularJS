(function(){
    
    angular.module("register").service("registerSvc", ["$http", registerSvc]);
    
    function registerSvc($http){
        
        this.getCountries = function(){
            
            return $http.get("api/country.json");      
            
        };
    }
    
})();