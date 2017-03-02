(function(){
    
   angular.module("project",[ "header", "footer", "comment"]);
    
    
    angular.module("project").config([function(){
        
        console.log("Config: project");
    }]);
    
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.footerTemplate = "app/footer/footer.tpl.html";
        vm.commentTemplate = "app/comment/comment.tpl.html";
        
       
    } 
    
    
    
})()