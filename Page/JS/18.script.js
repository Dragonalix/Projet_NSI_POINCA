setTimeout( () => { alert("Gauche pour aller au Sud ,et droite pour aller à l'Est.") }, 100 );

function fleche_gauche() {
    window.location.href="../HTML/20.Cannon_cove.html"   
}

function fleche_droite(){
    window.location.href="../HTML/19.1.tempete.html"
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft'){
        window.location.href="../HTML/20.Cannon_cove.html"}
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowRight'){
        window.location.href="../HTML/19.1.tempete.html"}
})