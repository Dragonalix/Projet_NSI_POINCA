function fleche_droite() {
    window.location.href="../HTML/7.aller_sur_le_pont.html"   
}

function fleche_gauche() {
    window.location.href="../HTML/5.sortie.html"
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'r'){
        alert('Larinna : J\'ai une quête pour toi , elle t\'attend sur le tableau de quêtes.')
    }
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft'){
        window.location.href="../HTML/5.sortie.html"
    }
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowRight'){
        window.location.href="../HTML/7.aller_sur_le_pont.html"
    }
})
