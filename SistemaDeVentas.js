class Producto{
    static contadorProducto = 0;
    
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._id = ++ Producto.contadorProducto;
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
        return `${this._id}--${this._nombre} -- con el precio $${this._precio}`
    }
}

class Venta{
    static contadorVenta = 0;

    constructor(){
        this._id = ++Venta.contadorVenta;
        this._productos = [];
    }

    agregarProducto(producto){
        this._productos.push(producto)
    }

    mostrarTotal(){
        let total = 0;
        for(let i in this._productos){
            total += this._productos[i].precio
        }
        return total;
    }

    mostrarTicket(){
        return `Gracias por su compra.\nCompra No. ${this._id}\n`
    }
}

let producto1 = new Producto("Cafe", 30);
let producto2 = new Producto("Azucar", 25);
let venta1 = new Venta();
venta1.agregarProducto(producto1);
venta1.agregarProducto(producto2);
console.log(venta1.mostrarTicket());


