(function(){
    
    angular.module("course").controller("courseCtrl", ["courseSvc", courseCtrl]);
    
    function courseCtrl(courseSvc){
        var vm = this;
        
       // vm.myCourses = courseSvc.getCourses();
        courseSvc.getMyCourses()
        .then(function(response){
            console.log(response);
            vm.myCourses = response.data.course;
        })
        .catch(function(){
            
        })
        .finally(function(){
            
        }); 
        
    }
    
    
    
})();