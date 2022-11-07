window.onload = function(){
    const botao = document.getElementById('Entrar');
    
    botao.addEventListener('click',function(){
        let login = document.getElementById('usuario').value;
        let senha = document.getElementById('senha').value;
        let users = [
            {
                login_ : "Master",
                password : "12345"
            },
            {
                login_ : "Marcelo",
                password : "senha"
            },
        ];
        
        for(i=0; i<=users.length;i++){
            
            let user = users[i].login_;
            let psw = users[i].password;
            
            if(login.toUpperCase() == user.toUpperCase() && psw == senha){
                
                window.location.href = "../desafio2/painel.html";
                alert(`Bem-vindo, ${user}!`);
                break;
            }
        };
    });
};