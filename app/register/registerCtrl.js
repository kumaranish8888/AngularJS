(function(){
    
    angular.module("register").controller("registerCtrl", ["registerSvc", "$state", registerCtrl]);
    
    function registerCtrl(registerSvc, $state){
        
        var rm = this;
       // rm.user = {};
        
        rm.nextPage = function(){
            $state.go("posts", {userInfo:rm.user});
        }
        
        registerSvc.getCountries()
        .then(function(response){
            console.log(response);
            rm.countries = response.data.countries;
            rm.user.selectedCountry = rm.countries[0];
        })
        
        .catch(function(response){
            
        })
        
        .finally(function(response){
            
        });
    }
    
})();