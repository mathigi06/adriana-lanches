/* =========================================================
   ADRIANA LANCHES — interações
   Para editar cardápio e horários, mexa só em MENU e HOURS.
   ========================================================= */

const IMG = (id, w = 300) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const MENU = {
  burgers: [
    { name: "Clássico da Casa", desc: "Blend 180g, cheddar inglês, alface, tomate, cebola roxa e molho da casa.", price: 34.9, img: "1568901346375-23c9450c58cd", tags: "⭐" },
    { name: "X-Tudo", desc: "Hambúrguer, presunto, queijo, ovo, bacon, calabresa, milho, alface e tomate.", price: 36.9, img: "1550547660-d9450f859349", tags: "⭐" },
    { name: "Bacon Lovers", desc: "Blend 180g, cheddar, bacon defumado crocante, cebola caramelizada e barbecue.", price: 39.9, img: "1553979459-d2229ba7433b" },
    { name: "Duplo da Adriana", desc: "2x blend 180g, duplo cheddar, picles e maionese de alho.", price: 46.9, img: "1586190848861-99aa4a171e90", tags: "⭐" },
    { name: "Diablo", desc: "Blend 180g, pepper jack, jalapeño, onion rings e maionese de chipotle.", price: 41.9, img: "1607013251379-e6eecfffe234", tags: "🌶️" },
    { name: "Gorgonzola", desc: "Blend 180g, gorgonzola cremoso, rúcula e geleia de pimenta.", price: 42.9, img: "1572802419224-296b0aeee0d9" },
    { name: "Costela BBQ", desc: "Costela desfiada 12h, queijo prato, coleslaw e barbecue de rapadura.", price: 44.9, img: "1594212699903-ec8a3eca50f5" },
  ],
  smash: [
    { name: "Smash Simples", desc: "1 smash 90g, american cheese, cebola na chapa e molho especial.", price: 22.9, img: "1571091718767-18b5b1457add" },
    { name: "Smash Duplo", desc: "2 smash 90g, duplo american cheese, picles e molho especial.", price: 29.9, img: "1586190848861-99aa4a171e90", tags: "⭐" },
    { name: "Smash Triplo", desc: "3 smash 90g, triplo cheddar e bacon. Só pros fortes.", price: 36.9, img: "1553979459-d2229ba7433b" },
    { name: "Smash Salada", desc: "2 smash 90g, queijo, alface americana, tomate e maionese verde.", price: 31.9, img: "1550547660-d9450f859349" },
  ],
  veggie: [
    { name: "Veggie da Casa", desc: "Blend de grão-de-bico e cogumelos, queijo coalho, rúcula e tomate confit.", price: 34.9, img: "1520072959219-c595dc870360", tags: "🌱" },
    { name: "Falafel Burger", desc: "Falafel crocante, homus, picles de cebola e molho de iogurte.", price: 32.9, img: "1525059696034-4967a8e1dca2", tags: "🌱" },
  ],
  acomp: [
    { name: "Batata Rústica", desc: "Com casca, alecrim e flor de sal. Porção individual.", price: 16.9, img: "1573080496219-bb080dd4f877", tags: "⭐" },
    { name: "Batata Cheddar & Bacon", desc: "Batata frita coberta com cheddar cremoso e bacon.", price: 26.9, img: "1630384060421-cb20d0e0649d" },
    { name: "Onion Rings", desc: "Anéis de cebola empanados na cerveja com molho barbecue.", price: 19.9, img: "1639024471283-03518883512d" },
    { name: "Nuggets da Casa", desc: "8 unidades de frango empanado com molho mostarda e mel.", price: 21.9, img: "1562967914-608f82629710" },
  ],
  bebidas: [
    { name: "Refrigerante Lata", desc: "Coca-Cola, Coca Zero, Guaraná ou Sprite — 350ml.", price: 7.0, img: "1622483767028-3f66f32aef97" },
    { name: "Suco Natural", desc: "Laranja, limão ou maracujá — 500ml.", price: 11.9, img: "1600271886742-f049cd451bba" },
    { name: "Limonada Suíça", desc: "Limão batido com leite condensado e gelo — 500ml.", price: 13.9, img: "1621263764928-df1444c5e859" },
    { name: "Cerveja Artesanal", desc: "IPA ou Pilsen de cervejaria local — 473ml.", price: 18.9, img: "1608270586620-248524c67de9" },
  ],
  doces: [
    { name: "Milkshake", desc: "Chocolate, morango, Ovomaltine ou Nutella — 400ml.", price: 22.9, img: "1572490122747-3968b75cc699", tags: "⭐" },
    { name: "Brownie com Sorvete", desc: "Brownie quentinho, sorvete de creme e calda de chocolate.", price: 19.9, img: "1606313564200-e75d5e30476c" },
  ],
};

