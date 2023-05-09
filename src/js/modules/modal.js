export function init(){
    let btns = document.getElementsByClassName("modal__toggle-btn");
    let overlay = document.getElementById("overlay");

    if(!overlay) return;
    overlay.addEventListener('click', function(){
        overlay.classList.toggle("overlay--active")
    });

    let toggleOverlay = function() {      
        overlay.classList.toggle("overlay--active")
    };
    
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', toggleOverlay, false);
    }

}