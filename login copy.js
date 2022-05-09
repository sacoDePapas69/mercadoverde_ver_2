$(function() 
{
$("#loginform").validate({
     rules: {
            mail :"required",
            text:"required",
            title: "required",
            
        }, //rules
    messages: {
        mail: {
            required: 'El email es requerido',
            email: 'Email invalido',
        },
        password:{
            required: 'El titulo es requerido',
        },
        text:{
            
        }
    }//messages
}); //$('#mi-formulario').validate
}); //function