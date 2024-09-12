function setBarraDeProgreso(){
window.tiempoRestante = 20;
window.progreso = 0;
window.intervalo = setInterval(function() {
if(window.A_update_a_leerArchivo_conteo > 3) {
if(window.setBarraDeProgreso_caso==0){window.setHistorial();}
clearInterval(window.intervalo);
document.getElementById("barraDeProgreso_Modal").style.display = "none";
} else if (window.tiempoRestante > 0) {
window.progreso = ((20 - window.tiempoRestante + 1) / 20) * 100;
document.getElementById("progresoTexto").style.width = window.progreso + '%';
document.getElementById("progresoTexto").innerHTML = Math.floor(window.progreso) + '%';
window.tiempoRestante--;
} else {
if(window.setBarraDeProgreso_caso==0){window.setHistorial();}
clearInterval(window.intervalo);
document.getElementById("barraDeProgreso_Modal").style.display = "none";
}
},1000);
document.getElementById("barraDeProgreso_Modal").style.display = "flex";
}


function reiniciarProgreso(){
//clearInterval(intervalo); // Detenemos cualquier intervalo activo
window.setBarraDeProgreso_caso=-1;
window.tiempoRestante = 20; // Reiniciamos el tiempo restante
window.progreso = 0; // Reiniciamos el progreso visual
document.getElementById("progresoTexto").style.width = '0%';
document.getElementById("progresoTexto").innerHTML = '0%';
//setBarraDeProgreso(-1)// Volvemos a iniciar el progreso
}
