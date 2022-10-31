function fleche_gauche() {
    window.location.href="../HTML/22.2.2.coffre_map.html"   
}

function fleche_haut() {
    window.location.href="../HTML/22.3.1.coffre_map.html"
}


window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft'){
        window.location.href="../HTML/22.2.2.coffre_map.html"
    }
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/22.3.1.coffre_map.html"
    } 
})