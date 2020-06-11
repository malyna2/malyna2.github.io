var timer = 100 // затримка до зникнення прелоадеру
document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById("preloader");
        if( !preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, timer) // таймер
}