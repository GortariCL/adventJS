/*
En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes 
(que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que
comprar para reponer en nuestros almacénes ahora que se acerca la Navidad.. 
Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacénes.

Por ejemplo, si tenemos los siguientes almacenes:

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
Como ves, los almacénes pueden tener el mismo regalo repetido varias veces. Pero, 
por más existencias que haya en un almacén, si no tenemos en los otros dos, 
debemos reponerlo para tener mejor distribución.

Summary
Crea una función getGiftsToRefill que reciba tres Array como parámetros.
La función debe devolver un Array con los regalos que hay que reponer.
Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacénes.
Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
Si hay más de un regalo que reponer, la función debe devolver un Array con todos 
los regalos que hay que reponer.
*/

export const getGiftsToRefill = (a1, a2, a3) => {
  if (!Array.isArray(a1) || !Array.isArray(a2) || !Array.isArray(a3))
    throw new Error("Invalid Param");

  if (a1.length === 0 || a2.length === 0 || a3.length === 0)
    throw new Error("Invalid Param");

  if (
    a1.some(
      (e) =>
        typeof e !== "string" ||
        a2.some(
          (e) => typeof e !== "string" || a3.some((e) => typeof e !== "string")
        )
    )
  )
    throw new Error("Invali Param");

  const refill = [];

  a1.forEach((e) => {
    a2.indexOf(e) === -1 && refill.push(e);
    a3.indexOf(e) === -1 && refill.push(e);
  });

  a2.forEach((e) => {
    a1.indexOf(e) === -1 && refill.push(e);
    a3.indexOf(e) === -1 && refill.push(e);
  });

  a3.forEach((e) => {
    a1.indexOf(e) === -1 && refill.push(e);
    a2.indexOf(e) === -1 && refill.push(e);
  });

  return [...new Set([...a1, ...a2, ...a3])].filter(
    (e) => a1.includes(e) + a2.includes(e) + a3.includes(e) === 1
  );
};
