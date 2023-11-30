/* Evitar usar var, lo cambié por const. y form no aparece como un ID en el HTML, lo cambié por .formlario */
const formulario = document.querySelector(".formulario");

/* e no me da nada de inforamción de qué hace la función, y la función no tiene nombre, los cambiaré */
formulario.onsubmit = function revisarErroresYAgregarInvitadoSinErrores(submitFormEvent) {

  /* Googleé el .prevent y sólo me salieron resultados de .preventDefault(), lo dejaré en nota en lo que entiendo cómo funciona el resto */
  submitFormEvent.preventDefault();

  /* Los nombres de las variables no son suficientemente explícitos, los cambio. También cambiaré var por const. */
  const nombreDivInHTML = formulario.elements[0];
  const nombre = nombreDivInHTML.value;

  const edadDivInHTML = formulario.elements[1];
  const edad = edadDivInHTML.value;
  
  const index = (formulario.elements[2]).selectedIndex;
  const nacionalidad = (formulario.elements[2]).options[index].value;

  /* Junté los dos console log en uno solo */
  console.log(`Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`);

  /* Cambié el tercer if por un else y el segundo por un else if */
  if (nombre.length === 0) {
    nombreDivInHTML.classList.add("error")
  } else if (edad < 18 || edad > 120) {
    edadDivInHTML.classList.add("error")
  } else {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {


  /* Voy a comentar (o en otras palabras borrar) todo esto porque me parece mejor sólo cambiarlo en el HTML, incluso ofrecería mayor claridad
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  */

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.added("elemento-lista")
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}

/* Uso la opción de format document con frecuencia, probablemente también cambié el acomodo de las líneas como consecuencia */