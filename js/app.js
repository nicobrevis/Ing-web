document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener("submit", function(evento){
        console.log("PABLO BASTARDO");
        let email=document.getElementById("mail").value;
        let rut=document.getElementById("rut").value;
        let contra2=document.getElementById("rePass").value;
        
        const coleccion=document.getElementById("formulario").getElementsByTagName("li");
        console.log(coleccion);
        console.log("mail: "+email+"\nrut: "+rut+"\ncontraseña: "+contra2);
        /*
        */
       if(email==""){
        coleccion[0].querySelector("span").innerHTML="el correo asdkajshd";
       }
        evento.preventDefault();
    })
    
});
function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
  }