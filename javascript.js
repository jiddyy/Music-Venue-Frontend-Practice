function logShowsToConsole() {
    for (let i = 0; i < SHOWS.length; i++) {
        let show = SHOWS[i];
        console.log(show.artist);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    logShowsToConsole();
});