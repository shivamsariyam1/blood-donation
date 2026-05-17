
const togglebtn = document.getElementById("toggle-button");
const dropDown = document.getElementById("toggle-menu");

togglebtn.addEventListener("click", function() {
    dropDown.classList.toggle("top-21");
});

let donors = JSON.parse(localStorage.getItem("donors")) || [];
document.getElementById("totalDonors").innerText = donors.length;

let showResults =localStorage.getItem("searchBlood");
document.getElementById("searchResults").innerText = showResults.length;