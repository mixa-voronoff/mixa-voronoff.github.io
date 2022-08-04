// Функция установки размеров ячеек
function setCellsSizes() {        
    let cells = document.querySelectorAll('.field__cell'); // Получаем коллекцию ячеек
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];                    

        // Обнуляем значения: если функция вызвана по событию "ресайз", то может нам ячейки уже и не нужны
        // обнулим их размеры, а потом проверим нужны ли они вновь. если да - установим новые
        cell.style.width = '';
        cell.style.height = '';        
        
        // Получаем ширину документа
        let scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        // Получаем высоту документа
        let scrollHeight = Math.max(
            document.body.scrollHeight, /*.documentElement.scrollHeight,*/ // я не понимаю почему, но эта штука мешает
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        // Работаем только если ширина документа больше 990px (из css), так как иначе ячеек видно не будет (и чего нагружать браузер зазря)
        if (scrollWidth > 990) {

            let cellWidth = scrollWidth / 25; // считаем ширину ячейки
            let cellHeight = scrollHeight / 25; // считаем высоту ячейки

            cell.style.width = `${cellWidth}` + `px`; // Устанавливаем каждой ячейке ширину
            cell.style.height = `${cellHeight}` + `px`;  // Устанавливаем каждой ячейке высоту
        }
    }
}

// Стартовая установка размеров ячеек
setCellsSizes();

// Переустановка размеров ячеек при ресайзе окна
window.addEventListener('resize', setCellsSizes);

// Делегирование - вешаем прослушку на родителя ячеек и запускаем функцию
document.addEventListener('mouseover', setBg);    

// Функция покраски ячейки
function setBg(event) {
    if (event.target.closest('.field__cell')) { // Если объект, на котором сработала прослушка - ячейка, то ...

        counterShowText = 20; // задаем во внешнюю переменную финальную 20ю итерацию выполнения функции showText(), что бы остановить её

        let random = Math.floor(Math.random() * (6 - 1)) + 1; // Получаем псевдослучайное целое число от min до max, но точно не равное max
        if (random == 1) {
            event.target.style.backgroundColor = '#f78888'; // Устанавливаем этому объекту background-color и т.д.            
        } else if (random == 2) {
            event.target.style.backgroundColor = '#f3d250';            
        } else if (random == 3) {
            event.target.style.backgroundColor = '#ececec';            
        } else if (random == 4) {
            event.target.style.backgroundColor = '#90ccf4';            
        } else {
            event.target.style.backgroundColor = '#5da2d5';            
        }        
    }
}

let counterShowText = 0;

// Функция появления надписи
function showText() {    
    console.log(counterShowText);
    if (counterShowText < 20) { // ограничиваем кол-во выполнений 20ю разами
        let cells = document.querySelectorAll('.field__cell');        
        let random = Math.floor(Math.random() * (625 - 1)) + 1; // Получаем псевдослучайное целое число от min до max, но точно не равное max
        const cell = cells[random]; // выбираем псевдослучайную ячейку
        cell.innerHTML = '<span>Наведи на меня ;)</span>';    
        setTimeout(() => {
            cell.innerHTML = ''; // стираем текст через 3 сек        
        }, 3000);        
        setTimeout(showText, 4000); // Запускаем рекурсивно эту же функцию каждые 3 сек
        counterShowText++;        
    }
}

setTimeout(showText, 10000); // Запускаем функцию первый раз с задержкой в 10 сек

// Приземляем span web
let spanWeb = document.querySelector('h1 span');
document.addEventListener('DOMContentLoaded', function(){
    spanWeb.classList.add('js-active');
});


