// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        scrollButton.style.display = "block";
    }
    else
    {
        scrollButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}