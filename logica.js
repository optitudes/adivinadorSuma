
function iniciar(){
	resultado=document.getElementById('resultado');
	resultadoTotal=document.getElementById('resultadoTotal');

	primerNumero=document.getElementById('primerNumero');
	primerNumero.addEventListener('blur',calcularResultado,false);	

	segundoNumero=document.getElementById('segundoNumero');
	segundoNumero.addEventListener('blur',calcularPrimerAutomatico,false);	

	tercerNumero=document.getElementById('tercerNumero');
	tercerNumero.addEventListener('blur',calcularSegundoAutomatico,false);
	
	primerAutomatico=document.getElementById('primerAutomatico');
	segundoAutomatico=document.getElementById('segundoAutomatico');

	button=document.getElementById('boton');
	button.addEventListener('click',presionar,false);
}

function calcularSegundoAutomatico(){
	var numero=parseInt(tercerNumero.value);
	var resultado=obtenerNumeroAutomatico(numero);
	segundoAutomatico.innerHTML=resultado;
}


function calcularPrimerAutomatico(){
	var numero=parseInt(segundoNumero.value);
	var resultado=obtenerNumeroAutomatico(numero);
	primerAutomatico.innerHTML=resultado;
}
function obtenerNumeroAutomatico(numero){
	var numeroString=""+numero;
	var resultadoString="";
	var digito;
	
	for(i=0;i<numeroString.length;i++){
	digito=parseInt(numeroString[i]);
	resultadoString+=""+(Math.abs(digito-9));
	}
	return resultadoString;	
}

function presionar(){
	var formularioValido=true;
	if(primerNumero.value=="" || primerNumero.value.length!=3){
		alert("el primer número debe ser de tres cifras");
		primerNumero.focus();
		formularioValido=false;
	}
	if(segundoNumero.value=="" || segundoNumero.value.length!=3){
		alert("el segundo número debe ser de tres cifras");
		segundoNumero.focus();
		formularioValido=false;
	}
	if(tercerNumero.value=="" || tercerNumero.value.length!=3){
		alert("el tercer número debe ser de tres cifras");
		tercerNumero.focus();
		formularioValido=false;
	}
	
	if(primerAutomatico.innerHTML.length!=3){
		segundoNumero.focus();
		formularioValido=false;	
	}
	if(segundoAutomatico.innerHTML.length!=3){
		tercerNumero.focus();
		formularioValido=false;	
	}
	
	if(formularioValido){obtenerSumaTotal();}
	
	

}
function calcularResultado(){
	var numero=parseInt(primerNumero.value);
	var cantDigitosInicial=(numero+"").length;
	if(Number.isInteger(numero)){
		if(numero>2){
			var valorResidual=numero-2;
			var cantDigitosResultado=(""+valorResidual).length;
			
			setearResultadoTipo1(valorResidual,cantDigitosInicial);
		}else{
			alert("Ingrese un número positivo");
		}

	}else{
		alert("Ingrese un número");
	}

}
function setearResultadoTipo1(valorResidual,cantDigitosAdicion){
	var adicion="2"
	for(i=0; i<cantDigitosAdicion;i++){
	adicion+="0";
	}
	var adicionInt=parseInt(adicion);
	adicionInt+=valorResidual;
	resultado.innerHTML=adicionInt;
	
}
function obtenerSumaTotal(){
	var resultadoSuma=sumarValores();
	var ecuacion=obtenerEcuacion();

	resultadoTotal.innerHTML=ecuacion+" = "+resultadoSuma;
}
function sumarValores(){
	var resultadoSuma=0;
	resultadoSuma+=parseInt(primerNumero.value);
	resultadoSuma+=parseInt(segundoNumero.value);
	resultadoSuma+=parseInt(primerAutomatico.innerHTML);
	resultadoSuma+=parseInt(tercerNumero.value);
	resultadoSuma+=parseInt(segundoAutomatico.innerHTML);
	return resultadoSuma;
}

function obtenerEcuacion(){
	var mensaje="";
	mensaje+=primerNumero.value+" + ";
	mensaje+=segundoNumero.value+" + ";
	mensaje+=primerAutomatico.innerHTML+" + ";
	mensaje+=tercerNumero.value+" + ";
	mensaje+=segundoAutomatico.innerHTML;
	return mensaje;
}

window.addEventListener('load',iniciar,false);

