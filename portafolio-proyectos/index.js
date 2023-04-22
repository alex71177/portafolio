

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#Portafolio", {
    speed: 300,
    loop: true,
    strings: [`! BIENVENIDOS  \n A   MI PORTAFOLIO `],
  }).go();
});
function leer() {
  let leermas = document.getElementById("leermas");
  let btnmas = document.getElementById("btnmas")

  if (leermas.style.display === "inline") {
    leermas.style.display = "none";
    btnmas.textContent="Leer mas..."

  } else {
    leermas.style.display = "inline";
    btnmas.textContent="ocultar"
  }
  audio()
}
 function audio() {
  let btnaudio = document.getElementById("btnaudio")
  btnaudio.play()
 }
 let lista= ["alex","ana","marta","paola","daniela"]
 function ordenar() {
  console.log("hola")
 }
 let s=lista.sort(ordenar)

 console.log(s)
// const nav= document.getElementById("Portafolio")
// const btn = document.getElementById("")

// window.addEventListener("scroll",()=>{

//   if (nav.getBoundingClientRect().top < 10) {
//     afterbifor.classList.add("scroll")
//   } else {
//     afterbifor.classList.remove("scroll")
    
//   }
// })