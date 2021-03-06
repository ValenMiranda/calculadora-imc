function calcularIMC(){
	var peso = leerInput("kilogramos");
	var altura = leerInput("centimetros");

	if (validarPesoYAltura(peso, altura)) {
	    alert(IMC(peso,altura));
	}

	return false;
}

function validarBlanco(txt){
	return txt != '';
}

function validarPesoYAltura(peso, altura){
	return validarBlanco(peso) && validarBlanco(altura);
}

function leerInput(nombre){
	return document.getElementById(nombre).value;
}

function EnteroEntre100(valor){
	return parseInt(valor)/100;
}

function IMC(peso, altura){
	return (peso/(Math.pow(EnteroEntre100(altura),2))).toFixed(2);
}

