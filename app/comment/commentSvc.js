(function(){
    
    angular.module("comment").service("commentSvc", [commentSvc]);
    
    function commentSvc(){
        this.comments = function(){
            return [
              {"commentID": "101", "commentText": "This is the best Website ever"},
                {"commentId": "102", "commentText": "Such Informative"},
                {"commentId": "103", "commentText": "Loved it"},
                {"commentID": "104", "commentText": "Wow superb"},
                {"commentId": "105", "commentText": "Just amazing"},
                {"commentId": "106", "commentText": "It is great"},
                {"commentID": "107", "commentText": "I have never seen such informative"},
                {"commentId": "108", "commentText": "Great work"},
                {"commentId": "109", "commentText": "How do you do that"},
                {"commentID": "110", "commentText": "I want this"},
                {"commentId": "111", "commentText": "It has been os good"},
                {"commentId": "112", "commentText": "Such a nice website"}
            ];
            
        }
        
     /*   this.yourcomments = function(){
            return $http.get("api/allcomments.json");
        }; */
    };
    
})();