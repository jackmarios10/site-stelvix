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





/* =========================================================
   STELVIX STORE
   MODULE 01 — CATALOG ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PRODUCT DATABASE
  ======================================================= */

  const products = [

    {
      id: 1,
      name: "Água Mineral PURA",
      category: "Mini Mercado",
      price: 500,
      oldPrice: null,
      image: "./assets/images/product-01.jpg",
      description:
        "Água mineral para consumo diário, selecionada para a sua rotina.",
      stock: 25,
      featured: true,
      badge: "Disponível",
      available: true
    },

    {
      id: 2,
      name: "Red Label",
      category: "Mini Mercado",
      price: 7500,
      oldPrice: 9000,
      image: "./assets/images/product-02.jpg",
      description:
        "Produto selecionado pela STELVIX com excelente relação entre qualidade e preço.",
      stock: 8,
      featured: true,
      badge: "Oferta",
      available: true
    },

    {
      id: 3,
      name: "Produto de Higiene",
      category: "Higiene",
      price: 3500,
      oldPrice: null,
      image: "./assets/images/product-03.jpg",
      description:
        "Solução prática para manter a sua casa limpa e organizada.",
      stock: 14,
      featured: true,
      badge: "Popular",
      available: true
    },

    {
      id: 4,
      name: "Kit de Ferramentas",
      category: "Casa",
      price: 12000,
      oldPrice: null,
      image: "./assets/images/product-04.jpg",
      description:
        "Produto funcional para facilitar o seu dia a dia.",
      stock: 5,
      featured: true,
      badge: "Destaque",
      available: true
    },

    {
      id: 5,
      name: "Produto de Farmácia",
      category: "Farmácia",
      price: 4500,
      oldPrice: null,
      image: "./assets/images/product-05.jpg",
      description:
        "Produto disponível através da STELVIX.",
      stock: 20,
      featured: false,
      badge: "",
      available: true
    },

    {
      id: 6,
      name: "Leite Gordo MIMOSA",
      category: "Mini Mercado",
      price: 2500,
      oldPrice: null,
      image: "./assets/images/product-06.png",
      description:
        "Um essencial para as suas compras do dia a dia.",
      stock: 18,
      featured: false,
      badge: "",
      available: true
    },

    {
      id: 7,
      name: "Airpods Pro",
      category: "Eletrónica",
      price: 6000,
      oldPrice: null,
      image: "./assets/images/product-07.jpg",
      description:
        "Tecnologia selecionada para oferecer praticidade e desempenho.",
      stock: 4,
      featured: false,
      badge: "Últimas unidades",
      available: true
    },

    {
      id: 8,
      name: "Produto para o Lar",
      category: "Casa",
      price: 9800,
      oldPrice: 11500,
      image: "./assets/images/product-08.jpg",
      description:
        "Uma solução prática para complementar o seu espaço.",
      stock: 0,
      featured: false,
      badge: "Esgotado",
      available: false
    }

  ];


  /* =======================================================
     STATE
  ======================================================= */

  let currentCategory = "all";
  let currentSearch = "";
  let selectedProduct = null;
  let selectedQuantity = 1;

  let cart =
    JSON.parse(localStorage.getItem("stelvixCart")) || [];


  /* =======================================================
     DOM
  ======================================================= */

  const productsGrid =
    document.getElementById("productsGrid");

  const featuredProducts =
    document.getElementById("featuredProducts");

  const categoriesContainer =
    document.getElementById("storeCategories");

  const searchInput =
    document.getElementById("storeSearch");

  const clearSearch =
    document.getElementById("clearSearch");

  const resultsCount =
    document.getElementById("resultsCount");

  const emptyState =
    document.getElementById("storeEmpty");

  const allProductsSection =
    document.getElementById("allProductsSection");

  const productModal =
    document.getElementById("productModal");

  const productModalImage =
    document.getElementById("productModalImage");

  const productModalTitle =
    document.getElementById("productModalTitle");

  const productModalCategory =
    document.getElementById("productModalCategory");

  const productModalPrice =
    document.getElementById("productModalPrice");

  const productModalOldPrice =
    document.getElementById("productModalOldPrice");

  const productModalDescription =
    document.getElementById("productModalDescription");

  const productModalStock =
    document.getElementById("productModalStock");

  const productModalBadge =
    document.getElementById("productModalBadge");

  const productQuantity =
    document.getElementById("productQuantity");

  const cartDrawer =
    document.getElementById("cartDrawer");

  const cartItems =
    document.getElementById("cartItems");

  const cartEmpty =
    document.getElementById("cartEmpty");

  const cartFooter =
    document.getElementById("cartFooter");

  const cartSubtotal =
    document.getElementById("cartSubtotal");

  const cartCount =
    document.getElementById("cartCount");


  /* =======================================================
     FORMAT MONEY
  ======================================================= */

  function formatKz(value) {

    return new Intl.NumberFormat("pt-AO", {
      maximumFractionDigits: 0
    }).format(value) + " Kz";

  }


  /* =======================================================
     PRODUCT STOCK
  ======================================================= */

  function stockLabel(product) {

    if (!product.available || product.stock <= 0) {

      return `
        <span class="product-stock out">
          Esgotado
        </span>
      `;

    }

    if (product.stock <= 5) {

      return `
        <span class="product-stock low">
          Últimas ${product.stock} unidades
        </span>
      `;

    }

    return `
      <span class="product-stock available">
        Em stock
      </span>
    `;

  }


  /* =======================================================
     PRODUCT CARD
  ======================================================= */

  function productCard(product) {

    const badge =
      product.badge
        ? `
          <span class="product-badge ${product.oldPrice ? "sale" : ""}">
            ${product.badge}
          </span>
        `
        : "";

    const disabled =
      !product.available
        ? "disabled"
        : "";

    return `

      <article
        class="store-product-card"
        data-product-id="${product.id}"
      >

        <div class="product-image-wrapper">

          ${badge}

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='./assets/images/placeholder.jpg'"
          >

          <button
            type="button"
            class="product-quick-view"
            data-quick-view="${product.id}"
            aria-label="Ver ${product.name}"
          >
            <ion-icon name="eye-outline"></ion-icon>
          </button>

        </div>

        <div class="product-content">

          <span class="product-category">
            ${product.category}
          </span>

          <h4 class="product-name">
            ${product.name}
          </h4>

          <p class="product-description">
            ${product.description}
          </p>

          <div class="product-bottom">

            <div class="product-price">

              <strong>
                ${formatKz(product.price)}
              </strong>

              ${
                product.oldPrice
                  ? `
                    <del class="product-old-price">
                      ${formatKz(product.oldPrice)}
                    </del>
                  `
                  : ""
              }

            </div>

            <button
              type="button"
              class="product-card-add"
              data-add-cart="${product.id}"
              ${disabled}
              aria-label="Adicionar ${product.name}"
            >

              <ion-icon
                name="bag-add-outline"
              ></ion-icon>

            </button>

          </div>

          ${stockLabel(product)}

        </div>

      </article>

    `;

  }


  /* =======================================================
     CATEGORIES
  ======================================================= */

  function renderCategories() {

    const categories =
      [...new Set(products.map(product => product.category))];

    categoriesContainer.innerHTML = `

      <button
        type="button"
        class="shop-category active"
        data-category="all"
      >
        Todos
      </button>

      ${
        categories
          .map(category => `
            <button
              type="button"
              class="shop-category"
              data-category="${category}"
            >
              ${category}
            </button>
          `)
          .join("")
      }

    `;

  }


  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  function getFilteredProducts() {

    return products.filter(product => {

      const categoryMatch =
        currentCategory === "all" ||
        product.category === currentCategory;

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(currentSearch.toLowerCase()) ||

        product.category
          .toLowerCase()
          .includes(currentSearch.toLowerCase());

      return categoryMatch && searchMatch;

    });

  }


  /* =======================================================
     RENDER PRODUCTS
  ======================================================= */

  function renderProducts() {

    const filtered =
      getFilteredProducts();

    const featured =
      products.filter(product => product.featured);

    featuredProducts.innerHTML =
      featured
        .map(productCard)
        .join("");

    productsGrid.innerHTML =
      filtered
        .map(productCard)
        .join("");

    resultsCount.textContent =
      `${filtered.length} ${
        filtered.length === 1
          ? "produto"
          : "produtos"
      }`;

    const hasResults =
      filtered.length > 0;

    emptyState.hidden = hasResults;

    allProductsSection.style.display =
      hasResults ? "block" : "none";

  }


  /* =======================================================
     PRODUCT MODAL
  ======================================================= */

  function openProduct(productId) {

    const product =
      products.find(item => item.id === Number(productId));

    if (!product) return;

    selectedProduct = product;

    selectedQuantity = 1;

    productQuantity.textContent = selectedQuantity;

    productModalImage.src = product.image;
    productModalImage.alt = product.name;

    productModalTitle.textContent =
      product.name;

    productModalCategory.textContent =
      product.category;

    productModalPrice.textContent =
      formatKz(product.price);

    productModalDescription.textContent =
      product.description;

    productModalOldPrice.textContent =
      product.oldPrice
        ? formatKz(product.oldPrice)
        : "";

    productModalBadge.textContent =
      product.badge || "";

    productModalBadge.style.display =
      product.badge ? "block" : "none";

    productModalStock.innerHTML =
      stockLabel(product);

    productModal.classList.add("active");

    productModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

  }


  function closeProduct() {

    productModal.classList.remove("active");

    productModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";

    selectedProduct = null;

  }


  /* =======================================================
     ADD TO CART
  ======================================================= */

  function addToCart(productId, quantity = 1) {

    const product =
      products.find(item => item.id === Number(productId));

    if (!product || !product.available) return;

    const existing =
      cart.find(item => item.id === product.id);

    if (existing) {

      existing.quantity += quantity;

      if (existing.quantity > product.stock) {
        existing.quantity = product.stock;
      }

    } else {

      cart.push({
        id: product.id,
        quantity: Math.min(quantity, product.stock)
      });

    }

    saveCart();

    updateCartUI();

    openCart();

  }


  /* =======================================================
     SAVE CART
  ======================================================= */

  function saveCart() {

    localStorage.setItem(
      "stelvixCart",
      JSON.stringify(cart)
    );

  }


  /* =======================================================
     CART DETAILS
  ======================================================= */

  function getCartProducts() {

    return cart
      .map(item => {

        const product =
          products.find(
            product => product.id === item.id
          );

        if (!product) return null;

        return {
          ...product,
          quantity: item.quantity
        };

      })
      .filter(Boolean);

  }


  /* =======================================================
     RENDER CART
  ======================================================= */

  function renderCart() {

    const items =
      getCartProducts();

    if (!items.length) {

      cartItems.innerHTML = "";

      cartEmpty.style.display = "flex";

      cartFooter.style.display = "none";

      return;

    }

    cartEmpty.style.display = "none";

    cartFooter.style.display = "block";

    cartItems.innerHTML =
      items.map(item => `

        <div class="cart-item">

          <div class="cart-item-image">

            <img
              src="${item.image}"
              alt="${item.name}"
              onerror="this.src='./assets/images/placeholder.jpg'"
            >

          </div>

          <div class="cart-item-info">

            <h4>
              ${item.name}
            </h4>

            <span>
              ${formatKz(item.price)}
            </span>

            <div class="cart-item-quantity">

              <button
                type="button"
                data-cart-minus="${item.id}"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                data-cart-plus="${item.id}"
              >
                +
              </button>

            </div>

          </div>

          <div>

            <div class="cart-item-price">
              ${formatKz(item.price * item.quantity)}
            </div>

            <button
              type="button"
              class="cart-item-remove"
              data-cart-remove="${item.id}"
            >
              Remover
            </button>

          </div>

        </div>

      `).join("");

    const subtotal =
      items.reduce(
        (total, item) =>
          total + (item.price * item.quantity),
        0
      );

    cartSubtotal.textContent =
      formatKz(subtotal);

  }


  /* =======================================================
     UPDATE CART UI
  ======================================================= */

  function updateCartUI() {

    const count =
      cart.reduce(
        (total, item) =>
          total + item.quantity,
        0
      );

    cartCount.textContent = count;

    renderCart();

    saveCart();

  }


  /* =======================================================
     OPEN CART
  ======================================================= */

  function openCart() {

    cartDrawer.classList.add("active");

    cartDrawer.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

    updateCartUI();

  }


  /* =======================================================
     CLOSE CART
  ======================================================= */

  function closeCart() {

    cartDrawer.classList.remove("active");

    cartDrawer.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";

  }


  /* =======================================================
     CATEGORY CLICK
  ======================================================= */

  categoriesContainer.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-category]"
        );

      if (!button) return;

      currentCategory =
        button.dataset.category;

      document
        .querySelectorAll(".shop-category")
        .forEach(item =>
          item.classList.remove("active")
        );

      button.classList.add("active");

      renderProducts();

    }
  );


  /* =======================================================
     SEARCH
  ======================================================= */

  searchInput.addEventListener(
    "input",
    () => {

      currentSearch =
        searchInput.value.trim();

      clearSearch.classList.toggle(
        "visible",
        currentSearch.length > 0
      );

      renderProducts();

    }
  );


  clearSearch.addEventListener(
    "click",
    () => {

      searchInput.value = "";

      currentSearch = "";

      clearSearch.classList.remove(
        "visible"
      );

      renderProducts();

      searchInput.focus();

    }
  );


  /* =======================================================
     PRODUCT EVENTS
  ======================================================= */

  document.addEventListener(
    "click",
    event => {

      const quickView =
        event.target.closest(
          "[data-quick-view]"
        );

      if (quickView) {

        openProduct(
          quickView.dataset.quickView
        );

        return;

      }


      const addButton =
        event.target.closest(
          "[data-add-cart]"
        );

      if (addButton) {

        addToCart(
          addButton.dataset.addCart,
          1
        );

      }


      const cartPlus =
        event.target.closest(
          "[data-cart-plus]"
        );

      if (cartPlus) {

        updateCartQuantity(
          Number(cartPlus.dataset.cartPlus),
          1
        );

      }


      const cartMinus =
        event.target.closest(
          "[data-cart-minus]"
        );

      if (cartMinus) {

        updateCartQuantity(
          Number(cartMinus.dataset.cartMinus),
          -1
        );

      }


      const cartRemove =
        event.target.closest(
          "[data-cart-remove]"
        );

      if (cartRemove) {

        removeFromCart(
          Number(cartRemove.dataset.cartRemove)
        );

      }

    }
  );


  /* =======================================================
     QUANTITY MODAL
  ======================================================= */

  document
    .getElementById("increaseQuantity")
    .addEventListener(
      "click",
      () => {

        if (!selectedProduct) return;

        if (
          selectedQuantity <
          selectedProduct.stock
        ) {

          selectedQuantity++;

          productQuantity.textContent =
            selectedQuantity;

        }

      }
    );


  document
    .getElementById("decreaseQuantity")
    .addEventListener(
      "click",
      () => {

        if (selectedQuantity > 1) {

          selectedQuantity--;

          productQuantity.textContent =
            selectedQuantity;

        }

      }
    );


  document
    .getElementById("addToCartButton")
    .addEventListener(
      "click",
      () => {

        if (!selectedProduct) return;

        addToCart(
          selectedProduct.id,
          selectedQuantity
        );

        closeProduct();

      }
    );


  /* =======================================================
     REMOVE CART ITEM
  ======================================================= */

  function removeFromCart(productId) {

    cart =
      cart.filter(
        item => item.id !== productId
      );

    updateCartUI();

  }


  /* =======================================================
     UPDATE CART QUANTITY
  ======================================================= */

  function updateCartQuantity(
    productId,
    change
  ) {

    const cartItem =
      cart.find(
        item => item.id === productId
      );

    const product =
      products.find(
        item => item.id === productId
      );

    if (!cartItem || !product) return;

    cartItem.quantity += change;

    if (cartItem.quantity <= 0) {

      removeFromCart(productId);

      return;

    }

    if (
      cartItem.quantity >
      product.stock
    ) {

      cartItem.quantity =
        product.stock;

    }

    updateCartUI();

  }


  /* =======================================================
     MODAL CLOSE
  ======================================================= */

  document
    .getElementById("closeProductModal")
    .addEventListener(
      "click",
      closeProduct
    );

  document
    .querySelectorAll("[data-close-product]")
    .forEach(element => {

      element.addEventListener(
        "click",
        closeProduct
      );

    });


  /* =======================================================
     CART OPEN/CLOSE
  ======================================================= */

  document
    .getElementById("openCart")
    .addEventListener(
      "click",
      openCart
    );

  document
    .getElementById("closeCart")
    .addEventListener(
      "click",
      closeCart
    );

  document
    .getElementById("cartOverlay")
    .addEventListener(
      "click",
      closeCart
    );

  document
    .getElementById("continueShopping")
    .addEventListener(
      "click",
      closeCart
    );

  document
    .getElementById("continueShoppingBottom")
    .addEventListener(
      "click",
      closeCart
    );


  /* =======================================================
     VIEW ALL
  ======================================================= */

  document
    .getElementById("viewAllProducts")
    .addEventListener(
      "click",
      () => {

        allProductsSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );


  /* =======================================================
     RESET STORE
  ======================================================= */

  document
    .getElementById("resetStore")
    .addEventListener(
      "click",
      () => {

        currentCategory = "all";

        currentSearch = "";

        searchInput.value = "";

        document
          .querySelectorAll(".shop-category")
          .forEach(item =>
            item.classList.remove("active")
          );

        document
          .querySelector(
            '[data-category="all"]'
          )
          .classList.add("active");

        renderProducts();

      }
    );


  /* =======================================================
     CHECKOUT PLACEHOLDER
  ======================================================= */

  document
    .getElementById("checkoutButton")
    .addEventListener(
      "click",
      () => {

        if (!cart.length) return;

        alert(
          "O checkout da STELVIX será ativado no próximo módulo."
        );

      }
    );


  /* =======================================================
     ESC KEY
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") return;

      closeProduct();

      closeCart();

    }
  );


  /* =======================================================
     INITIALIZE
  ======================================================= */

  renderCategories();

  renderProducts();

  updateCartUI();

});
