function handleDropdown() {
    console.log("Handling dropdown");
    document.getElementById("dropdown").classList.toggle("show-dropdown");
    
    
    document.getElementById("dropdown-label").classList.toggle("border-transparent");
    document.getElementById("dropdown-label").classList.toggle("label-clicked");
    document.getElementById("dropdown-icon").classList.toggle("flip-icon");
}

window.onclick = function(event) {
   
    if (!event.target.closest('#dropdown-label')) {
      
      var dropdowns = document.getElementsByClassName("dropdown-contents");
      var dropdownLabel = document.getElementById("dropdown-label");
      var dropdownIcon = document.getElementById("dropdown-icon");

      if (dropdownLabel.classList.contains('label-clicked')) {
        dropdownIcon.classList.remove("flip-icon");
        dropdownLabel.classList.add('border-transparent');
        dropdownLabel.classList.remove('label-clicked');
      }

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropdown')) {
          openDropdown.classList.remove('show-dropdown');
        }
        
      }
    }

  }