/*
HTML
<body>		
	<div class="wrapper">

        Поместить в head: <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
        <!-- Если слайдер помещаем внутрь флекс-элемента, то тому нужно присвоить "min-width: 0;" -->			
		<!-- Главный контейнер слайдера -->					
		<div class="swiper-container"> <!-- аттрибут dir="rtl" сюда для пролистывания справа налево -->
			<!-- Обязательная оболочка -->
			<div class="swiper-wrapper">
				<!-- Слайд -->
				<div class="swiper-slide"> <!-- для навигации по хешу указать data-hash="slide-1" и далее цифры по порядку-->
					<!-- Контент внутри слайда -->
					<div> <!-- для зума указать class="swiper-zoom-container" именно в этом диве, не в img-->
						<img src="https://immigrantinvest.com/wp-content/uploads/2015/08/luchshie-goroda-dlya-zhizni-kakoj-gorod-vybrat-dlya-prozhivaniya-271916083.jpg" alt="Изображение"> <!-- Картинка для примера -->
					</div>
				</div>								
				<!-- Слайд -->
				<div class="swiper-slide">
					<!-- Контент внутри слайда -->
					<div> 
						<img data-src="https://upload.wikimedia.org/wikipedia/commons/3/3e/1_singapore_city_skyline_dusk_panorama_2011.jpg" class="swiper-lazy" alt="Изображение"> <!-- Эту картинку зададим в ll-->
						<div class="swiper-lazy-preloader"></div> <!-- для ll добавляем такой див -->
					</div>
				</div>
				<!-- Слайд -->
				<div class="swiper-slide">
					<!-- Контент внутри слайда -->
					<div> 
						<!-- Контент может быть любым -->
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quasi hic maxime laborum sapiente, dolorum dolores veritatis nostrum.</p>
					</div>
				</div>							
			</div>
			<!-- Добавляем если нужны стрелки управления -->								
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<!-- Добавляем если нужна пагинация -->								
			<div class="swiper-pagination"></div>
			<!-- Добавляем если нужен скроллбар -->								
			<div class="swiper-scrollbar"></div>				
		</div>	

    </div>				
	<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
	<script src="js/slider.js"></script>
</body>
*/

