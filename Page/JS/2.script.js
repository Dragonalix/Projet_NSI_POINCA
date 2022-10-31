function fleche_gauche() {
    window.location.href="../HTML/3.tableau.html"   
}

function fleche_devant() {
    window.location.href="../HTML/4.homme_mystere.html"
}

function fleche_droite() {
    window.location.href="../HTML/5.sortie.html"  
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft'){
        window.location.href="../HTML/3.tableau.html"
    }
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/4.homme_mystere.html"
    } 
    if (event.key === 'ArrowRight'){
        window.location.href="../HTML/5.sortie.html"
    } 
})