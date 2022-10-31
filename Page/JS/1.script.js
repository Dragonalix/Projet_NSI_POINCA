
function remplace_image_par_vdo() {
   var mon_id = document.getElementById('zone_contenant_image');
   mon_id.innerHTML = "<video nocontrols intrinsicsize height=100% autoplay muted ><source src=\"Images/1_Reveille/1_Reveille_Video1.mp4\" type=\"video/mp4\"></video>";
   document.documentElement.requestFullscreen();
   setTimeout( () => { window.location.href="Page/HTML/2.taverne.html" }, 8100 );
}
