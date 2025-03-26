import Calculo from './calculo';

export default class Radiciacao extends Calculo {
  calcular(a: number, b: number): number {
    return Math.pow(a, 1 / b);
  }
}