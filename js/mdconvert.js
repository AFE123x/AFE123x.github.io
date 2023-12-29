// mdconvert.js

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the Markdown content from the div
    var markdownContent = document.getElementById('mdcontent').innerText;

    // Convert Markdown to HTML using marked.js
    var htmlContent = marked(markdownContent);

    // Set the HTML content in the mdcontent div
    document.getElementById('mdcontent').innerHTML = htmlContent;
});
