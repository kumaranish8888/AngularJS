(function(){
    
    angular.module("posts").service("postsSvc", ["$http", postsSvc]);
    
    function postsSvc($http){
        this.myPosts = function(){
            return $http.get("api/posts.json");
        };
    }
    
})();