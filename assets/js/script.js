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
