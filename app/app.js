(function(){
    
    
    angular.module("bitblogger", ["login", "header", "register"]);
    
    angular.module("bitblogger").config([function(){
        
        console.log("config: Bitblogger");
        
    }]);
    
})();