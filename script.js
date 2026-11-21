let tombol = document.getElementById("tombolAtas");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 500) {
        tombol.style.display = "block";
    } else {
        tombol.style.display = "none";
    }
};

tombol.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};