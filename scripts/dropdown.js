function handleDropdown() {
    console.log("Handling dropdown");
    document.getElementById("dropdown").classList.toggle("show-dropdown");
}

window.onclick = function(event) {
   
    if (!event.target.closest('#dropdown-label')) {
      var dropdowns = document.getElementsByClassName("dropdown-contents");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropdown')) {
          openDropdown.classList.remove('show-dropdown');
        }
      }
    }

  }