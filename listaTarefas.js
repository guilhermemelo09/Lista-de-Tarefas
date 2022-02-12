const inputTarefaEl = document.querySelector('.input-tarefa');
const btnAdicionarEl = document.querySelector('.btn-tarefa');
const tarefasEl = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
}
function limparInput(){
    inputTarefaEl.value = '';
    inputTarefaEl.focus()
}
function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}
function criarTarefa(textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    tarefasEl.appendChild(li);
    limparInput();
    criarBotaoApagar(li);
    salvarTarefas();
}
btnAdicionarEl.addEventListener('click', function(){
    if (!inputTarefaEl.value) return;//verificação se o campo não está vazio
    criarTarefa(inputTarefaEl.value);

})
inputTarefaEl.addEventListener('keypress', function (e){
    if (e.key == 'Enter'){
        if (!inputTarefaEl.value) return;
        criarTarefa(inputTarefaEl.value);
        
    }
})

document.addEventListener('click', function (e){
    const elementoClicado = e.target;
    console.log(elementoClicado);

    if (elementoClicado.classList.contains('apagar')){
        elementoClicado.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefasEl.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let TarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaText.replace('Apagar','').trim;
        listaDeTarefas.push(TarefaTexto);

    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
