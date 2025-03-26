export default class Mensagens {
    public listarOpcoes = () => {
        console.log(`Opções disponíveis: Somar, Subtrair, Multiplicar e Bhaskara.\n`);
    }

    public comoUsar = () => {
        console.log(`Digite os números e a operação desejada, separados por espaço.`);
        console.log(`Exemplo: "5 3 Somar" → 8`);
        console.log(`Para Bhaskara, informe os coeficientes da equação.`);
        console.log(`Exemplo: "1 -3 2 Bhaskara" → [2, 1]\n`);
        console.log(`Digite "Sair" para encerrar.`);
    }

    public boasVindas = () => {
        console.log('\nBem-vindo à calculadora polimórfica!\n');
    }
}
