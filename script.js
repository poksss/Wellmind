var navlinks = document.getElementById("navlinks");

function showMenu() {
    navlinks.style.right = "0";
    document.getElementById("CloseIcon").style.display = "block";
    document.getElementById("Menu-bar").style.display = "none";
}

function hideMenu() {
    navlinks.style.right = "-250px"; // Pastikan nilai ini cukup untuk menyembunyikan sidebar sepenuhnya
    document.getElementById("CloseIcon").style.display = "none";
    document.getElementById("Menu-bar").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.faq li .question');
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            var toggle = this.querySelector('.plus-minus-toggle');
            var parent = this.parentElement;
            toggle.classList.toggle('collapsed');
            parent.classList.toggle('active');
        });
    });
});
