const tagUl = document.querySelector("ul")
const carrinhoUl = document.querySelector(".ulCarrinho")
const produtosCarrinho = []
let todosValores = 0

function criarCard(produtoObjeto){
    const produtosLi    = document.createElement("li")
    const imagemProduto = document.createElement("img")
    const nomeProduto   = document.createElement("h3")
    const secao         = document.createElement("span")
    const nutrientesOl  = document.createElement("ol")
    const div           = document.createElement("div")
    const precoP        = document.createElement("p")
    const botao         = document.createElement("button")

    botao.addEventListener("click", () => {
        produtosCarrinho.push(produtoObjeto)
        renderizarCardCarrinho(produtosCarrinho)
        todosValores += produtoObjeto.preco 
        QuantidadeCarrinho(todosValores)
        valorCarrinho(todosValores)
    })

    imagemProduto.src = produtoObjeto.img
    imagemProduto.alt = produtoObjeto.nome
    
    let idProduto = produtoObjeto.id
    botao.setAttribute("id", idProduto)

    nomeProduto.innerText = produtoObjeto.nome

    secao.innerText = produtoObjeto.secao

    let precoFormatado = produtoObjeto.preco.toFixed(2).toString().replace(".", ",")
    precoP.innerText = precoFormatado
    botao.innerText  = "Comprar"

    const arrayComponentes = produtoObjeto.componentes
    arrayComponentes.forEach((componente) => {
        const listaNutrientes = document.createElement("li")
        listaNutrientes.innerText = componente
        nutrientesOl.appendChild(listaNutrientes)
    })

    div.append(precoP, botao)
    produtosLi.append(imagemProduto, nomeProduto, secao, nutrientesOl, div)

    return produtosLi
}

function criarCardCarrinho(produtoCarrinho){
    
    const carrinhoLi = document.createElement("li")
    const produtoImgCarrinho = document.createElement("img")
    const nomeProdutoCarrinho = document.createElement("h3")
    const secaoProdutoCarrinho = document.createElement("p")
    const precoProdutoCarrinho = document.createElement("span")
    const botaoRemover = document.createElement("img")

    produtoImgCarrinho.src = produtoCarrinho.img
    produtoImgCarrinho.alt = produtoCarrinho.nome

    nomeProdutoCarrinho.innerText = produtoCarrinho.nome
    
    secaoProdutoCarrinho.innerText = produtoCarrinho.secao

    let precoFormatado = produtoCarrinho.preco.toFixed(2).toString().replace(".", ",")
    precoProdutoCarrinho.innerText = precoFormatado

    botaoRemover.src = "src/img/trash.png"
    botaoRemover.alt = "lixeira remover"
    botaoRemover.setAttribute("class", "removerCarrinho")
    botaoRemover.addEventListener("click", () => {
        const index = produtosCarrinho.indexOf(produtoCarrinho)
        produtosCarrinho.splice(index, 1)
        renderizarCardCarrinho(produtosCarrinho)
        todosValores -= produtoCarrinho.preco
        QuantidadeCarrinho(todosValores)
        valorCarrinho(todosValores)
    })
    botaoRemover.innerText = "Remover"

    carrinhoLi.append(produtoImgCarrinho, nomeProdutoCarrinho, secaoProdutoCarrinho, precoProdutoCarrinho, botaoRemover)

    return carrinhoLi    
}

function QuantidadeCarrinho(parametro){
    const quantidadeCarrinhoDiv = document.querySelector(".quantidade-produtosCarrinho")
    quantidadeCarrinhoDiv.innerHTML = ""

    if(produtosCarrinho.length >= 1){
        const quantidade = document.createElement("h3")
        let quantidadeProduto = document.createElement("p")

        quantidade.innerText = "Quantidade:"
        quantidadeProduto.innerText = produtosCarrinho.length

        quantidadeCarrinhoDiv.append(quantidade, quantidadeProduto)
    }
}

function valorCarrinho(resultado){
    const valorTotalDiv = document.querySelector(".valorTotal-produtos")
    valorTotalDiv.innerHTML = ""

    if(produtosCarrinho.length >= 1){
        const total = document.createElement("h3")
        let valorTotal = document.createElement("p")

        total.innerText = "Total:"
        let precoFormatado = resultado.toFixed(2).toString().replace(".", ",")
        valorTotal.innerText = precoFormatado

        valorTotalDiv.append(total, valorTotal)
    }
}


const renderizarCard = (arr) => {

    arr.forEach((produtoVitrine) => {
        const cardElemento = criarCard(produtoVitrine)
        tagUl.appendChild(cardElemento)
    })
}
renderizarCard(produtos)

const renderizarCardCarrinho = (arr) => {
    carrinhoUl.innerHTML = ""
    arr.forEach((produtosCarrinho) => {
        const cardCarrinho = criarCardCarrinho(produtosCarrinho)
        carrinhoUl.appendChild(cardCarrinho)
    })
}


//FUNÇÕES DE FILTRAGEM PARA OS SETORES E BUSCAS
function filtrarTodos(secao){
    const produtosFiltrados = produtos.filter(product => product.secao === secao)
    return renderizarCard(produtosFiltrados)
}

function filtrarHorti(){
    tagUl.innerHTML = "";
    filtrarTodos('Hortifruti')
}
const btnHortiFruti = document.getElementsByClassName("hortifruti")[0]
btnHortiFruti.addEventListener("click", filtrarHorti)

function filtrarPanificadora(){
    tagUl.innerHTML = "";
    filtrarTodos('Panificadora')
}
const btnPanificadora = document.getElementsByClassName("panificadora")[0]
btnPanificadora.addEventListener("click", filtrarPanificadora)

function filtrarLaticinios(){
    tagUl.innerHTML = "";
    filtrarTodos('laticinios')
}
const btnLaticinios = document.getElementsByClassName("laticinios")[0]
btnLaticinios.addEventListener("click", filtrarLaticinios)

function todosProdutos(){
    tagUl.innerHTML = "";
    renderizarCard(produtos)
    // somarProdutos(produtos)
}
const btnTodosProdutos = document.getElementsByClassName("todos")[0]
btnTodosProdutos.addEventListener("click", todosProdutos)

function barraBuscar(pesquisa){
    let resultadoPesquisa = []
    tagUl.innerHTML = "";
    
    for(let i = 0; i < produtos.length; i++){
        
        let categoriasProdutos = produtos[i].categoria.toLowerCase().trim()
        let secaoProdutos      = produtos[i].secao.toLowerCase().trim()
        let nomesProdutos      = produtos[i].nome.toLowerCase().trim()
        if(nomesProdutos.includes(pesquisa)){
            resultadoPesquisa.push(produtos[i])
        }
        else if(secaoProdutos.includes(pesquisa)){
            resultadoPesquisa.push(produtos[i])
        }
        else if(categoriasProdutos.includes(pesquisa)){
            resultadoPesquisa.push(produtos[i])
        }
    }
    return resultadoPesquisa
}


let barraPesquisa = document.querySelector(".campoBuscaPorNome")
let botaoPesquisa = document.querySelector(".containerBuscaPorNome button")

botaoPesquisa.addEventListener("click", function(){
    let valorPesquisa = barraPesquisa.value.toLowerCase().trim()
    let btnResultado = barraBuscar(valorPesquisa)
    renderizarCard(btnResultado)
})

