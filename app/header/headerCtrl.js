(function(){
    
    
    
    function headerCtrl(){
         var vm = this;
        
        vm.navItems = [
            {
                "key": "home",
                "value": "Home"
            },
            {
                "key": "products",
                "value": "Products"
            },
            {
                "key": "login",
                "value": "Login"
            },
            {
                "key": "register",
                "value": "Register"
            }
        ];
    }
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
})()