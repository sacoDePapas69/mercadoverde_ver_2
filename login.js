$(function() 
{
$("#loginform").validate({
     rules: {
            mail :"required",
            password: "required",
            
        }, //rules
    messages: {
        mail: {
            required: 'El email es requerido',
            email: 'Correo Eletrónico invalido'
        },
        password:{
            required: 'La contraseña es requerida',
        },
    }//messages
}); //$('#mi-formulario').validate
}); //function