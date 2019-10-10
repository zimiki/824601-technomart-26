var linkFeedback = document.querySelector(".link-feedback");
var popupFeedback = document.querySelector(".popup-feedback");
var closeFeedback = popupFeedback.querySelector(".close");

var formFeedback = popupFeedback.querySelector("form");
var userName = popupFeedback.querySelector("[name=name]");
var userEmail = popupFeedback.querySelector("[name=email]");
var userPost = popupFeedback.querySelector("[name=post]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("userName");
} catch (err) {
    isStorageSupport = false;
}

linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");

    if (storage) {
        userName.value = storage;
        password.focus();
    } else {
        userName.focus();
    }
});

closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
    popupFeedback.classList.remove("modal-error");
});

formFeedback.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userPost.value) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-error");
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupFeedback.classList.contains("modal-show")) {
            popupFeedback.classList.remove("modal-show");
            popupFeedback.classList.remove("modal-error");
        }
    }
});