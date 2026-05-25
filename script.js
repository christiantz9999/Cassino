const casinos = [
  { nome: 'Plataforma Prime', nota: '9.8', bonus: 'Bônus de boas-vindas + Pix rápido', tags: ['Pix', 'Ao vivo', 'Mobile'], link: 'https://seudominio.com.br/oferta-1' },
  { nome: 'Casino Royal BR', nota: '9.6', bonus: 'Slots, roleta e atendimento em português', tags: ['Slots', 'Roleta', 'Suporte BR'], link: 'https://seudominio.com.br/oferta-2' },
  { nome: 'Bet Esportes Pro', nota: '9.4', bonus: 'Apostas esportivas, cashout e odds competitivas', tags: ['Futebol', 'Cashout', 'Esportes'], link: 'https://seudominio.com.br/oferta-3' },
  { nome: 'Live Games Club', nota: '9.2', bonus: 'Jogos ao vivo com dealers e mesas variadas', tags: ['Live', 'Blackjack', 'Bônus'], link: 'https://seudominio.com.br/oferta-4' },
  { nome: 'Pix Win Brasil', nota: '9.0', bonus: 'Foco em depósitos e saques por Pix', tags: ['Pix', 'Rápido', 'Seguro'], link: 'https://seudominio.com.br/oferta-5' },
  { nome: 'Arena Bet', nota: '8.9', bonus: 'Boa opção para iniciantes e uso no celular', tags: ['Iniciante', 'Mobile', 'FAQ'], link: 'https://seudominio.com.br/oferta-6' }
];

const grid = document.getElementById('casinoGrid');
if (grid) {
  grid.innerHTML = casinos.map((item, index) => `
    <article class="casino-card">
      <div class="rank"><span class="position">${index + 1}</span><span class="rating">★ ${item.nota}</span></div>
      <h3>${item.nome}</h3>
      <p>${item.bonus}</p>
      <div class="tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <a class="btn btn-primary" href="${item.link}" target="_blank" rel="nofollow noopener">Acessar oferta</a>
    </article>
  `).join('');
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));

const ageModal = document.getElementById('ageModal');
const confirmAge = document.getElementById('confirmAge');
if (localStorage.getItem('idadeConfirmada') === 'sim') ageModal?.classList.add('hide');
confirmAge?.addEventListener('click', () => {
  localStorage.setItem('idadeConfirmada', 'sim');
  ageModal.classList.add('hide');
});

document.querySelectorAll('.accordion button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const span = button.querySelector('span');
    content.classList.toggle('open');
    span.textContent = content.classList.contains('open') ? '−' : '+';
  });
});
