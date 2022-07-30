const tagUl = document.querySelector("ul")

const criarCard = (arr) => {
    const tagLi = document.createElement("li")
    const img   = document.createElement("img")
    const h3    = document.createElement("h3")
    const span  = document.createElement("span")
    const p     = document.createElement("p")

    img.src        = arr.img
    img.alt        = arr.nome
    h3.innerText   = arr.nome
    span.innerText = arr.categoria
    p.innerText    = arr.preco
    
    tagLi.append(img, h3, span, p)
    return tagLi
}

const renderizarCard = (arr) => {

    arr.forEach((elemento) => {
        const cardElemento = criarCard(elemento)
        tagUl.appendChild(cardElemento)
    })
}
renderizarCard(produtos)

function filtrarTodos(secao){
    const produtosFiltrados = produtos.filter(product => product.secao === secao)
    somarProdutos(produtosFiltrados)
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
    filtrarTodos('Laticínio')
}
const btnLaticinios = document.getElementsByClassName("laticinios")[0]
btnLaticinios.addEventListener("click", filtrarLaticinios)

function todosProdutos(){
    tagUl.innerHTML = "";
    renderizarCard(produtos)
    somarProdutos(produtos)
}
const btnTodosProdutos = document.getElementsByClassName("todos")[0]
btnTodosProdutos.addEventListener("click", todosProdutos)

function somarProdutos(produtos){
    const precoProdutos = document.getElementsByClassName("precoDinamico")[0]
    const valor = produtos.reduce((acumulador, currentValue) => acumulador + currentValue.preco,0)

    precoProdutos.innerText = `R$${valor.toFixed(2).toString().replace(".", ",")}`
}
somarProdutos(produtos)

let barraPesquisa = document.querySelector(".campoBuscaPorNome")
let botaoPesquisa = document.querySelector(".containerBuscaPorNome button")

botaoPesquisa.addEventListener("click", function(){
    let valorPesquisa = barraPesquisa.value.toLowerCase().trim()
    let btnResultado = barraBuscar(valorPesquisa)
    somarProdutos(btnResultado)
    renderizarCard(btnResultado)
})

function barraBuscar(pesquisa){
    let resultadoPesquisa = []
    tagUl.innerHTML = "";
    
    for(let i = 0; i < produtos.length; i++){
        
        let nomesProdutos = produtos[i].nome.toLowerCase().trim()
        if(nomesProdutos.includes(pesquisa)){
            resultadoPesquisa.push(produtos[i])
        }
    }
    return resultadoPesquisa
}