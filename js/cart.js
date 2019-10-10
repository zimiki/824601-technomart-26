var linkCart = document.querySelector(".buy");
var popupCart = document.querySelector(".popup-cart");
var closeCart= popupCart.querySelector(".close");


linkCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal-show");    
});

closeCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-show");    
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupCart.classList.contains("modal-show")) {
            popupCart.classList.remove("modal-show");           
        }
    }
});