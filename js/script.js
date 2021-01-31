"use strict";

//Our Services
const servicesBtnContainer = document.querySelector('.all-services-tabs');
const servicesButtons = document.querySelectorAll('.our-services-btn');
const servicesContent = document.querySelectorAll('.our-services-content');


function hideTabContent(arg) {
    for (let i = arg; i < servicesContent.length; i++) {
        servicesContent[i].classList.remove('show');
        servicesContent[i].classList.add('hidden');
        servicesButtons[i].classList.remove('active');
    }
}

hideTabContent(1);

function showTabContent(arg) {
    if (servicesContent[arg].classList.contains('hidden')) {
        servicesContent[arg].classList.remove('hidden');
        servicesContent[arg].classList.add('show');
        servicesButtons[arg].classList.add('active');
    }
}

servicesBtnContainer.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('our-services-btn')) {
        for (let i = 0; i < servicesButtons.length; i++) {
            if (event.target === servicesButtons[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});

//Our Amazing Work

const amazingButtons = document.querySelector('.work-section-tabs');
const contentBox = document.querySelectorAll('.work-image-container');
const addImgButton = document.getElementsByClassName('work-section-content-button')[0];
const hiddenImages = document.getElementsByClassName('our-work-section-content')[1];
const loader = document.querySelector('.amazing-loader');
const amazingTab = document.querySelectorAll('.work-section-tab');


function showHideContent(arg) {
    contentBox.forEach(function (el) {
        if (el.classList.contains(arg)) {
            el.classList.remove('hide');
        } else {
            el.classList.add('hide');
        }
    })
}

amazingButtons.addEventListener('click', function (event) {
    if (event.target.classList.contains('work-section-tab')) {
        amazingTab.forEach(el => {
            el.classList.remove('active');
        })
    }
    event.target.classList.add('active');

    const target = event.target.getAttribute('data-name');
    if (target !== null && target !== undefined) {
        showHideContent(target);
    }

    if (event.target.classList.contains('all')) {
        contentBox.forEach(el => {
            el.classList.remove('hide');
        });
    }

});

function showHiddenBlock() {
    hiddenImages.classList.remove('block');
    loader.style.display = 'none';
}

addImgButton.onclick = function () {
    loader.style.display = 'block';
    addImgButton.remove();
};
addImgButton.addEventListener('click', () => {
    setTimeout(showHiddenBlock, 2000);
});


//Reviews Section

const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

//Gallery of best images

const addImgGalleryButton = document.getElementsByClassName('gallery-button')[0];
const galleryHiddenImages = document.getElementsByClassName('gallery-hidden-images')[0];
const galleryLoader = document.querySelector('.gallery-loader');

let gallery = document.querySelector('.gallery');

let myMasonry = new Masonry(gallery, {
    itemSelector: '.item-masonry',
    columnWidth: 386,
    fitWidth: true,
    gutter: 5
});

imagesLoaded(gallery).on('progress', function () {
    myMasonry.layout();
});

addImgGalleryButton.onclick = function () {
    addImgGalleryButton.remove();
    galleryLoader.style.display = 'block';
};

function showGalHidImg(){
    imagesLoaded(gallery).on('progress', function () {
        myMasonry.layout();
    });
    galleryHiddenImages.style.display = 'block';
    galleryLoader.style.display = 'none';

}
addImgGalleryButton.addEventListener('click',()=>{
    setTimeout(showGalHidImg, 2000);
});
