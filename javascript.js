function showShows() {
  const showsList = document.getElementById("list-of-shows");
  for (let i = 0; i < SHOWS.length; i++) {
    let show = SHOWS[i];
    let showInformation = `<li class="list-item">
    <p>
    ${show.artist} -
    ${show.date} at
    ${show.show} for only
    $${show.price}. Tickets:
    <div class="counter">
    <span id="ticket-count">${show.tickets}</span>
    <button class="buy-button">Buy Now!</button></div>
    </p>
    </li>`;
    showsList.insertAdjacentHTML("beforeend", showInformation);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  showShows();
});

const counters = document.querySelectorAll(".counter");

for (const counter of counters) {
  const count = counter.querySelector(".buy-button");
  count.addEventListener("click", function subtract() {
    const num = counter.querySelector(".ticket-count");
    num.textContent = Number(num.textContent) - 1;
  });
}
