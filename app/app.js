(function(){
    
    angular.module("project", ["header", "course"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.courseTemplate = "app/courses/course.tpl.html";
    }
    
})();