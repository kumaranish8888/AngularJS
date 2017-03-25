(function(){
    
    angular.module("header").controller("headerCtrl", ["$state", "$rootScope", headerCtrl]);
    
    function headerCtrl($state, $rootScope){
        
    
    var nm = this;
        
        nm.cartItems = 0;
        nm.brandName = "BitBlogger";
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
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(item){
            nm.cartItems++;
        }); 
    
    }
    
    
    
})();