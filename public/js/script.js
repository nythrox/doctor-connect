/*
    Minificar
    https://jscompress.com/
*/
  
window.cpfNaoExiste = ()=>{
    swal({
        type: 'warning',
        title: "Atenção",
        text: "Cpf não registrado.",

    })
} 
window.senhaRecuperada = ()=>{
    swal({
        type: 'warning',
        title: "Atenção",
        text: "Mandaremos uma mensagem para seu email com as informações necessárias para recuperar sua senha.",

    })
} 
window.loginFailed = ()=>{
    swal({
        type: 'warning',
        title: "Atenção",
        text: "Login ou senha incorreta.",

    })
} 
window.confirmPasswordFail = ()=>{
    swal({
        type: 'warning',
        title: "Atenção",
        text: "Certifique que suas senhas estão iguais.",

    })
} 
window.cpfExiste = ()=>{
    swal({
        type: 'warning',
        title: "Atenção",
        text: "Este cpf já está registrado.",
    })
}
window.proximo = ()=>{
    
                    $("#cadastrar").hide();
                    $('#finalizar-cadastro').fadeIn();
}
window.mount = () => {

            // Úteis
            console.log('Script.js activated');
            $('.boxHeight').matchHeight();
            $('.boxHeight2').matchHeight();

            // Mask
            $(document).on("focus", ".js-tel", function () {
                $(this).inputmask({ mask: ['(99) 9999-9999', '(99) 99999-9999'] }, {
                    "clearIncomplete": true
                });
            });
            $(document).on("focus", ".js-data", function () {
                $(this).inputmask('99/99/9999', {
                    "clearIncomplete": true
                });
            });
            $(document).on("focus", ".js-cpf", function () {
                $(this).inputmask('999.999.999-99', {
                    "clearIncomplete": true
                });
            });
            $(document).on("focus", ".js-cartao-numero", function () {
                $(this).inputmask('9999 9999 9999 9999', {
                    "clearIncomplete": true
                });
            });
            $(document).on("focus", ".js-cartao-mes", function () {
                $(this).inputmask('99', {
                    "clearIncomplete": true
                });
            });
            $(document).on("focus", ".js-cartao-ano", function () {
                $(this).inputmask('9999', {
                    "clearIncomplete": true
                });
            });
            $(document).on("focus", ".js-cartao-cvv", function () {
                $(this).inputmask({ mask: ['999', '9999'] }, {
                    "clearIncomplete": true
                });
            });

            // Hide Password
            $('.js-password + .fa').on('click', function () {
                console.log($('.js-password + .fa'));
                console.log("aaa");
                $(this).toggleClass('fa-eye-slash').toggleClass('fa-eye');
                $(this).closest('.form-group').find('.js-password').togglePassword();
            });

            // File href
            $(".js-file-link").on('click', function (e) {
                e.preventDefault();
                $(".js-file:hidden").trigger('click');
                $(this).blur();
            });

            // Mobile
            if ($(window).width() < 768) {

                var fullHeightMob = function () {
                    $('.js-fullheight-mob').css('min-height', $(window).height());
                    $(window).resize(function () {
                        $('.js-fullheight-mob').css('min-height', $(window).height());
                    });
                };
                fullHeightMob();

                var fullHeightMobIOS = function () {
                    $('body').css('min-height', $(window).height());
                    $(window).resize(function () {
                        $('body').css('min-height', $(window).height());
                    });
                };
                fullHeightMobIOS();

            }

            // Full Height Desk
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();

            // Menu Principal
            $(".navbar-toggle").on("click", function () {
                $(this).toggleClass("active");
                $('html').toggleClass("js-collapse");
            });

            // Sidebar Teleconsulta
            $(".js-open-sidebar").on("click", function () {
                $('html').addClass("js-active-sidenav");
            });
            $(".js-close-sidebar").on("click", function () {
                $('html').removeClass("js-active-sidenav");
            });

            // CID
            $(".js-toggle-cid").on("click", function () {
                $(this).toggleClass("active");
                $(".box-cid").toggleClass("active");
            });

            // Modal
            $('body').on('hidden.bs.modal', '.modal', function () {
                $('.btn').blur();
            });

            // Lightbox
            if ($('[data-fancybox="lightbox-img"]').fancybox) ({
                protect: false,
                toolbar: true,
                animationEffect: 'fade',
                loop: true,
                transitionDuration: 1200,
                buttons: [
                    'download',
                    'slideShow',
                    'thumbs',
                    'close'
                ],
                slideShow: {
                    autoStart: false,
                    speed: 3000
                }
            });

            // Active Menu URL
            var url = window.location.pathname;
            var activePage = url.substring(url.lastIndexOf('/') + 1);
            $('.nav li a').each(function () {
                var currentPage = this.href.substring(this.href.lastIndexOf('/') + 1);
                if (activePage == currentPage) {
                    $(this).parent().addClass('active');
                }
            });

            // Voltar URL FRONT
            $('.js-back').click(function () {
                parent.history.back();
                return false;
            });

            // Link table
            $('table *[data-href]').on('click', function () {
                window.location = $(this).data("href");
            });

            // Button checkbox
            $('.button-checkbox .btn').on('click', function () {
                var hiddenField = $(this).closest('.button-checkbox').find('input[type=text]'), val = hiddenField.val();
                hiddenField.val(val === "1" ? "0" : "1");
                $(this).toggleClass('btn-line');
                $(this).closest('.list-check-btn').find('.js-check-todos').addClass('btn-line').removeClass('disabled');
                $(this).blur();
            });
            $('.button-checkbox .js-check-todos').on('click', function () {// Check todos
                $(this).closest('.list-check-btn').find('.button-checkbox .btn').removeClass('btn-line');
                $(this).addClass('disabled');
            });
            var $formList = $('.js-form-list');
            var $btnBoleto = $('.js-btn-boleto');
            $('#cartao_credito').change(function () {
                $formList.slideDown("slow");
                $btnBoleto.fadeOut();
            });
            $('#boleto_bancario').change(function () {
                $formList.slideUp("slow");
                $btnBoleto.slideDown("slow");
            });

            var $formAdd = $('.js-form-check');
            var $formList = $('.js-form-list');

            $('#atendimento_saude').change(function () {
                if ($(this).is(":checked")) {
                    $formAdd.slideDown("slow");
                }
            });
            $('#atendimento_particular').change(function () {
                $formAdd.slideUp("slow");
                $formList.hide();
            });
            $(".js-salvar").on("click", function () {
                $formAdd.slideUp("slow");
                $formList.fadeIn();
                $('#atendimento_saude').attr('checked', true);
            });
            $(".js-excluir").on("click", function () {
                $formAdd.slideUp("slow");
                $formList.fadeOut();
                $('#atendimento_saude').attr('checked', false);
            });
            $(".js-excluir-item").on("click", function () {
                $formList.fadeOut();
                $('#atendimento_saude').attr('checked', false);
            });
            $(".js-add").on("click", function () {
                $formAdd.slideDown("slow");
                $('#atendimento_saude').attr('checked', true);
            });
            
        $(".js-card-recusar").on('click', function() {
            $(this).blur();
            swal({
                type: 'warning',
                title: "Atenção",
                text: "Deseja realmente recusar está consulta?",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'

            }).then((result) => {
                if (result.value) {
                    $(this).closest('.col-xs-12').find('.card').addClass("js-desabled");
                    $(this).blur();
                }
            })
        });


        
        $('#js_avaliar_medico').starrr({
            rating: 0,
            readOnly: false,
            change: function (e, value) {
                if (value) {
                    $('.item-avaliar').show();
                    $('.item-valor').text(value);
                }
            }
        });


        $(".js-cadastrar").on("click", function () {
            $('#entrar').hide();
            $('#cadastrar').fadeIn();
        });
        $(".js-cancelar").on("click", function () {
            $('#cadastrar').hide();
            $('#entrar').fadeIn();
        });
        // $(".js-proximo").on("click", function () {
        //     $('#cadastrar').validator().on('submit', function(e) {
        //         if (!e.isDefaultPrevented()) {
        //             $(this).hide();
        //             $('#finalizar-cadastro').fadeIn();
        //         }
        //     });
        // });
        $(".js-voltar").on("click", function () {
            $('#finalizar-cadastro').hide();
            $('#entrar').hide();
            $('#cadastrar').fadeIn();
        });

        var barChart = document.getElementById("bar-chart");
        var lineChart = document.getElementById("line-chart");
        var pieChart = document.getElementById("pie-chart");
        if (barChart !== null) {
            new Chart(barChart, {
                type: 'bar',
                data: {
                labels: ["Item 01", "Item 02", "Item 03", "Item 04"],
                datasets: [
                    {
                    label: "Item",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                    data: [10,50,120,200]
                    }
                ]
                },
                options: {
                    legend: { display: false }
                }
            });
        }
        if (lineChart !== null) {
        new Chart(lineChart, {
            type: 'line',
            data: {
                labels: [10,50,120,200],
                datasets: [{ 
                        data: [10,50,120,200],
                        label: "Item",
                        borderColor: "#3e95cd",
                        fill: false
                    }, { 
                        data: [10,50,120,200],
                        label: "Item",
                        borderColor: "#8e5ea2",
                        fill: false
                    }, { 
                        data: [100,10,5,180],
                        label: "Item",
                        borderColor: "#3cba9f",
                        fill: false
                    }, { 
                        data: [5,200,80,20],
                        label: "Item",
                        borderColor: "#e8c3b9",
                        fill: false
                    }
                ]
            },
            options: {
                legend: { display: false }
            }
        });}
        
        if (pieChart !== null) {
        new Chart(pieChart, {
            type: 'pie',
            data: {
                labels: ["Item 01", "Item 02", "Item 03", "Item 04"],
            datasets: [{
                label: "Item",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                data: [10,50,120,200]
            }]
            },
            options: {
                legend: { display: false }
            }
        });}

        
        var $formCheck1 = $('.js-form-medico');
        var $formCheck2 = $('.js-form-paciente');

        $('#medicos').change(function(){
            if($(this).is(":checked")) {
                $formCheck1.slideDown("slow");
            } else {
                $formCheck1.slideUp("slow");
            }
        });
        $('#pacientes').change(function(){
            if($(this).is(":checked")) {
                $formCheck2.slideDown("slow");
            } else {
                $formCheck2.slideUp("slow");
            }
        });

        // Range idade
        var rangeIdade = $("#range_idade");
        rangeIdade.slider();
        rangeIdade.on("slide", function(slideEvt) {
            $("#range_idade_start").text(slideEvt.value[0]);
            $("#range_idade_end").text(slideEvt.value[1]);
        });
}
window.mount();

  