
 

 function validar (){  
 	// capturando dados do input ( email , senha )
	var usuario = document.getElementById('inputEmail').value;
	var senha = document.getElementById('inputPassword').value;	 
 
	//verificando campos se estao vazios
 	if(usuario==""){
		FormIndex.usuarioIndex.focus();
		error_login("Preencha o campo Email","","error");
	}else if(senha==""){
		FormIndex.senhaIndex.focus();
		error_login("Preencha o campo Senha","","error");
	}else 
		if (usuario=="camila.monteiro@expertsystem.com.br" || senha=="123mudar"){
			alert("Seja bem vindo");
			 window.location = 'dashboard.html';
	}else{
		alert("Senha incorreta");
	}
 } 