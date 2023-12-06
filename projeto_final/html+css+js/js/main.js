//variables
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');

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

//this is used to access the element of the current scope


//open and close buttons
for (let i = 0; i < toggleModal.length; i++) {
	toggleModal[i].addEventListener("click", function(){

        var overlay = document.querySelector('.jl-overlay');
        var budgetModal = document.querySelector('#jl-budget-modal');
		
        overlay.classList.toggle('jl-is-open');
        budgetModal.classList.toggle('jl-is-open',);
        budgetModal.classList.toggle('jl-slideTopIn');
	});
}


//waypoints
var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
    element: document.querySelector('.jl-scroll-down'),
    handler: function() {
      
      myScrollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%'
});

