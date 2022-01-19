$(function(){
    $("#mostrar-ocultar").hover(
        function(){
            //alert(`Pasa por el hover display: ${$("#contenedor-imagen").css('display')}`);
            $("#contenedor-imagen").css({'display':'block'})
        },
        function(){
            $("#contenedor-imagen").css('display', 'none')
        }
    );

    $("button.enviar-correo").click(
        function(){
            alert("Correo Enviado");
        }
    );

    $("p.pinchar-aqui").click(
        function(){
            //console.log(`Pasa por el hover display: ${$("#contenedor-imagen").css('display')}`);
            $("p.esconder-esto").toggle();
        }
    );

    var css_ingredientes = $("#ingredientes").attr('class');
    var css_preparacion = $("#preparacion").attr('class');
    $("#ingredientes").on("dblclick",
        function(){
            $("#preparacion").attr('class', css_preparacion);
            $("#ingredientes").toggleClass('text-danger');
        }
    );
    $("#preparacion").on("dblclick",
    function(){
            $("#ingredientes").attr('class', css_ingredientes);
            $("#preparacion").toggleClass('text-danger');
        }
    );

});

///// Esto es para echar a andar las tooltip /////
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
