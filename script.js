$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#task-input').val();
        if (taskName.trim() !== '') {
            var listItem = $('<li>').text(taskName);
            $('#task-list').append(listItem);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
    
});
