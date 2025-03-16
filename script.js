function searchDestinations() {
    let input = document.getElementById("search").value.toLowerCase();
    let destinations = document.querySelectorAll(".destination-card");

    destinations.forEach((card) => {
        let title = card.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
