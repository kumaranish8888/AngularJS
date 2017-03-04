(function(){
    
    angular.module("comment").controller("commentCtrl", ["commentSvc", commentCtrl]);
    
    function commentCtrl(commentSvc){
        console.log(commentSvc);
        var gm = this;
       gm.getComments = commentSvc.comments(); 
        
    /*    commentSvc.yourcomments()
        .then(function(response){
            console.log(response);
            vm.getComments = response.data.mycomments;
        })
        .catch(function(){
            
        })
        .finally(function(){
            
        }); */
        
    }
    
})();