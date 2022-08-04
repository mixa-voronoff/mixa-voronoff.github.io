// Функция установки размеров ячеек
function setCellsSizes() {    
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

    let cellWidth = scrollWidth / 25; // считаем ширину ячейки
    let cellHeight = scrollHeight / 25; // считаем высоту ячейки

    let cells = document.querySelectorAll('.field__cell'); // Получаем коллекцию ячеек
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];                    
        cell.style.width = `${cellWidth}` + `px`; // Устанавливаем каждой ячейке ширину
        cell.style.height = `${cellHeight}` + `px`;  // Устанавливаем каждой ячейке высоту
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