(function(){
    
    angular.module("register").controller("registerCtrl", ["registerSvc", registerCtrl]);
    
    function registerCtrl(registerSvc){
        
        var rm = this;
        rm.countries = registerSvc.getCountries();
    }
    
})();