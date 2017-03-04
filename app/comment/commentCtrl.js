(function(){
    
    angular.module("comment").controller("commentCtrl", ["commentSvc", commentCtrl]);
    
    function commentCtrl(commentSvc){
        var bm = this;
        
        bm.comments = commentSvc.getComments();
        
     /*   commentSvc.getComments().then(function(response){
            bm.comments = response.data.myComments;
        }).catch(function(response){
            
        }).finally(function(response){
        
            
        }); */
    }
    
})();