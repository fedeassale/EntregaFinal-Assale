const nombre = document.getElementById("name");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const Dirección = document.getElementById("Dirección");
const Ciudad = document.getElementById("Ciudad");
const Provincia = document.getElementById("Provincia");
const Tarjeta = document.getElementById("Tarjeta");
const Numerodetarjeta = document.getElementById("Numerodetarjeta");
const Fechadecaducidad = document.getElementById("Fechadecaducidad");
const CVV = document.getElementById("CVV");

 let boton7= document.getElementById("btn-comprar");
  boton7.addEventListener("click",function respuestaClick8(event){


    event.preventDefault()
    let error= document.getElementById("error");
    let mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
         mensajesError.push("Ingrese su nombre");
    };
    if(contraseña.value === null || contraseña.value === ""){
         mensajesError.push("Ingrese su contraseña");
    };
    if(email.value === null || email.value === ""){
         mensajesError.push("Ingrese su email");
    };
    if(Dirección.value === null || Dirección.value === ""){
         mensajesError.push("Ingrese su Dirección");
    };
    if(Ciudad.value === null || Ciudad.value === ""){
         mensajesError.push("Ingrese su Ciudad");
    };
    if(Provincia.value === null || Provincia.value === ""){
         mensajesError.push("Ingrese su Provincia");
    };
    if(Tarjeta.value === null || Tarjeta.value === ""){
        mensajesError.push("Ingrese su Tarjeta");
    };
    if(Numerodetarjeta.value === null || Numerodetarjeta.value === ""||Numerodetarjeta.value.length != 12){
        mensajesError.push("Ingrese su Número de tarjeta");
    };
    if(Fechadecaducidad.value === null || Fechadecaducidad.value === ""){
     mensajesError.push("Ingrese la fecha de caducidad de su tarjeta");
    };
    if(CVV.value === null || CVV.value === ""||CVV.value.length != 3){
     mensajesError.push("Ingrese el CVV(código de seguridad de tres dígitos)");
    };

 error.innerHTML = mensajesError.join("<br>")
 nombre.value!=``&& email.value!=``&& contraseña.value!=``&& Dirección.value!=``&& Ciudad.value!=``&& Provincia.value!=``&& Tarjeta.value!=``&& Numerodetarjeta.value!=``&&Numerodetarjeta.value.length == 12 && Fechadecaducidad.value!=`` && CVV.value!=``&&CVV.value.length == 3 && realizarcompra();
})
 function realizarcompra(){
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Su compra fue aceptada!',
       showConfirmButton: false,
       timer:1500
    })
 }