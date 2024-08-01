/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, 
ingresar y extraer dinero y volver a mostrar la 
descripción del estado de la cuenta.

*/
class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresarDinero(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      document.write(`Se han ingresado $${cantidad} a la cuenta.<br>`);
    } else {
      document.write(`La cantidad ingresada debe ser mayor que 0.<br>`);
    }
  }

  extraerDinero(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      document.write(`Se han retirado $${cantidad} de la cuenta.<br>`);
    } else {
      document.write(`No es posible retirar esa cantidad.<br>`);
    }
  }

  informar() {
    document.write(`Estado de la cuenta de ${this.titular}:`);
    document.write(`Saldo actual: $${this.saldo}<br>`);
  }
}

const cuentaAlex = new Cuenta("Alex");

cuentaAlex.informar();

cuentaAlex.ingresarDinero(1000);

// Retirar dinero
cuentaAlex.extraerDinero(300);

// Mostrar descripción actualizada
cuentaAlex.informar();

