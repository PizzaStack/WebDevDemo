// Bubbling/Capturing

document.getElementById("header").addEventListener("click", function() {
    console.log("header");
});

document.getElementById("branding").addEventListener("click", function() {
    console.log("branding");
});
