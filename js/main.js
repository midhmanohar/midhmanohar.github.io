$(document).ready(function(){
    $('#preloader').delay(10000).fadeOut();
});

$(document).ready(function(){
    var typed = new Typed("#typed", {
        strings: ["Midhun"],
        typeSpeed : 150,
        loop:true,
        showCursor : false
        
      });
});

$(document).ready(function(){
    var typed = new Typed("#code", {
        strings: ['Python','C','Javascript','C++','Java','Shell'],
        typeSpeed : 150,
        backDelay: 2000,
        loop:true,
        showCursor : true
        
      });
});