document.addEventListener('DOMContentLoaded', () => {
  const fecha = document.getElementById('date');
  const idRadicador = document.getElementById('idRadicador');
  const Especialidad = document.getElementById('Especialidad');
  const Especialista = document.getElementById('Especialista');
  const TipoDocumento = document.getElementById('TipoDocumento');
  const Documento = document.getElementById('Documento');
  const NombrePaciente = document.getElementById('NombrePaciente');
  const Telefono1 = document.getElementById('Telefono1');
  const Telefono2 = document.getElementById('Telefono2');
  const EPS = document.getElementById('EPS');
  const Regimen = document.getElementById('Regimen');
  const Anestesia = document.getElementById('Anestesia');
  const Observaciones = document.getElementById('Observaciones');
  const Cups1 = document.getElementById('Cups1');
  const Procedimiento1 = document.getElementById('Procedimiento1');
  const Cups2 = document.getElementById('Cups2');
  const Procedimiento2 = document.getElementById('Procedimiento2');
  const Cups3 = document.getElementById('Cups3');
  const Procedimiento3 = document.getElementById('Procedimiento3');
  const Cups4 = document.getElementById('Cups4');
  const Procedimiento4 = document.getElementById('Procedimiento4');
  const Cups5 = document.getElementById('Cups5');
  const Procedimiento5 = document.getElementById('Procedimiento5');
  const CupsN = document.getElementById('CupsN');
  const ProcedimientoN = document.getElementById('ProcedimientoN');


  let datos = []
  // function changesData() {
  //   console.log(datos);
  // }
  
fecha.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

idRadicador.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Especialidad.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Especialista.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

TipoDocumento.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Documento.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

NombrePaciente.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Telefono1.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Telefono2.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

EPS.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Regimen.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Anestesia.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Observaciones.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Cups1.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Cups2.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Cups3.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Cups4.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Cups5.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Procedimiento1.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Procedimiento2.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Procedimiento3.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Procedimiento4.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

Procedimiento5.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});

ProcedimientoN.addEventListener('input', function (event){
    datos = event.target.value.toLowerCase();
    console.log(datos);
});


})







































// var modal = document.getElementById("ventanaModal");
// var modalConfirmacion = document.getElementById("modalConfirmacion");
// var boton = document.getElementById("abrirModal");
// var respuesta = document.getElementById("respuesta");
// var btnRed = document.getElementsByClassName("btnRed")[0];
// var accept = document.getElementsByClassName("accept")[0];
// var btnAccept = document.getElementsByClassName("btnAccept")[0];
// var span = document.getElementsByClassName("cerrar")[0];
// var cerrar = document.getElementsByClassName("cerrar2")[0];

// var radicador = document.getElementById("idRadicador").value;

// boton.addEventListener("click",function() {
//   modal.style.display = "block";
// });
// span.addEventListener("click",function() {
//   modal.style.display = "none";
// });
// cerrar.addEventListener("click",function() {
//   modalConfirmacion.style.display = "none";
// });
// btnRed.addEventListener("click",function() {
//   modal.style.display = "none";
// });
// accept.addEventListener("click",function() {
//   modal.style.display = "none";
  
//   console.log(radicador);
  

//   modalConfirmacion.style.display = "block";
// });
// btnAccept.addEventListener("click",function() {
//   modalConfirmacion.style.display = "none";
// });
// function limpiarFormulario() {
//   document.getElementById("#formulario").reset();
// }




// window.addEventListener("click",function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });