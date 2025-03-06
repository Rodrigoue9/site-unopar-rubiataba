$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                nome: {
                    required: true,
                    minlength: 2
                },
                assunto: {
                    required: true,
                    minlength: 4
                },
                telefone: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                Mensagem: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                nome: {
                    required: "Você tem um nome, não é?",
                    minlength: "Seu nome deve ter pelo menos 2 caracteres"
                },
                assunto: {
                    required: "Você tem um assunto, não é?",
                    minlength: "Seu assunto deve ter pelo menos 4 caracteres"
                },
                telefone: {
                    required: "Você tem um número de whatsapp, não é?",
                    minlength: "Seu número deve ter pelo menos 11 caracteres"
                },
                email: {
                    required: "Sem E-mail, sem mensagem."
                },
                Mensagem: {
                    required: "Você tem que escrever algo para enviar este formulário.",
                    minlength: "Só isso? sério?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})
