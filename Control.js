/*1- Ingresá en el siguiente cuadro el código HTML y Javascript correspondiente para la creación de una página web que cumpla con los siguientes requisitos:

 a) Posea el código html en un archivo “unidad8.html” para los puntos b) y c) y un script en javascript en un archivo por separado llamado “control.js” para el punto d):

b) Un formulario sencillo en html que solicite el ingreso de usuario y clave

c) El formulario posea un botón submit con el texto “Ingresar”

d) Mediante el uso del evento que se ejecuta en el momento del envío del formulario se valide que los cuadros de texto correspondientes a “usuario y clave” no se encuentren vacíos y que el cuadro de texto del “usuario” incluya un arroba. Si ambos campos no se validan correctamente el formulario no debe enviarse y deberá desplegarse una ventana indicando el motivo por el cual no puede ingresar por ej: “Falta el arroba en el usuario” */

let Formulario = document.getElementById("Formulario");
let input = document.querySelector("input").value;

Formulario.addEventListener("submit", (e)=> {

    let value = Usuario.value;
    let pass = document.getElementById("Clave").value;


    e.preventDefault();

    if (value.length==0){
        alert("Falta completar el usuario")
        return;
    }
    
    if (pass.length==0){
        alert("Falta completar la contraseña")
        return;
    }

    if (value.includes("@")) {
        console.log("El usuario contiene arroba");
    } else {
    alert("Falta la arroba en el usuario")
    return;
    }


     if (value.includes("@") & value.length>0 & pass.length>0){
         alert("Formulario enviado correctamente")
         Formulario.submit();
         return;
     }
     
})
