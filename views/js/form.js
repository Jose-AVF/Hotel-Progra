const siguienteP = () =>
{
    let paso1 = document.getElementById("paso1");
    let paso2 = document.getElementById("paso2");
    let paso3 = document.getElementById("paso3");
    let Siguiente = document.getElementById("botonSiguiente");
    let Confirmar = document.getElementById("botonConfirmar");


    if (paso1.hidden == false)
    {
        paso1.hidden = true;
        paso2.hidden = false;
    }
    else if (paso2.hidden == false)
    {
        paso2.hidden = true;
        paso3.hidden = false;

        Siguiente.hidden = true;
        Confirmar.hidden = false;


        // informacion del usuario
        document.getElementById("datosNombre").innerText = 
        document.getElementById("nombre").value;

        document.getElementById("datosCorreo").innerText = 
        document.getElementById("correo").value;

        document.getElementById("datosTelefono").innerText = 
        document.getElementById("numero").value;

        // informacion de la reserva
        document.getElementById("datosEntrada").innerText = 
        document.getElementById("fechaEntrada").value;

        document.getElementById("datosSalida").innerText = 
        document.getElementById("fechaSalida").value;

        document.getElementById("datosHuespedes").innerText = 
        document.getElementById("cantidadHuespedes").value;

        document.getElementById("datosHabitacion").innerText = 
        document.getElementById("tipoHabitacion").value;

        


    }
}

const cancelacion = () =>
{
    let confirmacion = document.getElementById("confirmarCancelacion");

    confirmacion.hidden = false;
}

const ocultarCancelacion = () =>
{
    let confirmacion = document.getElementById("confirmarCancelacion");

    confirmacion.hidden = true;
}

const regresarInicio = () =>
{
    window.location.href = "index.html";
}



const confirmarReserva = () =>
{
    let nombre = document.getElementById();
}
