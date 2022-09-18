class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items={};
    }

    enqueue(element) { //enfileirar -- inserir um elemento na fila
        this.items[this.count] = element; // encrementa na posição que count está valendo, inicialmente 0
        this.count++; // incrementa +1 para acrescentar o proximo elemento na posição subsequente, ex: 1 -> 2 - > 3
    };

    dequeue() {
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount]; // result recebe o valor na posicao 0, no caso o primeiro valor inserido na fila
        delete this.items[this.lowestCount]; // remove o primeiro elemento da fila
        this.lowestCount++; // incrementa +1 para na proxima remover o proximo da fila
        return result; // retorna o valor atribuido a result, no caso, o valor que sera removido
    };

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items=[];
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }

        return objString;
    }

}