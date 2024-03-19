"use strict";
console.log("Hola mundo desde Typescript, actualizado de nuevo!");
let edad = 20; // number
let nombre = "Matias"; // string
nombre = "Josue";
nombre.toUpperCase();
let isDarkTheme = true; // boolean
let algunaCosa; // any = cualquier cosa
algunaCosa = true;
algunaCosa = 1;
algunaCosa = null;
let color = undefined;
let nulo = null;
function saludar(nombre) {
    const saludo = `Hola ${nombre}`;
    console.log(saludar);
    return saludo;
}
saludar("Goku");
let frutas = ["Manzana", "Naranja", "Banana"]; // string[]
let calificaciones = [10, 7, 8, 6]; // number[];
// let numerosYLetras: (string | number)[] = ["Josue", "Veronica", 30, 50, "R"];
let numerosYLetras = ["Josue", "Veronica", 30, 50, "R"];
const RolesObj = {
    Administrador: "admin",
    Usuario: "admin",
};
var Roles;
(function (Roles) {
    Roles["Administrador"] = "admin";
    // Usuario = 'Usuario'
    // Usuario = 'usuario'
    Roles["Usuario"] = "user";
})(Roles || (Roles = {}));
class Usuario {
    constructor(nombre, apellido, edad, role) {
        // constructor(nombre: string, edad: number, role: Roles = Roles.Usuario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.role = role || Roles.Usuario;
    }
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
    set nombreCompleto(val) {
        // Peter Parker
        const nombreDivido = val.split(" ");
        this.nombre = nombreDivido[0]; // Peter
        this.apellido = nombreDivido[1]; // Parker
    }
    iniciarSesion() {
        console.log(`Sesion iniciada, su edad es ${this.edad}`);
    }
    cerrarSesion() { }
    inscribirseACurso() { }
}
const spiderman = new Usuario("Peter", "Parker", 15, Roles.Administrador);
const superman = new Usuario("Clark", "Ken", 35);
console.log(spiderman.nombreCompleto);
spiderman.nombreCompleto = "Peter Parker";
// spiderman.iniciarSesion();
// superman.iniciarSesion();
let usuarios = [
    spiderman,
    superman,
    // {
    //   nombre: "Naruto",
    //   edad: 13,
    //   role: Roles.Administrador,
    //   iniciarSesion: () => {
    //     // Alguna logica
    //   },
    // },
    // {
    //   nombre: "Sasuke",
    //   edad: 13,
    //   role: Roles.Usuario,
    //   iniciarSesion: () => {
    //     // Alguna logica repetida
    //   },
    // },
    // { nombre: "Kakashi", edad: 20 },
]; // { nombre: string; }[];
function validadIsAdmin(role) {
    return role === Roles.Administrador;
}
const user = {
    role: "user",
};
validadIsAdmin(user.role);
let nombreEdad = ["Sakura", 13];
let objeto = {};
const myUsersPagination = {
    data: [spiderman, superman],
    pagina: 1,
    total: 10,
    tieneAnterior: false,
    tieneSiguiente: true,
};
const productos = {
    data: [
        {
            nombre: "PC GAMER",
            precio: 9999,
        },
        {
            nombre: "Cafetera",
            precio: 1000,
        },
    ],
    pagina: 1,
    total: 10,
    tieneAnterior: false,
    tieneSiguiente: true,
};
// interface PaginacionProductos {
//   data: Producto[]
//   agina: number;
//   total: number;
//   tieneSiguiente: boolean;
//   tieneAnterior: boolean;
// }
