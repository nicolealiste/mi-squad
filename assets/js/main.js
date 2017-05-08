function miSquad(nombreApellido,edad,hobbies,imagen){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
  	this.hobbies = hobbies;
  	this.imagen=imagen;
}

var las666 = [];
var Macarena = new miSquad("Macarena Baltra",28,["Encuadernar", "Comer", "Cocinar"],"<img src='https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/18033270_10212135247637363_6565892701137855007_n.jpg?oh=6c325c74a98d50e288e40c69522e1e2c&oe=5982F2EE' +' width='300'+ ' height='250'+ >");
var Berenisse = new miSquad("Berenisse Rios",28,["Yoga", "Pintar", "Cocinar"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-9/15966261_10154228513992596_8000138402316820400_n.jpg?oh=ffdc011a80aa6f18b08af14da3bf1231&oe=5975D581' +' width='300'+ ' height='250'+ >");
var Susana = new miSquad("Susana Arce",28,["Escribir", "Golpear", "Viajar"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-9/13892181_10153830948617951_7010852204834148849_n.jpg?oh=22b0736c223acadf02ed95f8617d56bd&oe=59799083' +' width='300'+ ' height='250'+ >");
var Francisca = new miSquad("Francisca Ruiz-Tagle",35,["Dibujar", "Manualidades","Leer"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-9/16602940_10155125590183945_1733553680931193811_n.jpg?oh=0dae64986f2bc0949e9f1226e2a28958&oe=59771CE7' +' width='300'+ ' height='250'+ >");
var Rata = new miSquad("Andrea Rata",24,["Dibujar", "Los roedores","Su hijo"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-9/15170848_10206026567142748_144952310753163857_n.jpg?oh=dff3b477e47169000c295fb2cd54c929&oe=5988CF8A' +' width='300'+ ' height='250'+ >");
var Claudia = new miSquad("Claudia Rivera",33,["Gatos", "Escribir","Leer"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-9/17760150_1624682187556784_9160477484084857671_n.jpg?oh=40497ed67f37849bf0b8de672e8c7ca1&oe=59B387EC' +' width='300'+ ' height='250'+ >");
var Dani = new miSquad("Daniela Medina",20,["Bailar", "Cocinar","Leer"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-9/16832090_1824874897753143_8867235014443322127_n.jpg?oh=9131b8395ddaecd74b68d461082f79e4&oe=5976213A' +' width='300'+ ' height='250'+ >");
var Nicole = new miSquad("Nicole Aliste",32,["Video Juegos", "Leer","Dibujar"],"<img src='https://scontent.fgru3-1.fna.fbcdn.net/v/t31.0-8/s960x960/15936750_275221116228738_5411288391083819582_o.jpg?oh=19ae586348f671d9d7655e24a894600d&oe=59837FE8' +' width='300'+ ' height='250'+ >");

las666.push(Macarena, Berenisse, Susana, Francisca, Rata, Claudia, Dani, Nicole);

var imprimir = document.getElementById("mi-squad");

las666.forEach(function(squadM){

    imprimir.innerHTML += squadM.imagen +'<br><br>' +'<b>Nombre y Apellido:</b> ' + squadM.nombreApellido + '<br><b>Edad:</b> ' + squadM.edad + "  años" + '<br><b>Hobbies: </b>';
    var Hobbie =  squadM.hobbies.forEach(function(companera){
    	return (imprimir.innerHTML += "<li>"+ companera + "</li>")});
   	imprimir.innerHTML += '<br><br>' ;
})

function getCooments(){
	var input = document.getElementById("comment-box");

	var contComent = document.getElementsByClassName("printComment");

	contComent[0].innerHTML += input.value +"<br>";

	input.value = "";
}
