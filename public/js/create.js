const createNewEntry = async (e) => {
    e.preventDefault();

    const title = $.trim($('#blog-title').val());
    const contents = $.trim($('#blog-content').val());

    if (title && contents) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            window.location.replace("/dashboard")
        } else {
            alert(response.statusText)
        }
    } else {
        alert("You must enter both a title and some content for this to work.")
    }
}

$('#btn-create-submit').click(createNewEntry)