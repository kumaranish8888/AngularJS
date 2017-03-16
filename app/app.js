(function(){
    
   angular.module("project",[ "header", "footer", "comment", "ui.router", "home", "contact"]);
    
    
    angular.module("project").config(["$stateProvider", function($stateProvider){
        
        var loginObj = {
            templateUrl: "app/comment/comment.tpl.html"
        };
        
        var footerObj = {
            templateUrl: "app/footer/footer.tpl.html",
            controller: "footerCtrl as rc"
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html"
        };
        
        var contactObj = {
            templateUrl: "app/contact/contact.tpl.html"
        };
        $stateProvider.state("comment", loginObj);
        $stateProvider.state("footer", footerObj);
        $stateProvider.state("home", homeObj);
        $stateProvider.state("contact", contactObj);
        
        
    }]);
    
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
      
       
    } 
    
    
    
})()