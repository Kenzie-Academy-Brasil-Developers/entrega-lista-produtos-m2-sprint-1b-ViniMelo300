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

//FAZENDO O FILTRO POR CATEGORIA
const filtrarHorti  = () => {
    tagUl.innerHTML = ""
    const filtro = produtos.filter((produto) => produto.secao === 'Hortifruti')
    renderizarCard(filtro)
}
//FAZENDO O BOTÃO FUNCIONAR JUNTO A FUNÇÃO DE FILTRAR
const btnHortiFruti = document.getElementsByClassName("estiloGeralBotoes estiloGeralBotoes--filter")[1]
btnHortiFruti.addEventListener("click", filtrarHorti)

//FAZENDO O FILTRO POR CATEGORIA
const filtrarPanificadora = () => {
    tagUl.innerHTML = ""
    const filtrar = produtos.filter((produto) => produto.secao === "Panificadora")
    renderizarCard(filtrar)
}
//FAZENDO O BOTÃO FUNCIONAR JUNTO A FUNÇÃO DE FILTRAR
const btnPanificadora = document.getElementsByClassName("estiloGeralBotoes estiloGeralBotoes--filter")[2]
btnPanificadora.addEventListener("click", filtrarPanificadora)

//FAZENDO O BOTÃO FUNCIONAR JUNTO A FUNÇÃO DE FILTRAR
const filtrarLaticinios = () => {
    tagUl.innerHTML = ""
    const filtrar = produtos.filter((produto) => produto.secao === "Laticínio")
    renderizarCard(filtrar)
}
//FAZENDO O BOTÃO FUNCIONAR JUNTO A FUNÇÃO DE FILTRAR
const btnLaticinios = document.getElementsByClassName("estiloGeralBotoes estiloGeralBotoes--filter")[3]
btnLaticinios.addEventListener("click", filtrarLaticinios)

//BOTÃO QUE MOSTRA TODOS OS PRODUTOS FUNCIONANDO 
const mostrarTodosProdutos = () => {
    tagUl.innerHTML = ""
    renderizarCard(produtos)
}

const btnTodosProdutos = document.getElementsByClassName("estiloGeralBotoes estiloGeralBotoes--filter")[0]
btnTodosProdutos.addEventListener("click", mostrarTodosProdutos)