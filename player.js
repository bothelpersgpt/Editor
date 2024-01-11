 // Create the banner element
  var banner = document.createElement('div');
  banner.style.backgroundColor = '#3498db';
  banner.style.color = '#fff';
  banner.style.textAlign = 'center';
  banner.style.padding = '10px';
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.zIndex = '1000';
  banner.innerText = 'Hello! We are going to be making big updates.';

  // Append the banner to the body
  document.body.appendChild(banner);

  // Optional: You can set a timeout to automatically hide the banner after a certain duration
  setTimeout(function() {
    document.body.removeChild(banner);
  }, 5000); // Hide after 5 seconds (adjust as needed)
