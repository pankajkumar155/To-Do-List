  
$('form').on('click', 'input[type=submit]', function(e) {
    e.preventDefault();
    let task = $('input[type=text]').val();

    if (task.length > 0) {
        $('ul.task-list').append('<li><input type=checkbox><p>' + task + '</p><img src="close.png" alt="close"></li>');
        $('input[type=text]').val('');
    };

    $('input[type=checkbox]').click(function(){
        if ($(this).is(':checked')) {
            $(this).parent('li').fadeTo(300, 0.4)
        } else {
            $(this).parent('li').fadeTo(300, 1);
        }
    });
  
    $(function (){
        $('img').click(function(){
            $(this).parent('li').fadeOut();
        })
        
    });
})
