document.addEventListener('DOMContentLoaded', function () {
  // Get the current URL path
  var currentPath = window.location.pathname;

  // Display custom message with the provided path
  var customMessage = '<h1>Page Not Found</h1><p>Sorry, the page for ' + currentPath + ' does not exist.</p>';
  document.getElementById('content').innerHTML = customMessage.replace(/not found/i, currentPath);
});
