const rua = document.getElementById("rua");
const num = document.getElementById("num");
const bairro = document.getElementById("bairro");
const cep = document.getElementById("cep");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");
const botao = document.getElementById('botao');

//pega cep
cep.addEventListener('focusout', () => {
    let meuCep = cep.value;
    if(!(meuCep.length == 8)) {
        alert("CEP não é válido");
    }else {
        fetch(`https://viacep.com.br/ws/${meuCep}/json/`)
            .then(x => x.json())
            .then(y => {
                rua.value = y.logradouro;
                bairro.value = y.bairro;
                cidade.value = y.localidade;
                uf.value = y.uf;
                console.log(meuCep);
                
            });
    }
});
botao.addEventListener('click', () => {
    localStorage.setItem('meucep', cep.value);
    localStorage.setItem('rua', rua.value);
    localStorage.setItem('bairro', bairro.value);
    localStorage.setItem('cidade', cidade.value);
    localStorage.setItem('uf', uf.value);
    localStorage.setItem('num', num.value);
});

document.addEventListener('DOMContentLoaded', () => {
    num.value = localStorage.getItem('num');
    rua.value = localStorage.getItem('rua');
    bairro.value = localStorage.getItem('bairro');
    cidade.value = localStorage.getItem('cidade');
    uf.value = localStorage.getItem('uf');
    cep.value = localStorage.getItem('meucep');
});