"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var mensagens_1 = require("./mensagens");
var soma_1 = require("./soma");
var subtracao_1 = require("./subtracao");
var multiplicacao_1 = require("./multiplicacao");
var divisao_1 = require("./divisao");
var potenciacao_1 = require("./potenciacao");
var radiciacao_1 = require("./radiciacao");
var bhaskara_1 = require("./bhaskara");
var mensagens = new mensagens_1.default();
// Criar uma única instância do readline
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var iniciar = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        leitor.question("Quais s\u00E3o seus n\u00FAmeros e a opera\u00E7\u00E3o desejada?\n", function (valor) { return __awaiter(void 0, void 0, void 0, function () {
            var instrucoes, numero1, numero2, operacao, calculo, _a, numero3, resultadoBhaskara, erro_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        instrucoes = valor.split(' ');
                        numero1 = Number(instrucoes[0]);
                        numero2 = Number(instrucoes[1]);
                        operacao = instrucoes[2];
                        if (instrucoes.length === 1) {
                            operacao = instrucoes[0];
                        }
                        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 13, , 14]);
                        calculo = void 0;
                        _a = operacao;
                        switch (_a) {
                            case 'Somar': return [3 /*break*/, 2];
                            case 'Subtrair': return [3 /*break*/, 3];
                            case 'Multiplicar': return [3 /*break*/, 4];
                            case 'Dividir': return [3 /*break*/, 5];
                            case 'Potencia': return [3 /*break*/, 6];
                            case 'Radiciacao': return [3 /*break*/, 7];
                            case 'Bhaskara': return [3 /*break*/, 8];
                            case 'Sair': return [3 /*break*/, 10];
                        }
                        return [3 /*break*/, 11];
                    case 2:
                        calculo = new soma_1.default();
                        return [3 /*break*/, 12];
                    case 3:
                        calculo = new subtracao_1.default();
                        return [3 /*break*/, 12];
                    case 4:
                        calculo = new multiplicacao_1.default();
                        return [3 /*break*/, 12];
                    case 5:
                        calculo = new divisao_1.default();
                        return [3 /*break*/, 12];
                    case 6:
                        calculo = new potenciacao_1.default();
                        return [3 /*break*/, 12];
                    case 7:
                        calculo = new radiciacao_1.default();
                        return [3 /*break*/, 12];
                    case 8: return [4 /*yield*/, perguntar("Digite o terceiro número para Bhaskara: ")];
                    case 9:
                        numero3 = _b.sent();
                        calculo = new bhaskara_1.default();
                        resultadoBhaskara = calculo.calcular(numero1, numero2, numero3);
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(resultadoBhaskara, "\n"));
                        return [2 /*return*/]; // Finaliza o programa após o cálculo de Bhaskara
                    case 10:
                        console.log("Até uma próxima, falou...");
                        leitor.close();
                        return [2 /*return*/]; // Finaliza o programa quando "Sair"
                    case 11:
                        console.log("Operação não reconhecida :(");
                        return [2 /*return*/]; // Finaliza caso a operação não seja reconhecida
                    case 12:
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        return [3 /*break*/, 14];
                    case 13:
                        erro_1 = _b.sent();
                        console.log("Erro: " + erro_1.message);
                        return [3 /*break*/, 14];
                    case 14:
                        mensagens.comoUsar();
                        iniciar(); // Continua pedindo entradas
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
function perguntar(pergunta) {
    return new Promise(function (resolve) {
        leitor.question(pergunta, function (resposta) {
            resolve(parseFloat(resposta.trim())); // Remover espaços e converter corretamente para número
        });
    });
}
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
