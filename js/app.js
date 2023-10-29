const shopContent= document.getElementById("shopContent")

let carrito=[];
let listadeproductos=[]
async function obtenerproductos(){
      const response = await fetch ('./json/productos.json');
      if(response.ok){
          listadeproductos = await response.json();
          return(listadeproductos);
    }
}

cargarproductos = async ()=>{
     await obtenerproductos();
     mostrarProducto()
}

cargarproductos();



 function mostrarProducto(){
    listadeproductos.forEach((product)=>{
    let Content= document.createElement("div")
    Content.className="card width-figure rounded t-2 item"
    Content.innerHTML = `
    
        <img src="${product.img}">
        <figure class="card-body">
                <figcaption class="card-title centrar heigh-title text-grande">${product.nombre}</figcaption>
                <p class="centrar">${product.marca}</p>
                <p class="centrar">$${product.precio}</p>
        </figure>  
    `;

    shopContent.append(Content)
    
     let comprar = document.createElement("button");
     comprar.innerText = "agregar al carrito";
     comprar.className ="comprar agregar-carrito btn btn-outline-dark";
     Content.append(comprar);
    
     comprar.addEventListener("click",()=>{
        carrito.push({
                id: product.id,
                nombre: product.nombre,
                marca: product.marca,
                precio: product.precio,
                cantidad: product.cantidad
             });
              tabla()
     })
    })
}

function tabla(){
    const bodytabla = document.getElementById("items")
    const total = document. querySelector(`#total`);
    bodytabla.innerHTML=``;
    carrito.forEach((item,index)=>{
        const{nombre,marca,cantidad,precio}=item
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
    total.textContent=0;
}

let boton5= document.getElementById("filtroSc")
boton5.addEventListener("click",respuestaClick5)

function respuestaClick5(){
    const resultado= listadeproductos.filter((el)=>el.marca.includes`SC`)
    const filtro1 = document.getElementById("shopContent")
    filtro1.innerHTML=``;
    resultado.forEach((product)=>{
        let Content= document.createElement("div")
        Content.className="card width-figure rounded t-2 item"
        Content.innerHTML = `
            <img src="${product.img}">
            <figure class="card-body">
                    <figcaption class="card-title centrar heigh-title text-grande">${product.nombre}</figcaption>
                    <p class="centrar">${product.marca}</p>
                    <p class="centrar">$${product.precio}</p>
            </figure>  
        `;
    
        shopContent.append(Content)
        
         let comprar = document.createElement("button");
         comprar.innerText = "agregar al carrito";
         comprar.className ="comprar agregar-carrito btn btn-outline-dark";
         Content.append(comprar);
        
         comprar.addEventListener("click",()=>{
            carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    marca: product.marca,
                    precio: product.precio,
                    cantidad: product.cantidad
                 });
                  tabla()
    })
})}
let boton6= document.getElementById("filtroRhein")
boton6.addEventListener("click",respuestaClick6)

function respuestaClick6(){
    const resultado2= listadeproductos.filter((el)=>el.marca.includes`Rhein`)
    console.log(resultado2)
    const filtro2 = document.getElementById("shopContent")
    filtro2.innerHTML=``;
    resultado2.forEach((product)=>{
        let Content= document.createElement("div")
        Content.className="card width-figure rounded t-2 item"
        Content.innerHTML = `
            <img src="${product.img}">
            <figure class="card-body">
                    <figcaption class="card-title centrar heigh-title text-grande">${product.nombre}</figcaption>
                    <p class="centrar">${product.marca}</p>
                    <p class="centrar">$${product.precio}</p>
            </figure>  
        `;
    
        shopContent.append(Content)
        
         let comprar = document.createElement("button");
         comprar.innerText = "agregar al carrito";
         comprar.className ="comprar agregar-carrito btn btn-outline-dark";
         Content.append(comprar);
        
         comprar.addEventListener("click",()=>{
            carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    marca: product.marca,
                    precio: product.precio,
                    cantidad: product.cantidad
                 });
                  tabla()
                 })
})}
// Buen dia profe, le queria decir que probe de todas formas tratar de hacer lo de la cantidad, que se vaya acumulando cada vez que se agrega el mismo producto al carrito y no lo logre,
// lo deje de lado porque queria avanzar con todo lo demas y hoy que termine con lo demas, ya no tengo tiempo para seguir, lo voy a seguir intentando estos dias y agradezco si me puede decir cual puede ser el problema que estoy teniendo,
//  los resultados que obtuve es que se sume todo a lo primero que agrego al carrito, o cosas asi, saludos y gracias por todo!! 