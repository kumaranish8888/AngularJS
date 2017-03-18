(function(){
    
    angular.module("header").controller("headerCtrl", ["$state", headerCtrl]);
    
    function headerCtrl($state){
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
            },
            {
                "name": "Products",
                "value": "products"
            }
        ];
        
        nm.changeState = function(data){
            console.log(data);
            $state.go(data);
        }
    
    }
    
    
    
})();