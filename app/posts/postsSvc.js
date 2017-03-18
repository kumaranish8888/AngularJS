(function(){
    
    angular.module("posts").service("postsSvc", ["$http", "$q", postsSvc]);
    
    function postsSvc($http, $q){
        
        
        this.myPosts = function(){
            var dfd = $q.defer();
            
         $http.get("api/posts.json")
         .then(function(response){
             
             dfd.resolve(response.data.posts);
         })
         .catch(function(response){
             
             dfd.reject({message:"Error"})
         });
        
        return dfd.promise;
        }
    }
    
})();