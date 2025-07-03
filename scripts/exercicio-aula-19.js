//exercicio 01 & 02 & 03 & 04
const formulario = document.querySelector('.container-formulario');
const inputsPadrao = document.getElementsByClassName('input-padrao')
const listaDeTarefas = [];
const containerFormulario = document.querySelector('section')
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputRadioSelecionado = document.querySelector('input[name="dificuldade"]:checked')
    for (let i = 0; i < inputsPadrao.length; i++) {
        if (inputsPadrao[i].value === "" || inputRadioSelecionado === null) {
            alert("Preencha todos os campos do formulario antes de enviar")
            return
        }
    }
    let novaTarefa = {
        tituloTarefa: inputsPadrao[0].value,
        nomeCriador: inputsPadrao[1].value,
        nomeResponsavel: inputsPadrao[2].value,
        descricao: inputsPadrao[3].value,
        dataCriacao: inputsPadrao[4].value,
        dataInicio: inputsPadrao[5].value,
        prazoConclusao: inputsPadrao[6].value,
        repeticaoTarefa: inputsPadrao[7].value,
        dificuldadeTarefa: inputRadioSelecionado.value
    };
    let paragraforDaNovaTarefa = document.createElement('p');
    paragraforDaNovaTarefa.innerText = `
    Titulo da Tarefa: ${novaTarefa.tituloTarefa}
    Nome do Criador da Tarefa: ${novaTarefa.nomeCriador} 
    Nome do Responsável por realizar a Tarefa: ${novaTarefa.nomeResponsavel}
    Descrição da Tarefa: ${novaTarefa.descricao} 
    Data de Criação da Tarefa: ${novaTarefa.dataCriacao}
    Data de Inicio da Tarefa: ${novaTarefa.dataInicio}
    Prazo para conclusão da Tarefa: ${novaTarefa.prazoConclusao} 
    Periodicidade da Tarefa: ${novaTarefa.repeticaoTarefa}
    Dificuldade da Tarefa: ${novaTarefa.dificuldadeTarefa}
    `
    listaDeTarefas.push(novaTarefa)
    containerFormulario.append(paragraforDaNovaTarefa)
    console.log(listaDeTarefas)
})

