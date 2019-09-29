function validar (){
  let nome =  formuser.nome.value;
  let email = formuser.email.value;
  let senha = formuser.senha.value;
  
  if(nome === ""){
    alert(' Informe Seu Nome.');
    formuser.nome.focus();
    return false;
  }
  if(email === "" || email.indexOf('@') === -1){
    alert(' Informe Seu Email.');
    formuser.email.focus();
    return false;
  }
  if(senha === "" || senha.length < 8){
    alert(' Sua Senha Deve Ter No Minimo 8 dígitos');
    formuser.senha.focus();
    return false;
  }
 alert('Tudo Ok');
}
