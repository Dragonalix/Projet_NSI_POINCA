setTimeout( () => {alert("Vous êtes revenu(e) à l'avant-poste au lever du jour.")}, 200 );

function fleche_haut(){
    window.location.href="../HTML/25.vente_pont.html"
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/25.vente_pont.html"
    }
})