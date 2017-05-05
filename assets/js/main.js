function miSquad(nombreApellido,edad,hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
  	this.hobbies = hobbies;
}

var las666 = [];
var Macarena = new miSquad("Macarena Baltra",28,["Encuadernar", "Comer", "Cocinar"]);
var Berenisse = new miSquad("Berenisse Rios",28,["Yoga", "Pintar", "Cocinar"]);
var Susana = new miSquad("Susana Arce",28,["Escribir", "Golpear", "Viajar"]);
var Francisca = new miSquad("Francisca Ruiz-Tagle",35,["Dibujar", "Manualidades","Leer"]);
var Rata = new miSquad("Andrea Rata",24,["Dibujar", "Los roedores","Su hijo"]);
var Claudia = new miSquad("Claudia Rivera",33,["Gatos", "Escribir","Leer"]);
var Dani = new miSquad("Daniela Medina",20,["Bailar", "Cocinar","Leer"]);
var Nicole = new miSquad("Nicole Aliste",32,["Video Juegos", "Leer","Dibujar"]);

las666.push(Macarena, Berenisse, Susana, Francisca, Rata, Claudia, Dani, Nicole);

var imprimir = document.getElementById("mi-squad");

las666.forEach(function(squadM){

    imprimir.innerHTML +=  '<b>Nombre y Apellido:</b> ' + squadM.nombreApellido + '<br><b>Edad:</b> ' + squadM.edad + "  años" + '<br><b>Hobbies: </b>';
    var listaHobbie =  squadM.hobbies.forEach(function(companera){
    	return (imprimir.innerHTML += companera + ", ")});
   imprimir.innerHTML += '<br><br>' ;
})
