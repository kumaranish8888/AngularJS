(function(){
    
    console.log("Checking...");
    function footerCtrl(footerSvc){
        var fm =this;
        
        console.log(footerSvc.name);
        
      //  fm.extra = footerSvc.getExtras();
        
        footerSvc.getExtras()
            .then(function(response){
            console.log(response);
            fm.extra = response.data.extras;
            fm.user.selectedExtra = fm.extra[0];
        })
        
        .catch(function(response){
            
        })
        
        .finally(function(response){
            
        }); 
        
    };
    
    angular.module("footer").controller("footerCtrl", ["footerSvc", footerCtrl]);
    
})();