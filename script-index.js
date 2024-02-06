//FUNCION DEL BOTON SUBIR ARRIBA
$(document).ready(function(){
  $('.up').hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 100 ){
      $('.up').fadeIn('1000');
    } else {
      $('.up').fadeOut('1000');
    }
  });

  $('.up').click(function(){
    $('body, html').animate({
        scrollTop: 0
    },150);
    //$('#accordionFlushExample .accordion-collapse').collapse('hide'); //cierra el acordeon al presionar el boton subir

  });

});

//FUNCION DE CARUSEL AUTOMATICO
$(document).ready(function() {
  $('.carrusel').each(function() {
      var $this = $(this);
      var slides = $this.find('.slide');
      var currentSlide = 0;
      var slideWidth = $this.width();

      // Configuración inicial
      slides.hide().eq(currentSlide).show();

      function showSlide(index) {
          slides.hide().eq(index).fadeIn(500); /*efecto*/ 
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      }

      setInterval(nextSlide, 4000);
  });
});

  
//FUNCION AGREGAR COLOR A LA BARRA DE ARRIBA
$(document).ready(function () {
  var menuContainer = $('.menu.container');

  $(window).scroll(function () {
      console.log('Scrolling...');
      if ($(window).scrollTop() > 0) {
          menuContainer.addClass('scrolled');
      } else {
          menuContainer.removeClass('scrolled');
      }
    });
  });

//FUNCION PARRALLAX INICIO
$(document).ready(function() {
  $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      $('.header').css('background-position', 'center ' + (scrollPosition * 0.5) + 'px');
  });
});

//FUNCION PARRALLAX HORARIO


//FUNCION PARA HACER APARECER LA LETRA CUANDO LLEGA A CIERTA ALTURA (INDEX HORARIOS)
$(document).ready(function () {
  $(window).scroll(function () {
      var contenido = $('.dias');
      var distanciaDesdeLaParteSuperior = contenido.offset().top - $(window).scrollTop();

      if (distanciaDesdeLaParteSuperior < $(window).height() * 0.6) {
          contenido.css({
              opacity: 1,
              transform: "translateY(0)"
          });
      } else {
          contenido.css({
              opacity: 0,
              transform: "translateY(20px)"
          });
      }
  });
});

//FUNCION PARA TRADUCIR LOS TEXTOS

