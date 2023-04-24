$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('#formulario').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail'
        }
    })
})