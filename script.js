document.addEventListener("DOMContentLoaded", () => {
    let comics = [];
    let currentIndex = 0;

    // Fetch comics data
    fetch("comics.json")
        .then(response => response.json())
        .then(data => {
            comics = data;
            currentIndex = comics.length - 1; // Show the latest comic by default
            loadComic(currentIndex);
        })
        .catch(error => console.error("Error loading comics:", error));

    // Load a comic by index
    function loadComic(index) {
        if (index >= 0 && index < comics.length) {
            const comic = comics[index];
            document.getElementById("comic-title").textContent = comic.title;
            document.getElementById("comic-image").src = comic.image;
            document.getElementById("comic-image").alt = comic.title;

            // Enable/disable buttons
            document.getElementById("prev-button").disabled = index === 0;
            document.getElementById("next-button").disabled = index === comics.length - 1;
        }
    }

    // Event listeners for navigation buttons
    document.getElementById("prev-button").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            loadComic(currentIndex);
        }
    });

    document.getElementById("next-button").addEventListener("click", () => {
        if (currentIndex < comics.length - 1) {
            currentIndex++;
            loadComic(currentIndex);
        }
    });
});
