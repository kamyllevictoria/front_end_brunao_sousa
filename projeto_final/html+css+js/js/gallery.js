var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImages = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnPrev = document.querySelector('.jl-item-prev');
var btnNext = document.querySelector('.jl-item-next');


const getImageSrc = function (){
    for(var i = 0; i < galleryImages.length; i++){
        galleryImages[i].addEventListener('click', function(){
            var imageSrc = this.getAttribute('data-src');
            var itemNum = this.getAttribute('data-item');
            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);
            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');
            frameContainer.classList.add('fade-up-animation')
        })
    }
}

getImageSrc();

//close overlay
for(var c = 0; c < closeGallery.length; c++){
    closeGallery[c].addEventListener('click', function(){
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    
    })
}


const nextItem = function(){
    //current frame
    var currentItemNum = frameImage.getAttribute('data-index');
    console.log(currentItemNum);

    //capture the next frame
    var nexItemNum = parseInt(currentItemNum) + 1;
    console.log(nexItemNum)

    
    //we create the loop and capture the item that matches th number next to teh current item
    for(var n = 0; n < galleryImages.length; n++){
        var item = galleryImages[n];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if(itemNum === nexItemNum){
            //get data src
            var nextSrc = item .getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item')
            //passing the data-src to the img tag
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);
        }       
    }
} 


btnNext.addEventListener('click', function(){
    nextItem();
})


