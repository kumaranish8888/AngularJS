(function(){
    
    
    
    function headerCtrl($state){
         var vm = this;
        
        vm.navItems = [
            {
                "key":"home",
                "value":"Home"
            },
            {
                "key": "comment",
                "value": "Login"
            },
            {
                "key": "footer",
                "value": "Register"
            },
        ];
        
        vm.travelState = function(data){
            $state.go(data);
        }
    }
    
    angular.module("header").controller("headerCtrl", ["$state", headerCtrl]);
    
    
    
})();