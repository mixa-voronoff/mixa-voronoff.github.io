/*
HTML
<body>		
	<div class="wrapper">

            <header class="header">
				<div class="header__container">
					<a href="#" class="header__logo"></a> - Cюда вставляем иконку сайта
					<div class="header__menu menu">
                        <span class="menu__line"></span>
						<div class="menu__icon"> - Иконка бургера
							<span></span>
						</div>
						<nav class="menu__body">
							<ul class="menu__list">
								<li><a data-goto=".page__section_1" href="#" class="menu__link">Раздел №1</a></li> - Пункт меню со скроллом
								<li><a data-goto=".page__section_2" href="#" class="menu__link">Раздел №2</a></li> - Пункт меню со скроллом
								<li><a data-goto=".page__section_3" href="#" class="menu__link">Раздел №3</a></li> - Пункт меню со скроллом
								<li>                                                                               - Пункт меню с подменю
									<a href="#" class="menu__link">Страница №1</a>
									<span class="menu__arrow"></span>                                              - Стрелка открытия подменю
									<ul class="menu__sub-list">
										<li>                                                                       - Пункт подменю (скролл не будет работать)
											<a href="#" class="menu__sub-link">Раздел страницы №1</a>
										</li>
										<li>                                                                       - Пункт подменю (скролл не будет работать)
											<a href="#" class="menu__sub-link">Раздел страницы №2</a>
										</li>
										<li>                                                                       - Пункт подменю (скролл не будет работать)
											<a href="#" class="menu__sub-link">Раздел страницы №3</a>
										</li>
									</ul>
								</li>
								<li>                                                                               - Пункт меню без скролла
									<a href="#" class="menu__link">Страница №2</a>
								</li>																
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main class="page">
				<section class="page__section page__section_1"> - класс отсюда задать в data-goto=".*******"
					<h1>Секция 1</h1>	
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum quisquam ex reiciendis natus non sint adipisci officiis deleniti voluptas laboriosam animi impedit eius iusto voluptatum, quibusdam, temporibus nihil sed enim! Ad veniam impedit aliquam provident minus minima, quaerat quibusdam iste, in molestiae aperiam earum iure reprehenderit. Vero iusto porro, earum ea quas sit doloremque velit et laudantium quibusdam eum sequi fugit laborum repudiandae eligendi! Aliquid autem eum architecto nisi velit quisquam sed. Ullam, vel minus dolor unde ut quaerat assumenda? Ad necessitatibus ullam architecto commodi quasi non voluptate. Soluta voluptates alias quia excepturi asperiores similique vitae, nobis quas molestias, inventore repudiandae reiciendis voluptas expedita animi esse assumenda fugit amet ex saepe laboriosam libero autem obcaecati deleniti. Facere vitae numquam neque delectus maxime eum doloremque ducimus quasi dolorem! Iste magnam non, numquam, corporis assumenda deleniti, distinctio veritatis vel pariatur possimus amet obcaecati eos soluta nisi! Corrupti consequatur ea voluptate exercitationem. Vero, veniam beatae quasi harum illo iste, architecto sit ipsam suscipit optio debitis commodi voluptas quas magni nemo nostrum, delectus quisquam aut porro blanditiis molestiae assumenda neque accusantium ullam? Eligendi quisquam repudiandae mollitia numquam officiis porro, quod id in excepturi facere non quam, nobis voluptates ducimus nihil. Ab saepe id distinctio molestiae itaque nihil culpa sapiente nisi minima fugit dignissimos natus quisquam, quae officia eligendi ullam exercitationem qui molestias numquam tenetur recusandae? Velit iure ex incidunt saepe nulla veritatis illum in totam cum? Nobis suscipit mollitia doloremque molestiae. Earum laborum eum ipsam doloremque porro nulla provident aperiam nesciunt, libero minima excepturi odit dignissimos alias recusandae enim impedit facilis? Distinctio amet sed omnis hic asperiores tenetur quisquam sint repellendus, natus esse dolore possimus quos reprehenderit inventore eum vitae eaque temporibus sit, delectus ab tempora non fugit. In iusto exercitationem est? Veniam, a molestiae suscipit officiis repudiandae, numquam necessitatibus ab soluta odit vitae, quisquam impedit voluptate corrupti. Facilis dolor accusamus aliquid fuga optio pariatur ad rerum iure accusantium consequuntur asperiores quibusdam quae repudiandae, neque molestias perspiciatis nihil, tempore molestiae, nobis deserunt quia in labore et! Aliquid inventore quibusdam error! Aliquid numquam nihil aperiam illo alias ducimus quibusdam ex. Reiciendis voluptatem dolore quisquam ducimus repudiandae, quas voluptas tenetur nulla, nobis modi voluptate magni aspernatur inventore earum nesciunt distinctio similique reprehenderit. Mollitia quisquam blanditiis cum explicabo neque officiis, beatae eum dignissimos alias ea quis assumenda quos similique odit, voluptatum rerum repudiandae animi consequuntur nulla nesciunt repellendus accusamus officia! Modi deleniti impedit doloribus qui exercitationem.</p>				
				</section>
				<section class="page__section page__section_2"> - класс отсюда задать в data-goto=".*******"
					<h2>Секция 2</h2>					
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum quisquam ex reiciendis natus non sint adipisci officiis deleniti voluptas laboriosam animi impedit eius iusto voluptatum, quibusdam, temporibus nihil sed enim! Ad veniam impedit aliquam provident minus minima, quaerat quibusdam iste, in molestiae aperiam earum iure reprehenderit. Vero iusto porro, earum ea quas sit doloremque velit et laudantium quibusdam eum sequi fugit laborum repudiandae eligendi! Aliquid autem eum architecto nisi velit quisquam sed. Ullam, vel minus dolor unde ut quaerat assumenda? Ad necessitatibus ullam architecto commodi quasi non voluptate. Soluta voluptates alias quia excepturi asperiores similique vitae, nobis quas molestias, inventore repudiandae reiciendis voluptas expedita animi esse assumenda fugit amet ex saepe laboriosam libero autem obcaecati deleniti. Facere vitae numquam neque delectus maxime eum doloremque ducimus quasi dolorem! Iste magnam non, numquam, corporis assumenda deleniti, distinctio veritatis vel pariatur possimus amet obcaecati eos soluta nisi! Corrupti consequatur ea voluptate exercitationem. Vero, veniam beatae quasi harum illo iste, architecto sit ipsam suscipit optio debitis commodi voluptas quas magni nemo nostrum, delectus quisquam aut porro blanditiis molestiae assumenda neque accusantium ullam? Eligendi quisquam repudiandae mollitia numquam officiis porro, quod id in excepturi facere non quam, nobis voluptates ducimus nihil. Ab saepe id distinctio molestiae itaque nihil culpa sapiente nisi minima fugit dignissimos natus quisquam, quae officia eligendi ullam exercitationem qui molestias numquam tenetur recusandae? Velit iure ex incidunt saepe nulla veritatis illum in totam cum? Nobis suscipit mollitia doloremque molestiae. Earum laborum eum ipsam doloremque porro nulla provident aperiam nesciunt, libero minima excepturi odit dignissimos alias recusandae enim impedit facilis? Distinctio amet sed omnis hic asperiores tenetur quisquam sint repellendus, natus esse dolore possimus quos reprehenderit inventore eum vitae eaque temporibus sit, delectus ab tempora non fugit. In iusto exercitationem est? Veniam, a molestiae suscipit officiis repudiandae, numquam necessitatibus ab soluta odit vitae, quisquam impedit voluptate corrupti. Facilis dolor accusamus aliquid fuga optio pariatur ad rerum iure accusantium consequuntur asperiores quibusdam quae repudiandae, neque molestias perspiciatis nihil, tempore molestiae, nobis deserunt quia in labore et! Aliquid inventore quibusdam error! Aliquid numquam nihil aperiam illo alias ducimus quibusdam ex. Reiciendis voluptatem dolore quisquam ducimus repudiandae, quas voluptas tenetur nulla, nobis modi voluptate magni aspernatur inventore earum nesciunt distinctio similique reprehenderit. Mollitia quisquam blanditiis cum explicabo neque officiis, beatae eum dignissimos alias ea quis assumenda quos similique odit, voluptatum rerum repudiandae animi consequuntur nulla nesciunt repellendus accusamus officia! Modi deleniti impedit doloribus qui exercitationem.</p>				
				</section>
				<section class="page__section page__section_3"> - класс отсюда задать в data-goto=".*******"
					<h3>Секция 3</h3>					
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum quisquam ex reiciendis natus non sint adipisci officiis deleniti voluptas laboriosam animi impedit eius iusto voluptatum, quibusdam, temporibus nihil sed enim! Ad veniam impedit aliquam provident minus minima, quaerat quibusdam iste, in molestiae aperiam earum iure reprehenderit. Vero iusto porro, earum ea quas sit doloremque velit et laudantium quibusdam eum sequi fugit laborum repudiandae eligendi! Aliquid autem eum architecto nisi velit quisquam sed. Ullam, vel minus dolor unde ut quaerat assumenda? Ad necessitatibus ullam architecto commodi quasi non voluptate. Soluta voluptates alias quia excepturi asperiores similique vitae, nobis quas molestias, inventore repudiandae reiciendis voluptas expedita animi esse assumenda fugit amet ex saepe laboriosam libero autem obcaecati deleniti. Facere vitae numquam neque delectus maxime eum doloremque ducimus quasi dolorem! Iste magnam non, numquam, corporis assumenda deleniti, distinctio veritatis vel pariatur possimus amet obcaecati eos soluta nisi! Corrupti consequatur ea voluptate exercitationem. Vero, veniam beatae quasi harum illo iste, architecto sit ipsam suscipit optio debitis commodi voluptas quas magni nemo nostrum, delectus quisquam aut porro blanditiis molestiae assumenda neque accusantium ullam? Eligendi quisquam repudiandae mollitia numquam officiis porro, quod id in excepturi facere non quam, nobis voluptates ducimus nihil. Ab saepe id distinctio molestiae itaque nihil culpa sapiente nisi minima fugit dignissimos natus quisquam, quae officia eligendi ullam exercitationem qui molestias numquam tenetur recusandae? Velit iure ex incidunt saepe nulla veritatis illum in totam cum? Nobis suscipit mollitia doloremque molestiae. Earum laborum eum ipsam doloremque porro nulla provident aperiam nesciunt, libero minima excepturi odit dignissimos alias recusandae enim impedit facilis? Distinctio amet sed omnis hic asperiores tenetur quisquam sint repellendus, natus esse dolore possimus quos reprehenderit inventore eum vitae eaque temporibus sit, delectus ab tempora non fugit. In iusto exercitationem est? Veniam, a molestiae suscipit officiis repudiandae, numquam necessitatibus ab soluta odit vitae, quisquam impedit voluptate corrupti. Facilis dolor accusamus aliquid fuga optio pariatur ad rerum iure accusantium consequuntur asperiores quibusdam quae repudiandae, neque molestias perspiciatis nihil, tempore molestiae, nobis deserunt quia in labore et! Aliquid inventore quibusdam error! Aliquid numquam nihil aperiam illo alias ducimus quibusdam ex. Reiciendis voluptatem dolore quisquam ducimus repudiandae, quas voluptas tenetur nulla, nobis modi voluptate magni aspernatur inventore earum nesciunt distinctio similique reprehenderit. Mollitia quisquam blanditiis cum explicabo neque officiis, beatae eum dignissimos alias ea quis assumenda quos similique odit, voluptatum rerum repudiandae animi consequuntur nulla nesciunt repellendus accusamus officia! Modi deleniti impedit doloribus qui exercitationem.</p>				
				</section>
			</main>

    </div>				
	<script src="js/burger.js"></script>
</body>
*/

