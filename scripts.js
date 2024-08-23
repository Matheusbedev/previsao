const key = "0b00e8c1c1ae71e574e111991d84be16";

function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
        const resposta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric` );
        const dados = await resposta.json();
        colocarNaTela(dados);

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value.trim();

    buscarCidade(cidade)
}

