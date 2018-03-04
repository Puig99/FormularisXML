var formElement = null;
var respuestaSelect1 = null;
var respuestaSelect2 = null;
var respuestaSMultiple1 = [];
var respuestaSMultiple2 = [];
var respuestaText1= null;
var respuestaText2 = null;
var respuestaText3= null;
var respuestaRadio1 = [];
var respuestaRadio2 = [];
var respuestasCheckbox1 = [];
var respuestasCheckbox2 = [];
var nota = 0;

window.onload=function(){
	
	/*
	//Corregir

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
		ponerDatosInputHtml1(tituloInput1);
		respuestaText1=xmlDoc.getElementById("profe001").getElementsByTagName("answer")[0];
		
		
		var tituloInput2=xmlDoc.getElementsByTagName("title")[1].innerHTML;
		ponerDatosInputHtml2(tituloInput2);
		respuestaText2 = xmlDoc.getElementById("profe002").getElementsByTagName("answer")[1];
		
		var tituloInput3=xmlDoc.getElementsByTagName("title")[2].innerHTML;
		ponerDatosInputHtml3(tituloInput3);
		respuestaText3=xmlDoc.getElementById("profe003").getElementsByTagName("answer")[2];
		
	
		
	
		//Select
		var tituloSelect1=xmlDoc.getElementsByTagName("title")[3].innerHTML;
		var opcionesSelect1= [];
		var nopt=xmlDoc.getElementById("profe004").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect1[i] = xmlDoc.getElementById("profe004").getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml1(tituloSelect1,opcionesSelect1);
			respuestaSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[3].innerHTML);
			
			
		var tituloSelect2=xmlDoc.getElementsByTagName("title")[4].innerHTML;
		var opcionesSelect2= [];
		var nopt=xmlDoc.getElementById("profe005").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect2[i] = xmlDoc.getElementById('profe005').getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);
			respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
		
		var tituloSelect3=xmlDoc.getElementsByTagName("title")[5].innerHTML;
		var opcionesSelect3= [];
		var nopt=xmlDoc.getElementById("profe006").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect3[i] = xmlDoc.getElementById('profe006').getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml3(tituloSelect3,opcionesSelect3);
			respuestaSelect3=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);
		
		
		//Select multiple
	
		
		var tituloSMultiple1=xmlDoc.getElementsByTagName("title")[6].innerHTML;
		var opcionesSMultiple1=[];
		var nopt=xmlDoc.getElementById("profe007").getElementsByTagName('option').length;
			for (i=0; i<nopt; i++){
				opcionesSMultiple1[i]=xmlDoc.getElementsByTagName('option')[i].innerHTML;
			}
		ponerDatosSMultipleHtml1(tituloSMultiple1,opcionesSMultiple1);
		respuestaSMultiple1=parseInt(xmlDoc.getElementsByTagName("answer")[6].innerHTML);
			
		var tituloSMultiple2=xmlDoc.getElementsByTagName("title")[7].innerHTML;
		var opcionesSMultiple2=[];
		var nopt=xmlDoc.getElementById("profe008").getElementsByTagName('option').length;
			for (i=0; i<nopt; i++){
				opcionesSMultiple2[i]=xmlDoc.getElementById("profe008").getElementsByTagName('option')[i].innerHTML;
			}
		ponerDatosSMultipleHtml2(tituloSMultiple2,opcionesSMultiple2);
		respuestaSMultiple2=parseInt(xmlDoc.getElementsByTagName("answer")[7].innerHTML);
		
		//checkbox
		var tituloCheckbox1=xmlDoc.getElementsByTagName("title")[8].innerHTML;
		var opcionesCheckbox1 = [];
		var nopt =xmlDoc.getElementById("profe009").getElementsByTagName('option').length;
			for (i=0; i< nopt; i++){
				opcionesCheckbox1[i]=xmlDoc.getElementById("profe009").getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosCheckboxHtml1(tituloCheckbox1,opcionesCheckbox1);
			var nres=xmlDoc.getElementById("profe009").getElementsByTagName('answer').length;
				for (i=0; i< nres; i++){
					respuestasCheckbox1[i]=parseInt(xmlDoc.getElementById("profe009").getElementsByTagName("answer")[i].innerHTML);
				}
		
		
		//radio
		var tituloRadio1=xmlDoc.getElementsByTagName("title")[9].innerHTML;
		var opcionesRadio1=[];
		var nopt=xmlDoc.getElementById("profe010").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesRadio1[i]= xmlDoc.getElementById("profe010").getElementsByTagName("option")[i].innerHTML;
			}
			ponerDatosRadioHtml1(tituloRadio1,opcionesRadio1);
			var nres=xmlDoc.getElementById("profe010").getElementsByTagName("answer").length;
				for (i=0; i< nres; i++){
						respuestaRadio1[i]=xmlDoc.getElementById("profe010").getElementsByTagName("answer")[i].innerHTML;
				}
				
	
	
	//Poner los datos en el HTML
	function ponerDatosInputHtml1(t){
		document.getElementById("tituloInput1").innerHTML = t;
	}
	
	function ponerDatosInputHtml2(t){
		document.getElementById("tituloInput2").innerHTML=t;
	}
		
		function ponerDatosInputHtml3(t){
		document.getElementById("tituloInput3").innerHTML=t;
	}
	
	function ponerDatosSelectHtml1(t,opt){
  		document.getElementById("tituloSelect1").innerHTML=t;
  		var select = document.getElementsByTagName("select")[0];
  		for (i = 0; i < opt.length; i++) { 
    			var option = document.createElement("option");
    				option.text = opt[i];
    				option.value=i+1;
   				 select.options.add(option);
 		}  
	}
	
	function ponerDatosSelectHtml2(t,opt){
		document.getElementById("tituloSelect2").innerHTML=t;
		var select = document.getElementsByTagName("select")[1];
		for (i=0; i< opt.length; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value= i+1;
			select.options.add(option);
		}
	}
	
		function ponerDatosSelectHtml3(t,opt){
		document.getElementById("tituloSelect3").innerHTML=t;
		var select = document.getElementsByTagName("select")[2];
		for (i=0; i< opt.length; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value= i+1;
			select.options.add(option);
		}
	}
}
		

	function ponerDatosSMultipleHtml1(t,opt){
		document.getElementById("tituloSMultiple1").innerHTML=t;
		var select = document.getElementsByTagName("select")[2];
		for (i=0; i < opt.length; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value= i+1;
			select.options.add(option);
			
		}
	}

	function ponerDatosSMultipleHtml2(t,opt){
		document.getElementById("tituloSMultiple2").innerHTML=t;
		var select = document.getElementsByTagName("select")[3];
		for (i=0; i < opt.length; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value=i+1;
			select.options.add(option);
			
		}
	}
	
	function ponerDatosCheckboxHtml1(t,opt){
 		var checkboxContainer=document.getElementById("checkboxDiv1");
		document.getElementById("tituloCheckbox1").innerHTML = t;
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


	function ponerDatosRadioHtml1(t,opt){
		var radioContainer1=document.getElementById('radioDiv1');
			document.getElementById("tituloRadio1").innerHTML=t;
			for (i=0; i < opt.length; i++){
				var input= document.createElement("input");
				var label= document.createElement("label");
				label.innerHTML=opt[i];
				label.setAttribute("for", "color3_"+i);
   			 input.type="radio";
   			 input.name="color3";
   			 input.id="color3_"+i;;    
   			 radioContainer1.appendChild(input);
   			 radioContainer1.appendChild(label);
   			 radioContainer1.appendChild(document.createElement("br"));
 }  
}
}
				
