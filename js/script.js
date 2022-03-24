window.load = function(){
    // Теперь мы знаем актуальную ширину экрана
    var media_size = parseInt(window.getComputedStyle(document.head, null)
                                    .getPropertyValue('width'), 10);

    switchClass();

    window.resize = function () {
        // Обновляем ширину экрана
        media_size = parseInt(window.getComputedStyle(document.head, null)
                                    .getPropertyValue('width'), 10);
        switchClass();
    };
};

function switchClass() {
    if(media_size  < 995) {
        alert("Готово"); 
    }
    else{
        alert("нет"); 
    }
}