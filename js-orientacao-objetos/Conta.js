//Classe abstrata
export class Conta {
    
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Não pode instanciar uma classe do tipo Conta, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    /**
     * @param {Cliente} cliente
     */
    set cliente(cliente) {
        if(cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valor;
        }

        return 0;
    }

    // Método abstrato
    sacar(valor) {  
        throw new Error("O método sacar da conta é abstrato.");
    }

    depositar(valor) {
        if (valor < 0)
            return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}