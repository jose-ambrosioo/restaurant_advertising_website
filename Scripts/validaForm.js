function validaForm()
{ 
	var form = document.formulario;
	// Validar nome
	if( form.nome.value == "" || form.nome.value.length < 2 )
	{
		alert( "Preencha o campo NOME correctamente!" );
		form.nome.focus();
		return false;
	}
	// Validar sobrenome
	if( form.sobrenome.value == "" || form.sobrenome.value.length < 2 )
	{
		alert( "Preencha o campo SOBRENOME correctamente!" );
		form.sobrenome.focus();
		return false;
	}
	// Validar email
	if( form.email.value == "" || form.email.value.indexOf('@') == -1 || form.email.value.indexOf('.') == -1 || form.email.value.length < 5 )
	{
		alert( "Preencha o campo E-MAIL correctamente!" );
		form.email.focus();
		return false;
	}
	// Validar telefone
	if( form.telefone.value == "" || form.telefone.value.length < 9 )
	{
		alert( "Preencha o campo TELEFONE correctamente!" );
		form.telefone.focus();
		return false;
	}
	// Validar mensagem
	if( form.mensagem.value == "" )
	{
		alert( "Preencha o campo MENSAGEM!" );
		form.mensagem.focus();
		return false;
	}
	form.submit();
	return true;
}
// Verificar se foi digitado caracter diferente de número
function somenteNumeros()
{
	evt = window.event;
    var tecla = evt.keyCode;
	if( tecla < 47 || tecla > 58 )
	{ 
		alert( "Digite apenas NÚMEROS!" );
		evt.preventDefault();
	}
}
// Verificar se foi digitado caracter diferente de letra
function somenteLetras()
{
	evt = window.event;
    var tecla = evt.keyCode;
	if( tecla >= 33 && tecla <= 64 || tecla >= 91 && tecla <= 96 || tecla >= 123 && tecla <= 159 || tecla >= 162 && tecla <= 191 )
	{ 
		alert( "Digite apenas LETRAS!" );
		evt.preventDefault();
	}
}