function setBarraDeProgresoHistorial(){
window.tiempoRestante = 20;
window.progreso = 0;
window.intervalo = setInterval(function() {
if (window.tiempoRestante > 0) {
window.progreso = ((20 - window.tiempoRestante + 1) / 20) * 100;
document.getElementById("progresoTexto").style.width = window.progreso + '%';
document.getElementById("progresoTexto").innerHTML = Math.floor(window.progreso) + '%';
window.tiempoRestante--;
} else {
clearInterval(window.intervalo);
document.getElementById("barraDeProgreso_Modal").style.display = "none";
setHistorial(0);
}
},1000);
document.getElementById("barraDeProgreso_Modal").style.display = "flex";
}


function reiniciarProgreso(){
window.tiempoRestante = 20; // Reiniciamos el tiempo restante
window.progreso = 0; // Reiniciamos el progreso visual
document.getElementById("progresoTexto").style.width = '0%';
document.getElementById("progresoTexto").innerHTML = '0%';
}
