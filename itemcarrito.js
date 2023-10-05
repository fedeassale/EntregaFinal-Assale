class itemcarrito{
    nombre;
    marca;
    precio;
    cantidad;
    subtotal;
    constructor(nombre,marca,precio,cantidad,subtotal){
        this.nombre=nombre;
        this.marca=marca;
        this.precio= precio;
        this.cantidad= cantidad;
        this.subtotal=this.precio*this.cantidad;
}
}