// 0 = domingo ... 6 = sábado. null = fechado. Horário "24:30" = 00h30 do dia seguinte.
const HOURS = [
  { day: "Domingo", open: "18:00", close: "23:00" },
  { day: "Segunda", open: null, close: null },
  { day: "Terça", open: "18:00", close: "23:30" },
  { day: "Quarta", open: "18:00", close: "23:30" },
  { day: "Quinta", open: "18:00", close: "23:30" },
  { day: "Sexta", open: "18:00", close: "24:30" },
  { day: "Sábado", open: "18:00", close: "24:30" },
];

const CAT_EMOJI = { burgers: "🍔", smash: "🍔", veggie: "🥗", acomp: "🍟", bebidas: "🥤", doces: "🍨" };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const brl = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/* ---------- Loader ---------- */
window.addEventListener("load", () => setTimeout(() => document.body.classList.add("is-loaded"), reduceMotion ? 0 : 900));
// segurança: libera mesmo se alguma imagem demorar
setTimeout(() => document.body.classList.add("is-loaded"), 3500);

/* ---------- Ano no rodapé ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Menu mobile ---------- */
const burgerBtn = $(".burger-btn");
const mobileMenu = $("#mobile-menu");
function toggleMenu(force) {
  const open = force ?? !mobileMenu.classList.contains("is-open");
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  burgerBtn.setAttribute("aria-expanded", String(open));
  burgerBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.classList.toggle("is-locked", open);
}
burgerBtn.addEventListener("click", () => toggleMenu());
$$("a", mobileMenu).forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && toggleMenu(false));

/* ---------- Reveal on scroll (com escalonamento) ---------- */
const revealIO = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); revealIO.unobserve(e.target); }
  }),
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
function observeReveals(root = document) {
  $$(".reveal:not(.is-in)", root).forEach((el) => {
    const siblings = $$(":scope > .reveal", el.parentElement);
    el.style.setProperty("--d", `${Math.min(siblings.indexOf(el), 6) * 0.08}s`);
    revealIO.observe(el);
  });
}
observeReveals();

/* ---------- Contadores ---------- */
const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || "";
  const dur = reduceMotion ? 0 : 1800, t0 = performance.now();
  const tick = (t) => {
    const p = dur ? Math.min((t - t0) / dur, 1) : 1;
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  countIO.unobserve(el);
}), { threshold: 0.6 });
$$("[data-count]").forEach((el) => countIO.observe(el));

/* ---------- Cardápio ---------- */
const list = $("#menu-list");
const tabs = $$(".tab");
const indicator = $(".tabs__indicator");

function dishHTML(d, i, cat) {
  return `
    <article class="dish" style="--i:${i}">
      <div class="dish__img"><img src="${IMG(d.img)}" alt="${d.name}" loading="lazy" data-emoji="${CAT_EMOJI[cat]}"></div>
      <div>
        <h3>${d.name}${d.tags ? ` <small>${d.tags}</small>` : ""}</h3>
        <p>${d.desc}</p>
      </div>
      <span class="dish__price">${brl(d.price)}</span>
    </article>`;
}

function renderMenu(cat, animateOut = true) {
  const draw = () => {
    list.innerHTML = MENU[cat].map((d, i) => dishHTML(d, i, cat)).join("");
    // se alguma foto falhar, mostra um emoji no lugar
    $$("img", list).forEach((img) => img.addEventListener("error", () => {
      img.parentElement.innerHTML = `<span style="display:grid;place-items:center;height:100%;font-size:2rem">${img.dataset.emoji}</span>`;
    }, { once: true }));
  };
  const current = $$(".dish", list);
  if (animateOut && current.length && !reduceMotion) {
    current.forEach((d) => d.classList.add("is-out"));
    setTimeout(draw, 280);
  } else draw();
}

function moveIndicator(tab) {
  indicator.style.width = `${tab.offsetWidth}px`;
  indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
}

tabs.forEach((tab) => tab.addEventListener("click", () => {
  if (tab.classList.contains("is-active")) return;
  tabs.forEach((t) => { t.classList.toggle("is-active", t === tab); t.setAttribute("aria-selected", String(t === tab)); });
  moveIndicator(tab);
  tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  renderMenu(tab.dataset.cat);
}));

