   function changeImage(filename) {
            let img = document.getElementById('clickstart');
                img.setAttribute("src", filename);
                img.style.height = '100%';
                img.style.width = '100%';
                img.style.top = '0%'
                img.style.left = '0%'}


   function remplace_image_par_vdo() 
{
   var mon_id = document.getElementById('zone_contenant_image');
   mon_id.innerHTML = "<video controls autoplay><source src=\"file:///C:/Users/mdesv/OneDrive/Bureau/Dosier%20NSI/Projet_NSI_POINCA/Images/1_Reveille/1_Reveille_Video1.mp4\" type=\"video/mp4\"></video>";
}