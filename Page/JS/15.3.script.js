
setTimeout( () => { alert("Indice: Cliquez sur la flèche de gauche ( sur l'écran ou le clavier ) pour voir la carte que vous avez récupérée.") }, 100 );

function fleche_gauche() {
    window.location.href="../HTML/15.4.map.html"   
}

function fleche_bas(){
    window.location.href="../HTML/15.5.map.html"
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft'){
        window.location.href="../HTML/15.4.map.html"}
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowDown'){
        window.location.href="../HTML/15.5.map.html"}
})