/*3-Escribe una clase que permita crear distintos objetos 
“rectángulos”, con las propiedades de alto y ancho, mas 
los métodos necesarios para modificar y mostrar sus 
propiedades, calcular el perímetro y el área
*/

class Rectangulo{
    #ladoA;
    #ladoB;
    constructor(ladoA, ladoB){
        this.#ladoA = ladoA;
        this.#ladoB = ladoB;
    }
    get ladoA(){
        return this.#ladoA
    }
    get ladoB(){
        return this.#ladoB
    }
   set ladoA(nuevoLadoA){
    if(nuevoLadoA > 0){
        this.#ladoA = nuevoLadoA
    }
   }
    set ladoB(nuevoLadoB){
        if(nuevoLadoB > 0){
            this.#ladoB = nuevoLadoB
        }
    }
    mostarRectangulo(){
        document.write(`<p>Rectangulo de: ${this.ladoA} cm de alto y de ${this.ladoB} cm de ancho</p>`)
    }
    perimetro(){
       return 2* this.ladoA + this.ladoB
    }
    area(){
        return this.ladoA * this.ladoB
    }
}

const rectangulo1 = new Rectangulo(12,8);
rectangulo1.mostarRectangulo();

console.log(rectangulo1.perimetro());
console.log(rectangulo1.area());