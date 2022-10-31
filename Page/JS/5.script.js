function fleche_haut() {
    window.location.href="../HTML/6.Larina.html"
}

function fleche_bas() {
    window.location.href="../HTML/2.taverne.html"
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/6.Larina.html"
    }
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowDown'){
        window.location.href="../HTML/2.taverne.html"
    }
})