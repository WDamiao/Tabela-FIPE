
let code = document.getElementById("code").value
let divInfo = document.getElementById("infos")
let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e)=>{
    e.preventDefault()
    buscarInfo()
})


async function buscarInfo() {
    const data = await fetch(`https://brasilapi.com.br/api/fipe/preco/v1/${code}`)
    const dataBody = await data.json()
    dataBody.map(element => {
         divInfo.innerHTML +=`<div class="detalhes"><p>Modelo: ${element.modelo}</p>
        <p>Valor: ${element.valor}</p>
        <p>Marca: ${element.marca}</p>
        <p>Ano: ${element.anoModelo}</p></div>
        `
    });
    console.log(dataBody)
}