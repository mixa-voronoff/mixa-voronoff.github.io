$(document).ready(function() {
	$(window).scroll(function(event) { // слушаем скролл
        var s=$(this).scrollTop(); // в переменную s получаем количество прокрученных пикселей от верха браузера
        var w=$(this).outerWidth(); // в переменную w получаем ширину окна
        var h=$('.content').outerHeight(); // в переменную h получаем высоту контентной части
        var h_b=$('.parallax').outerHeight(); // в переменную h_b получаем высоту верхнего блока
        var p = s/h*100; // вычисление процента прокрутки всей контентной части
        var p_b = s/h_b*100; // вычисление процента прокрутки только верхней части
        var o = 1-1/100*p_b // вычисление непрозрачности

        var z_1 = 1+(w/10000*p_b)
        $('.parallax__fog').css('transform', 'scale('+z_1+')');
        $('.parallax__fog').css('opacity', o);

        var z_2 = 1+(w/5000000*p)
        $('.parallax__mountain_1').css('transform', 'scale('+z_2+')');

        var hr = w/2000*p_b;
        var z_3 = 1+(w*0.000005*p_b);
        $('.parallax__mountain_2').css('transform', 'translate3d('+hr+'px,0,0) scale('+z_3+')');

        var hr_2 = w/1500*p_b;
        var z_4 = 1+(w*0.00001*p_b);
        $('.parallax__mountain_3').css('transform', 'translate3d('+hr_2+'px,0,0) scale('+z_4+')');
    })
});