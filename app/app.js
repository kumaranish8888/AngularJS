(function(){
    
    
    angular.module("bitblogger", ["header", "register", "comment", "posts", "ui.router", "login", "products", "common"]);
    
   angular.module("bitblogger").config(["$stateProvider", function($stateProvider){
       console.log("Working");
       
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
       
       $stateProvider.state("login", loginObj);
       $stateProvider.state("posts", postsObj);
       $stateProvider.state("register", registerObj);
       $stateProvider.state("products", productsObj);
   }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm =  this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();