var formElement =null;
var respuestaSelect = null;
var respuestaSMultiple = [];
var respuestaText = null;
var respuestaRadio =[];
var respuestasCheckbox = [];
var nota = 0;

window.onload=function(){
	
	/*
	//Corregir
	formElement = document.getElementById('myform');
	formElement.onsubmit = function(){
		*/

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
		var opcionesSelect= [];
		var nopt=xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect[i] = xmlDoc.getElementsById('profe003').getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml(tituloSelect1,opcionesSelect);
			respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
			
			
		var tituloSelect2=xmlDoc.getElementsByTagName("title")[3].innerHTML;
		var opcionesSelect= [];
		var nopt=xmlDoc.getElementById("profe004").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect[i] = xmlDoc.getElementsById('profe004').getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml(tituloSelect2,opcionesSelect);
			respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[3].innerHTML);
		
		//Select multiple
		var tituloSMultiple1=xmlDoc.getElementsByTagName("title")[4].innerHTML;
		var opcionesSMultiple=[];
		var nopt=xmlDoc.getElementbyId("profe005").getElementsByTagName('option').length;
			for (i=0; i<nopt; i++){
				opcionesSMultiple[i]= xmlDoc.getElementsByTagName('option')[i].innerHTML;
			}
		ponerDatosSMultipleHtml(tituloSMultiple1,opcionesSMultiple);
		respuestaSMultiple=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
				
	var tituloSMultiple2=xmlDoc.getElementsByTagName("title")[5].innerHTML;
		var opcionesSMultiple=[];
		var nopt=xmlDoc.getElementbyId("profe006").getElementsByTagName('option').length;
			for (i=0; i<nopt; i++){
				opcionesSMultiple[i]= xmlDoc.getElementById("profe006").getElementsByTagName('option')[i].innerHTML;
			}
		ponerDatosSMultipleHtml(tituloSMultiple2,opcionesSMultiple);
		respuestaSMultiple=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);
		
		//checkbox
		var tituloCheckbox1=xmlDoc.getElementsByTagName("title")[6].innerHTML;
		var opcionesCheckbox = [];
		var nopt =xmlDoc.getElementById("profe007").getElementsByTagName('option').length;
			for (i=0; i< nopt; i++){
				opcionesCheckbox[i]=parseInt(xmlDoc.getElementById("profe007").getElementsByTagName('option')[i].innerHTML);
			}
			ponerDatosCheckboxHtml(tituloCheckbox1,opcionesCheckbox);
			var nres=xmlDoc.getElementById("profe007").getElementsByTagName('answer').length;
				for (i=0; i< nres; i++){
					respuestasCheckbox[i]=xmlDoc.getElementById("profe007").getElementsByTagName("answer")[i].innerHTML;
				}
				
		var tituloCheckbox2=xmlDoc.getElementsByTagName("title")[7].innerHTML;
		var opcionesCheckbox = [];
		var nopt =xmlDoc.getElementById("profe008").getElementsByTagName('option').length;
			for (i=0; i< nopt; i++){
				opcionesCheckbox[i]=xmlDoc.getElementById("profe008").getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosCheckboxHtml(tituloCheckbox2,opcionesCheckbox);
			var nres=xmlDoc.getElementById("profe008").getElementsByTagName('answer').length;
				for (i=0; i< nres; i++){
					respuestasCheckbox[i]=xmlDoc.getElementById("profe008").getElementsByTagName("answer")[i].innerHTML;
				}
	
		
		//radio
		var tituloRadio1=xmlDoc.getElementsByTagName("title")[8].innerHTML;
		var opcionesRadio=[];
		var nopt=xmlDoc.getElementById("profe009").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesRadio[i]= xmlDoc.getElementById("profe009").getElementsByTagName("option")[i].innerHTML;
			}
			ponerDatosRadioHtml(tituloRadio1,opcionesRadio);
			var nres=xmlDoc.getElementById("profe009").getElementsByTagName("answer").length;
				for (i=0; i< nres; i++){
						respuestasRadio[i]=xmlDoc.getElementById("profe009").getElementsByTagName("answer")[i].innerHTML;
				}
				
		var tituloRadio2=xmlDoc.getElementsByTagName("title")[9].innerHTML;
		var opcionesRadio=[];
		var nopt=xmlDoc.getElementById("profe010").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesRadio[i]= xmlDoc.getElementById("profe010").getElementsByTagName("option")[i].innerHTML;
			}
			ponerDatosRadioHtml(tituloRadio1,opcionesRadio);
			var nres=xmlDoc.getElementById("profe010").getElementsByTagName("answer").length;
				for (i=0; i< nres; i++){
						respuestasRadio[i]=xmlDoc.getElementById("profe010").getElementsByTagName("answer")[i].innerHTML;
				
				}
	}
	
	//Poner los datos en el HTML
	
	function ponerDatosInputHtml(t){
		document.getElementById("tituloInput1").innerHTML= t;
	}
	function ponerDatosInputHtml(t){
		document.getElementById("tituloInput2").innerHTML= t;
	}
	
	function ponerDatosSelectHtml(t,opt){
		document.getElementById("tituloSelect1").innerHTML=t;
		var select= document.getElementsByTagName("select")[0];
		 for (i=0; i< opt.length; i++){
			 var option= document.createElement("option");
			 option.text= opt[i];
			 option.value= i+1;
			 select.options.add(option);
		 }
	}
	
	function ponerDatosSelectHtml(t,opt){
		document.getElementById("tituloSelect2")=t.innnerHTML=t;
		var select= document.getElementsByTagName("select")[0];
		 for (i=0; i< opt.length; i++){
			 var option= document.createElement("option");
			 option.text= opt[i];
			 option.value= i+1;
			 select.options.add(option);
		 }
		
	}
	
	function ponerDatosSMultipleHtml(t,opt){
		document.getElementById("tituloSMultiple1")=t;
	}
	
	function ponerDatosSMultipleHtml(t,opt){
		document.getElementById("tituloSMultiple2")=t;
	}
	
	function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv');
 document.getElementById('tituloCheckbox1').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  
}
	
	
