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
let usuarios = [
    { nombre: "Naruto", edad: 13, role: Roles.Administrador },
    // { nombre: "Sasuke", edad: 13 },
    // { nombre: "Kakashi", edad: 20 },
]; // { nombre: string; }[];
function validadIsAdmin(role) {
    return role === Roles.Administrador;
}
const user = {
    role: "user",
};
validadIsAdmin(user.role);
