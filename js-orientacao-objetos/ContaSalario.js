import { Conta } from "./Conta";

export class ContaSalario extends Conta {

    constructor(cliente) {
        super(0, cliente, 100);
    }

    sacar(valor) {
        return this._sacar(valor, 1.01);
    }
}