$('#telefonef').mask('(00)0000-0000')
$('#telefonec').mask('(00)00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')

$(document).ready(function(){
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            }
        },
        messages:{
            nome:'Campo Obrigatório'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
            
        }
    })

})