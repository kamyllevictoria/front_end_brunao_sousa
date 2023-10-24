var meusGatos = {
    gato: [
        {
            "id": 1,
            "nome": "Gato amarelo",
            "fotoURL": "images_6/gatoamarelo.webp",
            "fotoExterna": "https://petcaramelo.com/racas-de-gato/gato-amarelo/",
            "descricao": "Gatinhos amarelos são sempre animados e muito amorosos com seus donos!"
        },
        {
            "id": 2,
            "nome": "Gato preto",
            "fotoURL": "images_6/gatopreto.jpg",
            "fotoExterna": "https://www.uol.com.br/nossa/noticias/redacao/2022/10/31/qual-a-origem-da-supersticao-que-relaciona-gato-preto-a-mau-agouro.htm",
            "descricao": "Gatinhos preto são sempre charmosos e muito amorosos com seus donos!"
        },
        {
            "id": 3,
            "nome": "Gato frajola",
            "fotoURL": "images_6/frajolinhaa.webp",
            "fotoExterna": "https://www.patasdacasa.com.br/noticia/gato-frajola-conheca-caracteristicas-do-gato-preto-e-branco",
            "descricao": "Gatinhos brancos são sempre animados e muito carismaticos com seus donos!"
        },
    ]
};

$(function(){//estrutura base do jquery{
    var cardGatoJquery = $('#card')
    var btnJquery = $('#btn')
    

    function getGato(){
        //pegamos o valor do inputField
        var inputGato = $('#myinput').val().toLowerCase()
        console.log(inputGato)
    }

    
    getGato()
})









//jquery requer escopo de variaveis, logo, o console comum não é executado fora no jquery
//precisamos inicializar o jquery com a primeira frase acima, ou seja, é um documento que, quando estiver pronto (ready) irá executar uma função, no caso, a função é responsável por definir novas variaveis e realizar um console.log, mas podemos abreviar usando apenas o $funcion()