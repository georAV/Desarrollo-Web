function marcarError(campo, texto) // funcion que genera el parrafo de error
{
	campo.style.padding = "5px";
	campo.style.border = "solid 2px red";
	campo.innerHTML = texto;
}

function borrarError(campo) // funcion que borra los parrafos de error
{
	campo.innerHTML="";
	campo.style.padding = "0";
	campo.style.border = "0";
}

function validaUsuario()
{
	var contenidoUsuario=document.getElementById("usuario").value;
	var expAlfanum=/^[a-zA-Z0-9]{1,10}$/; // expresion regular para alfanumericos
	var expMinCar=/^[^]+$/; //exp. para campo vacío.
	var mensaje1=document.getElementById("mensaje1"); 
	
	if(!expMinCar.test(contenidoUsuario)) //comprueba que no esté vacío
	{ 
		marcarError(mensaje1, " Introduce tu usuario ");
		return false;
	}
		else
		{
			borrarError(mensaje1);
		}
		
	if (!expAlfanum.test(contenidoUsuario)) // comprueba que solo contenga alfanumericos y maximo 10
	{
		marcarError(mensaje1, " Caracter inválido\no usuario demasiado largo ");
		return false;
	}
		else
		{
			borrarError(mensaje1);
		}
	return true;
}

function validaContr()
{
	var contenidoContr=document.getElementById("password1").value;
	var contenidoUsuario=document.getElementById("usuario").value;
	var expMinCar=/^[^]+$/;
	var expMinimos=/(?!^[0-9]*$)^(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$/; //6 caracteres, 1 numero, 1 letra
	var mensaje2=document.getElementById("mensaje2");
	
	if (!expMinCar.test(contenidoContr)) // comprueba que la contraseña no este vacía
	{
		marcarError(mensaje2, " Introduce tu contraseña ");
		return false;
	}
		else
		{
			borrarError(mensaje2);
		}
	
	if (contenidoUsuario==contenidoContr) //comprueba que usuario y contraseña no sean iguales
	{
		marcarError(mensaje2, " Usuario y contraseña\nno pueden ser iguales ");
		return false;
	}
		else
		{
			borrarError(mensaje2);
		}
		
	if(!expMinimos.test(contenidoContr)) //comprueba minimo 6 caracteres, 1 letra y un numero
	{
		marcarError(mensaje2, " La contraseña debe terner al menos\n6 caracteres, un numero y una letra ");
		return false;
	}
		else
		{
			borrarError(mensaje2);
		}
		
	return true;
}

function validaContr2()
{
	var contenidoContr2=document.getElementById("password2").value;
	var contenidoContr=document.getElementById("password1").value;
	var expMinCar=/^[^]+$/;
	var mensaje3=document.getElementById("mensaje3");
	
	if (!expMinCar.test(contenidoContr2)) // comprueba que la contraseña no este vacía
	{
		marcarError(mensaje3, " Debes introducir tu contraseña ");
		return false;
	}
		else
		{
			borrarError(mensaje3);
		}
		
	if (contenidoContr2!=contenidoContr) //comprueba que contraseñas sean iguales
	{
		marcarError(mensaje3, " Las contraseñas deben ser iguales ");
		return false;
	}
		else
		{
			borrarError(mensaje3);
		}
	return true;
}

function validaEmail()
{
	var contenidoEmail=document.getElementById("email").value;
	var expEmail= /^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
	var mensaje4=document.getElementById("mensaje4");
	
	if(!expEmail.test(contenidoEmail))
	{
		marcarError(mensaje4, " Email inválido. El formato debe ser ejemplo@ejemplo.com ");
		return false;
	}
		else
		{
			borrarError(mensaje4);
		}
	return true;
}

function validaFecha()
{
	var contenidoFecha=document.getElementById("fecha").value;
	var expFecha=/^([0][1-9]|[12][0-9]|3[01])(\/)([0][1-9]|[1][0-2])(\/)([1][9][0-9][0-9]|[2][0][0][0-9]|[2][0][1][0-2])$/;
	var expFecha2= /^[0-9]|[012][0-9]|3[01]\/[0-9]|0[0-9]|1[12]\/(19[3-9][0-9]|20[1-2][1-9])$/
	var mensaje5=document.getElementById("mensaje5");
	
	if(!expFecha.test(contenidoFecha))
	{
		marcarError(mensaje5, " El formato de la fecha debe ser DD/MM/YYYY ");
		return false;
	}
		else
		{
			borrarError(mensaje5);
		}
	return true;
}

function validaLogin()
{	
	acierto=false;
	if (validaUsuario()) acierto=true;
	if (validaContr()) acierto=true;
	if (validaContr2()) acierto=true;
	if (validaEmail()) acierto=true;
	if (validaFecha()) acierto=true;
	
	if (acierto) return true;
		else return false;
}