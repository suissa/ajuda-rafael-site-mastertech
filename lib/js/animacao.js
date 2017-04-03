const menuCSS = [
    { name: 'Introdução', link: 'css/css_align' },
    { name: 'Sintaxe' , link: 'css/css_align'},
    { name: 'Colors' , link: 'css/css_align'},
    { name: 'Background' , link: 'css/css_align'},
    { name: 'Borders' , link: 'css/css_align'},
    { name: 'Margins' , link: 'css/css_align'},
    { name: 'Paddings' , link: 'css/css_align'},
    { name: 'Height/With', link: 'css/css_align'},
    { name: 'Box Model', link: 'css/css_align'}
]

const menuJavascript = [
    { name: 'Sintaxe' , link: 'css/css_align'},
    { name: 'Variáveis' , link: 'css/css_align'},
    { name: 'Funções' , link: 'css/css_align'},
    { name: 'Objetos' , link: 'css/css_align'},
    { name: 'JSON' , link: 'css/css_align'},
]

const menuIonic = [
    { name: 'Sintaxe111' , link: 'css/css_align'},
    { name: 'Variáveis111' , link: 'css/css_align'},
    { name: 'Funções111' , link: 'css/css_align'},
    { name: 'Objetos111' , link: 'css/css_align'},
    { name: 'JSON111' , link: 'css/css_align'},
]

const createMenuItems = (el, i) => '<li><a class="conteudo-link" href="#" title="'+el.link+'">'+el.name+'</a></li>'


