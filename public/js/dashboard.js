$(document).ready(function () {
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };

  const updButtonHandler = async (event) => {
    console.log(event);
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      document.location.replace(`/blog/${id}`);
    }
  };

  $('.btn-delete').click(delButtonHandler)
  $('.btn-update').click(updButtonHandler)
});