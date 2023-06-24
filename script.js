/*Variable que mantiene el estado del menú*/
let menuVisible = false;

//funcion que oculta o muestra el menú
function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

//funcion para ocultar el menu cuando se selecciona una opcion

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false ;
}