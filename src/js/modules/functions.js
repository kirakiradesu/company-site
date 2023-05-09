export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function navToggle(){
    let navToggle = document.querySelector(".nav-toggle__icon");
    let nav = document.querySelector(".nav")
    navToggle.addEventListener("click", function(){
        navToggle.classList.toggle("open")
        nav.classList.toggle("open")
    })
}

export function scrollWatcher(){
    document.body.addEventListener("scroll", function(){
        document.documentElement.dataset.scroll = document.body.scrollTop + document.documentElement.scrollTop;
    })
}