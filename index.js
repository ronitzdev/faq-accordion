console.log("funcionando");

//agregar o remover displat
function agrega(p) {
  //agrego display inline
  p.classList.add("open");
  p.classList.remove("close");
}
function remueve(p) {
  //agrego display none
  p.classList.remove("open");
  p.classList.add("close");
}

//una vez cargado el dom
document.addEventListener("DOMContentLoaded", function () {
  //seleccion de elementos con icono plus
  var elementos = document.querySelectorAll(".plus");

  //dependiendo de clase actual, cambia icono y llama a mostrar o quitar display
  elementos.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      if (elemento.classList.contains("plus")) {
        elemento.classList.remove("plus");
        elemento.classList.add("minus");
        let padre = elemento.parentElement;
        let p = padre.lastElementChild;
        agrega(p);
      } else {
        elemento.classList.remove("minus");
        elemento.classList.add("plus");
        let padre = elemento.parentElement;
        let p = padre.lastElementChild;
        remueve(p);
      }
    });
  });
});
