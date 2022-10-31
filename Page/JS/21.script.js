function fleche_gauche() {
    window.location.href="../HTML/22.1.1.coffre_map.html"   
}

function fleche_haut() {
    window.location.href="../HTML/21.1.coffre_mort_map.html"
}

function fleche_droite() {
    window.location.href="../HTML/23.1.mort.html"  
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft'){
        window.location.href="../HTML/22.1.1.coffre_map.html"
    }
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/21.1.coffre_mort_map.html"
    } 
    if (event.key === 'ArrowRight'){
        window.location.href="../HTML/23.1.mort.html"
    } 
})