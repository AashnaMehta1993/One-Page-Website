  
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.8)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "9999";

    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.border = "4px solid white";
    img.style.boxShadow = "0 0 20px black";

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    const images = document.querySelectorAll(".gallery img");
    images.forEach(image => {
        image.addEventListener("click", () => {
            img.src = image.getAttribute("data-large");
            lightbox.style.display = "flex";
        });
    });
});
