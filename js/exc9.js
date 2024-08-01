/*9- Crea una clase llamada "Animal" que tenga las propiedades 
"nombre" y "edad", y el método "emitirSonido". Luego, crea dos 
clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" 
y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, 
uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos 
"emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal{
    constructor(nombre, edad, especie){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }

    emitirSonido(){
        document.write(`y el/la ${this.especie} hace...`)
    }
    
}

class Perro extends Animal{
    constructor(nombre, edad, raza, tamanio){
        super(nombre, edad, "perro")
        this.raza = raza;
        this.tamanio = tamanio;
    }

    emitirSonido(){
        document.write(`y hago "guau guau"`)
    }
    mostrarDatos() {
        document.write(`<p>Guau! Mi nombre es ${this.nombre}, soy un/a ${this.raza}. Mi tamaño es ${this.tamanio} y ${this.emitirSonido()}`) 
     }
}

class Gato extends Animal{
    constructor(nombre, edad, raza, tamaño){
        super(nombre, edad, "gato")
        this.raza = raza;
        this.tamaño = tamaño;
    }

    emitirSonido(){
        document.write(`y el/la ${this.especie} hace "miau miau"`)
    }
}

const dona = new Perro(`Donatella`, 4,`Bulldog Francés`, `pequeño, pero con aires de grandeza`)

dona.mostrarDatos()