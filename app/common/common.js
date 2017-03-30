(function(){
    
    angular.module("common", []);
    
 //   angular.module("common").directive("firstDir", [firstDir]);
    angular.module("common").directive("navBar", [navBar]);
    angular.module("common").directive("onlyNumbers", [onlyNumbers]);
    angular.module("common").directive("customDatePicker", [customDatePicker]);
    angular.module("common").directive("checkUserName", [checkUserName]);
    angular.module("common").directive("checkPassword", [checkPassword]);
    angular.module("common").directive("brandName", [brandName]);
    angular.module("common").directive("details", [details]);
    
 /*   function firstDir(){
       return {
           template: '<a class="navbar-brand active" href="#" >{{hc.brandName}}</a>'
       };
    }; */
    
    function navBar(){
        
        return {
          templateUrl: "app/header/header.tpl.html",
            restrict: "A"
        };
        
    } 
    
    function onlyNumbers(){
        
        return {
          restrict: "A",
            link: function(scope, element, attrs){
                var mylength  = attrs["maxlength"];
                
                element.bind("keypress", function(e){
                    
                    var selectedKey = e.key;
                    var reg = new RegExp(/^[0-9]+$/);
                    if((reg.test(selectedKey) && this.value.length<=mylength)){
                        
                    }else {
                        e.preventDefault();
                    }
                })
            }
        };
        
    }
    
    function customDatePicker(){
        return {
            restrict: "A",
            link: function(scope, element, attrs){
                element.datepicker();
            }
        };
    }
    
    function checkUserName(){
        return {
          restrict: "A",
            require: "ngModel",
            link: function(scope,element,attrs,ctrl){
                var usernames =  ["anish", "anchal", "joyab", "sandeep", "bikash"];
                ctrl.$parsers.unshift(validateUserName)
                function validateUserName(data){
                    console.log(data);
                    if(_.contains(usernames, data)){
                        ctrl.$setValidity("checkuser",false);
                    }else{
                        ctrl.$setValidity("checkuser",true);
                    }
                    return data;
                }
            }
        };
    }
    
    function checkPassword(){
        return {
          restrict:"A",
            require: "ngModel",
            link: function(scope, element, attrs, ctrl){
                var passwords = ["one", "two", "three", "four"];
                ctrl.$parsers.unshift(validatePassword)
                function validatePassword(data){
                    if(_.contains(passwords,data)){
                        ctrl.$setValidity("checkpassword", false);
                    }else {
                        ctrl.$setValidity("checkpassword", true);
                    }
                }
            }
        };
    }
    
    
    function brandName(){
        return {
            restrict: "A",
            template: '<a class="navbar-brand active" href="#" >{{companyName}}</a>',
            scope:{
                companyName: "@" // @ is for read only properties
            }
        };
    }
    
    
    function details(){
        return {
            restrict: "A",
            template: "<input type='text' class='form-control' ng-model='item'>",
            scope:{
                item: "=" // @ is for read only properties
            }
        };
    }




})();