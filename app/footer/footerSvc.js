(function(){
    
    angular.module("footer").service("footerSvc", ["$http", footerSvc]);
    
    function footerSvc($http){
        
        this.name = "Anish";
        
        this.getExtras = function(){
            return  $http.get("api/extras.json");
        };
        
    };
    
})();