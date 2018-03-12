function myFunction(contenidoAlto) {
	var c = document.getElementById("contenido");
    var w = window.innerWidth;
    var h = window.innerHeight;
    var margenSuperior = (h/2)-(contenidoAlto/2);
    c.style.top= margenSuperior+"px";
    c.style.right= "0px";
}

function forVideo(contenidoAlto) {
	var c = document.getElementById("contenido");
    var w = window.innerWidth;
    var h = window.innerHeight;
    var margenSuperior = (h/2)-(contenidoAlto/2);
    //alert(h+" "+contenidoAlto+" "+margenSuperior);
    c.style.top= margenSuperior+"px";
    c.style.right= "0px";
}