(function(){
    
    angular.module("comment").controller("commentCtrl", ["commentSvc", commentCtrl]);
    
    function commentCtrl(commentSvc){
        var bm = this;
        
        bm.comments = commentSvc.getComments();
    }
    
})();