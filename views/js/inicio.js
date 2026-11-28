/**
 * formulario para iniciar sesion
 */
const formulario = document.getElementById("formLogin");
formulario.addEventListener("submit",function(event){

    event.preventDefault();

    const user= document.getElementById("usuario").value.trim();
    const pass= document.getElementById("clave").value.trim();

    const error= document.getElementById("error");

    const usuarioCorrecto= "admin";
    const passCorrecto= "1234";

    error.classList.add("d-none");

    /*Validar campos */
    if (user===""|| pass ===""){
        error.innerText="Complete todos los campos";
        error.classList.remove("d-none");
        return
    }

    /*Validacion de credenciales*/
    if (user===usuarioCorrecto && pass===passCorrecto){
        localStorage.setItem("logueado","si");

        window.location.href="dashboard.html";
    } else{
        error.innerText="Credenciales incorrectas";
        error.classList.remove("d-none");
    }
});