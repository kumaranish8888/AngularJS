(function () {

    function courseCtrl(courseSvc) {
        var vm = this;
       // vm.myCourses = courseSvc.getCourses();
       // vm.countries = registerSvc.getCountries();
        //make a call to the register service
        //fetch the data from the json
        console.log(courseSvc);
       courseSvc.getMyCourses()
       .then(function(response){
           console.log(response);
           vm.myCourses = response.data.course;
       })
       
       .catch(function(response){
           
       })
       
       .finally(function(){
           
       }); 
        

            

    } 

    angular.module("course")
        .controller("courseCtrl", ["courseSvc", courseCtrl]);

})();