/*4- Escribe una clase Producto para crear objetos.
 Estos objetos, deben presentar las propiedades código, 
 nombre y precio, además del método imprime datos, 
 el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar 
por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(articulo, codigo, nombre, precio, cantidad) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
    this.articulo = articulo;
    this.cantidad = cantidad;
  }
  get precio() {
    return this.#precio;
  }
  get codigo() {
    return this.#codigo;
  }
  get nombre() {
   return this.#nombre;
  }
  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.#precio = nuevoPrecio;
    }
  }
  set codigo(nuevoCodigo) {
    if (nuevoCodigo > 0) {
      this.#codigo = nuevoCodigo;
    }
  }
  set nombre(nuevoNombre) {
    if (nuevoNombre.lenght > 0) {
      this.#nombre = nuevoNombre;
    }
  }

  mostrarDatos() {
    document.write(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Codigo: ${this.codigo}</li>
            <li>Precio: $${this.precio}</li>
            <li>Articulo: ${this.articulo}</li>
            <li> Cantidad: ${this.cantidad}gr/ml.</li>
            </ul>`);
  }
}

const yerba = new Producto(`yerba`, 25, `Verdeflor`, 1500, 500);
const edulcorante = new Producto(`edulcorante`, 98, `SiDiet`, 3500, 500);
const cafe = new Producto(`cafe`, 25358, `Cafe Cabrales`, 9850, 1000);
const desayuno =[yerba, edulcorante, cafe]
yerba.mostrarDatos()
edulcorante.mostrarDatos()
cafe.mostrarDatos()
 console.log(desayuno)
