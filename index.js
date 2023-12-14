// Ejercicio 1: Mostrar todos los autos con su información completa
function mostrarInformacionAutos(autos) {
  return autos;
}

// Ejercicio 2: Filtrar autos por marca
function filtrarPorMarca(autos, marca) {
  return autos.filter((auto) => auto.marca === marca);
}

// Ejercicio 3: Calcular el precio promedio de todos los autos
function calcularPrecioPromedio(autos) {
  const precios = autos.map((auto) => auto.precio);
  const promedio =
    precios.reduce((sum, precio) => sum + precio, 0) / precios.length;
  return promedio;
}

// Ejercicio 4: Encontrar el auto más caro
function encontrarAutoMasCaro(autos) {
  return autos.reduce(
    (maxAuto, auto) => (auto.precio > maxAuto.precio ? auto : maxAuto),
    autos[0]
  );
}

// Ejercicio 5: Incrementar el precio de todos los autos en un 10%
function incrementarPrecio(autos) {
  return autos.map((auto) => auto.precio * 1.1);
}

// Ejercicio 6: Encontrar el auto con el menor kilometraje
function encontrarAutoMenorKilometraje(autos) {
  return autos.reduce(
    (minAuto, auto) =>
      auto.kilometraje < minAuto.kilometraje ? auto : minAuto,
    autos[0]
  );
}

// Ejercicio 7: Ordenar autos por precio de menor a mayor y devolver un array con los precios
function ordenarPorPrecio(autos) {
  return (autosOrdenados = autos
    .sort((a, b) => a.precio - b.precio)
    .map((auto) => auto.precio));
}

// Ejercicio 8: Obtener un array con las marcas únicas de los autos
// INVESTIGAR SET de ARRAYS
function obtenerMarcasUnicas(autos) {
  const soloMarcas = autos.map((auto) => auto.marca); // [Toyota, Chevrolet, Toyota]
  marcasUnicas = []; // Toyota, Chevrolet
  for (marca of soloMarcas) {
    if (!marcasUnicas.includes(marca)) {
      marcasUnicas.push(marca);
    }
  }
  return marcasUnicas;
}
// Ejercicio 9: Filtrar autos por rango de precios
function filtrarPorRangoDePrecio(autos, minPrecio, maxPrecio) {
  //22.000 y 25.000
  // 23.000
  return autos.filter(
    (auto) => auto.precio >= minPrecio && auto.precio <= maxPrecio
  );
}

// Ejercicio 10: Calcular el total de kilometraje de todos los autos
function calcularTotalKilometraje(autos) {
  return autos.reduce((total, auto) => total + auto.kilometraje, 0);
}

module.exports = {
  mostrarInformacionAutos,
  filtrarPorMarca,
  calcularPrecioPromedio,
  encontrarAutoMasCaro,
  incrementarPrecio,
  encontrarAutoMenorKilometraje,
  ordenarPorPrecio,
  obtenerMarcasUnicas,
  filtrarPorRangoDePrecio,
  calcularTotalKilometraje,
};
