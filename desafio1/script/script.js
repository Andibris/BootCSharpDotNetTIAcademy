window.onload=function(){

    const botao = document.getElementById('Entrar');
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');
    const usuarioValido = "andibris";
    const senhaValida = 1234;

    botao.addEventListener('click',function(){
        if(usuario.value == usuarioValido && senha.value == senhaValida){
            SubmitEvent(window.open("panel.html"));
        }
        else alert("Senha usuário inválido e/ou senha incorreta!");
});

};