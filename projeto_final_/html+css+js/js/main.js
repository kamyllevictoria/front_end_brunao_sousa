//variables
var btnContact = document.querySelector('.jl-btn-contact');
var overlay = document.querySelector('.jl-overlay');
var budgetModal = document.querySelector('#jl-budget-modal');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var mobileMenu = document.querySelector('.jl-menu-mobile');
var btnMenuMobile = document.querySelector('.jl-btn-menu-mobile ion-icon')

//page prelader
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('j-fade-out');

    setTimeout(function(){
        pagePreloader.style.display = 'none';
    }, 2000)

});

//opening and closing contact information
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');

});

//open and close mobile menu
for(var m = 0; m < toggleMenu.length; m++){
    toggleMenu[m].addEventListener('click', function(){

        var menuOverlay = document.querySelector('.jl-menu-overlay');
        menuOverlay.classList.toggle('jl-is-open');
        mobileMenu.classList.toggle('jl-menu-is-closed');
        mobileMenu.classList.toggle('jl-menu-is-open');

        var icon = btnMenuMobile.getAttribute('name')

        if(icon === 'menu'){
            btnMenuMobile.setAttribute('name', 'close');
        } else{
            btnMenuMobile.setAttribute('name', 'menu');
        }

    })
}

//open and close modal form
for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function() {

        if (!budgetModal.classList.contains('jl-slide-top-in')) {
            budgetModal.classList.add('jl-slide-top-in');
        }
        budgetModal.classList.toggle('jl-is-open');
        overlay.classList.toggle('jl-is-open');
    });
}




