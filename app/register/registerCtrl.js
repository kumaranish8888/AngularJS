(function(){
    
    angular.module("register").controller("registerCtrl", ["registerSvc", registerCtrl]);
    
    function registerCtrl(registerSvc){
        
        var rm = this;
       // rm.countries = registerSvc.getCountries();
        
        registerSvc.getCountries()
        .then(function(response){
            console.log(response);
            rm.countries = response.data.countries;
        })
        
        .catch(function(response){
            
        })
        
        .finally(function(response){
            
        });
    }
    
})();