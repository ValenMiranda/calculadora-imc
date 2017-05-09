function calculadora(){
	var peso = document.getElementById("kilogramos").value;
	var altura = document.getElementById("centimetros").value;
	var resultado;

	if(peso!="" && altura!=""){
		altura = parseInt(altura)/100;
    	resultado = peso/(altura*altura);
     	alert(resultado.toFixed(2));
	}
}