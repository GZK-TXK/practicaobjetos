///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 1
//Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.

const persona = {
    nombre: "Pedro",
    edad:26,
    ciudad: "Crema",
    }

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.ciudad)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 2
//A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.

persona.profesion= "Probador de sofás";

console.log(persona.profesion)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 3
//Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."

const libro = {
    titulo: "Verde",
    autor: "Lorca",
    anioPublicacion: 1754,

    Resumen :function(){
        return `El libro ${this.titulo} fue escrito por ${this.autor} en ${this.anioPublicacion}.`
    }
}

console.log(libro.Resumen())

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 4
//Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.

    const estudiantes=[
        {
            nombre: "Juan",
            edad: 75,
            notaFinal: 6.4,
        },    
        {
            nombre: "Mariano",
            edad: 35,
            notaFinal: 8.2,
        },
            {
            nombre: "Benancio",
            edad: 32,
            notaFinal: 8.7
        },
    ]

let notaEstudiante= function(){
    for(let alumno of estudiantes){
        console.log(alumno.nombre, alumno.notaFinal)
    }
}

notaEstudiante();

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 5
//Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.

const persona1={
    nombre: "Jon",
    anioNacimiento: 1964,
    edad1: function(){
        const anioActual= new Date().getFullYear();
        return anioActual - this.anioNacimiento
    }    
}

console.log(persona1.edad1())

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 6
//Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.

const coche= {
    marca: "Toyota",
    modelo: "Supra",
    anio: 1993,
    velocidad: 240,
    acelerar: function(){
        this.velocidad += 10;
        console.log("Velocidad 250Km/h.")
    },
    frenar: function(){
        if (this.velocidad >=10){
            this.velocidad -=10;
            console.log("Velocidad 230Km/h.")
        }
        else {
            this.velocidad = 0
        }
    }
}

coche.acelerar();
coche.frenar()

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 7 
//Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.

const producto={
    nombre2: "Fanta",
    precio: 1.5,
    cantidad: 250
}

let infoProducto= function(){
    for (let nomrbreProd in producto){
        console.log(producto[nomrbreProd])
        }
    }
infoProducto()

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 8
//Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.

const animal={
    nombre: "Loba",
    raza: "Pastor Belga Malinois",
    tipo: "Perro",
    sexo: "Hembra",
    edad: 6,
};

let numeroPropiedades= function(){
    let propiedades= Object.keys(animal).length
    return propiedades
}

console.log(numeroPropiedades())

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 9
//Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.

const empresa={
    nombre: "Apple",
    direccion: {
        calle:"Park Way",
        ciudad: "Cupertino",
        codigoPostal: 241563,
    }
}
 console.log(empresa.direccion.calle)
 console.log(empresa.direccion.ciudad)
 console.log(empresa.direccion.codigoPostal)

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 10
//Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.

const cuentaBancaria= {
    titular: "Ana Botin",
    saldo: 462315,
    depositar: function(cantidad){
        this.saldo += cantidad
        console.log(`Se ha despositado ${cantidad} €, el saldo actual es de ${this.saldo}`)
    },
    retirar: function(cantidad){
        if (this.saldo >= cantidad){
            this.saldo -= cantidad
            console.log(`Se ha retirado ${cantidad} €, el saldo actual es de ${this.saldo}`)
        }
        else{
            console.log(`Saldo insuficiente`)
        }
    }
}

cuentaBancaria.depositar(416);
cuentaBancaria.retirar(862315);
cuentaBancaria.retirar(426);