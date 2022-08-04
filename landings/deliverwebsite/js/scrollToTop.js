/*
HTML
<body>		
	<div class="wrapper">
    </div>

	<a class="back-to-top" title="Наверх"><span>↑˄▲</span></a> <!-- Выбрать один из вариантов - этот с символом, --> 
	<a class="back-to-top" title="Наверх">                     <!-- ... а этот с изображением --> 
		<img src="https://cdn-icons-png.flaticon.com/512/626/626082.png" alt="up arrow">
	</a>
	<script src="js/scrollToTop.js"></script>		 
</body>
*/

/*
SCSS
.back-to-top {
    position: fixed;
    bottom: 40px; // задать по макету
    left: 40px; // задать по макету    
    width: 40px; // задать по макету
    height: 40px; // задать по макету
    background-color: #fff; // задать по макету
    border-radius: 50%; // задать по макету
    cursor: pointer;
    z-index: 100;
    display: none;
    justify-content: center;
    align-items: center;    

    &.js-show {
        display: flex;
    }

    img { // если картинка не будет испорльзоваться - можно удалить этот стиль
        max-width: 100%;
    }
}  
*/
// ============================================================== Удалить всё, что выше этой строчки, и её саму тоже =========
// В html есть два варианта - либо текстовый символ стрелки, либо картинка. Выбрать тот, который нужен, а ненужный - удалить.
// Тег со стрелкой должен находиться вне .wrapper
'use strict';
(function() {  
    function trackScroll() {
        let scrolled = window.pageYOffset; // на сколько пикселей страница пролистана вниз
        let height = window.innerHeight; // высота окна просмотра
  
        //window.innerHeight

        if (scrolled > height) {
            backToTopButton.classList.add('js-show');
        }
        if (scrolled < height) {
            backToTopButton.classList.remove('js-show');
        }
    }
  
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollTo ({ 
                top: 0,
                behavior: 'smooth',
            });
        }
    }
  
    let backToTopButton = document.querySelector('.back-to-top');
  
    window.addEventListener('scroll', trackScroll);
    backToTopButton.addEventListener('click', backToTop);
})();