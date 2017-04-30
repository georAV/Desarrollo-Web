//APAGAR Y ENCENDER MÚSICA
function CambiarEstado()
{
	var audio = document.getElementById("musica");
	var boton = document.getElementById("boton");
	if(boton.value == "pausar")
	{
		audio.pause();
		boton.src="imagenes/play.png";
		boton.value = "reanudar"
	}
	else
	{
		audio.play();
		boton.src="imagenes/pausa.png";
		boton.value = "pausar"
	}
}

//VALIDACIÓN DE LOS CAMPOS DEL FORMULARIO.
function validaFormulario()
{
	//Validar nombre y apellidos
	var enviar= true;
	var contenidoNombre=document.getElementById("nombre").value;
	var contenidoAp= document.getElementById("apellidos").value;
	var expMinCar=/^[^]+$/; //exp. para campo vacío.
	
	if(!expMinCar.test(contenidoNombre) || contenidoNombre=="Nombre" || contenidoNombre=="Name") 
	{ 
		if (document.title=="Contacto_ingles")
		{
			document.getElementById("nombre").value="Obligatory field";
			enviar =false;
		}
		else if (document.title == "Contacto")
		{
			document.getElementById("nombre").value="Campo obligatorio";
			enviar= false;
		}
	}
	
	if(!expMinCar.test(contenidoAp) || contenidoAp=="Apellidos" || contenidoAp=="Last Name") 
	{ 
		if (document.title=="Contacto_ingles")
		{
			document.getElementById("apellidos").value="Obligatory field";
			enviar =false;
		}
		else if (document.title == "Contacto")
		{
			document.getElementById("apellidos").value="Campo obligatorio";
			enviar= false;
		}
	}
	
	//Validar telefonos, con que se introduzca uno es suficiente.
	var contenidoTel=document.getElementById("tlf").value;
	var contenidoMovil=document.getElementById("movil").value;
	var expNum =/^[0-9]{9}$/;
	if(!expNum.test(contenidoTel) && !expNum.test(contenidoMovil)) 
	{ 
		if (document.title=="Contacto_ingles")
		{
			document.getElementById("movil").value="Obligatory field";
			enviar= false;
		}
		else if (document.title == "Contacto")
		{
			document.getElementById("movil").value="Campo obligatorio";
			enviar= false;
		}
	}
	
	//Validar Email
	var contenidoEmail=document.getElementById("email").value;
	var expEmail= /^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
	
	if(!expEmail.test(contenidoEmail))
	{
		if (document.title=="Contacto_ingles")
		{
			document.getElementById("email").value="Invalid Email";
			enviar= false;
		}
		else if (document.title == "Contacto")
		{
			document.getElementById("email").value="Email inválido";
			enviar= false;
		}
	}
	
	//validar estudios
	var contenidoEst=document.getElementById("estudios").selectedIndex;
	if(contenidoEst==0)
	{
		if (document.title=="Contacto_ingles")
		{
			document.getElementById("estudios").options[0].text="Obligatory field";
			enviar=false;
		}
		else if (document.title == "Contacto")
		{
			document.getElementById("estudios").options[0].text="Campo obligatorio";
			enviar= false;
		}
	}
	
	if (enviar==false && document.title=="Contacto")
	{
		document.getElementById("error").innerHTML="Error al enviar. Revisa los campos.";
	}
	else if (enviar==false && document.title=="Contacto_ingles")
	{
		document.getElementById("error").innerHTML="Error while sending. Check the fields.";
	}
	
	return enviar;
}

