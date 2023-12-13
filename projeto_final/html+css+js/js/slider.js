var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var containerListWidth = null;
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;
const sliderTotalItems =  sliderItem.length;
var currentSlide = document.querySelector(".jl-current-slide");
var totalSlide = document.querySelector('.jl-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.jl-item-navigator a');
var navCounter = document.querySelector('.jl-nav-counter span');

var sliderWidth = sliderContainer.parentElement.offsetWidth;

sliderContainer.style.width = sliderWidth+'px';

for(let p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = sliderWidth+'px';

    var sliderItemWidth = sliderItem[p].offsetWidth;

    containerListWidth += sliderItemWidth;
}
sliderList.style.width = containerListWidth+'px';


//HANDLERS

//next slide
var nextSlideAnime = function(){
    var lastItem = containerListWidth - sliderWidth;
    if((-1*(sliderPos) === lastItem)){
        return;
    } else{
        sliderPos -= sliderWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos,
            easing: 'cubicBezier(0,1.01,.32,1)'
          }); 
    };
}

//prev slide
var prevSlideAnime = function(){
    if(sliderPos === 0){
        return;
    } else{
        sliderPos += sliderWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos,
            easing: 'cubicBezier(0,1.01,.32,1)'
        });
    }
}

//counter formatter
var counterFormatter = function(n){
    if(n <= 9){
        return '0'+n;
    } else{
        return n;
    }
}

//counter add
var counterAdd = function(){
    if(currentCounter > 0 && currentCounter < sliderTotalItems){
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//counter remove
var removeAdd = function(){
    if(currentCounter > 1 && currentCounter <= sliderTotalItems){
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//add nav class
var setActiveNav = function(){
    for(var nv = 0; nv < navItems.length; nv++){
        let myNavNumber = parseInt(navItems[nv].getAttribute('data-nav')); 
        if(myNavNumber === currentCounter){
            navItems[nv].classList.add('jl-item-active');
            anime({
                targets: navItems[nv],
                width: 90
            });
        }
    }
}

//add slide class
var setActiveSlide = function(){
    for(var sld = 0; sld < sliderItem.length; sld++){
        let mySlideNumber = parseInt(sliderItem[sld].getAttribute('data-slide')); 
        if(mySlideNumber === currentCounter){
            sliderItem[sld].classList.add('jl-slide-active');
            sliderItem[sld].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right'); 
            sliderItem[sld].querySelector('img').classList.add('jl-scale');
            sliderItem[sld].querySelector('.jl-portfolio-item-info').classList.add('jl-fade-from-left')
        }
    }
}

//remove nav and slide class
var changeActive = function(){
    for(var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('jl-item-active');
        anime({
            targets: navItems[rm],
            width: 20
        });
    }
    for(var rms = 0; rms < sliderItem.length; rms++){
        if(sliderItem[rms].classList.contains('jl-slide-active'));
        sliderItem[rms].classList.remove('jl-slide-active');
        sliderItem[rms].querySelector('img').classList.remove('jl-scale');
    }
    setActiveNav(); 
    setActiveSlide();

}

//actions 
totalSlide.innerHTML = counterFormatter(sliderTotalItems);
nextItem.addEventListener('click', function(){
    nextSlideAnime();
    counterAdd();
    changeActive();
    setActiveSlide(); 
})

prevItem.addEventListener('click', function(){
    prevSlideAnime();
    removeAdd();
    changeActive();
    setActiveSlide();
})


