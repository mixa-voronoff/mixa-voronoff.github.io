'use strict'

// Скролл вниз
let chevronDown = document.querySelector('.fa-chevron-down');
chevronDown.addEventListener('click', function() {
    let height = window.innerHeight; // высота окна просмотра
    window.scrollTo ({ 
        top: height,
        behavior: 'smooth',
    });
});

// Переключение в портфолио
let portfolioButtons = document.querySelectorAll('.portfolio__button');
for (let index = 0; index < portfolioButtons.length; index++) {
    const portfolioButton = portfolioButtons[index];
    portfolioButton.addEventListener('click', function (e) {
        portfolioButton.classList.remove('inactive');        
        let previous = portfolioButton.parentElement.querySelector('.active');
        previous.classList.remove('active');
        previous.classList.add('nactive');
        portfolioButton.classList.add('active');        
        e.preventDefault();
    });
};