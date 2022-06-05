'use strict'

// Dropdown menu
const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownBody = document.querySelector('.dropdown-body');
if (dropdownIcon) {    
    dropdownIcon.addEventListener('click', function(e) {        
        dropdownIcon.classList.toggle('js-active');
        dropdownBody.classList.toggle('js-active');
    });
}

// Dropdown menu 2 - второе. Сейчас это разный код, но надо написать единый
const dropdownIcon2 = document.querySelector('.dropdown-icon2');
const dropdownBody2 = document.querySelector('.dropdown-body2');
if (dropdownIcon2) {    
    dropdownIcon2.addEventListener('click', function(e) {        
        dropdownIcon2.classList.toggle('js-active');
        dropdownBody2.classList.toggle('js-active');
    });
}

// Dropdown menu 3
const dropdownIcon3 = document.querySelector('.dropdown-icon3');
const dropdownBody3 = document.querySelector('.dropdown-body3');
if (dropdownIcon3) {    
    dropdownIcon3.addEventListener('click', function(e) {        
        dropdownIcon3.classList.toggle('js-active');
        dropdownBody3.classList.toggle('js-active');
    });
}

// Закрытие каждого выпадающего меню эскейпом
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        dropdownIcon.classList.remove('js-active');
        dropdownBody.classList.remove('js-active');
        dropdownIcon2.classList.remove('js-active');
        dropdownBody2.classList.remove('js-active');
        dropdownIcon3.classList.remove('js-active');
        dropdownBody3.classList.remove('js-active');
    }
});

// Анимация появления поисковой формы
const openingButton = document.querySelector('.header__button');
const searchForm = document.querySelector('.header__form');

openingButton.addEventListener('click', function(e) {        
    openingButton.classList.toggle('js-search-active');    
    searchForm.classList.toggle('js-search-active');    
});


// Заглушка для поиска по сайту
const searchInput = document.querySelector('#search');
searchForm.addEventListener('submit', function(e) {
    const searchText = searchInput.value;
    if (searchText) {
        alert(`Передано значение '${searchText}'`);
        searchInput.value = '';
    } else {
        alert('Введите поисковый запрос!');
    }
    e.preventDefault();
});


// Иммитация работы селекта
let inputs = document.querySelectorAll('.services__explore-inner');
for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    input.addEventListener('click', function() {
        dropdownIcon3.classList.remove('js-active');
        dropdownBody3.classList.remove('js-active'); // Закрытие "меню"
        let inputValue = input.value; 
        let divReplace = document.querySelector('.services__explore-option_basis'); 
        divReplace.textContent = inputValue;  // Подстановка значения выбранного псевдо-опшена в заголовок
        let hiddenInput = document.getElementById('hidden');
        hiddenInput.value = inputValue; // Запись выбранного значения в скрытый инпут        
    });
}

// Заглушка при отправке формы
let form = document.getElementById('form');
form.addEventListener("submit", function (e) {    
    let hiddenInput = document.getElementById('hidden');
    let hiddenInputValue = hiddenInput.value; 
    if (hiddenInputValue) {
        alert(`Передано значение "${hiddenInputValue}"`);
        location.reload();
    } else {
        alert(`Выберете один из предлагаемых вариантов!`);
    }
    e.preventDefault();    
});

// TABS
let titles = document.querySelector('.tabs__titles');
let windows = document.querySelector('.tabs__windows'); 

titles.onclick = function(event) {
    let target = event.target;
    if (!target.classList.contains('js-title-active')) {        

        let titlesCollection = titles.children;
        for (let index = 0; index < titlesCollection.length; index++) {
            const element = titlesCollection[index];
                element.classList.toggle('js-title-active');                
        }

        let windowsCollection = windows.children;
        for (let index = 0; index < windowsCollection.length; index++) {
            const element = windowsCollection[index];
                element.classList.toggle('js-window-active');                
        }
    }
};

// SPOILERS
const spoilersArray = document.querySelectorAll('[data-spoilers]');
if (spoilersArray.length > 0) {
    // Получение обычных спойлеров
    const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
        return !item.dataset.spoilers.split(",")[0];
    });
    // Инициализация обычных спойлерв
    if (spoilersRegular.length > 0) {
        initSpoilers(spoilersRegular);
    }
    // Получение спойлеров c медиазапросами
    const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
        return item.dataset.spoilers.split(",")[0];
    });
    // Инициализация спойлеров c медиазапросами
    if (spoilersMedia.length > 0) {
        const breakpointsArray = [];
        spoilersMedia.forEach(item => {
            const params = item.dataset.spoilers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Получаем уникальные брейкпойнты
        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;            
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        // Работаем с каждым брейкпоинтом
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Объекты с нужными условиями
            const spoilersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });
            // Событие
            matchMedia.addListener(function () {
                initSpoilers(spoilersArray, matchMedia);
            });
            initSpoilers(spoilersArray, matchMedia);
        });
    }
    // Инициализация
    function initSpoilers(spoilersArray, matchMedia = false) {
        spoilersArray.forEach(spoilersBlock => {
            spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
            if (matchMedia.matches || !matchMedia) {
                spoilersBlock.classList.add('_init');
                initSpoilerBody(spoilersBlock);
                spoilersBlock.addEventListener('click', setSpoilerAction);                
            } else {
                spoilersBlock.classList.remove('_init');
                initSpoilerBody(spoilersBlock, false);
                spoilersBlock.removeEventListener('click', setSpoilerAction);
            }
        });
    }
    // Работа с контентом
    function initSpoilerBody(spoilersBlock, hideSpoilersBody = true) {
        const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
        if (spoilerTitles.length > 0) {
            spoilerTitles.forEach(spoilerTitle => {
                if (hideSpoilersBody) {
                    spoilerTitle.removeAttribute('tabindex');
                    if (!spoilerTitle.classList.contains('_active')) {
                        spoilerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spoilerTitle.setAttribute('tabindex', '-1');
                    spoilerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpoilerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
            const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
            const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
            const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
            if (!spoilersBlock.querySelectorAll('._slide').length) {
                if (oneSpoiler && !spoilerTitle.classList.contains('_active')) {
                    hideSpoilersBody(spoilersBlock);
                }                
                spoilerTitle.classList.toggle('_active');
                _slideToggle(spoilerTitle.nextElementSibling, 500);
            }            
            e.preventDefault();
        }                
    }
    function hideSpoilersBody(spoilersBlock) {
        const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
        if (spoilerActiveTitle) {
            spoilerActiveTitle.classList.remove('_active');
            _slideUp(spoilerActiveTitle.nextElementSibling, 500);
        }
    }
}

//=============
// SlideToggle
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {        
        return _slideDown(target, duration)
    } else {
        return _slideUp(target, duration)
    }
}
//=============

/*
Для родителя сполйеров пишем атрибут data-spoilers
Для заголовков спойлеров пишем атрибут data-spoiler
Если нужно включать/выключать работу спойлеров на разных размеров экранов
пишем параметы ширины и типы брейкпойнта.
Например:
data-spoilers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spoilers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался только один сполйер добавляем атрибут data-one-spoiler
*/