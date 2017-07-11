(function(){
    
    $document.ready(function(){
        $.ajax({
            url: "app/aap.js",
            method: 'post',
            dataType: 'json',
            success: function(data){
                $('#datatable').dataTable({
                    data: data,
                    columns: [
                        
                    ]
                })
            }
        })
    })
    
})();