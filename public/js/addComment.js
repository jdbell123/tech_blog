$(document).ready(function () {

    const addComment = (e) => {
        e.preventDefault();
        $('#addComment').removeClass('hidden');
        $('#addComment').addClass('visible');
        $('textarea').focus();
    }

    const postClicked = async (e) => {
        e.preventDefault();

        const comment = $('#reply-content').val().trim();
        const blog_id = $('.div-blog').attr('id');


        if (comment) {

            const response = await fetch('/api/blogs/addComment', {
                method: 'POST',
                body: JSON.stringify({ comment, blog_id }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                $('#addComment').removeClass('visible')
                $('#addComment').addClass('hidden')
                location.reload();
            } else {
                alert(response.statusText)
            }

        } else {
            alert("Please enter a comment to enable you to post it!");
        }

    }

    const editButtonHandler = (event) => {

        $('#addComment').removeClass('visible')
        $('#addComment').addClass('hidden')
        $('.editPost').removeClass('hidden');
        $('.blogView').addClass('hidden');

        $('.button-area-upd').removeClass('hidden');
        $('.button-area').addClass('hidden');

    };

    const delButtonHandler = async (event) => {

        const blog_id = $('.div-blog').attr('id');

        const response = await fetch(`/api/blogs/${blog_id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }

    };

    const updateButtonHandler = async (e) => {
        e.preventDefault();

        // Collect information
        const title = $('#blog-title').val().trim();
        const contents = $('#blog-contents').val().trim();
        const id = $('.div-blog').attr('id');

        // Send PUT request
        if (title && contents) {
            const response = await fetch('/api/blogs/' + id, {
                method: 'PUT',
                body: JSON.stringify({ title, contents }),
                headers: { 'Content-Type': 'application/json' },
            });

            // If successful, reload page
            if (response.ok) {
                location.reload();
            } else {
                alert(response.statusMessage);
            }
        } else {
            alert('Both fields must be filled out before updating!')
        }
    }

    const onLoad = async (e) => {

        const blog_id = $('.div-blog').attr('id');

        const response = await fetch('/api/blogs/checkUser/' + blog_id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            $('.btn-edit').removeClass('hidden');
            $('.btn-delete').removeClass('hidden');
        }
    }

    onLoad();

    $('#btn-addComment').click(addComment)

    $('#btn-post').click(postClicked)

    document
        .querySelector('.btn-delete')
        .addEventListener('click', delButtonHandler);


    $('.btn-edit').click(editButtonHandler)
    // document
    //     .querySelector('.btn-edit')
    //     .addEventListener('click', editButtonHandler);

    document
        .querySelector('.btn-update')
        .addEventListener('click', updateButtonHandler);

});