var linkMap = document.querySelector(".link-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = popupMap.querySelector(".close");


linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");    
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");    
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");           
        }
    }
});