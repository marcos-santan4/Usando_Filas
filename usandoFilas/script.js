/* const fila = new Queue();

fila.enqueue("Silas");
fila.enqueue("Sabrina");
fila.enqueue("Levi");
fila.enqueue("Kadmo");

console.log(fila.toString());
console.log(fila.size());

fila.dequeue();

console.log(fila.toString());
console.log(fila.size()); */

const fila = new Queue();
const res = document.querySelector('#res');
const res2 = document.querySelector('#res2');
let tabela = document.querySelector('#tabela');
let removido;

function adicionar() {
    const nome = document.querySelector('#txtName');
    fila.enqueue(nome.value);
    res.innerHTML = `Nome adicionado: ${nome.value} <br> <br>`;
    info();
}

function remover() {
    removido = fila.dequeue();
    info();
}

function info() {
    res2.innerHTML = `Tamanho da lista: ${fila.size()}`;
    if (removido === undefined) {
        res2.innerHTML += `<br>Ninguem saiu da fila até o momento!`;
    } else {
        res2.innerHTML += `<br>Ultimo removido -> ${removido}`;
    }
}

