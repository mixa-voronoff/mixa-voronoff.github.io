
new Swiper('.swiper-container', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets', // по умолчанию
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		
		// // Фракция
		// type: 'fraction',
		// // Кастомный вывод фракции
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },
		/*
		// Прогрессбар
		type: 'progressbar',
		*/
	},
	// Скролл
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	// Возможность перетаскивать скролл
	// 	draggable: true
	// },

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

	/*
	// Количество слайдов для показа
	slidesPerView: 3, // можно указать auto - автоширина
	*/

	/*
	// Отключить слайдер, если слайдов меньше, чем указано в slidesPerView
	watchOverflow: true,
	*/

	// Отступ между слайдами
	spaceBetween: 30,

	/*
	// Количество пролистываемых слайдов
	slidesPerGroup: 1,
	*/

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

	/*
	// Скорость (в ms)
	speed: 500,
	*/

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

	/*
	// Брейкпоинты - мобайл фёрст
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	*/

	// Отключить предзагрузку картинок
	preloadImages: false,
	// Lazy loading
	lazy: {
		 loadOnTransitionStart: false, // Подгружать на старте переключения слайда
		 loadPrevNext: false, // Подгрузить предыдущую и следующую картинки
	},
	// watchSlidesProgress: true, // Слежка за видимыми слайдами - если slidesPerView: auto или больше 1
	// watchSlidesVisibility: true, // Добавление класса видимым слайдам  - если slidesPerView: auto или больше 1

	// Зум картинки
	zoom:{
		maxRatio: 5,
		minRatio: 1,
	},

	/*
	// При сокрытии слайдера в таб (или еще каком-либо нестандартном расположени) включаем для него следующие свойства
	observer: true, // Обновить свайпер при изменении элементов слайдера
	observerParents: true, // Обновить свайпер при изменении родительских элементов слайдера
	observerSlideChildren: true, // Обновить свайпер при изменении дочерних элементов слайдера
	*/

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