/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
  #isbn;
  #titulo;
  #autor;
  #numeroDePag;
  constructor(isbn, titulo, autor, numPag) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroDePag = numPag;
  }
  get isbn() {
    return this.#isbn;
  }
  get titulo() {
    return this.#titulo;
  }
  get autor() {
    return this.#autor;
  }
  get numPag() {
    return this.#numeroDePag;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo}, con ISBN N° ${this.isbn}, creado por el autor ${this.autor}, tiene ${this.numPag} paginas.</p>`
    );
  }
}

const libro1 = new Libro(`978-987-609-165-7`, `Los Juegos del Hambre`,`Suzanne Collins`, 396)
const libro2 = new Libro(`978-84-9296-682-0`, `En Llamas`, `Suzanne Collins`, 407)
const libro3 = new Libro(`978-84-9296-681-3`, `Sinsajo`, `Suzanne Collins`, 422 )

libro1.mostrarLibro()
libro2.mostrarLibro()
libro3.mostrarLibro()

if (libro1.numPag > libro2.numPag && libro1.numPag > libro3.numPag) {
    document.write(`El libro "${libro1.titulo}" tiene más páginas que "${libro2.titulo} y ${libro3.titulo}".`);
  } else if (libro2.numPag > libro1.numPag && libro2.numPag > libro3.numPag) {
    document.write(`El libro "${libro2.titulo}" tiene más páginas que "${libro1.titulo} y ${libro3.titulo}".`);
  } else {
    document.write(`El libro "${libro3.titulo}" tiene más páginas que "${libro1.titulo} y ${libro2.titulo}".`);
  }