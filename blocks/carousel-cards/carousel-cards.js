export default function decorate(block) {
  let cards = [...block.children];

  block.classList.add('carousel-cards-track');
  const title = document.createElement('h2');

  const titles = {
    'Super App': 'O Super App da sua vida financeira',
    'Conta Digital': 'Fácil, rápido e gratuito',
    Segurança: 'Segurança pra tudo',
  };
  title.className = 'carousel-cards-title';

  block.parentElement.prepend(title);

  function activateCard(card) {
    cards.forEach((c) => c.classList.remove('active'));

    card.classList.add('active');

    block.prepend(card);

    const tag = card.querySelector('p');

    if (tag) {
      const label = tag.textContent.trim();

      title.textContent = titles[label] || '';
    }

    cards = [...block.children];
  }

  cards.forEach((card) => {
    card.classList.add('carousel-card');

    card.addEventListener('click', () => {
      activateCard(card);
    });
  });

  activateCard(cards[cards.length - 1]);

  const nav = document.createElement('div');

  nav.className = 'carousel-cards-nav';

  nav.innerHTML = `
<button class="prev">‹</button>
<button class="next">›</button>
`;

  block.parentElement.append(nav);

  nav.querySelector('.next').addEventListener('click', () => {
    const first = block.firstElementChild;

    block.append(first);

    activateCard(block.firstElementChild);
  });

  nav.querySelector('.prev').addEventListener('click', () => {
    const last = block.lastElementChild;

    block.prepend(last);

    activateCard(last);
  });
}
