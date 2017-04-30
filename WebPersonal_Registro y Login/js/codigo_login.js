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

function validaUsuario() // validar input usuario
{
	var contenidoUsuario=document.getElementById("usuario").value;
	var expAlfanum=/^[a-zA-Z0-9]{1,10}$/; // expresion regular para alfanumericos
	var expMinCar=/^[^]+$/; //exp. para campo vacío.
	var mensaje1=document.getElementById("mensaje1"); //cogemos el span para marcar errores
	
	if(!expMinCar.test(contenidoUsuario)) //comprueba que no esté vacío
	{ 
		marcarError(mensaje1, " Introduce tu usuario " );  // introduce el parrafo de error
		return false;
	}
		else
		{
			borrarError(mensaje1); //cuando deja de haber error, borra el parrafo
		}
		
	if (!expAlfanum.test(contenidoUsuario)) // comprueba que solo contenga alfanumericos y maximo 10
	{
		marcarError(mensaje1, " Caracter inválido\no usuario demasiado largo "); // introduce el parrafo de error
		return false;
	}
		else
		{
			borrarError(mensaje1); //cuando deja de haber error, borra el parrafo
		}
		
	return true;
}

function validaContr() //validar contraseña
{
	var contenidoContr=document.getElementById("password1").value;
	var contenidoUsuario=document.getElementById("usuario").value; //necesitamos este valor para validar que no sean iguales
	var expMinCar=/^[^]+$/; //expresion para campo vacío
	var expMinimos=/(?!^[0-9]*$)^(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$/; //6 caracteres, 1 numero, 1 letra
	var mensaje2=document.getElementById("mensaje2"); // cogemos el span para marcar errores
	
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
		marcarError(mensaje2, " La contraseña debe terner al menos\n6 caracteres, un numero y una letra ")
		return false;
	}
		else
		{
			borrarError(mensaje2);
		}
		
	return true;
}

function validaLogin() //validar el formulario entero al darle a enviar
{	
	acierto=false; 
	if (validaUsuario()) acierto=true;
	if (validaContr()) acierto=true;
	
	if (acierto) return true;
		else return false;
}
