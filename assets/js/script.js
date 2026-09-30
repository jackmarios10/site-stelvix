'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const video = document.getElementById("stelvixVideo");
const button = document.getElementById("playButton");

button.addEventListener("click", function () {

  if (video.paused) {
    video.play();
    button.style.display = "none";
  } else {
    video.pause();
    button.style.display = "block";
  }

});


document.getElementById("whatsapp-form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phoneUser = document.getElementById("phone").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;

let phone = "244923747157"; 

let text = `Olá, recebi uma mensagem do site da STELVIX.%0A%0A` +
`Nome: ${name}%0A` +
`Email: ${email}%0A` +
`Telefone: ${phoneUser}%0A` +
`Assunto: ${subject}%0A%0A` +
`Mensagem: ${message}`;

let url = `https://wa.me/${phone}?text=${text}`;

window.open(url, "_blank");

});




let selectedPrice = 0;
let selectedService = "";

const cards = document.querySelectorAll(".service-card");
const sizeInput = document.getElementById("projectSize");
const levelInput = document.getElementById("projectLevel");
const priceDisplay = document.getElementById("budgetValue");
const whatsappBtn = document.getElementById("sendWhatsapp");

cards.forEach(card => {

card.addEventListener("click", () => {

cards.forEach(c => c.classList.remove("active"));

card.classList.add("active");

selectedPrice = Number(card.dataset.price);
selectedService = card.dataset.name;

calculate();

});

});

sizeInput.addEventListener("input", calculate);
levelInput.addEventListener("change", calculate);

function calculate(){

let size = Number(sizeInput.value);
let level = Number(levelInput.value);

if(!selectedPrice || !size){

priceDisplay.innerHTML = "0 Kz";
return;

}

let total = selectedPrice * size * level;

animateValue(total);

let message =
`Olá, gostaria de solicitar um orçamento.

Serviço: ${selectedService}
Área: ${size} m²
Nível: ${levelInput.options[levelInput.selectedIndex].text}

Estimativa: ${total.toLocaleString()} Kz`;

whatsappBtn.href =
"https://wa.me/244XXXXXXXXX?text="+encodeURIComponent(message);

}

function animateValue(value){

let start = 0;

let interval = setInterval(()=>{

start += Math.ceil(value/40);

if(start >= value){

start = value;
clearInterval(interval);

}

priceDisplay.innerHTML = start.toLocaleString()+" Kz";

},20);

}





const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImage.src = image.src;

});

});

closeBtn.addEventListener("click", () => {

lightbox.style.display = "none";

});


