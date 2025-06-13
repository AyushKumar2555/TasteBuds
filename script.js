// Smooth scroll for nav links
document.querySelectorAll('a.nav-link, .hero-btn').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reservation modal logic
const modal = document.getElementById('reservation-modal');
const overlay = document.getElementById('modal-overlay');
const openBtn = document.getElementById('reserve-btn');
const closeBtn = document.getElementById('close-modal');
openBtn.onclick = function() {
  modal.classList.add('open');
  overlay.classList.add('open');
  document.getElementById('reservation-form').reset();
  document.getElementById('reservation-success').textContent = '';
  setTimeout(() => { modal.focus(); }, 200);
};
closeBtn.onclick = closeModal;
overlay.onclick = closeModal;
function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}

// Reservation form submission
document.getElementById('reservation-form').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('reservation-success').textContent = "Reservation Received! We'll contact you soon.";
  setTimeout(closeModal, 1700);
};

// Accessibility: close modal on Escape
window.addEventListener('keydown', function(e) {
  if ((modal.classList.contains('open') || overlay.classList.contains('open')) && e.key === 'Escape') {
    closeModal();
  }
});