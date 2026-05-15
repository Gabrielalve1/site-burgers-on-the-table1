const numeroWhatsApp = "5516993583569";

const mensagens = {
  pedido: "Olá, Burgers On The Table! Vi o site e gostaria de fazer um pedido.",
  cardapio: "Olá, Burgers On The Table! Vi o site e gostaria de ver o cardápio.",
  delivery: "Olá, Burgers On The Table! Vi o site e gostaria de pedir delivery.",
  retirada: "Olá, Burgers On The Table! Vi o site e gostaria de fazer um pedido para retirada.",
  app: "Olá, Burgers On The Table! Vi o site e gostaria de saber como pedir pelo aplicativo.",
  walking: "Olá, Burgers On The Table! Vi o site e gostaria de pedir o The Walking Burger.",
  combo: "Olá, Burgers On The Table! Vi o site e gostaria de pedir um combo com burger e fritas.",
  mesa: "Olá, Burgers On The Table! Vi o site e gostaria de saber sobre atendimento presencial.",
  localizacao: "Olá, Burgers On The Table! Vi o site e gostaria de confirmar a localização."
};

function abrirWhatsApp(item) {
  const mensagem = mensagens[item] || mensagens.pedido;
  const texto = encodeURIComponent(mensagem);
  const link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
  window.open(link, "_blank");
}

document.querySelectorAll(".js-whatsapp").forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.preventDefault();
    abrirWhatsApp(botao.dataset.item || "pedido");
  });
});

const elementosReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

elementosReveal.forEach((el) => observer.observe(el));
