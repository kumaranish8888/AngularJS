(function(){
    
    angular.module("bitblogger", ["header", "ui.router", "register", "products", "posts", "login", "common", "home"]);
    
    angular.module("bitblogger").config(["$stateProvider","$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller:"productsCtrl as pc"
        };
        
        var postsObj = {
            templateUrl: "app/posts/posts.tpl.html",
            controller :"postsCtrl as pc"
        };
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as ll"
        };
        
        var homeObj = {
            url: '/',
            templateUrl: "app/home/home.tpl.html"
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("posts", postsObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("home", homeObj);
        
       //  $urlRouterProvider.otherwise('/');
        
    }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        
        
    }
    
})();