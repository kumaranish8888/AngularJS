(function(){
    
    angular.module("comment").service("commentSvc", [commentSvc]);
    
    function commentSvc(){
        
       this.getComments = function(){
            
         //  return $http.get("api/comments.json");
           
            return [
                {
                    "postId":"1",
                "commenter":"Bikash",
                "commentText": "Wow, What a wonderful blog !"
            },
            {
                "postId":"2",
                "commenter": "Siddharth",
                "commentText": "I just loved it !"
            },
            {
                "postId":"3",
                "commenter":"Jake",
                "commentText": "Just Amazing !"
            }
            ]; 
        };
    } 
    
})();