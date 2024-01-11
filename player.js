document.addEventListener('DOMContentLoaded', function () {
  // Get the current URL path
  var currentPath = window.location.pathname;

  // Display "Page Not Found" for any path
  document.getElementById('content').innerHTML = '<h1>Page Not Found</h1><p>Sorry, the page for ' + currentPath + ' does not exist.</p>';
});
