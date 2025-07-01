//Exercicio 01
const novaSecao = document.createElement('section');
const titulo = document.createElement('h2');
const depoimentos = document.createElement('div');
let listaDepoimentos = [
    {
        nome: "Marcão",
        dataEnviada: "10 de maio de 2010",
        depoimento: "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"
    },
    {
        nome: "Marcia",
        dataEnviada: "11 de maio de 2003",
        depoimento: "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"
    },
    {
        nome: "Marquinhos",
        dataEnviada: "29 de janeiro de 2020",
        depoimento: "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"
    }
]
titulo.innerText = "Seção de Depoimentos";
titulo.style.textAlign = "center";
depoimentos.style.display = "flex";
depoimentos.style.justifyContent = "center";
depoimentos.style.alignItems = "center"
depoimentos.style.flexDirection = "column"
depoimentos.style.gap = "8px"
novaSecao.append(titulo)
listaDepoimentos.forEach(element => {
    let novoDepoimento = document.createElement('div')
    novoDepoimento.innerText = `Nome: ${element.nome}\n Data enviada: ${element.dataEnviada}\n Depoimento: ${element.depoimento}`
    depoimentos.append(novoDepoimento)
});
novaSecao.append(depoimentos)
document.body.append(novaSecao)
//Exercicio 02
const containerProdutosLoja = document.getElementById('secao-grid-loja');
containerProdutosLoja.children[0].remove();
//Exercicio 03
containerProdutosLoja.children[1].querySelector('p').innerText = "Produto alterado completamente pelo javascript";
//Exercicio04
const novoItemLoja = document.createElement('div');
novoItemLoja.classList.add('item-loja');
const imagemNovoItemLoja = document.createElement('img');
imagemNovoItemLoja.src = "../img/notebook-positivo-2.png";
const texto1NovoItemLoja = document.createElement('p');
texto1NovoItemLoja.innerText = "Nome: Notebook Positivo Vision R15 Lumina Bar, AMD Ryzen 5 8GB 256GB, Tela 15 polegadas Full HD Antirreflexo, Linux - Preto"
const texto2NovoItemLoja = document.createElement('p');
texto2NovoItemLoja.innerText = "Preço: R$2.585,00"
novoItemLoja.append(imagemNovoItemLoja);
novoItemLoja.append(texto1NovoItemLoja);
novoItemLoja.append(texto2NovoItemLoja);
containerProdutosLoja.append(novoItemLoja);