const addComment = (e) => {
    e.preventDefault();
    console.log("In button press");
    $('#addComment').removeClass('hidden');
    $('#addComment').addClass('visible');
    $('textarea').focus();
}

const postClicked = async (e) => {
    e.preventDefault();

    const comment = $('#reply-content').val().trim();
    const blog_id = $('.div-blog').attr('id');


    if (comment) {

        // Post reply
        const response = await fetch('/api/blogs/addComment', {
            method: 'POST',
            body: JSON.stringify({ comment, blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response.ok);
            $('#div-reply').removeClass('visible')
            $('#div-reply').addClass('hidden')
            location.reload();
        } else {
            alert(response.statusText)
        }

    } else {
        alert("Please fill out the reply box in order to post!");
    }

}


// Reply Click Handler
$('#btn-addComment').click(addComment)

$('#btn-post').click(postClicked)