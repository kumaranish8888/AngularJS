(function(){
    
    angular.module("project", ["header", "table"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.tableTemplate = "app/table/table.tpl.html";
    }
    
})();