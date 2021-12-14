const images = Array.from(document.querySelectorAll(".displayImage"));
const gifs = Array.from(document.querySelectorAll(".gif"));
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const body = document.querySelector("body");

gifs.forEach(element => {
    element.addEventListener("mouseover", e => {
        var srcString = e.target.src.toString();
        console.log(srcString);
        srcString = srcString.replace("_img.jpg", ".gif");
        console.log(srcString);
        e.target.src = srcString;
    });

    element.addEventListener("mouseleave", e => {
        var srcString = e.target.src.toString();
        console.log(srcString);
        srcString = srcString.replace(".gif", "_img.jpg");
        console.log(srcString);
        e.target.src = srcString;
    });

})

images.forEach(element => {
    element.style.cursor = "pointer";
    element.addEventListener("click", e => {
        modalImg.src = element.src;
        
        modal.style.display = "inline-flex";
        
        if(modal.classList.contains("fadeOut"))
        {
            modal.classList.remove("fadeOut");
            modalImg.classList.remove("zoomOut");
        }
        
        modal.classList.add("fadeIn");
        modalImg.classList.add("zoomIn");

    });   
});

modal.addEventListener("click", e => {
   
   
   
   modalImg.classList.remove("zoomIn");
   modal.classList.remove("fadeIn");
   
   modal.classList.add("fadeOut");
   modalImg.classList.add("zoomOut");
    
});