renderMenu("burgers", false);
requestAnimationFrame(() => moveIndicator($(".tab.is-active")));
window.addEventListener("resize", () => moveIndicator($(".tab.is-active")));
document.fonts?.ready.then(() => moveIndicator($(".tab.is-active")));

/* ---------- Horários + status aberto/fechado ---------- */
const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
const fmt = (hhmm) => { let [h, m] = hhmm.split(":").map(Number); h %= 24; return `${String(h).padStart(2, "0")}h${m ? String(m).padStart(2, "0") : ""}`; };

function renderHours() {
  const today = new Date().getDay();
  $("#hours").innerHTML = HOURS.map((h, i) => `
    <li class="${i === today ? "is-today" : ""}">
      <span>${h.day}</span>
      <span>${h.open ? `${fmt(h.open)} – ${fmt(h.close)}` : "Fechado"}</span>
    </li>`).join("");
}

function isOpenNow() {
  const now = new Date();
  const d = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const t = HOURS[d];
  if (t.open && mins >= toMin(t.open) && mins < toMin(t.close)) return true;
  // horário que passou da meia-noite no dia anterior
  const y = HOURS[(d + 6) % 7];
  if (y.open && toMin(y.close) > 1440 && mins < toMin(y.close) - 1440) return true;
  return false;
}

function updateStatus() {
  const open = isOpenNow();
  $$("[data-status]").forEach((el) => {
    el.classList.toggle("is-open", open);
    el.classList.toggle("is-closed", !open);
    $("span", el).textContent = open ? "Aberto agora" : "Fechado agora";
  });
}
renderHours();
updateStatus();
setInterval(updateStatus, 60_000);

/* ---------- FAQ com animação suave ---------- */
$$(".faq__list details").forEach((det) => {
  const summary = $("summary", det);
  summary.addEventListener("click", (e) => {
    e.preventDefault();
    if (det.open) {
      det.classList.remove("is-open");
      setTimeout(() => (det.open = false), reduceMotion ? 0 : 450);
    } else {
      det.open = true;
      requestAnimationFrame(() => requestAnimationFrame(() => det.classList.add("is-open")));
    }
  });
});

/* ---------- Link ativo no menu ---------- */
const navLinks = $$(".nav a");
const sectionIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`));
}), { rootMargin: "-45% 0px -50% 0px" });
["sobre", "cardapio", "combos", "loja", "faq"].forEach((id) => sectionIO.observe(document.getElementById(id)));

/* ---------- Efeitos de rolagem (rAF) ---------- */
const header = $(".header");
const progress = $(".progress");
const fab = $(".fab");
const parallaxEls = $$("[data-parallax]");
const story = $(".story");
const storyVisual = $(".story__visual");
const storySteps = $$(".story__steps li");
const gallery = $(".gallery");
const track = $(".gallery__track");

let lastY = window.scrollY;
let ticking = false;
let galleryDistance = 0;

function sizeGallery() {
  if (reduceMotion) return;
  galleryDistance = Math.max(0, track.scrollWidth - window.innerWidth + 40);
  gallery.style.height = `${galleryDistance + window.innerHeight}px`;
}

// progresso 0→1 de uma seção "sticky"
function sectionProgress(el) {
  const r = el.getBoundingClientRect();
  const total = el.offsetHeight - window.innerHeight;
  return Math.min(Math.max(-r.top / total, 0), 1);
}

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;

  progress.style.setProperty("--progress", max > 0 ? y / max : 0);

  header.classList.toggle("is-scrolled", y > 20);
  if (!mobileMenu.classList.contains("is-open")) {
    header.classList.toggle("is-hidden", y > lastY && y > 500);
  }
  fab.classList.toggle("is-visible", y > window.innerHeight * 0.6);
  lastY = y;

  if (!reduceMotion) {
    parallaxEls.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      el.style.translate = `0 ${(r.top + r.height / 2 - window.innerHeight / 2) * -parseFloat(el.dataset.parallax)}px`;
    });

    // Anatomia do burger
    const p = sectionProgress(story);
    storyVisual.style.setProperty("--p", p.toFixed(4));
    const idx = Math.min(storySteps.length - 1, Math.floor(p * storySteps.length));
    storySteps.forEach((li, i) => li.classList.toggle("is-active", i === idx));

    // Galeria horizontal
    const g = sectionProgress(gallery);
    track.style.transform = `translate3d(${-g * galleryDistance}px,0,0)`;
  }
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
window.addEventListener("resize", () => { sizeGallery(); onScroll(); });
window.addEventListener("load", () => { sizeGallery(); onScroll(); });
sizeGallery();
onScroll();