/* =====================================================
   STELVIX — SERVICE DETAIL SYSTEM
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("serviceModal");
  const modalClose = document.getElementById("serviceModalClose");
  const modalOverlay = document.querySelector("[data-close-service]");

  const modalTitle = document.getElementById("serviceModalTitle");
  const modalIntro = document.getElementById("serviceModalIntro");

  const detailTitle = document.getElementById("serviceDetailTitle");
  const detailDescription = document.getElementById("serviceDetailDescription");
  const detailList = document.getElementById("serviceDetailList");

  const benefit = document.getElementById("serviceBenefit");
  const ctaTitle = document.getElementById("serviceCtaTitle");

  const whatsappButton = document.getElementById("serviceWhatsappButton");

  /*
   * =====================================================
   * SERVIÇOS
   * =====================================================
   */

  const services = {

    consultoria: {

      title: "Consultoria & Gestão Empresarial",

      intro:
        "Soluções para empresas que procuram mais organização, controlo e eficiência na gestão.",

      detailTitle:
        "Apoio estratégico para uma gestão empresarial mais estruturada.",

      description:
        "A STELVIX apoia empresas e empreendedores em áreas essenciais da gestão, ajudando a transformar desafios administrativos e financeiros em processos mais organizados.",

      items: [
        "Contabilidade e acompanhamento contabilístico",
        "Fiscalidade e acompanhamento das obrigações fiscais",
        "Assessoria em Recursos Humanos",
        "Auditoria e análise de processos",
        "Assessoria estratégica para empresas",
        "Intermediação Comercial"
      ],

      benefit:
        "Uma gestão mais organizada permite ao empresário acompanhar melhor a realidade do negócio e tomar decisões com mais informação.",

      cta:
        "Fale com a nossa equipa sobre a sua empresa.",

      whatsapp:
        "Olá! Entrei no site da STELVIX e gostaria de saber mais sobre os serviços de Consultoria & Gestão Empresarial. Gostaria de receber mais informações."
    },


    tecnologia: {

      title: "Tecnologia & Segurança",

      intro:
        "Tecnologia e segurança para empresas que precisam de soluções confiáveis e funcionais.",

      detailTitle:
        "Infraestrutura tecnológica preparada para as necessidades do seu negócio.",

      description:
        "A STELVIX disponibiliza soluções tecnológicas e de segurança para diferentes ambientes empresariais, comerciais e institucionais.",

      items: [
        "Instalação e configuração de redes",
        "Sistemas de segurança electrónica",
        "Soluções de videovigilância",
        "Serviços de electrónica",
        "Implementação de softwares",
        "Manutenção e suporte tecnológico"
      ],

      benefit:
        "Uma infraestrutura tecnológica adequada pode melhorar a segurança, a comunicação e a eficiência operacional da empresa.",

      cta:
        "Descreva o que a sua empresa precisa.",

      whatsapp:
        "Olá! Entrei no site da STELVIX e gostaria de saber mais sobre Tecnologia & Segurança. Gostaria de apresentar uma necessidade para receber orientação."
    },


    higiene: {

      title: "Higiene & Gestão Ambiental",

      intro:
        "Soluções profissionais para higiene, limpeza, desinfestação e gestão de resíduos.",

      detailTitle:
        "Ambientes mais seguros, organizados e adequados às necessidades de cada espaço.",

      description:
        "A STELVIX disponibiliza serviços e soluções para empresas, instituições e outros espaços que necessitam de apoio profissional na área de higiene e gestão ambiental.",

      items: [
        "Desinfestação profissional",
        "Limpeza profissional",
        "Fornecimento de produtos de higiene",
        "Recolha de resíduos",
        "Gestão e tratamento de resíduos",
        "Soluções personalizadas para empresas"
      ],

      benefit:
        "Manter os espaços devidamente cuidados contribui para um ambiente mais organizado e adequado às necessidades de colaboradores e clientes.",

      cta:
        "Solicite informações sobre a solução adequada.",

      whatsapp:
        "Olá! Entrei no site da STELVIX e gostaria de saber mais sobre Higiene & Gestão Ambiental. Gostaria de conhecer as soluções disponíveis."
    },


    imobiliario: {

      title: "Imobiliário & Mediação",

      intro:
        "Acompanhamento profissional em oportunidades de compra, venda, arrendamento e mediação imobiliária.",

      detailTitle:
        "Intermediação com acompanhamento em cada etapa da oportunidade.",

      description:
        "A STELVIX atua na intermediação e comercialização de oportunidades imobiliárias, aproximando proprietários e potenciais interessados.",

      items: [
        "Intermediação imobiliária",
        "Mediação de oportunidades",
        "Comercialização de imóveis",
        "Acompanhamento de potenciais compradores",
        "Apresentação de oportunidades",
        "Apoio durante o processo de negociação"
      ],

      benefit:
        "Um processo de mediação estruturado pode facilitar a comunicação entre as partes e proporcionar maior organização durante a negociação.",

      cta:
        "Tem um imóvel ou procura uma oportunidade?",

      whatsapp:
        "Olá! Entrei no site da STELVIX e gostaria de saber mais sobre os serviços de Imobiliário & Mediação. Gostaria de apresentar uma oportunidade/necessidade."
    },


    saude: {

      title: "Saúde & Comércio",

      intro:
        "Soluções comerciais e fornecimento de produtos para diferentes necessidades de consumo.",

      detailTitle:
        "Comércio e fornecimento com foco em disponibilidade e qualidade.",

      description:
        "A STELVIX atua no fornecimento e comercialização de produtos farmacêuticos e bens de consumo, através das suas operações e soluções comerciais.",

      items: [
        "Produtos farmacêuticos",
        "Bens de consumo",
        "Fornecimento a grosso",
        "Fornecimento a retalho",
        "Soluções comerciais",
        "Atendimento às necessidades de diferentes clientes"
      ],

      benefit:
        "Uma cadeia de fornecimento organizada ajuda a garantir maior disponibilidade e continuidade no acesso aos produtos.",

      cta:
        "Entre em contacto para conhecer a nossa oferta.",

      whatsapp:
        "Olá! Entrei no site da STELVIX e gostaria de saber mais sobre Saúde & Comércio. Gostaria de receber informações sobre os produtos e soluções disponíveis."
    },


    construcao: {

      title: "Construção Civil & Acabamentos",

      intro:
        "Execução e soluções de construção, remodelação e acabamentos para diferentes projetos.",

      detailTitle:
        "Do planeamento à execução, soluções pensadas para cada projeto.",

      description:
        "A STELVIX atua em projetos de construção e acabamentos, procurando combinar execução, qualidade técnica e atenção aos detalhes.",

      items: [
        "Execução de obras",
        "Remodelação de espaços",
        "Carpintaria",
        "Acabamentos",
        "Soluções personalizadas",
        "Acompanhamento de projetos"
      ],

      benefit:
        "Um projeto bem executado depende de planeamento, coordenação e atenção aos detalhes em cada etapa.",

      cta:
        "Tem um projeto em mente? Vamos conversar.",

      whatsapp:
        "Olá! Entrei no site da STELVIX e gostaria de saber mais sobre Construção Civil & Acabamentos. Tenho um projeto e gostaria de apresentar os detalhes."
    }

  };


  /*
   * =====================================================
   * ABRIR SERVIÇO
   * =====================================================
   */

  function openService(serviceKey) {

    const service = services[serviceKey];

    if (!service) return;

    modalTitle.textContent = service.title;
    modalIntro.textContent = service.intro;

    detailTitle.textContent = service.detailTitle;
    detailDescription.textContent = service.description;

    benefit.textContent = service.benefit;
    ctaTitle.textContent = service.cta;

    /*
     * LISTA
     */

    detailList.innerHTML = "";

    service.items.forEach(item => {

      const li = document.createElement("li");

      li.textContent = item;

      detailList.appendChild(li);

    });


    /*
     * WHATSAPP
     */

    const phone = "244923747157";

    const whatsappURL =
      `https://wa.me/${phone}?text=${encodeURIComponent(service.whatsapp)}`;

    whatsappButton.href = whatsappURL;


    /*
     * ABRIR MODAL
     */

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

  }


  /*
   * =====================================================
   * FECHAR
   * =====================================================
   */

  function closeService() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

  }


  /*
   * =====================================================
   * TRIGGERS
   * =====================================================
   */

  document.querySelectorAll(".service-trigger").forEach(trigger => {

    trigger.addEventListener("click", () => {

      const serviceKey = trigger.dataset.service;

      openService(serviceKey);

    });

  });


  /*
   * BOTÃO FECHAR
   */

  modalClose.addEventListener("click", closeService);

  modalOverlay.addEventListener("click", closeService);


  /*
   * ESC
   */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape" && modal.classList.contains("active")) {

      closeService();

    }

  });

});





