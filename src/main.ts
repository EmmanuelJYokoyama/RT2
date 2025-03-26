import * as readline from 'readline';
import Mensagens from './mensagens';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens();

// Criar uma única instância do readline
let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let iniciar = async () => {
  leitor.question(`Quais são seus números e a operação desejada?\n`, async (valor) => {
    let instrucoes = valor.split(' ');
    let numero1 = Number(instrucoes[0]);
    let numero2 = Number(instrucoes[1]);
    let operacao = instrucoes[2];

    if (instrucoes.length === 1) {
      operacao = instrucoes[0];
    }

    console.log(`Estas foram suas instruções: ${instrucoes}\n`);

    try {
      let calculo;

      switch (operacao) {
        case 'Somar':
          calculo = new Soma();
          break;
        case 'Subtrair':
          calculo = new Subtracao();
          break;
        case 'Multiplicar':
          calculo = new Multiplicacao();
          break;
        case 'Dividir':
          calculo = new Divisao();
          break;
        case 'Potencia':
          calculo = new Potenciacao();
          break;
        case 'Radiciacao':
          calculo = new Radiciacao();
          break;
        case 'Bhaskara':
          const numero3 = await perguntar("Digite o terceiro número para Bhaskara: ");
          calculo = new Bhaskara();
          const resultadoBhaskara = calculo.calcular(numero1, numero2, numero3);
          console.log(`O resultado da operação é: ${resultadoBhaskara}\n`);
          return; // Finaliza o programa após o cálculo de Bhaskara
        case 'Sair':
          console.log("Até uma próxima, falou...");
          leitor.close();
          return; // Finaliza o programa quando "Sair"
        default:
          console.log("Operação não reconhecida :(");
          return; // Finaliza caso a operação não seja reconhecida
      }

      console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
    } catch (erro) {
      console.log("Erro: " + erro.message);
    }

    mensagens.comoUsar();
    iniciar(); // Continua pedindo entradas
  });
};

function perguntar(pergunta: string): Promise<number> {
  return new Promise((resolve) => {
    leitor.question(pergunta, (resposta) => {
      resolve(parseFloat(resposta.trim())); // Remover espaços e converter corretamente para número
    });
  });
}

mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
