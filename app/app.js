(function(){
    
    angular.module("bitblogger",["header", "login", "register"]);
    
    angular.module("bitblogger").config([function(){
        
        console.log("config: bitblogger");
    }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrlfn]);
    
    function mainCtrlfn(){
        var mn = this;
    }
    
})();