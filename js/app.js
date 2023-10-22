// async function obtenerproductos(){
//     const response = await fetch ('./productos.json');
//     if(response.ok){
//         listadeproductos = await response.json();
//         console.log(listadeproductos);
//     }
// }
// cargarproductos();
// cargarproductos = async ()=>{
//     await obtenerproductos();
// }





const carrito=[];

let boton= document.getElementById("btn-carrito")
boton.addEventListener("click",respuestaClick)

function respuestaClick(){
// let opcion=1
// esto de acumular cantidad lo pude hacer funcionar solo en un producto, cuando lo pongo en varios me tira error, en la correccion me pueden indicar como se podria hacer?? gracias
let indicecarrito = carrito.findIndex((itemcarrito)=> itemcarrito.nombre)

if(indicecarrito !== -1){
    carrito[indicecarrito].cantidad++;
}else{
    // carrito.push(new itemcarrito(listadeproductos [opcion-1].nombre,listadeproductos[opcion-1].marca,listadeproductos[opcion-1].precio,listadeproductos[opcion-1].cantidad));
    carrito.push(new itemcarrito(listadeproductos [0].nombre,listadeproductos[0].marca,listadeproductos[0].precio,listadeproductos[0].cantidad));
}




tabla()
}

let boton2= document.getElementById("btn-carrito2")

boton2.addEventListener("click",respuestaClick2)

function respuestaClick2(){
    // let opcion2=2
carrito.push(new itemcarrito(listadeproductos [1].nombre,listadeproductos[1].marca,listadeproductos[1].precio,listadeproductos[1].cantidad));

tabla()

}

let boton3= document.getElementById("btn-carrito3")
boton3.addEventListener("click",respuestaClick3)

function respuestaClick3(){
let opcion3=3

carrito.push(new itemcarrito(listadeproductos [opcion3-1].nombre,listadeproductos[opcion3-1].marca,listadeproductos[opcion3-1].precio,listadeproductos[opcion3-1].cantidad));


tabla()

}


function tabla(){
    const bodytabla = document.getElementById("items")
    const total = document. querySelector(`#total`);
    bodytabla.innerHTML=``;
    carrito.forEach((itemcarrito,index)=>{
        const{nombre,marca,cantidad,precio}=itemcarrito
        bodytabla.innerHTML =bodytabla.innerHTML+`
        <tr>
            <th scope="row">${index+1}</th>
            <td>${nombre}</td>
            <td>${marca}</td>
            <td>${cantidad}</td>
            <td>${precio}</td>
            <td>${cantidad*precio}</td>
        </tr>
        `
        total.textContent = carrito.reduce((acc,item)=> acc+item.cantidad*item.precio,0);

        const carritoJSON= JSON.stringify(carrito);
        localStorage.setItem(`carrito`,carritoJSON);        

    }    
    )
}

let boton4= document.getElementById("btn-borrar")
boton4.addEventListener("click",respuestaClick4)

function respuestaClick4(){
    carrito.splice(0)
    tabla()
}


