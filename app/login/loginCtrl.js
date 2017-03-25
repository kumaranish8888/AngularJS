(function(){
    
    angular.module("login").controller("loginCtrl", ["$scope",loginCtrl]);
    
    function loginCtrl($scope){
        var l = this;
        l.brand = "MyBItBlogger";
        
        $scope.name="Anish";
        
        setTimeout(function(){
            $scope.name="Ravi";
            $scope.$apply();
        },5000);
        localStorage.setItem("name",$scope.name);
        
    }
    
})();