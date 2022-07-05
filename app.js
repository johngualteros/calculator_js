const displayValorAnterior = document.getElementById("before-value");
const displayValorActual = document.getElementById("actual-value");
const botonesNumeros = document.querySelectorAll(".number");
const botonesOperadores = document.querySelectorAll(".operator");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
