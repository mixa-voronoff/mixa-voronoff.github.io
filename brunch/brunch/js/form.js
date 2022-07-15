/*
HTML
<body>		
	<div class="wrapper">

        <form id="form">                                <!--  прописываем id -->
            <input type="text" class="_req">            <!--  прописываем _req -->
            <input type="text" class="_req _email">     <!--  прописываем _req и _email -->
        	<input type="checkbox" class="_req">        <!--  прописываем _req и type="checkbox" -->

            <div class="file">                          <!--  изображение-превью в коде цепляется по id -->
				<div class="file__item">
					<input id="formImage" accept=".jpg, .png, .gif" type="file" name="image" class="file__input">
				    <div class="file__button">Выбрать</div>
				</div>
				<div id="formPreview" class="file__preview"></div>
			</div>

            <button type="submit">Go</button>			
        </form>

    </div>	
	<script src="js/form.js"></script>		 
</body>
*/

/*
SCSS
.form {
    &__input {
        &._error {
			box-shadow: 0 0 15px red ;
		}
    }
}
.checkbox {
    &._error .checkbox__label::before {
		box-shadow: 0 0 15px red;
	}
}
*/
// ============================================================== Удалить всё, что выше этой строчки, и её саму тоже =========
// Что бы функции из этого файла работали необходимо для формы прописать id="form"
// Код поддерживает валидацию трёх видов инпутов:
// 1) обычный текстовый - в класс добавить "_req" - проверяется заполнен ли инпут (чем угодно),
// 2) текстовый для e-mail - в класс добавить и "_req" и "_email" - проверяется заполнен ли инпут e-mail-подобным сочетанием символов,
// 3) чекбокс - в класс добавить "_req" и указать type="checkbox" - проверяется checked ли инпут на момент отправки формы
// Так же поддерживается вывод превью загружаемой картинки и проверка файла на:
// а) соответствие формату jpeg, png или gif,
// б) максимально допустимый размер в 2 Мб
// HTML выше указан схематично, нужно использовать приложенный 
// SCSS выше указан схематично, нужно использовать приложенный 
"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    function formSend(e) {
        let error = formValidate(form);             
        
        if (error !== 0) {            
            alert('Заполните обязательные поля!');
            e.preventDefault();
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');        
    }
    // Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // Получаем input file в переменную
    const formImage = document.getElementById('formImage');
    // Получаем div для preview в переменную
    const formPreview = document.getElementById('formPreview');

    // Слушаем изменения в инпуте file
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });
    function uploadFile(file) {
        // Проверяем тип файла
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert ('Разрешены только изображения!');
            formImage.value = '';
            return;
        }
        // Проверяем размер файла (до 2 Мб)
        if (file.size > 2 * 1024 * 1024) {
            alert ('Файл должен быть менее 2 Мб!');            
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
        };
        reader.onerror = function (e) {
            alert('Ошибка');
        };
        reader.readAsDataURL(file);
    }
});