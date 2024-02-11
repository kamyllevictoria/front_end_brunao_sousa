var overlay = document.querySelector('.jl-menu-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImages = document.querySelectorAll('.jl-image-hover');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnPrev = document.querySelector('.jl-item-prev');
var btnNext = document.querySelector('.jl-item-next');
var currentCounter = document.querySelector('.jl-current-slide');
var totalCounter = document.querySelector('.jl-total-slide');
var skeletonLoading = document.querySelector('.jl-skeleton-loading');


var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) +'px';

//counter formatter
var counterFormatterItem = function(j){
    if(j < 10){
        return '0' + j;
    }
        else{
            return j;
        }
}


//skeleton loading
const skeletonAnime = function (imagem) {
    var myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function () {
        skeletonLoading.classList.add('jl-fade-out');
        setTimeout(function () {
            skeletonLoading.style.display = 'none';
        }, 2000);
    });
}

totalCounter.innerHTML = counterFormatterItem(galleryImages.length);

const getImageSrc = function (){
    for(var i = 0; i < galleryImages.length; i++){
        galleryImages[i].addEventListener('click', function(){
            var overlay = document.querySelector('.jl-menu-overlay');
            var imageSrc = this.querySelector('img').getAttribute('data-src');
            var itemNum = this.querySelector('img').getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);
            overlay.classList.add('jl-is-open')
            frameContainer.classList.add('jl-is-open');
            frameContainer.classList.add('fade-up-animation')

            currentCounter.innerHTML = counterFormatterItem(itemNum);
            
            skeletonAnime(imageSrc);
        })
    }
}
getImageSrc();

//close overlay
for(var c = 0; c < closeGallery.length; c++){
    closeGallery[c].addEventListener('click', function(){
        let overlay = document.querySelector('.jl-menu-overlay');
        if(frameContainer.classList.contains('jl-is-open')){
            frameContainer.classList.remove('jl-is-open');
        }
        overlay.classList.remove('jl-is-open');

    })
}

overlay.addEventListener('click', function(){
    if(frameContainer.classList.contains('jl-is-open')){
        frameContainer.classList.remove('jl-is-open')
    }

    overlay.classList.remove('jl-is-open')

})

const nextItem = function(){
    //current frame
    var currentItemNum = frameImage.getAttribute('data-index');
    console.log(currentItemNum);

    //capture the next frame
    var nexItemNum = parseInt(currentItemNum) + 1;

    //we create the loop and capture the item that matches th number next to teh current item
    for(var n = 0; n < galleryImages.length; n++){
        var item = galleryImages[n];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if(itemNum === nexItemNum){
            //get data src
            var nextSrc = item .getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item')

            skeletonLoading.style.display = 'flex';

            //passing the data-src to the img tag
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);

            currentCounter.innerHTML = counterFormatterItem(nextIndex);
            skeletonAnime(nextSrc);
        }       
    }
} 

const prevItem = function(){
    //current frame
    var currentItemNum = frameImage.getAttribute('data-index');
    console.log(currentItemNum);

    //capture the next frame
    var prevItemNum = parseInt(currentItemNum) - 1;

    //we create the loop and capture the item that matches th number next to teh current item
    for(var p = 0; p < galleryImages.length; p++){
        var item = galleryImages[p];
        var itemNum = parseInt(item.getAttribute('data-item'));


        if(itemNum === prevItemNum){
            //get data src
            var prevSrc = item .getAttribute('data-src');
            var prevIndex = item.getAttribute('data-item')

            skeletonLoading.style.display = 'flex';

            //passing the data-src to the img tag
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);


            currentCounter.innerHTML = counterFormatterItem(prevIndex);
            skeletonAnime(prevSrc);
        }
        
    }
} 

btnNext.addEventListener('click', function(){
    nextItem();
})

btnPrev.addEventListener('click', function(){
    prevItem();
})


