function fleche_haut(i) {
    if (i == 1){
        window.location.href="../HTML/10.1.tableau_quete.html"   
   }

    if (i == 2){
        window.location.href="../HTML/11.1.ressource.html"  
   }
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowUp'){
        window.location.href="../HTML/10.1.tableau_quete.html"
    }
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowRight'){
        window.location.href="../HTML/11.1.ressource.html"
    }
})