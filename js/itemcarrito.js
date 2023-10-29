class itemcarrito{
    nombre;
    marca;
    precio;
    id;
    cantidad;
    subtotal;
    constructor(nombre,marca,precio,id,cantidad,subtotal){
        this.nombre=nombre;
        this.marca=marca;
        this.precio= precio;
        this.id=id;
        this.cantidad= cantidad;
        this.subtotal=this.precio*this.cantidad;
}
}