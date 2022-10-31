function fleche_haut(){
        window.location.href="../HTML/11.2.ressource.html"   
}

window.addEventListener("keydown", (event) => {
        if (event.key === 'f'){
            alert('vous prenez les ressources dans les tonneaux')
            setTimeout( () => { window.location.href="../HTML/11.2.ressource.html" }, 1000 );
        }
})