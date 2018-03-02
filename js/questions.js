var formElement =null;
var respuestaSelect = null;
var respuestaSMultiple = [];
var respuestaText= null;
var respuestaRadio =[];
var respuestasCheckbox = [];
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
		respuestaText=xmlDoc.getElementById("profe001").getElementsByTagName("answer")[0].innerHTML;
		
		
		var tituloInput2=xmlDoc.getElementsByTagName("title")[1].innerHTML;
		ponerDatosInputHtml2(tituloInput2);
		respuestaText=xmlDoc.getElementById("profe002").getElementsByTagName("answer")[1].innerHTML;
	
		
	
		//Select
		var tituloSelect1=xmlDoc.getElementsByTagName("title")[2].innerHTML;
		var opcionesSelect1= [];
		var nopt=xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect1[i] = xmlDoc.getElementById('profe003').getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml1(tituloSelect1,opcionesSelect1);
			respuestaSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
			
			
		var tituloSelect2=xmlDoc.getElementsByTagName("title")[3].innerHTML;
		var opcionesSelect2= [];
		var nopt=xmlDoc.getElementById("profe004").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesSelect2[i] = xmlDoc.getElementById('profe004').getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);
			respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[3].innerHTML);
		
		//Select multiple
	
		
		var tituloSMultiple1=xmlDoc.getElementsByTagName("title")[4].innerHTML;
		var opcionesSMultiple1=[];
		var noptm=xmlDoc.getElementbyId("profe005").getElementsByTagName('option').length;
			for (i=0; i<noptm; i++){
				opcionesSMultiple1[i]=xmlDoc.getElementsByTagName('option')[i].innerHTML;
			}
		ponerDatosSMultipleHtml1(tituloSMultiple1,opcionesSMultiple);
		respuestaSMultiple1=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
			
		var tituloSMultiple2=xmlDoc.getElementsByTagName("title")[5].innerHTML;
		var opcionesSMultiple2=[];
		var noptm=xmlDoc.getElementbyId("profe006").getElementsByTagName('option').length;
			for (i=0; i<noptm; i++){
				opcionesSMultiple2[i]=xmlDoc.getElementById("profe006").getElementsByTagName('option')[i].innerHTML;
			}
		ponerDatosSMultipleHtml2(tituloSMultiple2,opcionesSMultiple);
		respuestaSMultiple2=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);
		
		//checkbox
		var tituloCheckbox1=xmlDoc.getElementsByTagName("title")[6].innerHTML;
		var opcionesCheckbox1 = [];
		var nopt =xmlDoc.getElementById("profe007").getElementsByTagName('option').length;
			for (i=0; i< nopt; i++){
				opcionesCheckbox1[i]=parseInt(xmlDoc.getElementById("profe007").getElementsByTagName('option')[i].innerHTML);
			}
			ponerDatosCheckboxHtml1(tituloCheckbox1,opcionesCheckbox1);
			var nres=xmlDoc.getElementById("profe007").getElementsByTagName('answer').length;
				for (i=0; i< nres; i++){
					respuestasCheckbox1[i]=xmlDoc.getElementById("profe007").getElementsByTagName("answer")[i].innerHTML;
				}
				
		var tituloCheckbox2=xmlDoc.getElementsByTagName("title")[7].innerHTML;
		var opcionesCheckbox2 = [];
		var nopt =xmlDoc.getElementById("profe008").getElementsByTagName('option').length;
			for (i=0; i< nopt; i++){
				opcionesCheckbox2[i]=xmlDoc.getElementById("profe008").getElementsByTagName('option')[i].innerHTML;
			}
			ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);
			var nres=xmlDoc.getElementById("profe008").getElementsByTagName('answer').length;
				for (i=0; i< nres; i++){
					respuestasCheckbox2[i]=xmlDoc.getElementById("profe008").getElementsByTagName("answer")[i].innerHTML;
				}
	
		
		//radio
		var tituloRadio1=xmlDoc.getElementsByTagName("title")[8].innerHTML;
		var opcionesRadio1=[];
		var nopt=xmlDoc.getElementById("profe009").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesRadio1[i]= xmlDoc.getElementById("profe009").getElementsByTagName("option")[i].innerHTML;
			}
			ponerDatosRadioHtml1(tituloRadio1,opcionesRadio);
			var nres=xmlDoc.getElementById("profe009").getElementsByTagName("answer").length;
				for (i=0; i< nres; i++){
						respuestasRadio1[i]=xmlDoc.getElementById("profe009").getElementsByTagName("answer")[i].innerHTML;
				}
				
		var tituloRadio2=xmlDoc.getElementsByTagName("title")[9].innerHTML;
		var opcionesRadio2=[];
		var nopt=xmlDoc.getElementById("profe010").getElementsByTagName('option').length;
			for (i = 0; i < nopt; i++){
				opcionesRadio2[i]= xmlDoc.getElementById("profe010").getElementsByTagName("option")[i].innerHTML;
			}
			ponerDatosRadioHtml2(tituloRadio1,opcionesRadio);
			var nres=xmlDoc.getElementById("profe010").getElementsByTagName("answer").length;
				for (i=0; i< nres; i++){
						respuestasRadio2[i]=xmlDoc.getElementById("profe010").getElementsByTagName("answer")[i].innerHTML;
				
				}
	}
	
	//Poner los datos en el HTML
	function ponerDatosInputHtml1(t){
		document.getElementById("tituloInput1").innerHTML = t;
	}
	
	function ponerDatosInputHtml2(t){
		document.getElementById("tituloInput2").innerHTML=t;
	}
	
	function ponerDatosSelectHtml1(t,opt){
		document.getElementById("tituloSelect1").innerHTML=t;
		var select = document.getElementsByTagName("select")[0];
		for (i=0; i< opt.lenght; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value= i+1;
			select.options.add(option);
		}
	}
	
	function ponerDatosSelectHtml2(t,opt){
		document.getElementById("tituloSelect2").innerHTML=t;
		var select = document.getElementsByTagName("select")[1];
		for (i=0; i< opt.lenght; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value= i+1;
			select.options.add(option);
		}
	}
	
}

	function ponerDatosSMultipleHtml1(t,opt){
		document.getElementById("tituloSMultiple1").innerHTML=t;
		var select = document.getElementsByTag("select")[2];
		for (i=0; i < opt.lenght; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value= i+1;
			select.options.add(option);
			
		}
	}

	function ponerDatosSMultipleHtml2(t,opt){
		document.getElementById("tituloSMultiple2").innerHTML=t;
		var select = document.getElementsByTag("select")[3];
		for (i=0; i < opt.lenght; i++){
			var option = document.createElement("option");
			option.text= opt[i];
			option.value=i+1;
			select.options.add(option);
			
		}
	}
	
	function ponerDatosCheckboxHtml1(t,opt){
		var checkboxContainer=document.getElementById('checkboxDiv1');
		document.getElementById('tituloCheckbox1').innerHTML=t;
			for (i=0;i < opt.lenght; i++){
				var input= document.createElement("input");
				var label= document.createElement("label");
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
	
	function ponerDatosCheckboxHtml2(t,opt){
		var checkboxContainer=document.getElementById('checkboxDiv2');
		document.getElementById('tituloCheckbox2').innerHTML=t;
			for (i=0;i < opt.lenght; i++){
				var input= document.createElement("input");
				var label= document.createElement("label");
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
	
	
	
