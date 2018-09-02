$(document).ready(function(){

    $('.button-searche').click(function () { 

        var queryString = $('.input-value').val();
        var valueSelect = $('.select-searche').val();

        if(queryString == '' || valueSelect == '') {
            $('#error').append('<div>Entry please correct value</div>')
            return false;
        }
        
        switch(valueSelect) {
            case 'Google': 
                return window.open("https://www.google.com.ua/search?q="+queryString);
            case 'Ask':  
                return  window.open("https://uk.ask.com/web?q="+queryString);
            case 'Bing':  
                return window.open("https://www.bing.com/search?q="+queryString);
            default:
                return null;
        }

    });
    
});
