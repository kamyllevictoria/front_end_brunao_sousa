var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;

var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;

const sliderTotalItems =  sliderItem.length;
var currentSlide = document.querySelector(".jl-current-slide");
var totalSlide = document.querySelector('.jl-total-slide');

var currentCounter = 1;

var navItems = document.querySelectorAll('.jl-item-navigator a');


var containerWidth = sliderContainer.parentElement.offsetWidth;
sliderContainer.style.width = containerWidth+'px';

for(let p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = containerWidth+'px';

    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}
sliderList.style.width = sliderListWidth+'px';

//HANDLERS
//next slide
var nextSlideAnime = function(){
    var lastItem = sliderListWidth - containerWidth;

    if((-1*(sliderPos) === lastItem)){
        return;
    } else{
        sliderPos -= containerWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos
          }); 
    };
}

//prev slide
var prevSlideAnime = function(){
    if(sliderPos === 0){
        return;
    } else{
        sliderPos += containerWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos
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
    }
}

//counter remove
var removeAdd = function(){
    if(currentCounter > 1 && currentCounter <= sliderTotalItems){
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
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
//remove nav class
var changeActive = function(){
    for(var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('jl-item-active');
        anime({
            targets: navItems[rm],
            width: 20
        });
    }
    setActiveNav(); 
    //removes the class from previous items and adds it to the next item. we change the position of the functions, setActiveNav() remains inside the loop and changeActive() remains on click nextItem()
}

//actions on arrow click
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

nextItem.addEventListener('click', function(){
    nextSlideAnime();
    counterAdd();
    changeActive();
})

prevItem.addEventListener('click', function(){
    prevSlideAnime();
    removeAdd();
})



