"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mensagens = /** @class */ (function () {
    function Mensagens() {
        this.listarOpcoes = function () {
            console.log("Op\u00E7\u00F5es dispon\u00EDveis: Somar, Subtrair, Multiplicar e Bhaskara.\n");
        };
        this.comoUsar = function () {
            console.log("Digite os n\u00FAmeros e a opera\u00E7\u00E3o desejada, separados por espa\u00E7o.");
            console.log("Exemplo: \"5 3 Somar\" \u2192 8");
            console.log("Para Bhaskara, informe os coeficientes da equa\u00E7\u00E3o.");
            console.log("Exemplo: \"1 -3 2 Bhaskara\" \u2192 [2, 1]\n");
            console.log("Digite \"Sair\" para encerrar.");
        };
        this.boasVindas = function () {
            console.log('\nBem-vindo à calculadora polimórfica!\n');
        };
    }
    return Mensagens;
}());
exports.default = Mensagens;
