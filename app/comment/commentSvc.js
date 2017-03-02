(function(){
    
    angular.module("comment").service("commentSvc", ["$http", commentSvc]);
    
    function commentSvc($http){
        this.comments = function(){
            return [
              {"commentID": "101", "commentText": "This is the best Websit ever"},
                {"commentId": "102", "commentText": "Such Informative"},
                {"commentId": "103", "commentText": "Loved it"}
            ];
            
        }
        
        this.yourcomments = function(){
            return $http.get("api/allcomments.json");
        };
    };
    
})();