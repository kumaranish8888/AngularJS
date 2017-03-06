(function(){
    
    
    
    function headerCtrl(){
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
    }
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
})()