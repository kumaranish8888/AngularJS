
(function(){
    
    angular.module("header").controller("headerCtrl", headerCtrl);

    function headerCtrl(){
        console.log("header controller running properly");
    
    
    var nm = this;
        nm.navItems = [
            {
                "name": "Products",
                "value": "Products"
            },
            {
                "name": "Login",
                "value": "Login"
            },
            {
                "name": "Register",
                "value": "Register"
            }
            
        ];
    
    };
    
    
    
})();