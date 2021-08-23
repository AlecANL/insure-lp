const $iconMenu = document.getElementById('icon-menu');
const $nav = document.getElementById('navigation');
const $links = $nav.querySelectorAll('li');
function toggleMenu() {
  $nav.classList.toggle('is-active');
}

$links.forEach(link => {
  link.addEventListener('click', () => {
    $nav.classList.remove('is-active');
  });
});

$iconMenu.addEventListener('click', toggleMenu);
