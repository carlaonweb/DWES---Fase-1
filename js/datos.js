// Hito 1 · Datos
//
// Tres listas de registros relacionadas por id. Cada registro es un array (una «fila»)
// y unas constantes dicen qué dato hay en cada posición.
// La lista principal, con 15 registros o más.
// Incluye casos raros: un dato vacío, un precio o una nota con coma, un nombre con tildes.
//
// Ejemplo de la forma (cámbialo por tu dominio):
//
// // Qué guarda cada posición de un libro
// const L_ID = 0, L_TITULO = 1, L_AUTOR = 2, L_GENERO = 3, L_ANIO = 4, L_FIANZA = 5;
//
// const libros = [
//   [1, "Platero y yo", "Juan Ramón Jiménez", "poesía", 1914, "2,50"],
//   [2, "La colmena", "Camilo José Cela", "novela", 1951, "3"],
//   [3, "Niebla", "", "novela", 1914, "2,50"],
//   ...
// ];
//
// // Un préstamo guarda el id del libro y el id del socio: así se relacionan las listas
// const P_ID = 0, P_LIBRO = 1, P_SOCIO = 2, P_DIA = 3, P_DEVUELTO = 4;
//
// const prestamos = [
//   [1, 2, 1, 3, false],   // el socio 1 tiene el libro 2 desde el día 3
//   ...
// ];
//
// Hecho cuando console.table muestra las tres listas en la consola sin errores.