// Objeto que contiene las traducciones
var translations = {
  "es": {
      "text1intro": "Bienvenido a nuestro restaurante.",
      "text2intro": "Tú experiencia junto al Dique y sus cerros.",
      "paragraph1": "Donde cada plato cuenta una historia",
      "paragraph2": "y cada vista es un capítulo",
      "horariosTitle": "Trabajamos todos los días",
      "horariosDays1": "Lunes a Viernes",
      "horariosDetail1": "Desde mediodía hasta las 16hs.",
      "horariosDays2": "Sábados y Domingos",
      "horariosDetail2": "Desde mediodía hasta las 17hs.",
      "contactoTitle": "Contacto",
      "contactoPara1": "Si necesitas contactarnos por algo en particular no dudes en escribirnos",
      "contactoPara2": "Te recordamos que en la seccion de 'Preguntas frecuentes' tenemos la informacion completa del restaurante",
      "contactoEnviarConsulta": "Enviar consulta",
      "footerTxt": "Seguinos para mas informacion",
      "navInicio": "Inicio",
      "navComoLlegar": "Como Llegar",
      "navNuestrosPlatos": "Nuestros Platos",
      "navPreguntasFrecuentes": "Preguntas Frecuentes",

      "h3prim": "Embárcate en un viaje fascinante hasta el sereno Dique La Ciénaga en El Carmen.",
      "h3seg": "Una travesía que te sumergirá en la majestuosidad de los paisajes que adornan la región.",
      "h3ter": "Estamos ubicados en las orillas del 'Dique La Ciénaga', junto al club de pescadores.",
      "h3cua": "A 9km de la Ciudad de El Carmen y a 33km de la ciudad de San Salvador de Jujuy",
      "h5prim": "Para llegar desde San Salvador de Jujuy, tomamos viaje hacia el sur por la Ruta Nacional Nº 9 hasta la ciudad de El Carmen. Allí debemos seguir dicha ruta hasta llegar al mirador y murallón del dique. Seguimos avanzando hasta encontrarnos con el control policial y el autódromo; bordeamos el dique hasta llegar al final de la rotonda. Allí está ubicado tanto el restaurante como el club de pescadores y la piscina del club.",
      "h5seg": "Para llegar desde Salta, tenemos dos opciones. Por la Ruta Nacional Nº 34 en dirección al norte hacia Jujuy, se recomienda atravesar la ciudad de Perico (la misma ciudad donde se encuentra el aeropuerto Horacio Guzmán) y luego continuar hasta la ciudad de El Carmen, donde al llegar a la Ruta Nacional Nº 9, se puede seguir hasta el dique. El otro camino, llamado 'Ruta de Cornisa', implica pasar por las localidades de Vaqueros y La Caldera. Sigue la Ruta Nacional Nº 9 y llegarás directamente hasta el dique. Este camino suele ser algo complicado debido a las curvas y lo angosto, por lo que se recomienda ir con mucha precaución.",

      "titulopreg":"De Pregunta en Pregunta: Nuestra colección de respuestas elaboradas a las inquietudes más recurrentes",
      "preg1":"¿SE PUEDEN HACER RESERVAS?",
      "preg2":"¿QUE DIAS ESTA ABIERTO EL RESTAURANTE?",
      "preg3":"¿CUALES SON LAS FORMAS DE PAGO?",
      "preg4":"¿SE PERMITEN MASCOTAS EN EL LOCAL?",
      "preg5":"¿EXISTE UN MEDIO DE TRANSPORTE PUBLICO PARA LLEGAR AL LOCAL?",
      "preg6":"¿TIENEN OPCIONES SIN TACC O PARA VEGANOS?",
      "preg7":"¿EL LOCAL CUENTA CON ACCESO PARA PERSONAS CON CAPACIDAD REDUCIDA?",
      "preg8":"¿PUEDO LLAMAR A ALGUN TELÉFONO PARA OTRA CONSULTA?",

      "resp1":"No, el restaurante no trabaja con reservas. Debido a la alta demanda de clientes, decidimos darle prioridad directamente a las personas que llegan temprano.",
      "resp2":"El restaurante abre todos los días, de lunes a lunes, para almorzar. De lunes a viernes, desde el mediodía hasta las 16 hs. Los sábados y domingos, desde el mediodía hasta las 17 hs.",
      "resp3":"Los medios de pago son efectivo y tarjetas de débito y crédito (en un pago sin interés). NO SE RECIBEN TRANSFERENCIAS DE NINGÚN TIPO, esto se debe a que el local no cuenta con conexión WiFi y la señal de internet en el dique es escasa.",
      "resp4":"Al ser un lugar con bastante espacio y en lugar abierto, nosotros sí recibimos mascotas. Si el animal es muy grande o causa molestias a alguna otra persona cerca de la mesa, le vamos a pedir que se reubique o que retiren el animal.",
      "resp5":"No existe ningún colectivo que los deje hasta el restaurante. Lo que recomendamos es que, si son de San Salvador de Jujuy, tomen un colectivo hacia la terminal de ómnibus de 'El Carmen' y de ahí busquen algún remis particular hacia el restaurante. En verano suelen haber viajes especiales desde dicha terminal hasta el dique, pero desconocemos los horarios y en qué zona hacen paradas.",
      "resp6":"La carta está publicada tanto en la página web como en redes sociales. Para opciones sin TACC, puede consultar con los mozos la forma de cómo se prepara la comida. Para veganos, la opción sería elegir una milanesa de quesillo con algunas de las ensaladas. Más allá de los platos publicados, el restaurante no ofrece otro tipo de comida en particular.",
      "resp7":"Sí, el restaurante cuenta con acceso para personas con movilidad reducida, así como también baños para personas con tal condición.",
      "resp8":"Sí, contamos con dos números de teléfonos: (+54)3884793243 y (+54)3884793273. No tenemos teléfono de línea en el restaurante."

  },
  "en": {
      "text1intro": "Welcome to our restaurant.",
      "text2intro": "Your experience by the Dam and its hills.",
      "paragraph1": "Where each dish tells a story",
      "paragraph2": "and each view is a chapter",
      "horariosTitle": "We work every day",
      "horariosDays1": "Monday to Friday",
      "horariosDetail1": "From noon to 4pm.",
      "horariosDays2": "Saturdays and Sundays",
      "horariosDetail2": "From noon to 5pm.",
      "contactoTitle": "Contact",
      "contactoPara1": "If you need to contact us for anything specific, feel free to write to us",
      "contactoPara2": "We remind you that in the 'Frequently Asked Questions' section we have complete information about the restaurant",
      "contactoEnviarConsulta": "Send inquiry",
      "footerTxt": "Follow us for more information",
      "navInicio": "Home",
      "navComoLlegar": "How to Get Here",
      "navNuestrosPlatos": "Our Dishes",
      "navPreguntasFrecuentes": "Frequently Asked Questions",

      "h3prim":"Embark on a fascinating journey to the serene La Ciénaga Reservoir in El Carmen.",
      "h3seg":"A journey that will immerse you in the majesty of the landscapes that adorn the region",
      "h3ter":"We are located on the shores of 'Dique La Ciénaga,' next to the fishing club.",
      "h3cua":"9km away from the city of El Carmen and 33km from the city of San Salvador de Jujuy.",
      "h5prim":"To get here from San Salvador de Jujuy, we take a journey south on National Route No. 9 until we reach the city of El Carmen. From there, we must continue on the same route until we reach the viewpoint and dam of the reservoir. We continue moving forward until we encounter the police checkpoint and the racetrack; we skirt the reservoir until we reach the end of the roundabout. There, you will find both the restaurant and the fishing club, as well as the club's swimming pool.",
      "h5seg":"To get here from Salta, you have two options. Taking National Route No. 34 northbound towards Jujuy, it is recommended to pass through the city of Perico (the same city where Horacio Guzmán Airport is located) and then continue to the city of El Carmen. Once you reach National Route No. 9, you can proceed to the reservoir. The other route, known as the 'Ruta de Cornisa' (Scenic Route), involves passing through the towns of Vaqueros and La Caldera. Follow National Route No. 9, and you will arrive directly at the reservoir. This route can be somewhat challenging due to its curves and narrowness, so it is advisable to proceed with caution.",

      "titulopreg":"From Question to Question: Our collection of well-crafted answers to the most frequently asked inquiries",
      "preg1":"CAN RESERVATIONS BE MADE?",
      "preg2":"WHAT DAYS IS THE RESTAURANT OPEN?",
      "preg3":"WHAT ARE THE PAYMENT METHODS?",
      "preg4":"ARE PETS ALLOWED IN THE ESTABLISHMENT?",
      "preg5":"IS THERE PUBLIC TRANSPORTATION AVAILABLE TO REACH THE ESTABLISHMENT?",
      "preg6":"DO YOU HAVE OPTIONS WITHOUT GLUTEN OR FOR VEGANS?",
      "preg7":"DOES THE ESTABLISHMENT HAVE ACCESS FOR PEOPLE WITH REDUCED MOBILITY?",
      "preg8":"CAN I CALL ANY PHONE FOR FURTHER INQUIRIES?",

      "resp1":"No, the restaurant does not take reservations. Due to high customer demand, we have decided to prioritize those who arrive early.",
      "resp2":"The restaurant is open every day, from Monday to Monday, for lunch. Monday to Friday from noon to 4 pm. On Saturdays and Sundays, from noon to 5 pm.",
      "resp3":"The accepted payment methods are cash and debit/credit cards (in one installment with no interest). NO TRANSFERS OF ANY KIND are accepted, as the establishment lacks Wi-Fi connection, and internet signal at the reservoir is scarce.",
      "resp4":"As a spacious and open-air venue, we do welcome pets. However, if the animal is too large or causes inconvenience to others nearby, we may kindly ask you to relocate or remove the animal.",
      "resp5":"There is no bus service directly to the restaurant. We recommend that if you are coming from San Salvador de Jujuy, take a bus to the bus terminal in El Carmen and then find a private taxi to the restaurant. In the summer, there are usually special trips from the terminal to the reservoir, but we are not aware of the schedules or specific stops.",
      "resp6":"The menu is posted on both the website and social media. For gluten-free options, you can inquire with the waitstaff about how the food is prepared. For vegans, the option would be to choose a quesillo milanesa with some of the salads. Beyond the dishes listed, the restaurant does not offer any other specific type of cuisine.",
      "resp7":"Yes, the restaurant has access for people with reduced mobility, as well as bathrooms designed for individuals with such conditions.",
      "resp8":"Yes, we have two phone numbers: (+54)3884793243 and (+54)3884793273. We do not have a landline phone at the restaurant."

    },
  "pt": {
      "text1intro": "Bem-vindo ao nosso restaurante.",
      "text2intro": "Sua experiência junto à represa e suas colinas.",
      "paragraph1": "Onde cada prato conta uma história",
      "paragraph2": "e cada vista é um capítulo",
      "horariosTitle": "Trabalhamos todos os dias",
      "horariosDays1": "Segunda a Sexta",
      "horariosDetail1": "Do meio-dia às 16h.",
      "horariosDays2": "Sábados e Domingos",
      "horariosDetail2": "Do meio-dia às 17h.",
      "contactoTitle": "Contato",
      "contactoPara1": "Se precisar entrar em contato conosco para algo específico, sinta-se à vontade para nos escrever",
      "contactoPara2": "Lembramos que na seção de 'Perguntas Frequentes' temos informações completas sobre o restaurante",
      "contactoEnviarConsulta": "Enviar consulta",
      "footerTxt": "Siga-nos para mais informações",
      "navInicio": "Início",
      "navComoLlegar": "Como Chegar",
      "navNuestrosPlatos": "Nossos Pratos",
      "navPreguntasFrecuentes": "Perguntas Frequentes",

      "h3prim":"Embarque em uma viagem fascinante até o sereno Reservatório La Ciénaga em El Carmen.",
      "h3seg":"Uma jornada que irá mergulhar você na majestade das paisagens que adornam a região",
      "h3ter":"Estamos localizados às margens do 'Dique La Ciénaga', ao lado do clube de pescadores.",
      "h3cua":"A 9km da cidade de El Carmen e a 33km da cidade de San Salvador de Jujuy.",
      "h5prim":"Para chegar aqui a partir de San Salvador de Jujuy, pegamos a estrada rumo ao sul pela Rota Nacional Nº 9 até a cidade de El Carmen. Lá, devemos seguir pela mesma rota até chegarmos ao mirante e barragem do dique. Continuamos avançando até encontrarmos o posto policial e o autódromo; contornamos o dique até chegar ao final da rotatória. Lá, você encontrará tanto o restaurante quanto o clube de pescadores, além da piscina do clube.",
      "h5seg":"Para chegar aqui a partir de Salta, você tem duas opções. Pegando a Rota Nacional Nº 34 em direção ao norte em direção a Jujuy, recomenda-se passar pela cidade de Perico (a mesma cidade onde fica o Aeroporto Horacio Guzmán) e depois seguir até a cidade de El Carmen. Ao chegar na Rota Nacional Nº 9, você pode seguir até o dique. A outra rota, conhecida como 'Ruta de Cornisa' (Rota Cênica), envolve passar pelas cidades de Vaqueros e La Caldera. Siga a Rota Nacional Nº 9, e você chegará diretamente ao dique. Este caminho pode ser um pouco desafiador devido às curvas e à estreiteza, então é aconselhável prosseguir com cautela.",

      "titulopreg":"De Pergunta em Pergunta: Nossa coleção de respostas elaboradas para as dúvidas mais frequentes",
      "preg1":"É POSSÍVEL FAZER RESERVAS?",
      "preg2":"EM QUE DIAS O RESTAURANTE ESTÁ ABERTO?",
      "preg3":"QUAIS SÃO AS FORMAS DE PAGAMENTO?",
      "preg4":"SÃO PERMITIDOS ANIMAIS DE ESTIMAÇÃO NO LOCAL?",
      "preg5":"EXISTE TRANSPORTE PÚBLICO DISPONÍVEL PARA CHEGAR AO LOCAL?",
      "preg6":"VOCÊS TÊM OPÇÕES SEM GLÚTEN OU PARA VEGANOS?",
      "preg7":"O LOCAL TEM ACESSO PARA PESSOAS COM MOBILIDADE REDUZIDA?",
      "preg8":"POSSO LIGAR PARA ALGUM TELEFONE PARA OUTRAS DÚVIDAS?",

      "resp1":"Não, o restaurante não aceita reservas. Devido à alta demanda de clientes, decidimos priorizar diretamente aqueles que chegam cedo.",
      "resp2":"O restaurante abre todos os dias, de segunda a segunda, para o almoço. De segunda a sexta, das 12h às 16h. Aos sábados e domingos, das 12h às 17h.",
      "resp3":"Os meios de pagamento aceitos são dinheiro e cartões de débito/crédito (em uma parcela sem juros). NÃO SÃO ACEITAS TRANSFERÊNCIAS DE NENHUM TIPO, pois o local não possui conexão Wi-Fi e o sinal de internet no dique é limitado.",
      "resp4":"Como um local amplo e ao ar livre, aceitamos animais de estimação. No entanto, se o animal for muito grande ou causar incômodo a outras pessoas próximas, podemos pedir gentilmente que o reposicionem ou retirem.",
      "resp5":"Não há ônibus que cheguem diretamente ao restaurante. Recomendamos que, se você estiver vindo de San Salvador de Jujuy, pegue um ônibus até a rodoviária de El Carmen e, de lá, procure um táxi particular até o restaurante. No verão, costumam haver viagens especiais da rodoviária até o dique, mas não temos informações sobre os horários ou paradas específicas.",
      "resp6":"O cardápio está disponível tanto no site quanto nas redes sociais. Para opções sem glúten, você pode consultar os garçons sobre como a comida é preparada. Para veganos, a opção seria escolher uma milanesa de quesillo com algumas das saladas. Além dos pratos listados, o restaurante não oferece nenhum outro tipo específico de culinária.",
      "resp7":"Sim, o restaurante possui acesso para pessoas com mobilidade reduzida, bem como banheiros projetados para indivíduos com essa condição.",
      "resp8":"Sim, temos dois números de telefone: (+54)3884793243 e (+54)3884793273. Não temos telefone fixo no restaurante."

    }
};
// Función para cambiar el idioma
function changeLanguage(lang,button) {
  var buttons = document.querySelectorAll('.botonidioma');
    buttons.forEach(function(btn) {
    btn.classList.remove('activo');
  });

// Aplica estilos al botón seleccionado
  button.classList.add('activo');

  // Obtener todas las etiquetas que necesitan traducción
  var text1intro = document.querySelector('.text1intro');
  var text2intro = document.querySelector('.text2intro');
  var paragraph1 = document.querySelector('#fade-in-paragraph .animate__animated:nth-child(1)');
  var paragraph2 = document.querySelector('#fade-in-paragraph .animate__animated:nth-child(2)');
  var horariosTitle = document.querySelector('.seccionhorario .overlay1 h2');
  var horariosDays1 = document.querySelector('.seccionhorario .overlay2 .dias:nth-child(2)');
  var horariosDetail1 = document.querySelector('.seccionhorario .overlay2 .detalle:nth-child(3)');
  var horariosDays2 = document.querySelector('.seccionhorario .overlay2 .dias:nth-child(4)');
  var horariosDetail2 = document.querySelector('.seccionhorario .overlay2 .detalle:nth-child(5)');
  var contactoTitle = document.querySelector('.footer h2');
  var contactoPara1 = document.querySelector('.footer p:nth-child(2)');
  var contactoPara2 = document.querySelector('.footer p:nth-child(3)');
  var contactoEnviarConsulta = document.querySelector('.footer .botonmail');
  var footerTxt = document.querySelector('.footer-txt p');
  var navInicio = document.querySelector('.navbar li:nth-child(1) a');
  var navComoLlegar = document.querySelector('.navbar li:nth-child(2) a');
  var navNuestrosPlatos = document.querySelector('.navbar li:nth-child(3) a');
  var navPreguntasFrecuentes = document.querySelector('.navbar li:nth-child(4) a');

  var h3prim = document.querySelector('.info-content-llegar .animate__animated:nth-child(2)');
  var h3seg = document.querySelector('.info-content-llegar .animate__animated:nth-child(3)');
  var h3ter = document.querySelector('.info-content-llegar .datos1');
  var h3cua = document.querySelector('.info-content-llegar .datos2');
  var h3ter = document.querySelector('.info-content-llegar .datos1');
  var h3cua = document.querySelector('.info-content-llegar .datos2');
  var h5prim = document.querySelector('.info-content-llegar .explicacion1');
  var h5seg = document.querySelector('.info-content-llegar .explicacion2');

  var titulopreg = document.querySelector('.info-content-llegar .titulopreg');
  var preg1 = document.querySelector('.accordion .preg1');
  var preg2 = document.querySelector('.accordion .preg2');
  var preg3 = document.querySelector('.accordion .preg3');
  var preg4 = document.querySelector('.accordion .preg4');
  var preg5 = document.querySelector('.accordion .preg5');
  var preg6 = document.querySelector('.accordion .preg6');
  var preg7 = document.querySelector('.accordion .preg7');
  var resp1 = document.querySelector('.accordion .resp1');
  var resp2 = document.querySelector('.accordion .resp2');
  var resp3 = document.querySelector('.accordion .resp3');
  var resp4 = document.querySelector('.accordion .resp4');
  var resp5 = document.querySelector('.accordion .resp5');
  var resp6 = document.querySelector('.accordion .resp6');
  var resp7 = document.querySelector('.accordion .resp7');
  var resp8 = document.querySelector('.accordion .resp8');

  // Verificar si el idioma solicitado está en las traducciones
  if (translations.hasOwnProperty(lang)) {
      // Aplicar la traducción a cada etiqueta
      if (text1intro) {
          text1intro.textContent = translations[lang]["text1intro"];
      }
      if (text2intro) {
          text2intro.textContent = translations[lang]["text2intro"];
      }
      if (paragraph1) {
          paragraph1.textContent = translations[lang]["paragraph1"];
      }
      if (paragraph2) {
          paragraph2.textContent = translations[lang]["paragraph2"];
      }
      if (horariosTitle) {
          horariosTitle.textContent = translations[lang]["horariosTitle"];
      }
      if (horariosDays1) {
          horariosDays1.textContent = translations[lang]["horariosDays1"];
      }
      if (horariosDetail1) {
          horariosDetail1.textContent = translations[lang]["horariosDetail1"];
      }
      if (horariosDays2) {
          horariosDays2.textContent = translations[lang]["horariosDays2"];
      }
      if (horariosDetail2) {
          horariosDetail2.textContent = translations[lang]["horariosDetail2"];
      }
      if (contactoTitle) {
        contactoTitle.textContent = translations[lang]["contactoTitle"];
    }
    if (contactoPara1) {
        contactoPara1.textContent = translations[lang]["contactoPara1"];
    }
    if (contactoPara2) {
        contactoPara2.textContent = translations[lang]["contactoPara2"];
    }
    if (contactoEnviarConsulta) {
        contactoEnviarConsulta.textContent = translations[lang]["contactoEnviarConsulta"];
    }
    if (footerTxt) {
        footerTxt.textContent = translations[lang]["footerTxt"];
    }
    if (navInicio) {
      navInicio.textContent = translations[lang]["navInicio"];
  }
  if (navComoLlegar) {
      navComoLlegar.textContent = translations[lang]["navComoLlegar"];
  }
  if (navNuestrosPlatos) {
      navNuestrosPlatos.textContent = translations[lang]["navNuestrosPlatos"];
  }
  if (navPreguntasFrecuentes) {
      navPreguntasFrecuentes.textContent = translations[lang]["navPreguntasFrecuentes"];
  }

  if (h3prim) {
    h3prim.textContent = translations[lang]["h3prim"];
  }
  if (h3seg) {
    h3seg.textContent = translations[lang]["h3seg"];
  }
  if (h3ter) {
    h3ter.textContent = translations[lang]["h3ter"];
  }
  if (h3cua) {
    h3cua.textContent = translations[lang]["h3cua"];
  }
  if (h5prim) {
    h5prim.textContent = translations[lang]["h5prim"];
  }
  if (h5seg) {
    h5seg.textContent = translations[lang]["h5seg"];
  }

  if (titulopreg) {
    titulopreg.textContent = translations[lang]["titulopreg"];
  }
  if (preg1) {
    preg1.textContent = translations[lang]["preg1"];
  }
  if (preg2) {
    preg2.textContent = translations[lang]["preg2"];
  }
  if (preg3) {
    preg3.textContent = translations[lang]["preg3"];
  }
  if (preg4) {
    preg4.textContent = translations[lang]["preg4"];
  }
  if (preg5) {
    preg5.textContent = translations[lang]["preg5"];
  }
  if (preg6) {
    preg6.textContent = translations[lang]["preg6"];
  }
  if (preg7) {
    preg7.textContent = translations[lang]["preg7"];
  }
  if (resp1) {
    resp1.textContent = translations[lang]["resp1"];
  }
  if (resp2) {
    resp2.textContent = translations[lang]["resp2"];
  }
  if (resp3) {
    resp3.textContent = translations[lang]["resp3"];
  }
  if (resp4) {
    resp4.textContent = translations[lang]["resp4"];
  }
  if (resp5) {
    resp5.textContent = translations[lang]["resp5"];
  }
  if (resp6) {
    resp6.textContent = translations[lang]["resp6"];
  }
  if (resp7) {
    resp7.textContent = translations[lang]["resp7"];
  }
  if (resp8) {
    resp8.textContent = translations[lang]["resp8"];
  }


  }
}

/*
//FUNCION PARA HACER APARECER LA LETRA CUANDO LLEGA A CIERTA ALTURA (LLEGAR MAPA)
$(document).ready(function () {
  $(window).scroll(function () {
      var contenido = $('.info-llegar .info-content');
      var distanciaDesdeLaParteSuperior = contenido.offset().top - $(window).scrollTop();

      if (distanciaDesdeLaParteSuperior < $(window).height() * 0.5) {
          contenido.css({
              opacity: 1,
              transform: "translateY(0)"
          });
      } else {
          contenido.css({
              opacity: 0,
              transform: "translateY(20px)"
          });
      }
  });
});
*/




/*
  //FUNCION QUE AGREGA EL FONDO EN EL NAVBAR
  $(document).ready(function () {
    var menuContainer = $(".menu.container");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            menuContainer.addClass("scrolled");
        } else {
            menuContainer.removeClass("scrolled");
        }
    });
});
*/


