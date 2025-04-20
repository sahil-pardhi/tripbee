  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  const track = document.querySelector('.carousel-track');
  const prevArrow = document.getElementById('prevArrow');
  const nextArrow = document.getElementById('nextArrow');
  
  let currentIndex = 0;
  
  prevArrow.addEventListener('click', () => {
      const items = document.querySelectorAll('.carousel-item');
      const itemWidth = items[0].getBoundingClientRect().width;
  
      currentIndex = Math.max(currentIndex - 1, 0);
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });
  
  nextArrow.addEventListener('click', () => {
      const items = document.querySelectorAll('.carousel-item');
      const itemWidth = items[0].getBoundingClientRect().width;
  
      currentIndex = Math.min(currentIndex + 1, items.length - 1);
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
