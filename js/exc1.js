/*1- Crea un objeto llamado auto que tenga algunas características 
como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

*/

const auto = {
  marca: `Fiat`,
  modelo: `Palio`,
  tipo: `full`,
  anio: 2018,
  motor: `1.4`,

  enceder() {
    document.write(`<p> el auto ${this.marca} ${this.modelo}, está encendio</p>`);
  },

  apagar() {
    document.write(`<p> el auto ${auto.marca.modelo}, está apagado</p>`);
  },
};

console.log(auto);
auto.enceder();
auto.apagar();
