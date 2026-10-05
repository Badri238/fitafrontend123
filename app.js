const movies = [
    { id: 1, title: "The Last Signal", genre: "sci-fi", genreLabel: "Sci-fi", rating: "8.7", duration: "2h 18m", tag: "New", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=85" },
    { id: 2, title: "Paper Moons", genre: "drama", genreLabel: "Drama", rating: "8.2", duration: "1h 56m", tag: "Critics' pick", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85" },
    { id: 3, title: "Midnight Run", genre: "action", genreLabel: "Action", rating: "7.9", duration: "2h 06m", tag: "Popular", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85" },
    { id: 4, title: "A Little Later", genre: "comedy", genreLabel: "Comedy", rating: "8.4", duration: "1h 42m", tag: "Feel good", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=85" }
];

const state = { movie: null, showtime: null, seats: [], price: 220 };
const movieGrid = document.querySelector("#movieGrid");
const emptyState = document.querySelector("#emptyState");
const bookingModal = document.querySelector("#bookingModal");
const showtimes = document.querySelector("#showtimes");
const seatMap = document.querySelector("#seatMap");
const panels = [...document.querySelectorAll(".booking-panel")];
const stepDots = [...document.querySelectorAll(".step-dot")];
const occupiedSeats = new Set([3, 7, 14, 19, 26, 33, 41, 47]);

function renderMovies() {
    const query = document.querySelector("#movieSearch").value.toLowerCase().trim();
    const genre = document.querySelector("#genreFilter").value;
    const visibleMovies = movies.filter((movie) => {
        const matchesText = movie.title.toLowerCase().includes(query) || movie.genreLabel.toLowerCase().includes(query);
        return matchesText && (genre === "all" || movie.genre === genre);
    });

    movieGrid.innerHTML = visibleMovies.map((movie, index) => `
        <article class="movie-card" style="animation-delay: ${index * 70}ms">
            <div class="poster"><img src="${movie.image}" alt="Poster artwork for ${movie.title}" loading="lazy"><span class="movie-tag">${movie.tag}</span></div>
            <div class="movie-info"><h3>${movie.title}</h3><p class="movie-meta">${movie.genreLabel} &nbsp;&middot;&nbsp; ${movie.duration} &nbsp;&middot;&nbsp; <strong>&#9733; ${movie.rating}</strong></p><button class="book-button" type="button" data-movie-id="${movie.id}">Book tickets <span aria-hidden="true">&#8594;</span></button></div>
        </article>`).join("");
    emptyState.classList.toggle("hidden", visibleMovies.length > 0);
}

function renderShowtimes() {
    const times = ["10:30 AM", "01:15 PM", "04:45 PM", "07:30 PM", "10:15 PM"];
    showtimes.innerHTML = times.map((time) => `<button class="showtime" type="button" data-time="${time}">${time}</button>`).join("");
}

function renderSeats() {
    seatMap.innerHTML = Array.from({ length: 48 }, (_, index) => {
        const number = index + 1;
        const occupied = occupiedSeats.has(number);
        return `<button class="seat${occupied ? " occupied" : ""}" type="button" aria-label="Seat ${number}" aria-pressed="false" data-seat="${number}" ${occupied ? "disabled" : ""}></button>`;
    }).join("");
}

function openBooking(movie) {
    state.movie = movie;
    state.showtime = null;
    state.seats = [];
    document.querySelector("#selectedMovieLabel").textContent = `${movie.title}  -  ${movie.genreLabel}  -  ${movie.duration}`;
    renderShowtimes();
    renderSeats();
    showPanel(1);
    bookingModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeBooking() {
    bookingModal.classList.add("hidden");
    document.body.style.overflow = "";
}

function showPanel(step) {
    panels.forEach((panel) => panel.classList.toggle("hidden", Number(panel.dataset.panel) !== step));
    stepDots.forEach((dot) => dot.classList.toggle("active", Number(dot.dataset.step) <= step));
}

function updateSeatCount() {
    document.querySelector("#seatCount").textContent = `${state.seats.length} selected`;
    document.querySelector("#continueToCheckout").disabled = state.seats.length === 0;
}

function renderSummary() {
    const total = state.seats.length * state.price;
    document.querySelector("#bookingSummary").innerHTML = `<strong>${state.movie.title}</strong><br>${state.showtime} &nbsp;&middot;&nbsp; Screen 2<br>Seats: ${state.seats.join(", ")}<div class="summary-total"><span>Total</span><span>Rs. ${total}</span></div>`;
}

movieGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-movie-id]");
    if (button) openBooking(movies.find((movie) => movie.id === Number(button.dataset.movieId)));
});
// document.querySelector("#movieSearch").addEventListener("inp
// ut", renderMovies);
// document.querySelector("#genreFilter").addEventListener("change", renderMovies);
showtimes.addEventListener("click", (event) => {
    const button = event.target.closest("[data-time]");
    if (!button) return;
    state.showtime = button.dataset.time;
    document.querySelectorAll(".showtime").forEach((item) => item.classList.toggle("selected", item === button));
    document.querySelector("#continueToSeats").disabled = false;
});
seatMap.addEventListener("click", (event) => {
    const button = event.target.closest("[data-seat]");
    if (!button || button.disabled) return;
    const seat = Number(button.dataset.seat);
    state.seats = state.seats.includes(seat) ? state.seats.filter((item) => item !== seat) : [...state.seats, seat].sort((a, b) => a - b);
    button.classList.toggle("selected");
    button.setAttribute("aria-pressed", String(state.seats.includes(seat)));
    updateSeatCount();
});
document.querySelector("#continueToSeats").addEventListener("click", () => showPanel(2));
document.querySelector("#continueToCheckout").addEventListener("click", () => { renderSummary(); showPanel(3); });
document.querySelector("#closeModal").addEventListener("click", closeBooking);
document.querySelector("#doneButton").addEventListener("click", closeBooking);
bookingModal.addEventListener("click", (event) => { if (event.target === bookingModal) closeBooking(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !bookingModal.classList.contains("hidden")) closeBooking(); });
document.querySelector("#locationButton").addEventListener("click", () => showToast("Showing movies in Hyderabad"));
document.querySelector("#checkoutForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(event.target).get("name");
    document.querySelector("#successMessage").textContent = `Thanks, ${name}. Your ticket for ${state.movie.title} at ${state.showtime} has been reserved. A confirmation is on its way to your inbox.`;
    document.querySelectorAll(".booking-panel").forEach((panel) => panel.classList.add("hidden"));
    document.querySelector(".booking-stepper").classList.add("hidden");
    document.querySelector("#bookingSuccess").classList.remove("hidden");
});

let toastTimer;
function showToast(message) {
    const toast = document.querySelector("#toast");
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}

renderMovies();
