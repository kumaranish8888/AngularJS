(function(){
    
    angular.module("footer").service("footerSvc", ["$http", footerSvc]);
    
    function footerSvc($http){
        
        this.name = "Anish";
        
        this.getExtras = function(){
            return  $http.get("api/extras.json");
        
      /*  return  [
        {
            "name": "C#",
            "code": "1"
        },
        {
            "name": "C",
            "code": "2"
        },
        {
            "name": "C++",
            "code": "3"
        },
        {
            "name": "jQuery",
            "code": "4"
        },
        {
            "name": "JavaScript",
            "code": "5"
        },
        {
            "name": "Python",
            "code": "6"
        },
        {
            "name": "Sprint",
            "code": "1"
        }
    ]; */
        
        };
        
    };
    
})();