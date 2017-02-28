(function(){
    
    angular.module("comment").service("commentSvc", [commentSvc]);
    
    function commentSvc(){
        
        this.getComments = function(){
            
            return [
                {
                "commenter":"Bikash",
                "commentText": "Wow, What a wonderful blog !"
            },
            {
                "commenter": "Siddharth",
                "commentText": "I just loved it !"
            },
            {
                "commenter":"Jake",
                "commentText": "Just Amazing !"
            }
            ];
        }
    }
    
})();