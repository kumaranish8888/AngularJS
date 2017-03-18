(function(){
    
    angular.module("posts").controller("postsCtrl", ["postsSvc", postsCtrl]);
    
    function postsCtrl(postsSvc){
        var pm = this;
        
        
        postsSvc.myPosts()
            .then(function(response){
            console.log(response);
            pm.allPosts = response;
        })
        .catch(function(response){
            
        })
        .finally(function(response){
            
        });
    }
    
})();