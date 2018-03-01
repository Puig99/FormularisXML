var formElement =null;
var respuestaSelect = [];
var respuestasMultiple = [];
var respuestaText = [];
var respuestaRadio =[];
var respuestasCheckbox = [];
var nota = 0;

window.onload=function(){
	
	formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   if (comprobar()){
    corregirNumber();
    corregirSelect();
    corregirCheckbox();
    presentarNota();
   }
   return false;
 }

	//Leer XML
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			gestionarXml(this);
		}
	};
	
	xhttp.open("GET","xml/questions.xml", true);
	xhttp.send();
	
	//recuperamos datos del XML, el fichero se lee como xmlDOC

	function gestionarXml(dadesXml){
		var xmlDoc = dadesXml.responseXML;
		
		//Text
		var tituloInput1=xmlDoc.getElementsByTagName("title")[0].innerHTML;
		ponerDatosInputHtml(tituloInput1);
		respuestaText=parseText(xmlDoc.getElementsByTagName("answer")[0].innerHTML;
		
		var tituloInput2=xmlDoc.getElementsByTagName("title")[1].innerHTML;
		ponerDatosInputHtml(tituloInput2);
		respuestaText=parseText(xmlDoc.getElementsByTagName("answer")[1].innerHTML;
	
		//Select
		var tituloSelect1=xmlDoc.getElementsByTagName("title")[2].innerHTML;
		var opcionesSelect1= [];
		var nopt=xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect[i] = xmlDoc.getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml(tituloSelect1,opcionesSelect1);
			respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML;
		
		//Select multiple
		
		//checkbox
		
		//radio
	
