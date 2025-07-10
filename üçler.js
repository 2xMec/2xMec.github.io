





const slides = document.querySelector('#slideshow ul');
const prev = document.querySelector('.nav.prev');
const next = document.querySelector('.nav.next');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;
const totalSlides = thumbnails.length;
let isTransitioning = false; // Geçişin aktif olup olmadığını kontrol etmek için

function updateSlider() {
    if (isTransitioning) return; // Eğer geçiş aktifse yeni geçişi engelle
    isTransitioning = true; // Geçiş başladığında bu değeri true yapıyoruz
    slides.style.transition = 'transform 0.8s ease'; // Geçiş animasyonunu yavaşlatıyoruz
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Tüm thumbnail'ları gizleyelim
    thumbnails.forEach((thumbnail, index) => {
        if (index !== currentIndex) {
            thumbnail.style.opacity = '0'; // Önceki slide'ı gizleyelim
        } else {
            thumbnail.style.opacity = '1'; // Şu anki slide'ı gösterelim
        }
    });

    // Geçiş tamamlandığında, geçişi tekrar aktif hale getirelim
    setTimeout(() => {
        isTransitioning = false;
    }, 800); // Geçiş süresiyle uyumlu bir zaman
}

prev.addEventListener('click', (e) => {
    e.preventDefault(); // Sayfa kaymasını engelliyoruz
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
});

next.addEventListener('click', (e) => {
    e.preventDefault(); // Sayfa kaymasını engelliyoruz
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlider();
});




document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");

    // Her bir elementi sırayla aktif yap
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("active");
        }, index * 200); // Gecikme süresi (200ms aralıklarla)
    });
});










let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
}, 5000); // 5 saniye

// Otomatik kaydırmayı durdurmak için gezinme butonlarında clearInterval ekleyebilirsiniz:
prev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
    updateSlider();
});

next.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
    
  let currentIndex = 1;
  const totalSlides = 5;

  setInterval(() => {
    currentIndex = currentIndex % totalSlides + 1;
    document.getElementById(`slide${currentIndex}`).checked = true;
  }, 5000);

});

  