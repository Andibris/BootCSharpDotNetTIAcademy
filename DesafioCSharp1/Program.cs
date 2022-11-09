//Desafio 1 - C# - Programa para calcular média de notas.
string sair = "";
do {
    double nota = 0;
    double soma = 0;
    double media = 0;
        
    Console.WriteLine("Digite a quantidade de notas a serem lançadas:");
    int qtdNotas = int.Parse(Console.ReadLine());

    for(int i = 1; i <= qtdNotas; i++){
        Console.WriteLine("Digite a " + i + "ª nota:");
        nota = double.Parse(Console.ReadLine());
        soma = soma + nota;
    }
    media = soma / qtdNotas;

    if(media >= 6)
    {
        Console.WriteLine("Aluno aprovado. Sua média é: " + media);
    } 
    else if(media >= 4 && media < 6)
    {
        Console.WriteLine("Aluno em recuperação. Sua média é: " + media);
    } 
    else
    {
        Console.WriteLine("Aluno reprovado. Sua média é: " + media);
    };
    
    Console.WriteLine("Calcular outra nota? Digite 1 para Encerrar");
    sair = Console.ReadLine();

} while(sair != "1");

Console.WriteLine("Fim do Programa.");