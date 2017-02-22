(function(){
    
    angular.module("bitblogger",["header", "login", "register"]);
    
    angular.module("bitblogger").config([function(){
        
        console.log("config: bitblogger");
    }]);
    
})();