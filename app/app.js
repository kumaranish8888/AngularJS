(function(){
    
    
    angular.module("bitblogger", ["login", "header", "register", "comment"]);
    
   angular.module("bitblogger").config([function(){
       console.log("Working");
   }]);
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm =  this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.commentTemplate = "app/comment/comment.tpl.html";
    }
    
})();