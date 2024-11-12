document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const dashboard = document.getElementById("dashboard");
    const logoutBtn = document.getElementById("logout-btn");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "user" && password === "pass") {
            loginForm.parentElement.style.display = "none";
            dashboard.style.display = "block";
        } else {
            alert("Niepoprawna nazwa użytkownika lub hasło");
        }
    });

    logoutBtn.addEventListener("click", () => {
        dashboard.style.display = "none";
        loginForm.parentElement.style.display = "block";
    });

    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
        const query = document.getElementById("search-input").value;
        const filter = document.getElementById("search-filter").value;
        if (query) {
            document.getElementById("search-results").innerHTML = `<p>Wyniki dla "${query}" (${filter})</p>`;
        } else {
            alert("Proszę wpisać frazę do wyszukania");
        }
    });

    const reportForm = document.getElementById("report-form");
    reportForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const reportDesc = document.getElementById("report-desc").value;
        alert("Raport został dodany: " + reportDesc);
        reportForm.reset();
    });
});
