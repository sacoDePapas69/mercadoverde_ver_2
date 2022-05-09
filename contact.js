$(function() 
{
$("#contactform").validate({
     rules: {
            title:"required",
            mail :"required",
            cont:"required",
            
        }, //rules
    messages: {
        title:{
            required: "El titulo es obligatorio",
            maxlength: jQuery.validator.format("Largo máximo {0}"),
            minlength: jQuery.validator.format("Largo Mínimo {0}"),
        },
        mail: {
            required: 'El email es requerido',
            email: 'Correo Eletrónico invalido'
        },
        cont:{
            required: "El contenido es obligatorio",
            maxlength: jQuery.validator.format("Largo máximo {0}"),
            minlength: jQuery.validator.format("Largo Mínimo {0}"),
    }//messages
    }
}); //$('#mi-formulario').validate
}); //function