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

//FUNCION QUE AL HACER CLICK EN LA IMAGEN ME LLEVE HASTA EL ACORDEON
function mover(){
  $('body, html').animate({
    scrollTop: $('#accordionFlushExample').position().top
},150);
}

//FUNCION ACORDEON DEJA DE SER VISIBLE SE CIERRE


//FUNCION DE CARUSEL AUTOMATICO
  $(document).ready(function () {
    // Inicializar el carrusel
    $('#miCarrusel').carousel();

    // Configurar el carrusel para que se mueva automáticamente cada 3 segundos
    setInterval(function () {
      $('#miCarrusel').carousel('next');
    }, 3000);
  });

  $(document).ready(function () {
    var menuContainer = $('.menu.container');

    $(window).scroll(function () {
        console.log('Scrolling...');
        if ($(window).scrollTop() > 0) {
            menuContainer.addClass('scrolled');
            console.log('Se añadió la clase "scrolled"');
        } else {
            menuContainer.removeClass('scrolled');
            console.log('Se quitó la clase "scrolled"');
        }
    });
});

//FUNCION PARA MOVER EL ACORDEON
$(document).ready(function () {
  // Lógica para manejar el clic en los botones del acordeón
  $('.accordion-button').click(function (event) {
    // Prevenir el comportamiento predeterminado del enlace (si es un enlace)
    event.preventDefault();

    // Obtener la posición del botón actual
    var buttonTop = $(this).offset().top;

    // Obtener la altura de la ventana
    var windowHeight = $(window).height();

    // Calcular la posición a la que se debe desplazar la página para centrar el botón
    var scrollTo = buttonTop - (windowHeight / 4);

    // Desplazar a la posición calculada con animación lenta
    $('html, body').animate({
      scrollTop: scrollTo
    }, 'slow');

    // Esperar 1 segundo antes de verificar la posición final y ajustar
    setTimeout(function () {
      var finalPosition = $('.accordion-button:focus').offset().top;
      var finalScroll = finalPosition - (windowHeight / 4);

      // Desplazar a la posición final con animación lenta
      $('html, body').animate({
        scrollTop: finalScroll
      }, 'slow');
    }, 500);
  });

  // Verificar cuando se carga la página y al hacer scroll
  $(window).on('load scroll', function () {
    cerrarAcordeonSiNoVisible();
  });

  // Función para cerrar el acordeón si no está visible
  function cerrarAcordeonSiNoVisible() {
    var acordeon = $('#accordionFlushExample');

    // Obtener la posición del acordeón
    var acordeonPos = acordeon.offset().top;

    // Obtener la altura del acordeón
    var acordeonAltura = acordeon.outerHeight();

    // Calcular la posición y altura del área visible de la ventana
    var ventanaSuperior = $(window).scrollTop();
    var ventanaInferior = ventanaSuperior + $(window).height();

    // Verificar si el acordeón ha salido completamente de la vista
    if (acordeonPos + acordeonAltura < ventanaSuperior || acordeonPos > ventanaInferior) {
      // Cerrar todas las secciones del acordeón
      acordeon.find('.accordion-collapse').collapse('hide');
    }
  }
});

