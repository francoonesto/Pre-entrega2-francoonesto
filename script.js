alert(`Bienvenido a Maldivas,A continuación te pediremos unos datos para continuar`)
function Personas (nombre,contraseña){
    this.nombre = nombre;
    this.contraseña = contraseña;
}
let nombre = prompt(`Ingrese su nombre,no deje espacios en blanco`)
while(nombre === ""){
    nombre = prompt(`Ingrese su nombre,no deje espacios en blanco`)
}
let contraseña = prompt(`Cree una contraseña,no deje espacios en blanco`)
while(contraseña === ""){
    contraseña = prompt(`Cree una contraseña,no deje espacios en blanco`)
}

const persona = new Personas(nombre,contraseña)

console.log(persona)

class Productos{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        this.precioConIva;
        this.aplicandoIva = function(){
            this.precioConIva = this.precio * 1.21
        }
    }
    }
const jean = new Productos ("jean",12000)
jean.aplicandoIva()
const short = new Productos ("short",9000)
short.aplicandoIva()
const remera = new Productos ("remera",3000)
remera.aplicandoIva()
const arrayProductos = [jean,short,remera]
console.log(arrayProductos)

function seleccionarProducto(){
    let seleccionDeProducto = parseInt(prompt(`Que producto desea seleccionar? \n 1.Jean \n 2.Short \n 3.Remera`))
    while(seleccionDeProducto < 1 || seleccionDeProducto > 3){
    seleccionDeProducto = parseInt(prompt(`Que producto desea pedir? \n 1.Jean \n 2.Short \n 3.Remera`))
}
informacionProducto(seleccionDeProducto)
cobrarProducto(seleccionDeProducto)
}

function informacionProducto(seleccionDeProducto){
     if (seleccionDeProducto === 1){
        console.log(jean);
        let totalJean = alert("A continuación se le informara el monto a abonar dependiendo su metodo de pago")
        while(totalJean === ""){totalJean = alert("A continuación se le informara el monto a abonar dependiendo su metodo de pago")}
    }
     else if (seleccionDeProducto === 2){
        console.log(short);
        let totalShort = alert("A continuación se le informara el monto a abonar dependiendo su metodo de pago")
        while(totalShort === ""){totalShort = alert("A continuación se le informara el monto a abonar dependiendo su metodo de pago")}
    }
    else if (seleccionDeProducto === 3){
        console.log(remera);
        let totalRemera = alert("A continuación se le informara el monto a abonar dependiendo su metodo de pago")
        while(totalRemera === ""){totalRemera = alert("A continuación se le informara el monto a abonar dependiendo su metodo de pago")}
    }
    cobrarProducto(seleccionDeProducto)
}
function cobrarProducto(seleccionDeProducto){
    if(seleccionDeProducto === 1){
     alert("A travez de transferencia o tarjeta de debito debe abonar $"+jean.precio*1.21+"\nSi es con tarjeta de credito:\n1 CUOTA DE $"+jean.precio*1.21+"\n 3 CUOTAS DE $"+jean.precio*1.21/3+"\n Si usted quiere abonar precio sin recargos debe comprarlo en la tienda en efectivo");
}
    else if(seleccionDeProducto === 2){
    alert("A travez de transferencia o tarjeta de debito debe abonar $"+short.precio*1.21+"\nSi es con tarjeta de credito:\n1 CUOTA DE $"+short.precio*1.21+"\n 3 CUOTAS DE $"+short.precio*1.21/3+"\n Si usted quiere abonar precio sin recargos debe comprarlo en la tienda en efectivo");
    }
    else if(seleccionDeProducto === 3){
        alert("A travez de transferencia o tarjeta de debito debe abonar $"+remera.precio*1.21+"\nSi es con tarjeta de credito:\n1 CUOTA DE $"+remera.precio*1.21+"\n 3 CUOTAS DE $"+remera.precio*1.21/3+"\n Si usted quiere abonar precio sin recargos debe comprarlo en la tienda en efectivo");
}
}
seleccionarProducto()