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

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

nextItem.addEventListener('click', function(){
    nextSlideAnime();
})

prevItem.addEventListener('click', function(){
    prevSlideAnime();
})



