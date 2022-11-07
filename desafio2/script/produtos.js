window.onload = function(){

  const produtos = [
    {
      "codProduto"   : 1,
      "descProduto"    : "Caneta esferográfica",
      "precoProduto" : 0.80,  
      "qtdEstoqueProd" : 10, 
    },
    
    {
      "codProduto"   : 2,
      "descProduto"    : "Cola Print",
      "precoProduto" : 3.65, 
      "qtdEstoqueProd" : 50,   
    },    
    
  ];
  let i = 0;
  let codPdt = document.getElementById('codigo');
  codPdt.value = produtos[i].codProduto;
  let descricao = document.getElementById('desc');  
  descricao.value = produtos[i].descProduto;
  let preco = document.getElementById('preco');
  preco.value = produtos[i].precoProduto;
  let qtdeProd = document.getElementById('qtde');
  qtdeProd.value = produtos[i].qtdEstoqueProd;
  
  const botaoAnterior = document.getElementById('anterior');
  botaoAnterior.addEventListener('click',function(){
      
    if(i != 0){
      i--;
      codPdt.value = produtos[i].codProduto;
      descricao.value = produtos[i].descProduto;
      preco.value = produtos[i].precoProduto;
      qtdeProd.value = produtos[i].qtdEstoqueProd;

    } 
    else {
      alert("Fim da lista");
    };
  });

  const botaoProximo = document.getElementById('proximo');
  botaoProximo.addEventListener('click',function(){
    if(i < produtos.length-1){
      i++;
      codPdt.value = produtos[i].codProduto;
      descricao.value = produtos[i].descProduto;
      preco.value = produtos[i].precoProduto;
      qtdeProd.value = produtos[i].qtdEstoqueProd;
    } 
    else {
      alert("Fim da lista");
    };
  });

  const botaoNovo = document.getElementById('cadastrar');
  botaoNovo.addEventListener('click',function(){
    
    codPdt.value = [Number(produtos.length)+1];
    descricao.value = "";
    preco.value = "";
    qtdeProd.value = "";

    let edita = document.getElementById('desc');
    let edita2 = document.getElementById('preco');
    let edita3 = document.getElementById('qtde');
    edita.removeAttribute('disabled');
    edita2.removeAttribute('disabled');
    edita3.removeAttribute('disabled');
  });

  const botaoSalvar = document.getElementById('btnsalvar');
  botaoSalvar.addEventListener('click',()=>{
    let devolve = document.getElementById('desc');
    let devolve2 = document.getElementById('preco');
    let devolve3 = document.getElementById('qtde');
    devolve.setAttribute('disabled','');
    devolve2.setAttribute('disabled','');
    devolve3.setAttribute('disabled','');
    
    let cod = codPdt.value;
    let nome = descricao.value;
    let prco = Number(preco.value);
    let quant = Number(qtdeProd.value);
    
    if(cod > produtos.length){

      if(!isNaN(prco) && !isNaN(quant)){
        produtos.push(
          {
            "codProduto"   : cod,
            "descProduto"  : nome,
            "precoProduto"   : prco,
            "qtdEstoqueProd" : quant,
          })
    
    
          i=0;
          codPdt.value = produtos[i].codProduto;
          descricao.value = produtos[i].descProduto;
          preco.value = produtos[i].precoProduto;
          qtdeProd.value = produtos[i].qtdEstoqueProd;
    
          alert("Dados cadastrados com sucesso.");
      } else{
        i=0;
        codPdt.value = produtos[i].codProduto;
        descricao.value = produtos[i].descProduto;
        preco.value = produtos[i].precoProduto;
        qtdeProd.value = produtos[i].qtdEstoqueProd;
        alert("Digite valores numéricos para quantidade e preço.");
      };
    } else {
      alert("Clique primeiro em 'Novo', para cadastrar um produto.");
    };
  });
};