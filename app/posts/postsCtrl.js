(function(){
    
    angular.module("posts").controller("postsCtrl", ["postsSvc", "$state", postsCtrl]);
    
    function postsCtrl(postsSvc, $state){
        var pm = this;
        
        console.log($state);
        
        postsSvc.myPosts()
            .then(function(response){
            console.log(response);
            pm.allPosts = response.data.posts;
        })
        .catch(function(response){
            
        })
        .finally(function(response){
            
        });
    }
    
})();