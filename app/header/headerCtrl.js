(function(){
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
    function headerCtrl(){
        console.log("Controller working properly");
    
    var nm = this;
        nm.navItem = [
            {
                "name": "Posts",
                "value": "posts"
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