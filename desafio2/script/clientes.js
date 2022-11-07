window.onload = function(){

  const clientes = [
    {
      "codCliente"   : 1,
      "nomeCliente"  : "Donald Blake",
      "dataCadCli" :"12/10/2010",
    },
    
    {
      "codCliente"   : 2,
      "nomeCliente"  : "Bruce Wayne",
      "dataCadCli" :"01/08/2017",
      },
      {
        "codCliente"   : 3,
        "nomeCliente"  : "Diana",
        "dataCadCli" :"02/05/2020",
      },         
    
  ];
  let i = 0;
  let codCli = document.getElementById('codigo');
  codCli.value = clientes[i].codCliente;
  let nomeCli = document.getElementById('nome');  
  nomeCli.value = clientes[i].nomeCliente;
  let dataCad = document.getElementById('datacadastro');
  dataCad.value = clientes[i].dataCadCli;
  
  const botaoAnterior = document.getElementById('anterior');
  botaoAnterior.addEventListener('click',function(){
      
    if(i != 0){
      i--;
      codCli.value = clientes[i].codCliente;
      nomeCli.value = clientes[i].nomeCliente;
      dataCad.value = clientes[i].dataCadCli;
    } 
    else {
      alert("Fim da lista");
    };
  });

  const botaoProximo = document.getElementById('proximo');
  botaoProximo.addEventListener('click',function(){
    if(i < clientes.length-1){
      i++;
      codCli.value = clientes[i].codCliente;
      nomeCli.value = clientes[i].nomeCliente;
      dataCad.value = clientes[i].dataCadCli;
    } 
    else {
      alert("Fim da lista");
    };
  });

  const botaoNovo = document.getElementById('cadastrar');
  botaoNovo.addEventListener('click',function(){
    
    data = new Date();
    codCli.value = [Number(clientes.length)+1];
    nomeCli.value = "";
    dataCad.value = `${String(data.getDate()).padStart(2,'0')}/${String(data.getMonth()+1).padStart(2,'0')}/${String(data.getFullYear())}`;
    let edita = document.getElementById('nome');
    edita.removeAttribute('disabled');
  });

  const botaoSalvar = document.getElementById('btnsalvar');
  botaoSalvar.addEventListener('click',()=>{
    let devolve = document.getElementById('nome');
    devolve.setAttribute('disabled','');
    let cod = codCli.value;
    let nome = nomeCli.value;
    let data = dataCad.value;

    
    if(cod > clientes.length){
      clientes.push(
      {
        "codCliente"   : cod,
        "nomeCliente"  : nome,
        "dataCadCli"   : data,
      }
    )
      i=0;
      codCli.value = clientes[i].codCliente;
      nomeCli.value = clientes[i].nomeCliente;
      dataCad.value = clientes[i].dataCadCli;
      alert("Dados cadastrados com sucesso.");
    } else {
      alert("Clique primeiro em 'Novo', para cadastrar um cliente.");
    };
  });
};