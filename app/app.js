(function(){
    
    
    angular.module("bitblogger", ["header", "register", "comment", "posts"]);
    
   angular.module("bitblogger").config([function(){
       console.log("Working");
   }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm =  this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.commentTemplate = "app/comment/comment.tpl.html";
        vm.registerTemplate = "app/register/register.tpl.html";
        vm.postsTemplate = "app/posts/posts.tpl.html";
    }
    
})();