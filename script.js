let contador = 0;

const botonAumentar = document.getElementById("aumentar");
const botonResetear = document.getElementById("resetar");
const botonDisminuir = document.getElementById("disminuir");
const valor = document.getElementById("value");

botonAumentar.addEventListener("click", (e) => {
  contador++;
  valor.textContent = contador
  checkNumber(contador)
});
botonDisminuir.addEventListener("click", (e) => {
    contador--;
    valor.textContent = contador
    checkNumber(contador)
  });
  botonResetear.addEventListener("click", (e) => {
    contador = 0;
    valor.textContent = contador
    checkNumber(contador)
  });


function checkNumber(contador){
    if(contador > 0){
        valor.style.color = "green";
      } else if(contador < 0){
        valor.style.color = "red";
      } else if(contador === 0){
        valor.style.color = "black";
      }
}