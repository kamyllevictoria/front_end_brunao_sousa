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
    //we need to create a displey= none to disappear with our element and not let the opacity erase the other components of the screen, that's why we use the display settings within the setTimeOut function  

    //the function setTimeOut is used when pageloader are ready, wait 3 seconds to load the principal page
});

//opening and closing contact information
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
    //when I click on something, do it, when I click again, do it again - concept of toggle, that's why we don't use add, because it is cumulative in its actions
});

//open and close mobile menu
for(var m = 0; m <toggleMenu.length; m++){
    toggleMenu[m].addEventListener('click', function(){

        var menuOverlay = document.querySelector('.jl-menu-overlay');
        menuOverlay.classList.toggle('jl-is-open');
        mobileMenu.classList.toggle('jl-menu-is-closed');
        mobileMenu.classList.toggle('jl-menu-is-open');


        var icon = btnMenuMobile.getAttribute('name')

        if(icon === 'menu-outline'){
            btnMenuMobile.setAttribute('name', 'close');
        } else{
            btnMenuMobile.setAttribute('name', 'menu-outline');
        }
    })
}

//remove overlay
overlay.addEventListener("click", function() {
    if (budgetModal.classList.contains('jl-is-open')) {
        budgetModal.classList.remove('jl-is-open');
        overlay.classList.remove('jl-is-open');
        budgetModal.classList.remove('jl-slide-top-in');
    }
    
    budgetModal.classList.toggle('jl-is-open');
    overlay.classList.toggle('jl-is-open');
});

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

//But, we have a problem, when loading our overlay, we are loading the toggle modal and toggle menu functions, therefore, a conflict between them will occur. When we click on the toggle (green area) it will not close, much less the menu.

//post gallery height
var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) +'px';



//waypoints
var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
        myScrollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%'
});



