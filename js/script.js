let btnAddTarefa = document.getElementById("adicionar-tarefa")
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector("#tarefa-digitada")


btnAddTarefa.onclick = function() {
    let valorDigitado = inputTarefa.value

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
    tarefas.innerHTML += tarefaNova
}