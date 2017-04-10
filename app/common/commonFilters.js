(function(){
    
    angular.module("common").filter("phoneFormat", [phoneFormat]);
    
    function phoneFormat(){
        return function(input,criteria){
            console.log(input);
            console.log(criteria);
            if(criteria=="US"){
                return "+1 " +input.substring(0,3)+"-"+input.substring(3,6)+"-"+input.substring(6,10);
            }else if(criteria=="IN"){
                return "+91 " +input.substring(0,5)+"-"+input.substring(5,10);
            } else if(criteria == "IR"){
                return "+21 " +input.substring(0,2)+"-"+input.substring(2,4)+"-"+input.substring(4,6)+"-"+input.substring(6,8)+"-"+input.substring(8,10);
            }else
                return input;
        }
    }
    
})();