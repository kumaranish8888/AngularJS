(function(){
    
    angular.module("register").service("registerSvc", [registerSvc]);
    
    function registerSvc(){
        
        this.getCountries = function(){
            
            
            return [
                {"name": "India", "code": "IN"},
                {"name": "United States", "code": "USA"}
            ];
        }
    }
    
})();