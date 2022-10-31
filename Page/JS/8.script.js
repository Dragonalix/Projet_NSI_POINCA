function fleche_haut() {
    window.location.href="../HTML/9.tableau_quete_ou_ressource.html"   
}

function fleche_bas() {
    window.location.href="../HTML/7.aller_sur_le_pont.html"
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowDown'){
        window.location.href="../HTML/7.aller_sur_le_pont.html"
    }
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/9.tableau_quete_ou_ressource.html"
    }
})