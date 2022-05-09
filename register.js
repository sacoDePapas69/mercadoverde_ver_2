$(function() 
{
$("#registerform").validate({
     rules: {
            username:"required",
            mail :"required",
            password: "required",
            password_confirm:{
                equalTo: "#password",
            }
            
        }, //rules
    messages: {
        username:{
            required: "El nombre de ususario es obligatorio",
            maxlength: jQuery.validator.format("Largo máximo {0}"),
            minlength: jQuery.validator.format("Largo Mínimo {0}"),
        },
        mail: {
            required: 'El email es requerido',
            email: 'Correo Eletrónico invalido'
        },
        password:{
            required: 'La contraseña es requerida',
        },
        password_confirm:{
            equalTo: "PLas contraseñas no coinciden",
        }
    }//messages
}); //$('#mi-formulario').validate
}); //function