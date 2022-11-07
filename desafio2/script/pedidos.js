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
    
    const buscaCli = document.getElementById('codigo');
    const nomeCli = document.getElementById('cliente');
    buscaCli.addEventListener('blur',function(){
        let i = buscaCli.value-1;
        if(i < clientes.length){
            nomeCli.value = clientes[i].nomeCliente;
            let devolve = document.getElementById('codigo');
            devolve.setAttribute('disabled','');
        } else{
            alert("Digite um código válido/existente.");
        };
    });

    const buscaProd = document.getElementById('boxcodigo');
    const nomeProd = document.getElementById('boxpdt');
    const preco = document.getElementById('boxpreco');
    const quantia = document.getElementById('boxqtde');

    buscaProd.addEventListener('blur',function(){
        
        let j = buscaProd.value-1;
        
        if(j < produtos.length){
            nomeProd.value = produtos[j].descProduto;
            preco.value = produtos[j].precoProduto;
            let devolve2 = document.getElementById('boxcodigo');
            devolve2.setAttribute('disabled','');
            let devolve3 = document.getElementById('boxpdt')
            devolve3.setAttribute('disabled','');
            let devolve4 = document.getElementById('boxpreco')
            devolve4.setAttribute('disabled','');
        } else{
            alert("Digite um código válido/existente.");
        };

        const salvar = document.getElementById('submit');
        salvar.addEventListener('click',function(){
            let k = Number(quantia.value);
            console.log(j);
            
            if(k > produtos[j].qtdEstoqueProd){
                alert("Saldo indisponível em estoque.");
            } else if(isNaN(k) || k <= 0){
                alert("Digite um valor válido.");

            } else{
                const pedidos = [
                    {
                      "codCliente"   : buscaCli.value,
                      "nomeCliente"  : nomeCli.value,
                      "codProduto"   : buscaProd.value,
                      "descProduto"  : nomeProd.value,
                      "precoProduto" : preco.value,  
                      "quantidade"   : k,
                      "total"        : preco.value * k,
                    },  
                ];

                alert("Pedido realizado com sucesso.");
                let devolve5 = document.getElementById('boxcodigo');
                devolve5.removeAttribute('disabled');
                let devolve6 = document.getElementById('boxqtde');
                devolve6.removeAttribute('disabled');    
                console.log(pedidos);
            };
        });
    });
};