$(function(){
    $("a.nav-link").on("click",
        function(){
            //console.log(this.id)
            $("a.nav-link").removeClass('active');
            $(this).addClass('active');
        }
    );

    $("#controlFormEnviar").on("click",
        function(){
            var nombre = $("#controlFormNombre").val();
            alert(`¡Gracias por tu mensaje ${nombre}!`);
            $("#controlFormNombre").val('');
            $("#controlFormAsunto").val('');
            $("#controlFormMensaje").val('');
        }
    );

});

///// Esto es para echar a andar las tooltip /////
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
