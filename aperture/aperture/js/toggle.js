/*
HTML
<body>
	<div class="wrapper">

		<div class="js-toggle">Этот элемент переключается по клику на самом себе - он содержит class="js-toggle"</div>
		<div class="js-toggle">Этот элемент переключается по клику на самом себе - он содержит class="js-toggle"</div>

		<div class="js-toggle-click">Связка: на этот элемент кликнуть - он содержит class="js-toggle-click"</div>
		<div class="js-toggle-follow">Связка: этот элемент меняется - он содержит class="js-toggle-follow"</div>
		<div class="js-toggle-follow">Связка: этот элемент меняется - он содержит class="js-toggle-follow"</div>
        
    </div>	
	<script src="js/toggle.js"></script>
</body>
*/

/*
SCSS
// Все стили заданы для примера
.js-toggle {
	padding: 10px;
	border: 1px solid #000;
	background-color: lightgreen;	

	&._active {
		background-color: green;
	}
}
.js-toggle-click {	
	padding: 10px;
	border: 1px solid #000;
	background-color: lightblue;	

	&._active {
		background-color: blue; // не задавать стиль, если не нужно переключение самого управляющего элемента
	}
}
.js-toggle-follow {	
	padding: 10px;
	border: 1px solid #000;
	background-color: pink;

	&._active {
		background-color: lightcoral;	
	}
}
*/
// ============================================================== Удалить всё, что выше этой строчки, и её саму тоже =========
// Реализовано 2 вида переключателей:
// 1. Элемент, который переключается при клике по самому себе (добавить/убрать класс "_active") - нужно добавить класс "js-toggle".
// Таких элементов может быть сколько угодно много на странице, они работают независимо друг от друга, только
// стилизовать нужно не класс "js-toggle", а свой родной класс элемента
//
// 2. Элемент, который переключается по клику на другой элемент.
// Элементу-"кнопке", на который нажимаем, добавляем класс "js-toggle-click". Такой управляющий элемент может быть только один.
// Элементу, который должен переключиться, добавляем класс "js-toggle-follow". Таких следящих элементов может быть много (переключаются сразу все).
// Элементы в такой связке работают независимо от какой-либо вложенности, расположения в html, и пр.
// Связка может быть только одна на странице (один управляющий - один/много следящих)

// Обычный переключатель
let toggles = document.querySelectorAll('.js-toggle');
for (let index = 0; index < toggles.length; index++) {
    const toggle = toggles[index];
    toggle.addEventListener("click", function() {
        toggle.classList.toggle('_active');
    });
}

// Связка
let toggleClick = document.querySelector('.js-toggle-click');
toggleClick.addEventListener('click', function() {
    toggleClick.classList.toggle('_active');
    let toggleFollows = document.querySelectorAll('.js-toggle-follow');
    for (let index = 0; index < toggleFollows.length; index++) {
        const toggleFollow = toggleFollows[index];
        toggleFollow.classList.toggle('_active');
    }
});

// Связка
let toggleClick2 = document.querySelector('.js-toggle-click2');
toggleClick2.addEventListener('click', function() {
    toggleClick2.classList.toggle('_active');
    let toggleFollows = document.querySelectorAll('.js-toggle-follow2');
    for (let index = 0; index < toggleFollows.length; index++) {
        const toggleFollow = toggleFollows[index];
        toggleFollow.classList.toggle('_active');
    }
});

// Связка
let toggleClick3 = document.querySelector('.js-toggle-click3');
toggleClick3.addEventListener('click', function() {
    toggleClick3.classList.toggle('_active');
    let toggleFollows = document.querySelectorAll('.js-toggle-follow3');
    for (let index = 0; index < toggleFollows.length; index++) {
        const toggleFollow = toggleFollows[index];
        toggleFollow.classList.toggle('_active');
    }
});