$(document).ready(function(){

    // $('pre.code').highlight({source:1, zebra:1, indent:'space', list:'ol'});
    console.log(`location:`, location)
    $('a.conteudo-link').on('click', function() {
        // console.log('click', $(this).attr('title'));


      let hash = location.hash

      if ( hash !== "" ) {

      }

        const conteudo = $(this).attr('title');
        const PATH = 'conteudos/'+conteudo+'.html';
        console.log('PATH', PATH);
        console.log('conteudo', conteudo);
        hash = conteudo.split(`/`)[1]
        location.hash = hash
        $.ajax({
            url: PATH,
              context: document.body
            }).done(function(data) {
              // console.log('data',data);
              $("article").html(data)
        });

        return false;
    })

  // const listMenuCSS = menuCSS.map(createMenuItems)
  // console.log('listMenuCSS', listMenuCSS)
  // $('#course-css-list').html(listMenuCSS)

  const listMenuJavascript = menuJavascript.map(createMenuItems)
  console.log('listMenuJavascript', listMenuJavascript)
  $('#course-javascript-list').html(listMenuJavascript)

  const listMenuIonic = menuIonic.map(createMenuItems)
  console.log('listMenuIonic', listMenuIonic)
  $('#itemCurso_App_Front_End').html(listMenuIonic)

              // Quando o módulo é clicado na navBar, os módulos aparecem na barraLateral
              $('.nav-pills li').on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                  // Prevent default anchor click behavior
                  event.preventDefault();

                  // Store hash
                  var hash = this.hash;

                  $(".barraLateral_modulos").hide();
                  $(hash).show();

                
                } 
              });

              
              
              //Mostra/esconde sub-itens quando tituloCurso é clicado
              $('.main-menu li:has(ul)').addClass('has-submenu');
                  $('.main-menu li').click(function() {
                    $(this).find('ul').slideToggle();
                    $(this).toggleClass('open');
               });
                                
         
                //Mostra conteúdo do curso quando itemCurso é clicado
               $('.itemCurso a').on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                  // Prevent default anchor click behavior
                  event.preventDefault();

                  // Store hash
                  var hash = this.hash;
                  $(".curso").hide();
                  $(hash).show();

                
                } 
              }); 
                

                //Mostra módulos na barraLateral quando são selecionados na navBar            
                $("#navBarAPOSTILA_MT").click(apostila_MT);
                $("#navBar_Web_Front_End").click(Web_Front_End);
                $("#navBar_Algoritmos").click(algoritmos);
                $("#navBar_Javascript").click(javascript);
                $("#navBar_App_Front_End").click(App_Front_End);
                $("#navBar_Web_Back_End").click(Web_Back_End);
                $("#navBar_App_Back_End").click(App_Back_End);
                $("#navBar_IoT").click(IoT);
                $("#navBar_IA").click(IA);
                $("#navBar_Impressao_3D").click(impressao_3D);
                
 
            // APOSTILA MT -->
            
            function apostila_MT(){ 
                
                $("#modulo_Web_Front_End").show();
                $("#modulo_Algoritmos").show();
                $("#modulo_Javascript").show();
                $("#modulo_App_Front_End").show();
                $("#modulo_Web_Back_End").show();
                $("#modulo_App_Back_End").show();
                $("#modulo_IoT").show();
                $("#modulo_IA").show();
                $("#modulo_Impressao_3D").show();
            }

            // WEB FRONT-END -->
            function Web_Front_End(){
                
                $("#modulo_Web_Front_End").show();
                $("#modulo_Algoritmos").hide();
                $("#modulo_Javascript").hide();
                $("#modulo_App_Front_End").hide();
                $("#modulo_Web_Back_End").hide();
                $("#modulo_App_Back_End").hide();
                $("#modulo_IoT").hide();
                $("#modulo_IA").hide();
                $("#modulo_Impressao_3D").hide();
            }


            // Algoritmos -->
            function algoritmos(){
                
                $("#modulo_Web_Front_End").hide();
                $("#modulo_Algoritmos").show();
                $("#modulo_Javascript").hide();
                $("#modulo_App_Front_End").hide();
                $("#modulo_Web_Back_End").hide();
                $("#modulo_App_Back_End").hide();
                $("#modulo_IoT").hide();
                $("#modulo_IA").hide();
                $("#modulo_Impressao_3D").hide();
            }

             //JavaScript -->
            function javascript(){
                
                $("#modulo_Web_Front_End").hide();
                $("#modulo_Algoritmos").hide();
                $("#modulo_Javascript").show();
                $("#modulo_App_Front_End").hide();
                $("#modulo_Web_Back_End").hide();
                $("#modulo_App_Back_End").hide();
                $("#modulo_IoT").hide();
                $("#modulo_IA").hide();
                $("#modulo_Impressao_3D").hide();
            }

            // App front End -->
            function App_Front_End(){
                
                $("#curso_Web_Front_End").hide();
                $("#curso_Algoritmos").hide();
                $("#curso_Javascript").hide();
                $("#curso_App_Front_End").show();
                $("#curso_Web_Back_End").hide();
                $("#curso_App_Back_End").hide();
                $("#curso_IoT").hide();
                $("#curso_IA").hide();
                $("#curso_Impressao_3D").hide();
            }

            // WEB back END -->
            function Web_Back_End(){
                
                $("#curso_Web_Front_End").hide();
                $("#curso_Algoritmos").hide();
                $("#curso_Javascript").hide();
                $("#curso_App_Front_End").hide();
                $("#curso_Web_Back_End").show();
                $("#curso_App_Back_End").hide();
                $("#curso_IoT").hide();
                $("#curso_IA").hide();
                $("#curso_Impressao_3D").hide();
            }

            // App Back End -->
            function App_Back_End(){
                
                $("#curso_Web_Front_End").hide();
                $("#curso_Algoritmos").hide();
                $("#curso_Javascript").hide();
                $("#curso_App_Front_End").hide();
                $("#curso_Web_Back_End").hide();
                $("#curso_App_Back_End").show();
                $("#curso_IoT").hide();
                $("#curso_IA").hide();
                $("#curso_Impressao_3D").hide();
            }

            // IoT -->
            function IoT(){
                
                $("#curso_Web_Front_End").hide();
                $("#curso_Algoritmos").hide();
                $("#curso_Javascript").hide();
                $("#curso_App_Front_End").hide();
                $("#curso_Web_Back_End").hide();
                $("#curso_App_Back_End").hide();
                $("#curso_IoT").show();
                $("#curso_IA").hide();
                $("#curso_Impressao_3D").hide();
            }

            // IA -->
            function IA(){
                
                $("#curso_Web_Front_End").hide();
                $("#curso_Algoritmos").hide();
                $("#curso_Javascript").hide();
                $("#curso_App_Front_End").hide();
                $("#curso_Web_Back_End").hide();
                $("#curso_App_Back_End").hide();
                $("#curso_IoT").hide();
                $("#curso_IA").show();
                $("#curso_Impressao_3D").hide();
            }

            // Impressao_3D -->
            function impressao_3D(){
                
                $("#curso_Web_Front_End").hide();
                $("#curso_Algoritmos").hide();
                $("#curso_Javascript").hide();
                $("#curso_App_Front_End").hide();
                $("#curso_Web_Back_End").hide();
                $("#curso_App_Back_End").hide();
                $("#curso_IoT").hide();
                $("#curso_IA").hide();
                $("#curso_Impressao_3D").show();
            };

            
            });    