document.addEventListener("DOMContentLoaded", function () {

  "use strict";


  /* ========================================================
     1. PRODUCT DATABASE
     ======================================================== */

  const stelvixProducts = [

    {
      id: "coz-001",
      name: "Pia de Cozinha Multifuncional",
      category: "cozinha",
      categoryLabel: "Cozinha",
      price: 114999,
      badge: "Destaque",
      description:
        "Transforme sua cozinha com a Pia que faz tudo!",
      image:
        "assets/images/item-1.jpeg"
    },

    {
      id: "beb-001",
      name: "Whisky Johnnie Walker Red Label 1L - Original Escocês",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 16999,
      badge: "Popular",
      description:
        "O Clássico que nunca falha!",
      image:
        "assets/images/product-02.jpg"
    },

    {
      id: "beb-002",
      name: "Whisky Johnnie Walker Double Black 1L - Intenso e Defurado",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 18999,
      badge: "",
      description:
        "Para quem gosta de whisky com personalidade!",
      image:
        "assets/images/item-2.jpg"
    },

    {
      id: "beb-003",
      name: "Whisky White Horse 1L - O Clássico Suave e Equilibrado",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 8600,
      badge: "",
      description:
        "O queridinho de Angola!",
      image:
        "assets/images/item-3.jpg"
    },

    {
      id: "beb-004",
      name: "Champanhe J.C. Le Roux - O Brilho das Festas",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 6500,
      badge: "Popular",
      description:
        "O champanhe mais amado para celebrar!",
      image:
        "assets/images/item-8.jpg"
    },
    {
      id: "beb-005",
      name: "Champanhe Moscato Rosé - Doce e Refrescante",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 11500,
      badge: "",
      description:
        "O queridinho das mulheres!",
      image:
        "assets/images/item-9.jpg"
    },
    {
      id: "beb-006",
      name: "Champanhe Don Luciano Moscato - O Branco Doce e Elegante",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 6999,
      badge: "Popular",
      description:
        "Leve, doce e sofisticado!",
      image:
        "assets/images/item-10.jpg"
    },
    {
      id: "beb-007",
      name: "Mabanga - Bebida Tradicional 750ml",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 6600,
      badge: "",
      description:
        "O sabor da nossa terra!",
      image:
        "assets/images/item-11.jpg"
    },
    {
      id: "beb-008",
      name: "Gin Gordon's London Dry Gin - Original 1L",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 8999,
      badge: "Popular",
      description:
        "O Gin mais famoso do mundo!",
      image:
        "assets/images/item-12.jpg"
    },
    {
      id: "beb-009",
      name: "Whiskey Jameson Irish Whiskey 750ml - Tripla Destilação",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 16700,
      badge: "",
      description:
        "O Whiskey suave nº1 do mundo!",
      image:
        "assets/images/item-13.jpg"
    },
    {
      id: "beb-010",
      name: "Vodka Escape Original 750ml - Suave e Premium",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 6999,
      badge: "Popular",
      description:
        "A Vodka que todo mundo quer provar!",
      image:
        "assets/images/item-14.jpg"
    },
    {
      id: "beb-011",
      name: "Martini Rosso Vermouth Original 1L - O Clássico Italiano",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 19999,
      badge: "Sofisticado",
      description:
        "O toque italiano que não pode faltar!",
      image:
        "assets/images/item-15.jpg"
    },
    {
      id: "beb-012",
      name: "Cinzano Rosso Vermouth Italiano 1L - Intenso e Aromático",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 14300,
      badge: "",
      description:
        "O Vermouth dos apreciadores!",
      image:
        "assets/images/item-16.jpg"
    },
    {
      id: "beb-013",
      name: "Whiskey VAT 69 Scotch Blended 750ml - O Clássico Escocês",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 7500,
      badge: "Popular",
      description:
        "O Whiskey do povo!",
      image:
        "assets/images/item-17.jpg"
    },
    {
      id: "beb-014",
      name: "Whisky Chivas Regal 12 Anos 750ml - O Premium Escocês",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 19500,
      badge: "",
      description:
        "O Whiskey dos patrões!",
      image:
        "assets/images/item-18.jpg"
    },
    {
      id: "beb-015",
      name: "Whiskey Ballantine's Finest 750ml - O Original Escocês",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 22999,
      badge: "Sofisticado",
      description:
        "O Whiskey que nunca falha!",
      image:
        "assets/images/item-19.jpg"
    },
    {
      id: "beb-016",
      name: "Licor Best Marula Fruit Cream 750ml - Cremoso e Doce",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 7500,
      badge: "",
      description:
        "O creme que as damas amam!",
      image:
        "assets/images/item-20.jpg"
    },
    {
      id: "beb-017",
      name: "Licor Amarula Cream Original 750ml - A Original de África",
      category: "bebida",
      categoryLabel: "Bebida",
      price: 13999,
      badge: "Popular",
      description:
        "A Rainha dos Licores!",
      image:
        "assets/images/item-21.jpg"
    },

    {
      id: "tec-001",
      name: "Airpods Oraimo - Som Potente e Bateria de Longa Duração",
      category: "tecnologia",
      categoryLabel: "Tecnologia",
      price: 11999,
      badge: "Novo",
      description:
        "Estilo, som e bateria que não te deixam na mão!",
      image:
        "assets/images/item-4.jpg"
    },

    {
      id: "tec-002",
      name: "Fones JBL Air Pro - Som Puro e Graves Potentes",
      category: "tecnologia",
      categoryLabel: "Tecnologia",
      price: 6000,
      badge: "",
      description:
        "A qualidade lendária da JBL agora no seu ouvido!",
      image:
        "assets/images/item-5.jpg"
    },

    {
      id: "tec-003",
      name: "Microfone de Lapela Sem Fio Duplo Profissional - com 2 TX + Cancelamento de Ruído",
      category: "tecnologia",
      categoryLabel: "Tecnologia",
      price: 10000,
      badge: "Oportunidade",
      description:
        "Áudio profissional para seus vídeos e lives!",
      image:
        "assets/images/item-6.jpg"
    },

    {
      id: "tec-004",
      name: "Power Bank Oraimo - Carregamento Rápido",
      category: "tecnologia",
      categoryLabel: "Tecnologia",
      price: 19999,
      badge: "",
      description:
        "Nunca mais fique sem bateria!",
      image:
        "assets/images/item-7.jpg"
    }

  ];


  /* ========================================================
     2. CONFIGURAÇÕES
     ======================================================== */

  const CONFIG = {

    whatsapp:
      "244935262323",

    currency:
      "Kz",

    storageKey:
      "stelvixStoreCart"

  };


  /* ========================================================
     3. STATE
     ======================================================== */

  let state = {

    products:
      stelvixProducts,

    category:
      "all",

    search:
      "",

    sort:
      "featured",

    cart:
      loadCart(),

    detailProduct:
      null,

    detailQuantity:
      1,

    checkoutStep:
      1

  };


  /* ========================================================
     4. ELEMENTS
     ======================================================== */

  const elements = {

    grid:
      document.getElementById("stelvixProductGrid"),

    search:
      document.getElementById("stelvixProductSearch"),

    clearSearch:
      document.getElementById("stelvixClearSearch"),

    categories:
      document.getElementById("stelvixCategories"),

    sort:
      document.getElementById("stelvixSortProducts"),

    results:
      document.getElementById("stelvixResultsText"),

    empty:
      document.getElementById("stelvixEmptyState"),

    reset:
      document.getElementById("stelvixResetStore"),

    cartCount:
      document.getElementById("stelvixCartCount"),

    cartLayer:
      document.getElementById("stelvixCartLayer"),

    cartOverlay:
      document.getElementById("stelvixCartOverlay"),

    openCart:
      document.getElementById("stelvixOpenCart"),

    closeCart:
      document.getElementById("stelvixCloseCart"),

    cartItems:
      document.getElementById("stelvixCartItems"),

    cartEmpty:
      document.getElementById("stelvixCartEmpty"),

    cartFooter:
      document.getElementById("stelvixCartFooter"),

    cartSubtotal:
      document.getElementById("stelvixCartSubtotal"),

    continueShopping:
      document.getElementById("stelvixContinueShopping"),

    checkoutButton:
      document.getElementById("stelvixCheckoutButton"),

    productModal:
      document.getElementById("stelvixProductModal"),

    detailImage:
      document.getElementById("stelvixDetailImage"),

    detailBadge:
      document.getElementById("stelvixDetailBadge"),

    detailCategory:
      document.getElementById("stelvixDetailCategory"),

    detailName:
      document.getElementById("stelvixDetailName"),

    detailDescription:
      document.getElementById("stelvixDetailDescription"),

    detailPrice:
      document.getElementById("stelvixDetailPrice"),

    detailMinus:
      document.getElementById("stelvixDetailMinus"),

    detailPlus:
      document.getElementById("stelvixDetailPlus"),

    detailQuantity:
      document.getElementById("stelvixDetailQuantity"),

    addDetailCart:
      document.getElementById("stelvixAddDetailCart"),

    checkoutModal:
      document.getElementById("stelvixCheckoutModal"),

    checkoutItems:
      document.getElementById("stelvixCheckoutItems"),

    checkoutSubtotal:
      document.getElementById("stelvixCheckoutSubtotal"),

    checkoutTotal:
      document.getElementById("stelvixCheckoutTotal"),

    success:
      document.getElementById("stelvixOrderSuccess"),

    orderNumber:
      document.getElementById("stelvixOrderNumber"),

    closeSuccess:
      document.getElementById("stelvixCloseSuccess")

  };


  /* ========================================================
     5. HELPERS
     ======================================================== */

  function formatPrice(value) {

    return new Intl.NumberFormat(
      "pt-PT"
    ).format(value) + " " + CONFIG.currency;

  }


  function loadCart() {

    try {

      const saved =
        localStorage.getItem(CONFIG.storageKey);

      if (!saved) {
        return [];
      }

      const parsed =
        JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch (error) {

      console.warn(
        "STELVIX STORE: não foi possível carregar o carrinho.",
        error
      );

      return [];

    }

  }


  function saveCart() {

    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(state.cart)
    );

  }


  function getProduct(productId) {

    return state.products.find(
      product => product.id === productId
    );

  }


  function getCartQuantity() {

    return state.cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  }


  function getCartSubtotal() {

    return state.cart.reduce(

      (total, item) => {

        const product =
          getProduct(item.id);

        if (!product) {
          return total;
        }

        return total +
          product.price * item.quantity;

      },

      0

    );

  }


  /* ========================================================
     6. PRODUCT FILTER
     ======================================================== */

  function getVisibleProducts() {

    let products =
      [...state.products];


    if (state.category !== "all") {

      products =
        products.filter(
          product =>
            product.category ===
            state.category
        );

    }


    if (state.search.trim()) {

      const search =
        state.search
          .toLowerCase()
          .trim();

      products =
        products.filter(
          product =>
            product.name
              .toLowerCase()
              .includes(search)

            ||

            product.description
              .toLowerCase()
              .includes(search)

            ||

            product.categoryLabel
              .toLowerCase()
              .includes(search)
        );

    }


    if (state.sort === "price-low") {

      products.sort(
        (a, b) =>
          a.price - b.price
      );

    }


    if (state.sort === "price-high") {

      products.sort(
        (a, b) =>
          b.price - a.price
      );

    }


    if (state.sort === "name") {

      products.sort(
        (a, b) =>
          a.name.localeCompare(
            b.name,
            "pt"
          )
      );

    }


    return products;

  }


  /* ========================================================
     7. RENDER PRODUCTS
     ======================================================== */

  function renderProducts() {

    const products =
      getVisibleProducts();


    elements.grid.innerHTML =
      "";


    if (!products.length) {

      elements.empty.hidden =
        false;

      elements.grid.style.display =
        "none";

    } else {

      elements.empty.hidden =
        true;

      elements.grid.style.display =
        "grid";

    }


    elements.results.textContent =
      products.length === 1
        ? "1 produto encontrado"
        : `${products.length} produtos encontrados`;


    products.forEach(
      product => {

        const card =
          document.createElement("article");

        card.className =
          "store-product-card";


        card.innerHTML = `

          <div class="store-product-image">

            ${
              product.badge
              ?
              `<span class="store-product-badge">
                ${product.badge}
              </span>`
              :
              ""
            }

            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
            >

          </div>


          <div class="store-product-info">

            <span class="store-product-category">
              ${product.categoryLabel}
            </span>

            <h3 class="store-product-name">
              ${product.name}
            </h3>

            <p class="store-product-description">
              ${product.description}
            </p>

            <div class="store-product-bottom">

              <strong class="store-product-price">
                ${formatPrice(product.price)}
              </strong>

              <button
                type="button"
                class="store-product-view"
                data-product-id="${product.id}"
                aria-label="Ver produto"
              >
                →
              </button>

            </div>

          </div>

        `;


        elements.grid.appendChild(card);

      }
    );

  }


  /* ========================================================
     8. OPEN PRODUCT
     ======================================================== */

  function openProduct(productId) {

    const product =
      getProduct(productId);

    if (!product) {
      return;
    }


    state.detailProduct =
      product;

    state.detailQuantity =
      1;


    elements.detailImage.src =
      product.image;

    elements.detailImage.alt =
      product.name;


    elements.detailBadge.textContent =
      product.badge || "";


    elements.detailBadge.style.display =
      product.badge
        ? "inline-flex"
        : "none";


    elements.detailCategory.textContent =
      product.categoryLabel;


    elements.detailName.textContent =
      product.name;


    elements.detailDescription.textContent =
      product.description;


    elements.detailPrice.textContent =
      formatPrice(product.price);


    elements.detailQuantity.textContent =
      state.detailQuantity;


    elements.productModal.classList.add(
      "active"
    );

    elements.productModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeProduct() {

    elements.productModal.classList.remove(
      "active"
    );

    elements.productModal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (
      !elements.cartLayer.classList.contains(
        "active"
      )
      &&
      !elements.checkoutModal.classList.contains(
        "active"
      )
    ) {
      document.body.style.overflow =
        "";
    }

  }


  /* ========================================================
     9. CART
     ======================================================== */

  function addToCart(
    productId,
    quantity = 1
  ) {

    const product =
      getProduct(productId);

    if (!product) {
      return;
    }


    const existing =
      state.cart.find(
        item =>
          item.id === productId
      );


    if (existing) {

      existing.quantity +=
        quantity;

    } else {

      state.cart.push({

        id:
          productId,

        quantity:
          quantity

      });

    }


    saveCart();

    renderCart();

    updateCartCount();

  }


  function updateCartItem(
    productId,
    quantity
  ) {

    const item =
      state.cart.find(
        cartItem =>
          cartItem.id === productId
      );

    if (!item) {
      return;
    }


    if (quantity <= 0) {

      state.cart =
        state.cart.filter(
          cartItem =>
            cartItem.id !== productId
        );

    } else {

      item.quantity =
        quantity;

    }


    saveCart();

    renderCart();

    updateCartCount();

  }


  function removeFromCart(
    productId
  ) {

    state.cart =
      state.cart.filter(
        item =>
          item.id !== productId
      );


    saveCart();

    renderCart();

    updateCartCount();

  }


  function updateCartCount() {

    elements.cartCount.textContent =
      getCartQuantity();

  }


  function renderCart() {

    const hasItems =
      state.cart.length > 0;


    elements.cartItems.innerHTML =
      "";


    elements.cartEmpty.classList.toggle(
      "visible",
      !hasItems
    );


    elements.cartFooter.style.display =
      hasItems
        ? "block"
        : "none";


    state.cart.forEach(
      item => {

        const product =
          getProduct(item.id);

        if (!product) {
          return;
        }


        const row =
          document.createElement("div");

        row.className =
          "store-cart-item";


        row.innerHTML = `

          <div class="store-cart-item-image">

            <img
              src="${product.image}"
              alt="${product.name}"
            >

          </div>


          <div>

            <h4 class="store-cart-item-name">
              ${product.name}
            </h4>

            <div class="store-cart-item-price">
              ${formatPrice(product.price)}
            </div>


            <div class="store-cart-item-controls">

              <button
                type="button"
                data-cart-minus="${product.id}"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                data-cart-plus="${product.id}"
              >
                +
              </button>

              <button
                type="button"
                class="store-cart-remove"
                data-cart-remove="${product.id}"
              >
                ×
              </button>

            </div>

          </div>


          <strong>
            ${formatPrice(
              product.price *
              item.quantity
            )}
          </strong>

        `;


        elements.cartItems.appendChild(
          row
        );

      }
    );


    elements.cartSubtotal.textContent =
      formatPrice(
        getCartSubtotal()
      );

  }


  function openCart() {

    renderCart();

    elements.cartLayer.classList.add(
      "active"
    );

    elements.cartLayer.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeCart() {

    elements.cartLayer.classList.remove(
      "active"
    );

    elements.cartLayer.setAttribute(
      "aria-hidden",
      "true"
    );


    if (
      !elements.productModal.classList.contains(
        "active"
      )
      &&
      !elements.checkoutModal.classList.contains(
        "active"
      )
    ) {

      document.body.style.overflow =
        "";

    }

  }


  /* ========================================================
     10. CHECKOUT
     ======================================================== */

  function openCheckout() {

    if (!state.cart.length) {

      openCart();

      return;

    }


    renderCheckoutSummary();

    state.checkoutStep =
      1;

    updateCheckoutStep();


    elements.checkoutModal.classList.add(
      "active"
    );

    elements.checkoutModal.setAttribute(
      "aria-hidden",
      "false"
    );


    elements.cartLayer.classList.remove(
      "active"
    );


    document.body.style.overflow =
      "hidden";

  }


  function closeCheckout() {

    elements.checkoutModal.classList.remove(
      "active"
    );

    elements.checkoutModal.setAttribute(
      "aria-hidden",
      "true"
    );


    if (
      !elements.success.classList.contains(
        "active"
      )
    ) {

      document.body.style.overflow =
        "";

    }

  }


  function updateCheckoutStep() {

    document
      .querySelectorAll(".checkout-step")
      .forEach(
        step => {

          step.classList.toggle(
            "active",
            Number(
              step.dataset.step
            ) ===
            state.checkoutStep
          );

        }
      );


    document
      .querySelectorAll(
        ".checkout-progress-item"
      )
      .forEach(
        item => {

          const number =
            Number(
              item.dataset.progress
            );

          item.classList.toggle(
            "active",
            number ===
            state.checkoutStep
          );

          item.classList.toggle(
            "completed",
            number <
            state.checkoutStep
          );

        }
      );


    if (
      state.checkoutStep === 4
    ) {

      updateReview();

    }

  }


  function validateStep(step) {

    let valid =
      true;


    if (step === 1) {

      const name =
        document.getElementById(
          "checkoutName"
        );

      const phone =
        document.getElementById(
          "checkoutPhone"
        );


      valid =
        validateField(
          name,
          "Digite o seu nome."
        )
        &&
        validateField(
          phone,
          "Digite o seu telefone ou WhatsApp."
        );

    }


    if (step === 2) {

      const address =
        document.getElementById(
          "checkoutAddress"
        );

      const zone =
        document.getElementById(
          "checkoutZone"
        );


      const addressValid =
        validateField(
          address,
          "Indique o endereço de entrega."
        );


      const zoneValid =
        validateField(
          zone,
          "Selecione a zona de entrega."
        );


      valid =
        addressValid &&
        zoneValid;

    }


    return valid;

  }


  function validateField(
    field,
    message
  ) {

    const wrapper =
      field.closest(
        ".checkout-field"
      );

    const error =
      wrapper.querySelector(
        ".checkout-error"
      );


    if (!field.value.trim()) {

      wrapper.classList.add(
        "invalid"
      );

      error.textContent =
        message;

      return false;

    }


    wrapper.classList.remove(
      "invalid"
    );

    error.textContent =
      "";

    return true;

  }


  function updateReview() {

    const name =
      document.getElementById(
        "checkoutName"
      ).value.trim();

    const phone =
      document.getElementById(
        "checkoutPhone"
      ).value.trim();

    const email =
      document.getElementById(
        "checkoutEmail"
      ).value.trim();

    const address =
      document.getElementById(
        "checkoutAddress"
      ).value.trim();

    const zone =
      document.getElementById(
        "checkoutZone"
      ).value;

    const reference =
      document.getElementById(
        "checkoutReference"
      ).value.trim();

    const payment =
      document.querySelector(
        'input[name="paymentMethod"]:checked'
      );


    document.getElementById(
      "reviewContact"
    ).innerHTML = `

      <strong>${name}</strong><br>

      ${phone}

      ${
        email
          ? `<br>${email}`
          : ""
      }

    `;


    document.getElementById(
      "reviewDelivery"
    ).innerHTML = `

      ${address}<br>
      ${zone}

      ${
        reference
          ? `<br>Referência: ${reference}`
          : ""
      }

    `;


    document.getElementById(
      "reviewPayment"
    ).textContent =
      payment
        ? payment.value
        : "Pagamento na entrega";

  }


  function renderCheckoutSummary() {

    elements.checkoutItems.innerHTML =
      "";


    state.cart.forEach(
      item => {

        const product =
          getProduct(item.id);

        if (!product) {
          return;
        }


        const row =
          document.createElement("div");

        row.className =
          "checkout-summary-item";


        row.innerHTML = `

          <div class="checkout-summary-item-image">

            <img
              src="${product.image}"
              alt="${product.name}"
            >

            <span class="checkout-summary-item-quantity">
              ${item.quantity}
            </span>

          </div>


          <div class="checkout-summary-item-info">

            <strong>
              ${product.name}
            </strong>

            <span>
              ${formatPrice(product.price)}
            </span>

          </div>


          <strong class="checkout-summary-item-price">
            ${formatPrice(
              product.price *
              item.quantity
            )}
          </strong>

        `;


        elements.checkoutItems.appendChild(
          row
        );

      }
    );


    const subtotal =
      getCartSubtotal();


    elements.checkoutSubtotal.textContent =
      formatPrice(subtotal);


    elements.checkoutTotal.textContent =
      formatPrice(subtotal);

  }


  /* ========================================================
     11. ORDER
     ======================================================== */

  function generateOrderNumber() {

    const date =
      new Date();

    const year =
      date.getFullYear();

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");

    const random =
      Math.floor(
        1000 +
        Math.random() * 9000
      );


    return `STX-${year}${month}${day}-${random}`;

  }


  function buildWhatsAppMessage(
    orderNumber
  ) {

    const name =
      document.getElementById(
        "checkoutName"
      ).value.trim();

    const phone =
      document.getElementById(
        "checkoutPhone"
      ).value.trim();

    const email =
      document.getElementById(
        "checkoutEmail"
      ).value.trim();

    const address =
      document.getElementById(
        "checkoutAddress"
      ).value.trim();

    const zone =
      document.getElementById(
        "checkoutZone"
      ).value;

    const reference =
      document.getElementById(
        "checkoutReference"
      ).value.trim();

    const notes =
      document.getElementById(
        "checkoutNotes"
      ).value.trim();

    const payment =
      document.querySelector(
        'input[name="paymentMethod"]:checked'
      );


    let message =

      `*NOVA ENCOMENDA — STELVIX STORE*%0A%0A` +

      `*Nº:* ${orderNumber}%0A%0A` +

      `*CLIENTE*%0A` +

      `Nome: ${name}%0A` +

      `Telefone/WhatsApp: ${phone}%0A` +

      (
        email
          ? `E-mail: ${email}%0A`
          : ""
      ) +

      `%0A*ENTREGA*%0A` +

      `Endereço: ${address}%0A` +

      `Zona: ${zone}%0A` +

      (
        reference
          ? `Referência: ${reference}%0A`
          : ""
      ) +

      (
        notes
          ? `Observações: ${notes}%0A`
          : ""
      ) +

      `%0A*PRODUTOS*%0A`;


    state.cart.forEach(
      item => {

        const product =
          getProduct(item.id);

        if (!product) {
          return;
        }


        message +=

          `• ${product.name} — ` +

          `${item.quantity}x — ` +

          `${formatPrice(
            product.price *
            item.quantity
          )}%0A`;

      }
    );


    message +=

      `%0A*SUBTOTAL:* ` +

      `${formatPrice(
        getCartSubtotal()
      )}%0A` +

      `*ENTREGA:* A confirmar%0A` +

      `*TOTAL:* ` +

      `${formatPrice(
        getCartSubtotal()
      )}%0A%0A` +

      `*PAGAMENTO:* ` +

      `${payment
        ? payment.value
        : "Pagamento na entrega"}`;


    return message;

  }


  function confirmOrder() {

    const step1Valid =
      validateStep(1);

    const step2Valid =
      validateStep(2);


    if (
      !step1Valid ||
      !step2Valid
    ) {

      state.checkoutStep =
        !step1Valid
          ? 1
          : 2;

      updateCheckoutStep();

      return;

    }


    const consent =
      document.getElementById(
        "checkoutConsent"
      );

    const consentError =
      document.getElementById(
        "checkoutConsentError"
      );


    if (!consent.checked) {

      consentError.textContent =
        "Confirme os dados para finalizar a encomenda.";

      return;

    }


    consentError.textContent =
      "";


    const orderNumber =
      generateOrderNumber();


    elements.orderNumber.textContent =
      orderNumber;


    const whatsappMessage =
      buildWhatsAppMessage(
        orderNumber
      );


    /* Guardamos a última encomenda localmente. */

    const orderData = {

      number:
        orderNumber,

      date:
        new Date().toISOString(),

      customer: {

        name:
          document.getElementById(
            "checkoutName"
          ).value.trim(),

        phone:
          document.getElementById(
            "checkoutPhone"
          ).value.trim(),

        email:
          document.getElementById(
            "checkoutEmail"
          ).value.trim()

      },

      delivery: {

        address:
          document.getElementById(
            "checkoutAddress"
          ).value.trim(),

        zone:
          document.getElementById(
            "checkoutZone"
          ).value,

        reference:
          document.getElementById(
            "checkoutReference"
          ).value.trim(),

        notes:
          document.getElementById(
            "checkoutNotes"
          ).value.trim()

      },

      payment:
        document.querySelector(
          'input[name="paymentMethod"]:checked'
        )?.value ||
        "Pagamento na entrega",

      items:
        [...state.cart],

      subtotal:
        getCartSubtotal()

    };


    localStorage.setItem(
      "stelvixLastOrder",
      JSON.stringify(
        orderData
      )
    );


    /*
      IMPORTANTE:

      O número abaixo é o WhatsApp oficial
      confirmado para a STELVIX:

      935 262 323
    */

    const whatsappUrl =
      `https://wa.me/${CONFIG.whatsapp}?text=${whatsappMessage}`;


    /* Limpar carrinho */

    state.cart = [];

    saveCart();

    renderCart();

    updateCartCount();


    /* Fechar checkout */

    closeCheckout();


    /* Mostrar sucesso */

    elements.success.classList.add(
      "active"
    );

    elements.success.setAttribute(
      "aria-hidden",
      "false"
    );


    /*
      Pequeno atraso para permitir
      que o cliente veja a confirmação.
    */

    setTimeout(
      function () {

        window.open(
          whatsappUrl,
          "_blank"
        );

      },
      900
    );

  }


  /* ========================================================
     12. EVENTOS — PRODUTOS
     ======================================================== */

  elements.grid.addEventListener(
    "click",
    function (event) {

      const button =
        event.target.closest(
          "[data-product-id]"
        );

      if (!button) {
        return;
      }


      openProduct(
        button.dataset.productId
      );

    }
  );


  /* ========================================================
     13. EVENTOS — PESQUISA
     ======================================================== */

  elements.search.addEventListener(
    "input",
    function () {

      state.search =
        this.value;

      renderProducts();

    }
  );


  elements.clearSearch.addEventListener(
    "click",
    function () {

      elements.search.value =
        "";

      state.search =
        "";

      renderProducts();

      elements.search.focus();

    }
  );


  /* ========================================================
     14. EVENTOS — CATEGORIAS
     ======================================================== */

  elements.categories.addEventListener(
    "click",
    function (event) {

      const button =
        event.target.closest(
          ".store-category"
        );

      if (!button) {
        return;
      }


      document
        .querySelectorAll(
          ".store-category"
        )
        .forEach(
          category => {

            category.classList.remove(
              "active"
            );

          }
        );


      button.classList.add(
        "active"
      );


      state.category =
        button.dataset.category;


      renderProducts();

    }
  );


  /* ========================================================
     15. EVENTOS — SORT
     ======================================================== */

  elements.sort.addEventListener(
    "change",
    function () {

      state.sort =
        this.value;

      renderProducts();

    }
  );


  elements.reset.addEventListener(
    "click",
    function () {

      state.category =
        "all";

      state.search =
        "";

      state.sort =
        "featured";


      elements.search.value =
        "";

      elements.sort.value =
        "featured";


      document
        .querySelectorAll(
          ".store-category"
        )
        .forEach(
          category => {

            category.classList.toggle(
              "active",
              category.dataset.category ===
              "all"
            );

          }
        );


      renderProducts();

    }
  );


  /* ========================================================
     16. EVENTOS — PRODUCT MODAL
     ======================================================== */

  document.addEventListener(
    "click",
    function (event) {

      if (
        event.target.matches(
          "[data-close-product]"
        )
      ) {

        closeProduct();

      }

    }
  );


  elements.detailMinus.addEventListener(
    "click",
    function () {

      state.detailQuantity =
        Math.max(
          1,
          state.detailQuantity - 1
        );

      elements.detailQuantity.textContent =
        state.detailQuantity;

    }
  );


  elements.detailPlus.addEventListener(
    "click",
    function () {

      state.detailQuantity +=
        1;

      elements.detailQuantity.textContent =
        state.detailQuantity;

    }
  );


  elements.addDetailCart.addEventListener(
    "click",
    function () {

      if (!state.detailProduct) {
        return;
      }


      addToCart(
        state.detailProduct.id,
        state.detailQuantity
      );


      closeProduct();

      openCart();

    }
  );


  /* ========================================================
     17. EVENTOS — CART
     ======================================================== */

  elements.openCart.addEventListener(
    "click",
    openCart
  );


  elements.closeCart.addEventListener(
    "click",
    closeCart
  );


  elements.cartOverlay.addEventListener(
    "click",
    closeCart
  );


  elements.continueShopping.addEventListener(
    "click",
    closeCart
  );


  elements.cartItems.addEventListener(
    "click",
    function (event) {

      const minus =
        event.target.closest(
          "[data-cart-minus]"
        );

      const plus =
        event.target.closest(
          "[data-cart-plus]"
        );

      const remove =
        event.target.closest(
          "[data-cart-remove]"
        );


      if (minus) {

        const id =
          minus.dataset.cartMinus;

        const item =
          state.cart.find(
            cartItem =>
              cartItem.id === id
          );

        if (item) {

          updateCartItem(
            id,
            item.quantity - 1
          );

        }

      }


      if (plus) {

        const id =
          plus.dataset.cartPlus;

        const item =
          state.cart.find(
            cartItem =>
              cartItem.id === id
          );

        if (item) {

          updateCartItem(
            id,
            item.quantity + 1
          );

        }

      }


      if (remove) {

        removeFromCart(
          remove.dataset.cartRemove
        );

      }

    }
  );


  /* ========================================================
     18. EVENTOS — CHECKOUT
     ======================================================== */

  elements.checkoutButton.addEventListener(
    "click",
    openCheckout
  );


  document.addEventListener(
    "click",
    function (event) {

      const next =
        event.target.closest(
          "[data-next-step]"
        );

      const previous =
        event.target.closest(
          "[data-prev-step]"
        );

      const edit =
        event.target.closest(
          "[data-review-edit]"
        );


      if (next) {

        const targetStep =
          Number(
            next.dataset.nextStep
          );


        if (
          state.checkoutStep === 1 &&
          !validateStep(1)
        ) {

          return;

        }


        if (
          state.checkoutStep === 2 &&
          !validateStep(2)
        ) {

          return;

        }


        state.checkoutStep =
          targetStep;

        updateCheckoutStep();

      }


      if (previous) {

        state.checkoutStep =
          Number(
            previous.dataset.prevStep
          );

        updateCheckoutStep();

      }


      if (edit) {

        state.checkoutStep =
          Number(
            edit.dataset.reviewEdit
          );

        updateCheckoutStep();

      }


      if (
        event.target.matches(
          "[data-close-checkout]"
        )
      ) {

        closeCheckout();

      }

    }
  );


  document
    .getElementById(
      "stelvixConfirmOrder"
    )
    .addEventListener(
      "click",
      confirmOrder
    );


  /* ========================================================
     19. PAYMENT SELECTOR
     ======================================================== */

  document
    .querySelectorAll(
      ".payment-option"
    )
    .forEach(
      option => {

        option.addEventListener(
          "click",
          function () {

            document
              .querySelectorAll(
                ".payment-option"
              )
              .forEach(
                item => {

                  item.classList.remove(
                    "selected"
                  );

                }
              );


            this.classList.add(
              "selected"
            );


            const radio =
              this.querySelector(
                "input"
              );

            radio.checked =
              true;

          }
        );

      }
    );


  /* ========================================================
     20. SUCCESS
     ======================================================== */

  elements.closeSuccess.addEventListener(
    "click",
    function () {

      elements.success.classList.remove(
        "active"
      );

      elements.success.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow =
        "";

    }
  );


  /* ========================================================
     21. ESC KEY
     ======================================================== */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key !== "Escape"
      ) {
        return;
      }


      closeProduct();

      closeCart();

      closeCheckout();


      elements.success.classList.remove(
        "active"
      );

      elements.success.setAttribute(
        "aria-hidden",
        "true"
      );


      document.body.style.overflow =
        "";

    }
  );


  /* ========================================================
     22. INITIALIZATION
     ======================================================== */

  renderProducts();

  renderCart();

  updateCartCount();

});




/* ============================================
   STELVIX STORE — OTIMIZAÇÃO DE IMAGENS
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

    const optimizeStoreImages = () => {

        document.querySelectorAll("img").forEach((img) => {

            // Imagens fora da área visível carregam apenas quando necessário
            if (!img.closest(".store-product-detail, .store-modal")) {
                img.loading = "lazy";
            }

            // Permite ao navegador tratar a decodificação da imagem
            // sem bloquear desnecessariamente a interface
            img.decoding = "async";

            // Evita que o navegador tente arrastar a imagem
            img.draggable = false;
        });

    };

    // Executa depois de a Store carregar
    optimizeStoreImages();

    // Como os produtos são criados dinamicamente pelo JavaScript,
    // observa novas imagens adicionadas posteriormente.
    const observer = new MutationObserver(() => {
        optimizeStoreImages();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});
