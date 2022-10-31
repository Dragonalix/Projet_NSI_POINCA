function fleche_bas() {
    window.location.href="../HTML/2.taverne.html"   
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'r'){
        alert('Il a l\'air occupé , je ne devrais pas le déranger')
    }
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowDown'){
        window.location.href="../HTML/2.taverne.html"
    }
})