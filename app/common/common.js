(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("firstDir", [firstDir]);
    angular.module("common").directive("navBar", [navBar]);
    angular.module("common").directive("onlyNumbers", [onlyNumbers]);
    angular.module("common").directive("customDatePicker", [customDatePicker]);
    
    function firstDir(){
       return {
           template: '<a class="navbar-brand active" href="#" >{{hc.brandName}}</a>'
       };
    };
    
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
                
                console.log(scope);
                console.log(element);
                console.log(attrs);
                
                element.bind("keypress", function(e){
                    
                    console.log(e);
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
    
})();