function adicionarExercicio() {
    var treinoContainer = document.getElementById('treino-container');
    var novoExercicioItem = document.createElement('div');
    novoExercicioItem.className = 'exercicio-item';
    var label = document.createElement('label');
    label.textContent = 'Exercício: ';
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Exercício';
    input.className = 'txt_exercicio';
    var iconSpan = document.createElement('span');
    iconSpan.className = 'remover-botao';
    iconSpan.innerHTML = '<i class="fas fa-trash-alt" onclick="removerExercicio(this)"></i>';
    novoExercicioItem.appendChild(label);
    novoExercicioItem.appendChild(input);
    novoExercicioItem.appendChild(iconSpan);
    treinoContainer.appendChild(novoExercicioItem);
}

function removerExercicio(icone) {
    var exercicioItem = icone.parentNode.parentNode;
    var treinoContainer = document.getElementById('treino-container');
    treinoContainer.removeChild(exercicioItem);
}