/*
SCSS
html, body {
    height: 100%;    
    overflow: hidden;
}

.wrapper {    
    min-height: 100%;    
}
// ===========================================================================================================
.swiper-container {
    margin: 0 auto; // если нужно центрировать    
    height: 800px; // указать нужное, это для примера       
    width: 1100px; // стиль для примера, но для эффекта "куб" по любому ограничиваем ширину (значение мб любое, но быть должно)
    overflow: hidden; // скорее всего понадобится
    position: relative;
    border: 1px solid #000; // для понимания происхдящего
}
.swiper-wrapper {
    width: 800px; // стиль для примера
} 
.swiper-slide {
    // Автоширина
    // width: auto;
    
    // Мультирядность
    // height: calc((100% - 30px) / 2); // 2 - для двух рядов, 30px - из js spaceBetween
    // overflow: hidden;

    div {
        text-align: center; // скорее всего понадобится

        img { // если слайды - это картинки, то, вероятно, это потребуется
            max-width: 100%;                
        } 
    }
}
// Стрелки
.swiper-button-prev::after, .swiper-button-next::after {
    // так как стрелки заданы иконочным шрифтом        
    font-size: 80px; // стиль для примера
}
// Пагинация
.swiper-pagination {
    bottom: 20px; // стиль для примера
}
// Буллеты
.swiper-pagination-bullet {
    width: 20px; // стиль для примера    
    height: 20px; // стиль для примера        
}
// Фракция
.swiper-pagination-fraction {
    font-size: 20px; // стиль для примера           
}
// Прогрессбар
.swiper-pagination-progressbar-fill {
    background-color: #7a956b; // стиль для примера           
}
// Скролл
.swiper-scrollbar-drag {
    cursor: pointer; // стиль для примера           
    background-color: #7a956b; // стиль для примера           
}
*/
// ============================================================== Удалить всё, что выше этой строчки, и её саму тоже =========
// Что бы подключить свайпер локально - скачать отсюда https://unpkg.com/browse/swiper/ 
// Инициализируем Swiper
new Swiper('.swiper-container', {
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        
        // Буллеты
        type: 'bullets', // по умолчанию
        clickable: true,
        /*
        // Динамические буллеты
        dynamicBullets: true,
        // Кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */       
        // Фракция
        // type: 'fraction',
        // Кастомный вывод фракции
        // renderFraction: function (currentClass, totalClass) {
        //     return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        // },        
       /*
        // Прогрессбар
        type: 'progressbar',
        */
    },
    /*
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },
    */
    // Вкл/выкл перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1, // - по умолчанию, 0 - откл
    // Угол срабатываения свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключения слайда при клике по нему
    slideToClickedSlide: true, // только при slidesPerView: (больше 1),

    // Навигация по хешу (стрелками браузера, не клавиатуры)
    // hashNavigation: {
        // Отслеживать состояние
        // watchState: true,
    // },

    // Управление клавиатурой    
    keyboard:{
        // Вкл/выкл
        enabled: true,
        // Вкл/выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true, // - по умолчанию
        // Вкл/выкл управление клавишами PageUp, PageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта, на котором будет срабатывать прокрутка мышью
        // eventsTarget: ".image-slider" // если много слайдеров - будет лагать, лучше не прописывать свойство
    },

    /*
    // Автовысота
    autoHeight: true,
    */

    
    // Количество слайдов для показа
    slidesPerView: 3, // можно указать auto - автоширина
    

    /*
    // Отключить слайдер, если слайдов меньше, чем указано в slidesPerView
    watchOverflow: true,
    */

    // Отступ между слайдами
    spaceBetween: 30,

    
    // Количество пролистываемых слайдов
    slidesPerGroup: 3,
    

    /*
    // Активный слайд по центру
    centeredSlides: true,
    */

    /*
    // Стартовый слайд
    initialSlide: 0, // первый - это нулевой
    */

    /*
    // Мультирядность
    slidesPerColumn: 2, // обязательно отключить автовысоту
    */
    
    /*
    // Бесконечный слайдер
    loop: true, // scroll лучше отключать, не работает с мультирядностью
    */

    /*
    // Кол-во дублирующих слайдов
    loopedSlides: 0, // если slidesPerView не равно 1 при включенном бесконечном слайдере, то этим значнием подгоняем так,что бы работало корректно всё. по умолчанию 0
    */

    /*
    // Свободный режим
    freeMode: true,
    */

    /*
    // Автопрокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 2000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения
        disableOnItneraction: false,
    },
    */

    
    // Скорость (в ms)
    speed: 750,
    

    /*
    // Вертикальный слайдер
    direction: 'vertical',
    */

    
    // Эффекты переключения слайдов
    // Листание - по умолчанию
    effect: 'slide',
    

    /*
    // Эффекты переключения слайдов
    // Смена прозрачности
    effect: 'fade',
    fadeEffect: {
        crossFade: true // Параллельная смена прозрачности
    },
    */

    /*
    // Эффекты переключения слайдов
    // Переворот
    effect: 'flip',
    flipEffect: {
        slideShadows: true, // Тень
        limitRotation: true // Показ только активного окна
    },
    */

    /*
    // Эффекты переключения слайдов
    // Куб
    effect: 'cube',
    cubeEffect: {
        // Настройки тени
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    */

    /*
    // Эффекты переключения слайдов
    // Поток
    effect: 'coverflow',
    coverflowEffect: {        
        rotate: 20, // Угол
        stretch: 50, // Наложение
        slideShadows: true, // Тень
    },
    */

    
    // Брейкпоинты - мобайл фёрст
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    

    // Отключить предзагрузку картинок
    preloadImages: false,
    // Lazy loading    
    lazy: {
        loadOnTransitionStart: false, // Подгружать на старте переключения слайда
        loadPrevNext: false, // Подгрузить предыдущую и следующую картинки
    },
    // watchSlidesProgress: true, // Слежка за видимыми слайдами - если slidesPerView: auto или больше 1
    // watchSlidesVisibility: true, // Добавление класса видимым слайдам  - если slidesPerView: auto или больше 1

    /*
    // Зум картинки
    zoom:{
        maxRatio: 5, 
        minRatio: 1, 
    },
    */
   
    // Превью - смотрим Женин видос на таймкоде 36:45 https://www.youtube.com/watch?v=ddbxsrGPRY0&list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk&index=24&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

    // Если нужно более одного слайдера - то дублируем HTML. Картинки могут быть разными, остальное будет одинаковое

    // Слайдер в слайдере - смотрим Женин видос на таймкоде 38:30 https://www.youtube.com/watch?v=ddbxsrGPRY0&list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk&index=24&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

    // Два слайдера с управлением друг другом (например через разделяющий объект) - смотрим Женин видос на таймкоде 39:45 https://www.youtube.com/watch?v=ddbxsrGPRY0&list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk&index=24&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

    /*
    // При сокрытии слайдера в таб (или еще каком-либо нестандартном расположени) включаем для него следующие свойства
    observer: true, // Обновить свайпер при изменении элементов слайдера
    observerParents: true, // Обновить свайпер при изменении родительских элементов слайдера
    observerSlideChildren: true, // Обновить свайпер при изменении дочерних элементов слайдера
    */

    // Параллакс-слайдер - смотрим Женин видос на таймкоде 42:30 https://www.youtube.com/watch?v=ddbxsrGPRY0&list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk&index=24&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

    // Виртуальные слайды - смотрим Женин видос на таймкоде 44:00 https://www.youtube.com/watch?v=ddbxsrGPRY0&list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk&index=24&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

    // Настройки доступности - смотрим Женин видос на таймкоде 45:15 https://www.youtube.com/watch?v=ddbxsrGPRY0&list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk&index=24&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

});


/*
// Запуск автопрокрутки при наведении

// Вторую строку этого кода меняем на это
let myImageSlider = new Swiper('.image-slider', {

let sliderBlock = document.querySelector('.image-slider');

sliderBlock.addEventListener('mouseenter', function (e) {
    myImageSlider.params.autoplay.disableOnInteraction = false;
    myImageSlider.params.autoplay.delay = 500;
    myImageSlider.autoplay.start();
});
sliderBlock.addEventListener('mouseleave', function (e) {
myImageSlider.autoplay.stop();
});
*/