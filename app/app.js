(function(){
    
    
    angular.module("bitblogger", ["header", "register", "comment", "posts", "ui.router", "login"]);
    
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
       
     /*  var postMain = {
           templateUrl: "app/posts/postMain.tpl.html",
           controller: "postsCtrl as pc",
           params: {userInfo:null}
       };  */
       
       $stateProvider.state("login", loginObj);
       $stateProvider.state("posts", postsObj);
       $stateProvider.state("register", registerObj);
   }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm =  this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
       // vm.commentTemplate = "app/comment/comment.tpl.html";
      //  vm.registerTemplate = "app/register/register.tpl.html";
       // vm.postsTemplate = "app/posts/posts.tpl.html";
    }
    
})();