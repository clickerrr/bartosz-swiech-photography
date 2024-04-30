let allImages = document.querySelectorAll("img");

allImages.forEach(element => {
    const node = document.createAttribute("loading");
    node.value = "lazy";
    element.attributes.setNamedItem(node);
});