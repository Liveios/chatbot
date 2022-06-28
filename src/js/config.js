const open_nav = function () {
    const nav = document.querySelector(".nav");
    nav.style.width = "100%";
}


const close_nav = function () {
    const nav = document.querySelector(".nav");
    nav.style.width = "0%";
}

const go = function (url) {
    window.location = "https://" + url;
}




const showCopyright = function () {
    let footer = document.querySelector(".footer");
    footer.innerHTML = "<p>Copyright &copy;" + new Date().getFullYear() + "</p>";
}

const init = function () {
    showCopyright();
}
