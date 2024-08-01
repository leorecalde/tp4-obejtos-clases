/*8- Crea una clase llamada "Persona" que tenga las propiedades 
"nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores 
para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar() {
        document.write(`<p>Hola mundo! Soy ${this.nombre}, tengo ${this.edad} años y mi profesión es ${this.profesion}.</p>`)
    }
    despedirse() {
        document.write(`<p>Adios mundo!</p>`)
    }
}

for (let i = 1; i <= 2; i++) {
    const nombreUsuario = prompt(`Ingresa el nombre de la persona ${i}:`);
    const edadUsuario = parseInt(prompt(`Ingresa la edad de la persona ${i}:`));
    const profesionUsuario = prompt(`Ingresa la profesión de la persona ${i}:`);
  
    const persona = new Persona(nombreUsuario, edadUsuario, profesionUsuario);
    persona.saludar();
    persona.despedirse();
  }