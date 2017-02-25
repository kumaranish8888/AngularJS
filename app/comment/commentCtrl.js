(function(){
    
    angular.module("comment").controller("commentCtrl", [commentCtrl]);
    
    function commentCtrl(){
        var bm = this;
        
        bm.commentItem =  [
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
            },
            {
                "commenter": "Mary",
                "commentText": "How can you be so so so perfect !"
            },
            {
                "commenter":"Jhonson",
                "commentText": "Awesome !"
            },
            {
                "commenter": "Aparna",
                "commentText": "It reminds me of my childhood !"
            },
            {
                "commenter":"Saurabh",
                "commentText": "You are the best !"
            },
            {
                "commenter": "KAtie",
                "commentText": "Superb !"
            },
            {
                "commenter": "Mayur",
                "commentText": "That was so Good !"
            },
            {
                "commenter": "Janhavi",
                "commentText": "What is this !"
            },
            {
                "commenter": "Viabhav",
                "commentText": "I want to watch it again n again n again"
            }
        ];
    }
    
})();