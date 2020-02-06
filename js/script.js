let btnAddTarefa = document.getElementById("adicionar-tarefa")
let tarefas = document.querySelector("#tarefas")
let inputTarefa = document.querySelector("#tarefa-digitada")
let listaTarefas = localStorage.getItem('listaTarefa')?JSON.parse(localStorage.getItem('listaTarefa')):[]

const salvarLocalStorage = tarefas => {
    let tarefaEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefa", tarefaEmJson)
    console.log("lista salva com sucesso")
}

const mostrarNaTela = arrayTarefas => { 
    arrayTarefas.forEach(textoTarefa => {
        let tarefaNova = `<div class="col-md-4">  
        <div class="card-tarefa border border-dark rounded"> 
            <div class="texto-tarefa">
                ${textoTarefa}
            </div>
        <div class="botao-tarefa">
        <img src="image/check.png" width="25" alt="Botão para finalizar tarefa" tittle="Botão para finalizar tarefa">     
        </div>
        </div>
        </div> ` 

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)  
        let objTarefaNova = tarefas.lastElementChild 
        objTarefaNova.lastElementChild.lastElementChild.onclick = (event) =>{
        event.target.parentNode.parentNode.parentNode.remove()
        listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

        salvarLocalStorage(listaTarefas)
        }
    })
}

mostrarNaTela(listaTarefas)

// btnAddTarefa.onclick = function() {   
//     let valorDigitado = inputTarefa.value
//     inputTarefa.value = ""
//     let tarefaNova = `<div class="col-md-4">  
//     <div class="card-tarefa border border-dark rounded"> 
//     <div class="texto-tarefa">
//         ${valorDigitado}
//     </div>
//     <div class="botao-tarefa">
//         <img src="image/check.png" width="25" alt="Botão para finalizar tarefa" tittle="Botão para finalizar tarefa">     
//     </div>
//     </div>
//     </div> `
//     tarefas.innerHTML += tarefaNova
// }

const criarTarefaComEnter = (event) => {
    if(event.keyCode == 13 || event.type == "click") {
    let valorDigitado = inputTarefa.value

    if (valorDigitado == "") {
        alert("Você deve digitar uma tarefa primeiro") 
        return 
    } 
        listaTarefas.push(valorDigitado);
        salvarLocalStorage(listaTarefas)
        inputTarefa.value = ""
        let tarefaNova = `<div class="col-md-4">  
        <div class="card-tarefa border border-dark rounded"> 
        <div class="texto-tarefa">
        ${valorDigitado}
        </div>
        <div class="botao-tarefa">
        <img src="image/check.png" width="25" alt="Botão para finalizar tarefa" tittle="Botão para finalizar tarefa">     
        </div>
        </div>
        </div> `  
        
        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        let objTarefaNova = tarefas.lastElementChild 
        objTarefaNova.lastElementChild.lastElementChild.onclick = (event) =>{
            event.target.parentNode.parentNode.parentNode.remove()
            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)

        salvarLocalStorage(listaTarefas)
        }
    }  
}
    inputTarefa.addEventListener('keypress', criarTarefaComEnter)
    btnAddTarefa.addEventListener('click', criarTarefaComEnter)
