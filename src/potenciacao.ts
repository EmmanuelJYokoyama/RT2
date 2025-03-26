import Calculo from './calculo';

export default class Potenciacao extends Calculo {
  calcular(a: number, b: number): number {
    return Math.pow(a, b);
  }
}