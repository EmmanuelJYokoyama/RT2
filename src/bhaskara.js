"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = require("./calculo");
var Bhaskara = /** @class */ (function (_super) {
    __extends(Bhaskara, _super);
    function Bhaskara() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bhaskara.prototype.calcular = function (a, b, c) {
        var delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0)
            throw new Error("Erro: Não existem raízes reais.");
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    };
    return Bhaskara;
}(calculo_1.default));
exports.default = Bhaskara;
