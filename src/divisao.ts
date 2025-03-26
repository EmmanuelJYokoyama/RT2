import Calculo from './calculo';

export default class Divisao extends Calculo {
  calcular(a: number, b: number): number {
    if (b === 0) throw new Error("Erro: Divisão por zero.");
    return a / b;
  }
}