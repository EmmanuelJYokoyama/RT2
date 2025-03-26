import Calculo from './calculo';

export default class Bhaskara extends Calculo {
  calcular(a: number, b: number, c: number): number[] {
    const delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) throw new Error("Erro: Não existem raízes reais.");
    
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
  }
}
