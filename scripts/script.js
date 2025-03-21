const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Salvar a preferência no navegador
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleTheme.textContent = "🌙 Modo Escuro";
    } else {
        localStorage.setItem("theme", "dark");
        toggleTheme.textContent = "☀️ Modo Claro";
    }
});

// Mantém a escolha ao recarregar a página
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleTheme.textContent = "🌙 Modo Escuro";
}
document.addEventListener("mousemove", function (event) {
    const img = document.querySelector(".img-medium");
    let x = (window.innerWidth / 2 - event.pageX) / 50;
    let y = (window.innerHeight / 2 - event.pageY) / 50;
    img.style.transform = `translate(${x}px, ${y}px)`;
    
});document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".img-medium").classList.add("loaded");
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".projetos-grid").classList.add("loaded");
});