//FUNCION PARA TRADUCIR LOS TEXTOS
// Objeto que contiene las traducciones
var translations = {
  "es": {
      "footerTxt": "Seguinos para mas informacion",
      "navInicio": "Inicio",
      "navComoLlegar": "Como Llegar",
      "navNuestrosPlatos": "Nuestros Platos",
      "navPreguntasFrecuentes": "Preguntas Frecuentes",
      
      "carta1":"Descarga nuestra carta con los precios en el siguiente enlace de GoogleDrive",
      "carta2":"*Valor de los precios en pesos argentinos",
      "botondrive":"Click aqui",
      "titulocarta":"Descubrí lo que tenemos para ofrecerte",

      "titulo1":"ENTRADAS",
      "titulo2":"PESCADOS",
      "titulo3":"CARNES",
      "titulo4":"GUARNICIONES",
      "titulo5":"BEBIDAS",
      "titulo6":"POSTRES",

      "entrada1":"Exquisitos aros de calamar, cuidadosamente seleccionados y rebozados en una masa crujiente. Sumérgelos en el aceite caliente para lograr una textura dorada y perfecta. Ideal para compartir, este entrante cautivará tu paladar con su frescura marina y su irresistible sabor a mar.",
      "entrada2":"Descubre la frescura del mar en cada bocado con nuestros cornalitos fritos. Pescados pequeños de mar, envueltos en una ligera capa de harina y dorados a la perfección. Su tamaño compacto y su sabor intenso los convierten en la elección ideal para compartir y disfrutar en buena compañía.",
      "entrada3":"Nuestra Empanada Jujeña te invita a saborear la riqueza de la cocina regional. Con un relleno generoso de carne, papa y huevos, esta empanada frita en aceite captura la esencia de Jujuy en cada pliegue. Una experiencia gastronómica que fusiona tradición y sabor en cada bocado. ¡Déjate cautivar por la autenticidad del norte argentino!",
      "entrada4":"El suave quesillo de vaca, cuidadosamente rebozado en clara de huevo y pan molido, se cocina a la perfección en la plancha hasta alcanzar una textura dorada y crujiente. Acompañado de verduras frescas y una deliciosa salsa de choclo, este plato es una invitación a disfrutar de la armonía de sabores y texturas.",

      "pescado1":"Deleita tu paladar con nuestra especialidad: Pejerrey al Soufflé. Este exquisito pescado de la zona es delicadamente rebozado con una masa ligera y frito hasta obtener una textura crujiente y dorada. Considerado el preferido por nuestros comensales, este plato es una experiencia inigualable. Se recomienda disfrutar de 3 a 4 unidades por persona para explorar plenamente su sabor único.",
      "pescado2":"Nuestro Pejerrey 'al Natural' es la elección ideal para los amantes de la simplicidad y la autenticidad. Con una capa ligera de harina que realza su frescura, este plato resalta el sabor puro del pejerrey. Se recomienda disfrutar de 3 a 4 unidades por persona para una experiencia gastronómica completa.",
      "pescado3":"Disfruta de la simplicidad y la frescura con nuestro Pejerrey a la Plancha. Cocinado sin aditivos, este pescado de la zona se presenta a la perfección en su estado natural. Se recomienda servir de 3 a 4 unidades por persona para una experiencia gastronómica ligera y satisfactoria.",
      "pescado4":"Embárcate en una experiencia culinaria sublime con nuestro Pacú al limón. Este pescado de agua dulce, cuidadosamente cocinado a la plancha con un toque de limón y sal, ofrece una fusión equilibrada de sabores. Cada porción se presenta jugosa y llena de frescura, resaltando la calidad única del pacú. Disfruta de la simplicidad elevada a la perfección en cada bocado.",
      "pescado5":"Sumérgete en los sabores frescos de nuestra Trucha al Limón. Cocinada con maestría y sazonada con limón y sal, cada bocado ofrece una experiencia única. La trucha, con su carne tierna y delicada, se presenta en su máxima expresión, resaltando la calidad de los ingredientes y la destreza culinaria.",
      "pescado6":"Un plato que combina la simplicidad con la exquisitez. Porción de Trucha de mayor tamaño, cocinada a la perfección y resaltada con limón y sal, esta trucha ofrece un sabor puro y delicioso. Cada porción es una celebración de la frescura del agua y la calidad de nuestro enfoque culinario.",
  
      "carne1":"Embárcate en un viaje de sabores argentinos con nuestra Milanesa, una tradición que conquista paladares. La carne tierna y jugosa es cuidadosamente empanizada y frita a la perfección. El resultado es una textura crujiente por fuera y una suavidad irresistible por dentro. Esta Milanesa es un homenaje a la simplicidad y al sabor auténtico.",
      "carne2":"Disfruta de la extravagancia de nuestra Milanesa Napolitana, una fusión de sabores que eleva la clásica Milanesa a nuevas alturas. La carne jugosa, empanizada y frita con maestría, se cubre con salsa de tomate y queso derretido. Cada bocado es una explosión de sabores que celebra la herencia italiana en la cocina argentina.",
      "carne3":"Descubre la perfección en cada corte con nuestro Bife de Lomo, una experiencia gastronómica que rinde homenaje a la maestría de la parrilla argentina. La suavidad del lomo se combina con el arte de la cocción a la plancha para ofrecer un bocado inigualable. Un toque de limón y sal resalta los matices de este corte premium, creando una experiencia única para los amantes de la carne. También preparamos bife de pollo, para aquellos que disfruten el sabor de la carne blanca.",

      "guarnicion1":"Disfruta de un festín de sabores con nuestras Papas Fritas con Huevos Revueltos. Las papas crujientes se combinan con huevos revueltos, creando una mezcla irresistible. La combinación de texturas y el sabor reconfortante hacen de esta porción la opción perfecta para compartir con tu plato principal.",
      "guarnicion2":"Descubre el encanto de nuestras Papas Fritas a la Provenzal, una reinterpretación elegante de un clásico. Las papas fritas se mezclan con ajo y perejil, creando una combinación deliciosa. Esta porción, pensada para compartir, es el acompañamiento perfecto para quienes buscan una experiencia gastronómica refinada y llena de sabores frescos.",
      "guarnicion3":"Disfruta de la opulencia en cada bocado con nuestras Papas Fritas Gratinadas. Las papas crujientes se transforman en una experiencia decadente con el toque irresistible del queso gratinado. La porción sugerida para compartir te permite explorar la riqueza de sabores y texturas en buena compañía, creando un momento culinario inolvidable.",
      "guarnicion4":"Explora una explosión de frescura y color con nuestra Ensalada Completa. Una mezcla armoniosa de lechuga, tomate, papas tiernas, remolacha, zanahorias y huevos cocidos. Cada ingrediente se combina para crear una sinfonía de sabores y texturas. Perfecta como plato principal o acompañamiento, esta ensalada completa es una opción equilibrada y deliciosa para aquellos que buscan una experiencia culinaria completa.",
      "guarnicion5":"Descubre la elegancia en cada hoja con nuestra Ensalada de Hojas Verdes. La rúcula y la achicoria se combinan en un baile de sabores intensos, realzados por la adición de queso parmesano finamente rallado. Esta ensalada es un tributo a la frescura y la simplicidad, creando una experiencia gourmet que cautivará tu paladar.",
      "guarnicion6":"Explora la simplicidad reconfortante de nuestra Ensalada de Verduras Hervidas. Papas, remolacha, zanahorias y huevos se presentan en su máximo esplendor, resaltando la exquisitez de las verduras frescas y bien cocidas. La porción recomendada para compartir permite disfrutar de este plato como una opción saludable y deliciosa para acompañar tus comidas.",

      "bebida1":"Gaseosas de la linea Coca-Cola. Ofrecemos envases de 1.5Lt, como también individuales.",
      "bebida2":"Aguas saborizadas de pera, manzana, naranja y limón. Ofrecemos envases de 1.5Lt, como también individuales.",
      "bebida3":"Botellas de agua con y sin gas. Ofrecemos envases de 1.5Lt, como también individuales.",
      "bebida4":"Cervezas de reconocidas marcas, tanto en envases de 1Lt como también en latas.",
      "bebida5":"Gran variedad de vinos tintos y blancos. Ofrecemos botellas de 3/4 y 3/8.",
      "bebida6":"Medidas de bebidas alcoholicas como ser Fernet, Gancia y Whisky.",

      "postre1":"Culmina tu experiencia gastronómica con nuestro irresistible Flan Casero, una obra maestra de la dulzura. Este postre clásico fusiona la suavidad sedosa del flan con el caramelo dorado que lo envuelve. Cada cucharada revela la perfección de nuestra receta casera, un deleite indulgente que captura la esencia reconfortante de los postres tradicionales.",
      "postre2":"Embárcate en un viaje de sabores nostálgicos con nuestro Budín de Pan, exquisitez la textura esponjosa del pan. Este postre, cocinado con mimo, es una invitación a degustar la calidez de los recuerdos culinarios. Déjate llevar por la comodidad y el sabor reconfortante.",
      "postre3":"Sumérgete en la ligereza celestial de nuestra Isla Flotante, un postre que eleva la experiencia dulce a nuevas alturas. Claras de huevos cocinadas al horno y con un baño Maria, crean una combinación etérea de texturas y sabores. Permite a los comensales disfrutar juntos de esta experiencia única que equilibra lo indulgente con lo etéreo.",
      "postre4":"Concluye tu experiencia culinaria con nuestra refrescante Ensalada de Frutas, una sinfonía de sabores vibrantes y colores exuberantes. La combinación cuidadosa de frutas frescas, se presenta en una mezcla jugosa y llena de vitalidad. Perfecta como opción ligera y saludable, esta ensalada es la elección ideal para cerrar tu comida con un toque fresco y delicioso.",
      "postre5":"Concluye tu comida con nuestra irresistible Copa de Helado de reconocida marca local, una experiencia que combina la cremosidad del helado con la riqueza de los acompañamientos. Las suaves bolas de helado se realzan con salsas decadentes y una mezcla de texturas y sabores.",
      "postre6":"Descubre la simplicidad elegante de nuestros Quesillos con Cayote o Miel de caña, una combinación única que resalta la suavidad del quesillo y la dulzura natural. Este postre, cuidadosamente preparado, ofrece una experiencia que fusiona la tradición con la creatividad.",
      "postre7":"Embárcate en una experiencia única con nuestra creación exclusiva, la 'Copa La Ciénaga'. Un festín de sabores y texturas que combina la indulgencia del dulce de leche con la frescura de la ensalada de frutas, la suavidad del helado y la cremosidad de la crema. Cada capa se entrelaza en una danza de sabores, mientras las galletitas obleas aportan la crujiente armonía perfecta. La porción sugerida para compartir permite a todos disfrutar de esta obra maestra culinaria que lleva el nombre de nuestro restaurante.",

  },
  "en": {
      "footerTxt": "Follow us for more information",
      "navInicio": "Home",
      "navComoLlegar": "How to Get Here",
      "navNuestrosPlatos": "Our Dishes",
      "navPreguntasFrecuentes": "Frequently Asked Questions",
      
      "carta1":"Download our menu with prices at the following Google Drive link",
      "carta2":"*Value of prices in Argentine pesos",
      "botondrive":"Click here",
      "titulocarta":"Discover what we have to offer",

      "titulo1":"APPETIZERS",
      "titulo2":"SEAFOOD",
      "titulo3":"MEATS",
      "titulo4":"SIDE DISHES",
      "titulo5":"DRINKS",
      "titulo6":"DESSERTS",

      "entrada1":"Exquisite calamari rings, carefully selected and coated in a crispy batter. Dip them into hot oil to achieve a golden and perfect texture. Ideal for sharing, this appetizer will captivate your palate with its sea-freshness and irresistible oceanic flavor.",
      "entrada2":"Discover the freshness of the sea in every bite with our fried whitebait. Small sea fish, wrapped in a light layer of flour and perfectly golden. Their compact size and intense flavor make them the ideal choice for sharing and enjoying in good company.",
      "entrada3":"Our Jujeña Empanada invites you to savor the richness of regional cuisine. With a generous filling of meat, potato, and eggs, this empanada, fried to perfection, captures the essence of Jujuy in every fold. A gastronomic experience that merges tradition and flavor in every bite. Let yourself be captivated by the authenticity of northern Argentina!",
      "entrada4":"The smooth cow's quesillo, carefully coated in egg white and breadcrumbs, is perfectly grilled until it reaches a golden and crispy texture. Accompanied by fresh vegetables and a delicious corn sauce, this dish is an invitation to savor the harmony of flavors and textures.",
      
      "pescado1":"Delight your palate with our specialty: Soufflé-style Pejerrey. This exquisite local fish is delicately coated with a light batter and fried to achieve a crispy and golden texture. Considered a favorite by our diners, this dish offers an unparalleled experience. It is recommended to enjoy 3 to 4 units per person to fully explore its unique flavor.",
      "pescado2":"Our 'Natural' Pejerrey is the ideal choice for lovers of simplicity and authenticity. With a light dusting of flour that enhances its freshness, this dish highlights the pure flavor of the pejerrey. It is recommended to enjoy 3 to 4 units per person for a complete gastronomic experience.",
      "pescado3":"Enjoy simplicity and freshness with our Grilled Pejerrey. Cooked without additives, this local fish is presented perfectly in its natural state. It is recommended to serve 3 to 4 units per person for a light and satisfying gastronomic experience.",
      "pescado4":"Embark on a sublime culinary experience with our Lemon Pacu. This freshwater fish, carefully grilled with a touch of lemon and salt, offers a balanced fusion of flavors. Each portion is juicy and full of freshness, highlighting the unique quality of the pacu. Enjoy simplicity elevated to perfection in every bite.",
      "pescado5":"Immerse yourself in the fresh flavors of our Lemon Trout. Cooked with mastery and seasoned with lemon and salt, each bite offers a unique experience. The trout, with its tender and delicate flesh, is presented in its fullest expression, highlighting the quality of ingredients and culinary skill.",
      "pescado6":"A dish that combines simplicity with delicacy. A larger portion of Trout, cooked to perfection and enhanced with lemon and salt, this trout offers a pure and delicious flavor. Each portion is a celebration of water freshness and the quality of our culinary approach.",

      "carne1":"Embark on a journey of Argentine flavors with our Milanesa, a tradition that captivates taste buds. The tender and juicy meat is carefully breaded and fried to perfection. The result is a crispy texture on the outside and an irresistibly soft interior. This Milanesa is a tribute to simplicity and authentic flavor.",
      "carne2":"Enjoy the extravagance of our Milanesa Napolitana, a fusion of flavors that takes the classic Milanesa to new heights. The juicy meat, breaded and fried with mastery, is covered with tomato sauce and melted cheese. Each bite is an explosion of flavors that celebrates the Italian heritage in Argentine cuisine.",
      "carne3":"Discover perfection in every cut with our Bife de Lomo, a gastronomic experience that pays tribute to the artistry of Argentine grilling. The tenderness of the sirloin combines with the skill of griddle cooking to offer an unparalleled bite. A touch of lemon and salt enhances the nuances of this premium cut, creating a unique experience for meat lovers. We also prepare chicken steak for those who enjoy the flavor of white meat.",

      "guarnicion1":"Indulge in a feast of flavors with our French Fries with Scrambled Eggs. Crispy fries are combined with scrambled eggs, creating an irresistible mix. The combination of textures and the comforting taste make this portion the perfect option to share with your main dish.",
      "guarnicion2":"Discover the charm of our Provencal-style French Fries, an elegant reinterpretation of a classic. French fries are mixed with garlic and parsley, creating a delicious combination. This portion, designed for sharing, is the perfect accompaniment for those seeking a refined gastronomic experience full of fresh flavors.",
      "guarnicion3":"Indulge in opulence with every bite of our Gratinated French Fries. Crispy fries transform into a decadent experience with the irresistible touch of melted cheese. The suggested portion for sharing allows you to explore the richness of flavors and textures in good company, creating an unforgettable culinary moment.",
      "guarnicion4":"Explore an explosion of freshness and color with our Complete Salad. A harmonious mix of lettuce, tomato, tender potatoes, beets, carrots, and boiled eggs. Each ingredient combines to create a symphony of flavors and textures. Perfect as a main dish or side, this complete salad is a balanced and delicious option for those seeking a complete culinary experience.",
      "guarnicion5":"Discover elegance in every leaf with our Green Leaf Salad. Arugula and chicory come together in a dance of intense flavors, enhanced by the addition of finely grated Parmesan cheese. This salad is a tribute to freshness and simplicity, creating a gourmet experience that will captivate your palate.",
      "guarnicion6":"Explore the comforting simplicity of our Boiled Vegetable Salad. Potatoes, beets, carrots, and eggs are presented in their full splendor, highlighting the delicacy of fresh and well-cooked vegetables. The recommended portion for sharing allows you to enjoy this dish as a healthy and delicious option to accompany your meals.",

      "bebida1":"Coca-Cola soda beverages. We offer 1.5L bottles as well as individual servings",
      "bebida2":"Flavored waters in pear, apple, orange, and lemon. We offer 1.5L bottles as well as individual servings.",
      "bebida3":"Bottled water, both sparkling and still. We offer 1.5L bottles as well as individual servings.",
      "bebida4":"Beers from renowned brands, available in 1L bottles as well as cans.",
      "bebida5":"A wide variety of red and white wines. We offer 3/4 and 3/8 bottles.",
      "bebida6":"Measurements of alcoholic beverages such as Fernet, Gancia, and whisky.",
  
      "postre1":"Conclude your gastronomic experience with our irresistible Homemade Flan, a masterpiece of sweetness. This classic dessert fuses the silky smoothness of flan with the golden caramel that envelops it. Each spoonful reveals the perfection of our homemade recipe, an indulgent delight that captures the comforting essence of traditional desserts.",
      "postre2":"Embark on a journey of nostalgic flavors with our Bread Pudding, savoring the fluffy texture of the bread. This dessert, cooked with care, is an invitation to taste the warmth of culinary memories. Let yourself be carried away by the comfort and comforting flavor.",
      "postre3":"Immerse yourself in the celestial lightness of our Floating Island, a dessert that elevates the sweet experience to new heights. Baked egg whites with a bain-marie create an ethereal combination of textures and flavors. Allows diners to enjoy together this unique experience that balances indulgence with the ethereal.",
      "postre4":"Conclude your culinary experience with our refreshing Fruit Salad, a symphony of vibrant flavors and lush colors. The careful combination of fresh fruits is presented in a juicy and lively mixture. Perfect as a light and healthy option, this salad is the ideal choice to conclude your meal with a fresh and delicious touch.",
      "postre5":"Conclude your meal with our irresistible Ice Cream Sundae from a renowned local brand, an experience that combines the creaminess of ice cream with the richness of toppings. The smooth scoops of ice cream are enhanced with decadent sauces and a blend of textures and flavors.",
      "postre6":"Discover the elegant simplicity of our Quesillos with Cayote or Cane Honey, a unique combination that highlights the smoothness of the 'quesillo' and natural sweetness. This dessert, carefully prepared, offers an experience that fuses tradition with creativity.",
      "postre7":"Embark on a unique experience with our exclusive creation, the 'Copa La Ciénaga.' A feast of flavors and textures that combines the indulgence of dulce de leche with the freshness of fruit salad, the smoothness of ice cream, and the creaminess of whipped cream. Each layer intertwines in a dance of flavors, while wafer cookies contribute the perfect crunchy harmony. The suggested serving for sharing allows everyone to enjoy this culinary masterpiece named after our restaurant.",

  },
  "pt": {
      "footerTxt": "Siga-nos para mais informações",
      "navInicio": "Início",
      "navComoLlegar": "Como Chegar",
      "navNuestrosPlatos": "Nossos Pratos",
      "navPreguntasFrecuentes": "Perguntas Frequentes",
      
      "carta1":"Baixe nosso cardápio com preços no seguinte link do Google Drive",
      "carta2":"*Valor dos preços em pesos argentinos",
      "botondrive":"Clique aqui",
      "titulocarta":"Descubra o que temos a lhe oferecer",

      "titulo1":"ENTRADAS",
      "titulo2":"PEIXES",
      "titulo3":"CARNES",
      "titulo4":"ACOMPANHAMENTOS",
      "titulo5":"BEBIDAS",
      "titulo6":"SOBREMESAS",

      "entrada1":"Exquisitos anéis de lula, cuidadosamente selecionados e empanados em uma massa crocante. Mergulhe-os em óleo quente para obter uma textura dourada e perfeita. Ideal para compartilhar, esta entrada cativará seu paladar com sua frescura marinha e sabor irresistível ao mar.",
      "entrada2":"Descubra a frescura do mar em cada mordida com nossos peixinhos fritos. Pequenos peixes do mar, envolvidos em uma leve camada de farinha e dourados à perfeição. Seu tamanho compacto e sabor intenso os tornam a escolha ideal para compartilhar e aproveitar na boa companhia.",
      "entrada3":"Nossa Empanada Jujeña convida você a saborear a riqueza da culinária regional. Com um recheio generoso de carne, batata e ovos, esta empanada frita em óleo captura a essência de Jujuy em cada dobra. Uma experiência gastronômica que une tradição e sabor em cada mordida. Deixe-se encantar pela autenticidade do norte argentino!",
      "entrada4":"O suave quesillo de vaca, cuidadosamente empanado em clara de ovo e migalhas de pão, é perfeitamente grelhado até atingir uma textura dourada e crocante. Acompanhado de vegetais frescos e um delicioso molho de milho, este prato é um convite para apreciar a harmonia de sabores e texturas.",
      
      "pescado1":"Deleite seu paladar com nossa especialidade: Pejerrey ao Soufflé. Este peixe local requintado é delicadamente empanado com uma massa leve e frito até obter uma textura crocante e dourada. Considerado o favorito por nossos clientes, este prato proporciona uma experiência incomparável. Recomenda-se saborear de 3 a 4 unidades por pessoa para explorar plenamente seu sabor único.",
      "pescado2":"Nosso Pejerrey 'ao Natural' é a escolha ideal para os amantes da simplicidade e autenticidade. Com uma leve camada de farinha que realça sua frescura, este prato destaca o sabor puro do pejerrey. Recomenda-se saborear de 3 a 4 unidades por pessoa para uma experiência gastronômica completa.",
      "pescado3":"Aproveite a simplicidade e frescura com nosso Pejerrey Grelhado. Cozido sem aditivos, este peixe local é apresentado perfeitamente em seu estado natural. Recomenda-se servir de 3 a 4 unidades por pessoa para uma experiência gastronômica leve e satisfatória.",
      "pescado4":"Embarque em uma experiência culinária sublime com nosso Pacu ao Limão. Este peixe de água doce, cuidadosamente grelhado com um toque de limão e sal, oferece uma fusão equilibrada de sabores. Cada porção é suculenta e cheia de frescor, destacando a qualidade única do pacu. Aproveite a simplicidade elevada à perfeição em cada mordida.",
      "pescado5":"Submerja-se nos sabores frescos de nossa Truta ao Limão. Cozida com maestria e temperada com limão e sal, cada mordida oferece uma experiência única. A truta, com sua carne tenra e delicada, é apresentada em sua máxima expressão, destacando a qualidade dos ingredientes e habilidade culinária.",
      "pescado6":"Um prato que combina a simplicidade com a delicadeza. Uma porção maior de Truta, cozida à perfeição e realçada com limão e sal, esta truta oferece um sabor puro e delicioso. Cada porção é uma celebração da frescura da água e da qualidade de nossa abordagem culinária.",

      "carne1":"Embarque em uma jornada de sabores argentinos com nossa Milanesa, uma tradição que conquista paladares. A carne tenra e suculenta é cuidadosamente empanada e frita à perfeição. O resultado é uma textura crocante por fora e uma maciez irresistível por dentro. Esta Milanesa é uma homenagem à simplicidade e ao sabor autêntico.",
      "carne2":"Aproveite a extravagância de nossa Milanesa Napolitana, uma fusão de sabores que eleva a clássica Milanesa a novas alturas. A carne suculenta, empanada e frita com maestria, é coberta com molho de tomate e queijo derretido. Cada mordida é uma explosão de sabores que celebra a herança italiana na culinária argentina.",
      "carne3":"Descubra a perfeição em cada corte com nosso Bife de Lomo, uma experiência gastronômica que presta homenagem à maestria do churrasco argentino. A maciez do lombo combina com a habilidade da cocção na chapa para oferecer uma mordida inigualável. Um toque de limão e sal realça as nuances deste corte premium, criando uma experiência única para os amantes de carne. Também preparamos bife de frango para aqueles que apreciam o sabor da carne branca.",

      "guarnicion1":"Desfrute de um festim de sabores com nossas Batatas Fritas com Ovos Mexidos. As batatas crocantes se combinam com ovos mexidos, criando uma mistura irresistível. A combinação de texturas e o sabor reconfortante fazem desta porção a opção perfeita para compartilhar com seu prato principal.",
      "guarnicion2":"Descubra o encanto de nossas Batatas Fritas à Provençal, uma reinterpretção elegante de um clássico. As batatas fritas são misturadas com alho e salsa, criando uma combinação deliciosa. Esta porção, pensada para compartilhar, é o acompanhamento perfeito para aqueles que buscam uma experiência gastronômica refinada e cheia de sabores frescos.",
      "guarnicion3":"Desfrute da opulência em cada mordida com nossas Batatas Fritas Gratinadas. As batatas crocantes se transformam em uma experiência decadente com o toque irresistível do queijo gratinado. A porção sugerida para compartilhar permite que você explore a riqueza de sabores e texturas em boa companhia, criando um momento culinário inesquecível.",
      "guarnicion4":"Explore uma explosão de frescor e cor com nossa Salada Completa. Uma mistura harmoniosa de alface, tomate, batatas tenras, beterraba, cenouras e ovos cozidos. Cada ingrediente se combina para criar uma sinfonia de sabores e texturas. Perfeita como prato principal ou acompanhamento, esta salada completa é uma opção equilibrada e deliciosa para aqueles que buscam uma experiência culinária completa.",
      "guarnicion5":"Descubra a elegância em cada folha com nossa Salada de Folhas Verdes. Rúcula e chicória se unem em uma dança de sabores intensos, realçados pela adição de queijo parmesão finamente ralado. Esta salada é um tributo à frescura e simplicidade, criando uma experiência gourmet que vai cativar seu paladar.",
      "guarnicion6":"Explore a simplicidade reconfortante de nossa Salada de Legumes Cozidos. Batatas, beterrabas, cenouras e ovos são apresentados em seu esplendor máximo, destacando a delicadeza de vegetais frescos e bem cozidos. A porção recomendada para compartilhar permite que você desfrute deste prato como uma opção saudável e deliciosa para acompanhar suas refeições.",
  
      "bebida1":"Refrigerantes da linha Coca-Cola. Oferecemos embalagens de 1,5 litros, bem como opções individuais.",
      "bebida2":"Águas saborizadas de pera, maçã, laranja e limão. Oferecemos embalagens de 1,5 litros, bem como opções individuais.",
      "bebida3":"Garrafas de água com e sem gás. Oferecemos embalagens de 1,5 litros, bem como opções individuais.",
      "bebida4":"Cervejas de marcas reconhecidas, disponíveis em garrafas de 1 litro, assim como em latas.",
      "bebida5":"Uma ampla variedade de vinhos tintos e brancos. Oferecemos garrafas de 3/4 e 3/8.",
      "bebida6":"Medidas de bebidas alcoólicas como Fernet, Gancia e whisky.",
  
      "postre1":"Encerre sua experiência gastronômica com nosso irresistível Flan Caseiro, uma obra-prima de doçura. Esta sobremesa clássica funde a suavidade sedosa do flan com o caramelo dourado que o envolve. Cada colherada revela a perfeição de nossa receita caseira, um deleite indulgente que captura a essência reconfortante das sobremesas tradicionais.",
      "postre2":"Embarque em uma jornada de sabores nostálgicos com nosso Pudim de Pão, saboreando a textura fofa do pão. Esta sobremesa, preparada com carinho, é um convite para degustar o calor das memórias culinárias. Deixe-se levar pelo conforto e pelo sabor reconfortante.",
      "postre3":"Submerja-se na leveza celestial de nossa Ilha Flutuante, uma sobremesa que eleva a experiência doce a novas alturas. Claras de ovos cozidas no forno e em banho-maria criam uma combinação etérea de texturas e sabores. Permite aos comensais desfrutar juntos desta experiência única que equilibra o indulgente com o etéreo.",
      "postre4":"Conclua sua experiência culinária com nossa refrescante Salada de Frutas, uma sinfonia de sabores vibrantes e cores exuberantes. A cuidadosa combinação de frutas frescas é apresentada em uma mistura suculenta e cheia de vitalidade. Perfeita como opção leve e saudável, esta salada é a escolha ideal para encerrar sua refeição com um toque fresco e delicioso.",
      "postre5":"Conclua sua refeição com nossa irresistível Copa de Sorvete de uma marca local renomada, uma experiência que combina a cremosidade do sorvete com a riqueza das coberturas. As suaves bolas de sorvete são realçadas com molhos decadentes e uma mistura de texturas e sabores.",
      "postre6":"Descubra a simplicidade elegante de nossos Quesillos com Cayote ou Mel de Cana, uma combinação única que destaca a suavidade do quesillo e a doçura natural. Esta sobremesa, cuidadosamente preparada, oferece uma experiência que une tradição e criatividade.",
      "postre7":"Embarque em uma experiência única com nossa criação exclusiva, a 'Copa La Ciénaga'. Um festim de sabores e texturas que combina a indulgência do doce de leite com a frescura da salada de frutas, a suavidade do sorvete e a cremosidade do creme. Cada camada se entrelaça em uma dança de sabores, enquanto as bolachas waffle contribuem para a harmonia crocante perfeita. A porção sugerida para compartilhar permite que todos desfrutem desta obra-prima culinária que leva o nome de nosso restaurante.",

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
  var footerTxt = document.querySelector('.footer-txt p');
  var navInicio = document.querySelector('.navbar li:nth-child(1) a');
  var navComoLlegar = document.querySelector('.navbar li:nth-child(2) a');
  var navNuestrosPlatos = document.querySelector('.navbar li:nth-child(3) a');
  var navPreguntasFrecuentes = document.querySelector('.navbar li:nth-child(4) a');
  
  var carta1 = document.querySelector('.botondrive .msjcarta1');
  var carta2 = document.querySelector('.botondrive .msjcarta2');
  
  var botondrive = document.querySelector('.botondrive .btn-primary');
  var titulocarta = document.querySelector('.animate__fadeInRight');

  var titulo1 = document.querySelector('.accordion .accordion-header .tit1');
  var titulo2 = document.querySelector('.accordion .accordion-header .tit2');
  var titulo3 = document.querySelector('.accordion .accordion-header .tit3');
  var titulo4 = document.querySelector('.accordion .accordion-header .tit4');
  var titulo5 = document.querySelector('.accordion .accordion-header .tit5');
  var titulo6 = document.querySelector('.accordion .accordion-header .tit6');

  var entrada1 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .entrada1');
  var entrada2 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .entrada2');
  var entrada3 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .entrada3');
  var entrada4 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .entrada4');

  var pescado1 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .pescado1');
  var pescado2 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .pescado2');
  var pescado3 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .pescado3');
  var pescado4 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .pescado4');
  var pescado5 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .pescado5');
  var pescado6 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .pescado6');

  var carne1 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .carne1');
  var carne2 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .carne2');
  var carne3 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .carne3');

  var guarnicion1 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .guarnicion1');
  var guarnicion2 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .guarnicion2');
  var guarnicion3 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .guarnicion3');
  var guarnicion4 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .guarnicion4');
  var guarnicion5 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .guarnicion5');
  var guarnicion6 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .guarnicion6');

  var bebida1 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .bebida1');
  var bebida2 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .bebida2');
  var bebida3 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .bebida3');
  var bebida4 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .bebida4');
  var bebida5 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .bebida5');
  var bebida6 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .bebida6');

  var postre1 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre1');
  var postre2 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre2');
  var postre3 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre3');
  var postre4 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre4');
  var postre5 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre5');
  var postre6 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre6');
  var postre7 = document.querySelector('.accordion .accordion-item .accordion-collapse .card .postre7');

  // Verificar si el idioma solicitado está en las traducciones
  if (translations.hasOwnProperty(lang)) {
      // Aplicar la traducción a cada etiqueta
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
  
  if (carta1) {
    carta1.textContent = translations[lang]["carta1"];
  }
  if (carta2) {
    carta2.textContent = translations[lang]["carta2"];
  }
  if (botondrive) {
    botondrive.textContent = translations[lang]["botondrive"];
  }
  if (titulocarta) {
    titulocarta.textContent = translations[lang]["titulocarta"];
  }

  if (titulo1) {
    titulo1.textContent = translations[lang]["titulo1"];
  }
  if (titulo2) {
    titulo2.textContent = translations[lang]["titulo2"];
  }
  if (titulo3) {
    titulo3.textContent = translations[lang]["titulo3"];
  }
  if (titulo4) {
    titulo4.textContent = translations[lang]["titulo4"];
  }
  if (titulo5) {
    titulo5.textContent = translations[lang]["titulo5"];
  }
  if (titulo6) {
    titulo6.textContent = translations[lang]["titulo6"];
  }

  if (entrada1) {
    entrada1.textContent = translations[lang]["entrada1"];
  }
  if (entrada2) {
    entrada2.textContent = translations[lang]["entrada2"];
  }
  if (entrada3) {
    entrada3.textContent = translations[lang]["entrada3"];
  }
  if (entrada4) {
    entrada4.textContent = translations[lang]["entrada4"];
  }

  if (pescado1) {
    pescado1.textContent = translations[lang]["pescado1"];
  }
  if (pescado2) {
    pescado2.textContent = translations[lang]["pescado2"];
  }
  if (pescado3) {
    pescado3.textContent = translations[lang]["pescado3"];
  }
  if (pescado4) {
    pescado4.textContent = translations[lang]["pescado4"];
  }
  if (pescado5) {
    pescado5.textContent = translations[lang]["pescado5"];
  }
  if (pescado6) {
    pescado6.textContent = translations[lang]["pescado6"];
  }

  if (carne1) {
    carne1.textContent = translations[lang]["carne1"];
  }
  if (carne2) {
    carne2.textContent = translations[lang]["carne2"];
  }
  if (carne3) {
    carne3.textContent = translations[lang]["carne3"];
  }

  if (guarnicion1) {
    guarnicion1.textContent = translations[lang]["guarnicion1"];
  }
  if (guarnicion2) {
    guarnicion2.textContent = translations[lang]["guarnicion2"];
  }
  if (guarnicion3) {
    guarnicion3.textContent = translations[lang]["guarnicion3"];
  }
  if (guarnicion4) {
    guarnicion4.textContent = translations[lang]["guarnicion4"];
  }
  if (guarnicion5) {
    guarnicion5.textContent = translations[lang]["guarnicion5"];
  }
  if (guarnicion6) {
    guarnicion6.textContent = translations[lang]["guarnicion6"];
  }

  if (bebida1) {
    bebida1.textContent = translations[lang]["bebida1"];
  }
  if (bebida2) {
    bebida2.textContent = translations[lang]["bebida2"];
  }
  if (bebida3) {
    bebida3.textContent = translations[lang]["bebida3"];
  }
  if (bebida4) {
    bebida4.textContent = translations[lang]["bebida4"];
  }
  if (bebida5) {
    bebida5.textContent = translations[lang]["bebida5"];
  }
  if (bebida6) {
    bebida6.textContent = translations[lang]["bebida6"];
  }

  if (postre1) {
    postre1.textContent = translations[lang]["postre1"];
  }
  if (postre2) {
    postre2.textContent = translations[lang]["postre2"];
  }
  if (postre3) {
    postre3.textContent = translations[lang]["postre3"];
  }
  if (postre4) {
    postre4.textContent = translations[lang]["postre4"];
  }
  if (postre5) {
    postre5.textContent = translations[lang]["postre5"];
  }
  if (postre6) {
    postre6.textContent = translations[lang]["postre6"];
  }
  if (postre7) {
    postre7.textContent = translations[lang]["postre7"];
  }
  
  }
}

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


