let button = document.getElementById("buy");
let close = document.getElementById("close");
let modal = document.getElementById("modal");

button.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "block";
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "none";
});
