class Producto{
    static contadorProducto = 0;
    
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this.id = ++ Producto.contadorProducto;
    }

    get nombre(){
        return this._nombrenombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `${this._nombre} con el precio $${this._precio}`
    }
}

let producto1 = new Producto("Cafe", 30);
let producto2 = new Producto("Azucar", 25);
console.log(producto1.toString());
