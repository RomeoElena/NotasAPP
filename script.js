const campoNota = document.getElementById("campoNota");
const botonAgregar = document.getElementById("botonAgregar");
const listaNotas = document.getElementById("listaNotas");

function agregarNota() {
  const textoNota = campoNota.value;

  if (textoNota === "") {
    alert("Introduce la nota, por favor!");
    return;
  }

  const nuevaNota = document.createElement("li");
  nuevaNota.className = "nota";

  const textoElemento = document.createElement("span");
  textoElemento.className = "texto-nota";
  textoElemento.textContent = textoNota;

  const botonEliminar = document.createElement("button");
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = "Eliminar";

  botonEliminar.onclick = function () {
    listaNotas.removeChild(nuevaNota);
  };

  nuevaNota.appendChild(textoElemento);
  nuevaNota.appendChild(botonEliminar);

  listaNotas.appendChild(nuevaNota);

  campoNota.value = "";
}

botonAgregar.onclick = function () {
  agregarNota();
};

campoNota.onkeypress = function (evento) {
  if (evento.key === "Enter") {
    agregarNota();
  }
};
