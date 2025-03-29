document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const noticeButton = document.querySelector(".notice");
    const popupOverlay = document.getElementById("popupOverlay");
    const closeButton = document.getElementById("closeBtn");

   
    // Function to disable scrolling
    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    // Function to enable scrolling
    function enableScroll() {
        document.body.style.overflow = "auto";
    }


    // Open Popup
    noticeButton.addEventListener("click", function () {
        popupOverlay.style.display = "flex";
        disableScroll();
    });

    // Close Popup
    closeButton.addEventListener("click", function () {
        popupOverlay.style.display = "none";
        enableScroll();
    });

});