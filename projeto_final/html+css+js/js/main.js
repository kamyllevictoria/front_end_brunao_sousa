var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info')
    
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
    //quando eu clicar em algo, façca, quando eu clicar novamente, refaça- conceito de toggle, por isso nao usamos o add, pq ele é acumulativo em suas ações
});

//this serve para acessarmos o elemento do escopo atual