/*
SCSS
*{box-sizing:border-box;} //должно уже быть в _reset
ul li{list-style:none;} //должно уже быть в _reset

body._lock {
    overflow: hidden; // запрет скроллинга сайта при открытом меню
}
.wrapper {
    min-height: 100%;
}
// =================================================================================

.header {
    // всё, что записано в .header, можно поменять, но скорее всего будет именно так    
    width: 100%;
    z-index: 10; 
    background-color: #912105; // любой

	&__container {
        max-width: 1200px; 
        margin: 0 auto;        
        padding: 0 30px; // задать по макету. по идее эти три свойства уже должны быть заданы для "*__container"

        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 70px; // задать по макету
	}

	&__logo {
        background-color: #fff; // удалить, если мешает        
        position: relative;
        z-index: 5;
        width: 40px; // задать по макету
        height: 40px; // задать по макету
	}

	&__menu {
	}
}
.menu {

	&__icon {
        display: none;
	}

	&__body {
	}

	&__list {
        & > li { // обращаемся к li первого уровня
            position: relative;
            margin: 0 0 0 20px; // задать по макету отступ от пункта меню, когда без бургера
        }
	}

	&__link {       

        &:hover {            
        }   
	}

    &__arrow {
        display: none;
    }

	&__sub-list {
        position: absolute;
        top: 100%; // задать позиционирование по макету
        right: 0;
        background-color: #000; // задать по макету                

        li {
            margin: 0 0 10px 0; // задать по макету отступ от пунктов подменю вниз

            &:last-child {
                margin: 0;
            }
        }
	}

	&__sub-link {
        color: #fff; // задать по макету
        
        &:hover {            
        }   
	}
}
// =========================================================================================
body._pc {
    .menu {
        &__list {
            & > li:hover {
                .menu__sub-list {
                    opacity: 1;
                    visibility: visible;
                    transform: translate(0, 0);
                    pointer-events: all; // разрешение взаимодействия мышью с объектом
                }
            }
        }    
    }
}

body._touch {
    .menu {
        &__arrow {
            display: block; // здесь стрелка реализована в виде белого треугольника. если нужно по другому - переделать
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 10px solid #fff;
            transition: transform 0.3s ease 0s;
            margin: 0 0 0 5px;
        }

        &__list {
            & > li {
                display: flex;
                align-items: center;
                
                &._active {
                    .menu__sub-list {
                        opacity: 1;
                        visibility: visible;
                        transform: translate(0, 0);
                        pointer-events: all; // разрешение взаимодействия мышью с объектом
                    }
                    .menu__arrow {
                        transform: rotate(-180deg);
                    }
                }
            }
        }

        &__link {
            flex: 1 1 auto;
        }
    }    
}
// =========================================================================================
@media (min-width: 767px) { // mobile-first. То есть всё, что написано в запросе - для экранов шире, чем 767px
    .menu {
        &__list {
            display: flex;
            align-items: center;

            & > li { // обращаемся к li первого уровня
                padding: 10px 0; // задать по макету
            }
        }    
        
        &__sub-list {
            transform: translate(0, 10%); // если нужно изменить анимированное появление подменю - это здесь
            opacity: 0; // невидимый
            visibility: hidden; // невидимый и неосязаемый
            pointer-events: none; // запрет взаимодействия мышью с объектом. здесь это надо, что бы недопустить повторного отлова подменю.
            transition: all 0.3s ease 0s;
        }
    }
}
@media (max-width: 767px) { // всё, что написано в запросе - для экранов уже, чем 767px
    .menu {
        &__icon { // рисуем иконку бургера/крестика. если надо изменить - это ниже            
            z-index: 5;
            display: block;
            position: relative;
            width: 30px;
            height: 18px;
            cursor: pointer;

            &::before, &::after, & span {
                position: absolute;
                left: 0;
                height: 10%;
                width: 100%;
                transition: all 0.3s ease 0s;
                background-color: #fff; // если иконки не видно - то может ты её на белом фоне рисуешь ???
            }
            &::before, &::after {
                content: '';
            }
            &::before {
                top: 0;   
            }
            &::after {
                bottom: 0;
            }
            & span {
                top: 50%;
                transform: scale(1) translate(0, -50%);
            }
            &._active {
                & span {                 
                    transform: scale(0);
                }
                &::before {
                    top: 50%;   
                    transform: rotate(-45deg) translate(0, -50%);
                }
                &::after {
                    bottom: 50%;   
                    transform: rotate(45deg) translate(0, 50%);
                }
            }
        }   // закончили рисовать иконку бургера/крестика
        &__line { // плашка в бургере           
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            height: 70px; // столько же, сколько в .header__container в min-height
            background-color: #912105; // любой, такой же как ранее в .header
            z-index: 2;
        }  
        &__body {
            position: fixed;
            top: -100%; // если нужно изменить анимацию появления
            left: 0;
            width: 100%;
            height: 100%;            
            background-color: rgba(0, 0, 0, 0.9); // задать по макету
            padding: 100px 30px 30px 30px; // задать по макету
            transition: all 0.3s ease 0s;
            overflow: auto; // что бы появлялся скролл, при переполнении меню
           
            &._active {
                top: 0;
            }
        }
        &__list > li {
            margin: 0 0 30px 0; // задать по макету отступ от пунктов меню в выпадающем бургер-меню
            flex-wrap: wrap;

            &:last-child{
                margin-bottom: 0;
            }
            &._active {
                .menu {
                    &__sub-list {                        
                        display: block;            
                    }    
                }
            }
        }
        &__link {                     
        }
        &__sub-list {
            position: relative;            
            flex: 1 1 100%;
            margin: 20px 0 0 0; // задать по макету отступ выпадающего подменю внутри бургер-меню
            display: none;            
        }    
        &__sub-link {                   
            color: #fff;            
        }
    }    
}
*/
// ============================================================== Удалить всё, что выше этой строчки, и её саму тоже =========
/*
Реализована поддержка 3 видов пунктов фиксированного меню: 
1. Обычный пункт-ссылка с заглушкой "#"
2. Пункт со специальным data-атрибутом, по нажатию на который будет скроллиться сайт до класса, указанного в атрибуте
3. Пункт с подменю, выпадающее на тачскринах с иконкой-стрелкой, и возникающее при ховере на компах.
Так же реализован бургер на необходимой ширине экрана (подменю и скроллинг работают из бургера корректно)
*/
'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function  Mini() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());            
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {    
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    for (let index = 0; index < menuLinks.length; index++) {
        const menuLink = menuLinks[index];
        menuLink.addEventListener('click', onMenuLinkClick);        
    }    
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo ({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}