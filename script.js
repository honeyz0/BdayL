const card = document.querySelector('.birthdayCard');
  const video = document.querySelector('.video');

  card.addEventListener('mouseenter', () => {
    // Começa a tocar quando o mouse entra no cartão
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    // Para de tocar e reinicia quando o mouse sai do cartão
    video.pause();
    video.currentTime = 0;
  });