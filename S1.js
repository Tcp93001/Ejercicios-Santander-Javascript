// Recomiendo ocupar const, ya que son valores que no van a cambiar
const a = 5;
const b = 10;
const c = 15;

// Recordemos que podemos ocupar interpolación de strings para
// poder ocupar expresiones o cualquier valor dentro de una cadena

console.log(`Resultado: ${b / a + 2 * c}`);

console.log(`Resultado: ${(a + b + c / c) * a}`);

console.log(`Resultado: ${((3 * a) / c) + a + b + c }`);

console.log(`Resultado: ${a - (b + c) * a / 1}`);