function hideLoader(){
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    loader.style.display="none";
    content.style.display = "block";
}

window.addEventListener('load', hideLoader);