const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
//nombre = document.querySelector('[name=nombre]').value;
//nombre = document.querySelector('#nombre').value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (nombre.length >= 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }
  return '';
}
