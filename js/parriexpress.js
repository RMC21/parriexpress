$( document ).ready(function() {

    $('.llamar-inicio').on('click', function(){
        $('#carta, #restaurante, #contacto').removeClass('mostrar');
        $('.llamar-carta, .llamar-restaurante, .llamar-contacto').removeClass('active');

    });

    $('.llamar-carta').on('click', function(){
        $('#carta').addClass('mostrar');
        $('#restaurante, #contacto').removeClass('mostrar');
        $('.llamar-restaurante, .llamar-contacto').removeClass('active');
        var selected = $(this);
        selected.addClass('active');
    });

    $('.llamar-restaurante').on('click', function(){
        $('#restaurante').addClass('mostrar');
        $('#contacto, #carta').removeClass('mostrar');
        $('.llamar-carta, .llamar-contacto').removeClass('active');
        var selected = $(this);
        selected.addClass('active');
    });

    $('.llamar-contacto').on('click', function(){
        $('#contacto').addClass('mostrar');
        $('#restaurante, #carta').removeClass('mostrar');
        $('.llamar-carta, .llamar-restaurante').removeClass('active');
        var selected = $(this);
        selected.addClass('active');
    });
  
  })(jQuery); // End of use strict
  
  