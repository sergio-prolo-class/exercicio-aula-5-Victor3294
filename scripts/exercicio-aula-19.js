//exercicio 01 & 02 & 03 & 04
const formulario = document.querySelector('.container-formulario');
const inputsPadrao = document.querySelectorAll('.input-padrao');
const inputRadio = document.querySelectorAll('input[name="dificuldade"]')
const inputRadioSelecionado = document.querySelector('input[name="dificuldade"]:checked');
let listaDeTarefas = []
if (localStorage.getItem("tarefas") !== null) {
    listaDeTarefas = JSON.parse(localStorage.tarefas)
}
let formularioIncompleto = {}
if (localStorage.getItem("formularioIncompleto") != null) {
    formularioIncompleto = JSON.parse(localStorage.formularioIncompleto)
}
const containerFormulario = document.querySelector('section')

const criaTabelaDinamica = () => {
    if (listaDeTarefas.length > 0) {
        const tabelaDinamica = document.createElement('table');
        const thead = document.createElement('thead');
        const trCabecalho = document.createElement('tr');
        for (const key in listaDeTarefas[0]) {
            const th = document.createElement('th');
            th.textContent = key
            trCabecalho.appendChild(th);
        }
        thead.appendChild(trCabecalho)
        tabelaDinamica.appendChild(thead)
        const tbody = document.createElement('tbody');
        listaDeTarefas.forEach(tarefa => {
            const tr = document.createElement('tr');
            for (const key in tarefa) {
                const td = document.createElement('td')
                td.textContent = tarefa[key];
                tr.appendChild(td)
            }
            tabelaDinamica.appendChild(tr)
        })
        tabelaDinamica.appendChild(tbody)
        console.log(tabelaDinamica)
        document.body.append(tabelaDinamica);
        tabelaDinamica.style.border = "1px solid black";
        tabelaDinamica.style.borderCollapse = "collapse";
        tabelaDinamica.querySelectorAll('th, td').forEach(el => {
            el.style.border = "1px solid black";
            el.style.padding = "4px";
        });
    }
}

const capturaTarefa = () => {
    inputsPadrao.forEach(input => {
        formularioIncompleto[input.name] = input.value
    })
    formularioIncompleto.dificuldade = inputRadioSelecionado.value;
    localStorage.formularioIncompleto = JSON.stringify(formularioIncompleto);
}

const capturaTarefaCompleta = () => {
    for (const input of inputsPadrao) {
        if (input.value === "" || inputRadioSelecionado === null) {
            alert("Preencha todos os formularios antes de cadastrar")
            return
        }
    }
    let novaTarefa = {};
    inputsPadrao.forEach(input => {
        novaTarefa[input.name] = input.value;
    })
    return novaTarefa;
}

formulario.addEventListener('submit', (event) => {

    capturaTarefa();
    let novaTarefa = capturaTarefaCompleta();
    let paragraforDaNovaTarefa = document.createElement('div');
    paragraforDaNovaTarefa.innerHTML += "<h2>Tarefas Adicionadas Recentemente</h2>"
    for (const key in novaTarefa) {
        paragraforDaNovaTarefa.innerHTML += `<p> ${key} : ${novaTarefa[key]} </p>`
    }

    listaDeTarefas.push(novaTarefa)
    containerFormulario.append(paragraforDaNovaTarefa)
    localStorage.tarefas = JSON.stringify(listaDeTarefas)
})

window.addEventListener('DOMContentLoaded', () => {
    console.log(formularioIncompleto)
    for (const input of inputsPadrao) {
        input.value = formularioIncompleto[input.name]
    }
    for (const radio of inputRadio) {
        if (radio.value == formularioIncompleto.dificuldade) {
            radio.checked = true;
        }
    }
    criaTabelaDinamica();
    console.log(listaDeTarefas)

})


/*
2. Capture os dados do formulário de contato a cada alteração para evitar que o usuário
tenha que preencher tudo de novo se ele interromper o preenchimento. Ao carregar a
página, esses dados não submetidos devem ser usados para preencher o formulário.
SOBRE A TAREFA 2: Não consegui achar um evento que se encaixa para esse objetivo, então fiz ele salvar no submit, 
toda hora que for pressionado.
3. Crie uma tabela dinâmica com os contatos salvos na localStorage
 */
