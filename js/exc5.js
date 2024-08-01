/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), 
peso y altura, año de nacimiento. Si quieres añadir alguna propiedad 
extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
*mostrarGeneracion: este método debe mostrar un mensaje indicando a 
qué generación pertenece la persona creada y cual es el rasgo 
característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando 
que la persona es mayor de edad.
-mostrarDatos: devuelve toda la información del objeto.
-generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.peso = peso;
    this.sexo = sexo;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    if (this.anioNacimiento >= 1993 && this.anioNacimiento <= 2010) {
      document.write(
        `<p>Hola ${this.nombre}! Por tu edad (${this.edad}) perteneces a la Generación Z y tu rasgo carácteristico es la Irreverencia</p>`
      );
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1992) {
      document.write(
        `<p>Hola ${this.nombre}! Por tu edad (${this.edad}) perteneces a la Generación Y y tu rasgo carácteristico es la Frustración</p>`
      );
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      document.write(
        `<p>Hola ${this.nombre}! Por tu edad (${this.edad}) perteneces a la Generación X y tu rasgo carácteristico es la Obsesión por el exito</p>`
      );
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      document.write(
        `<p>Hola ${this.nombre}! Por tu edad (${this.edad}) perteneces a la Generación BabyBoom y tu rasgo carácteristico es la Ambición</p>`
      );
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      document.write(
        `<p>Hola ${this.nombre}! Por tu edad (${this.edad}) perteneces a la Generación Silent Generation y tu rasgo carácteristico es la Austeridad</p>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`<p>Hola ${this.nombre}, eres mayor de edad</p>`);
    } else {
      document.write(`<p>Hola ${this.nombre}, eres menor de edad</p>`);
    }
  }

  mostrarDatos() {
    document.write(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Edad: ${this.edad}años</li>
            <li>sexo: ${this.sexo}</li>
            <li>Dni: ${this.dni}</li>
            <li>peso: ${this.peso}kg.</li>
            <li>Año de Nacimiento: ${this.anioNacimiento}</li>
            </ul>`);
  }

  generaDNI() {
    this.dni = Math.floor(10000000 + Math.random() * 99999999);
    console.log(this.dni)
  }

}

const sofia = new Persona(`sofia`, 25, 0, `m`, 56, 168, 1998)

sofia.esMayorDeEdad()
sofia.mostrarGeneracion()
sofia.generaDNI()
sofia.mostrarDatos()