document.addEventListener("DOMContentLoaded", function() {
            // Get the current path from the URL
            var path = window.location.pathname;

            // Check if the path exists, otherwise replace the content
            if (!pathExists(path)) {
                replaceContent();
            }

            // Function to check if the path exists (you can customize this logic)
            function pathExists(path) {
                // You might want to implement your own logic to check if the path exists
                // For simplicity, let's assume any path that doesn't contain "existing" doesn't exist
                return path.includes("existing");
            }

            // Function to replace the content
            function replaceContent() {
                // Replace the content with the error message
                document.body.innerHTML = "<h1>This page doesn't exist</h1>";
            }
        });
