window.addEventListener('DOMContentLoaded', function() { //waiting for DOM loaded - ждем, пока загрузится DOM дерево
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'), // receiving our TABS from html page - получаем наши табы (кнопки) с html странички по классу info-header-tab
        info = document.querySelector('.info-header'), // receiving PARENT of our TABS - получаем родителя (обертку) наших табов по классу info-header
        tabContent = document.querySelectorAll('.info-tabcontent'); // receiving content - получаем содержимое табов по классу info-tabcontent
    function hideTabContent(a) {                                    // hiding all tabs contents exept first one - скрываем содержимое всех табов, кроме первого
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');                    // we use class SHOW in *.css -to show elements - используем класс show в файлике с css для эдементов ,которые хотим показать
            tabContent[i].classList.add('hide');                       // we use class HIDE in *.css -to hide elements 
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                }
            }
        }
    });
});

