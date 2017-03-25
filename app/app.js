(function(){
    
    
    angular.module("bitblogger", ["header", "register", "comment", "posts", "ui.router", "login", "products", "common", "home"]);
    
   angular.module("bitblogger").config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){
       console.log("Working");
                                        
       $urlRouterProvider.otherwise("/home");
       
       var loginObj = {
           templateUrl:"app/login/login.tpl.html"
       };
       var postsObj = {
           templateUrl:"app/posts/posts.tpl.html",
           controller: "postsCtrl as pc",
           params: {userInfo:null}
       };
       var registerObj = {
           templateUrl:"app/register/register.tpl.html",
           controller: "registerCtrl as rc"
       };
       var productsObj = {
           templateUrl: "app/products/products.tpl.html",
           controller: "productsCtrl as pc"
       };
       var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hm",
            url:"/home"
       }; 
       
       $stateProvider.state("login", loginObj);
       $stateProvider.state("posts", postsObj);
       $stateProvider.state("register", registerObj);
       $stateProvider.state("products", productsObj);
       $stateProvider.state("home", homeObj);
   }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm =  this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();