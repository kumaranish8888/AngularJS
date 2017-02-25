(function(){
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
    function headerCtrl(){
        console.log("Controller working properly");
    
    var nm = this;
        nm.navItem = [
            {
                "name": "Products",
                "value": "products"
            },
            {
                "name": "Login",
                "value": "login"
            },
            {
                "name": "Register",
                "value": "register"
            }
        ];
    
    }
    
    
    
})();