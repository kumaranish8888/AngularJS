(function(){
    
    angular.module("course").service("courseSvc", [courseSvc]);
    
    function courseSvc(){
     /*   this.getCourses = function(){
            return $http.get("api/mycourses.json");
        };
    }; */
        
        this.getCourses = function(){
            return [
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
    ];
        }
    }
    
})();