/* ===================================== 
Arsya Cake - JavaScript 
Fitur:
1. Smooth scroll navigasi
2. Animasi muncul saat scroll
3. Form pemesanan ke WhatsApp
4. Efek klik pada card produk 
===================================== */

/* =============================
1. SMOOTH SCROLL NAVIGASI 
============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
        const target = document.querySelector(this.getAttribute('href')); 
        if (target) { 
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            }); 
        } 
        }); 
    });

    /* ============================= 
    2. ANIMASI FADE-IN SAAT SCROLL 
    ============================= */

const fadeElements = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver(entries => { 
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            entry.target.classList.add('active'); 
        }
     }); 
    }, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));

/* ============================= 
3. FORM PEMESANAN WHATSAPP 
============================= */

function sendWA() { 
    const nama = document.getElementById('nama')?.value || ''; 
    const pesan = document.getElementById('pesan')?.value || '';

if (nama === '' || pesan === '') { 
    alert('Silakan isi nama dan pesanan terlebih dahulu'); 
    return; 
}

const nomorWA = '6282280932388';  
const text = Halo, saya ${nama}. Saya ingin memesan: ${pesan}; 
const url = https://wa.me/${nomorWA}?text=${encodeURIComponent(text)};

window.open(url, '_blank'); }

/* ============================= 
4. EFEK KLIK PRODUK (OPSIONAL) 
============================= */

const cards = document.querySelectorAll('#produk .card');

cards.forEach(card => { 
    card.addEventListener('click', () => { 
        card.classList.add('clicked'); setTimeout(() => 
            card.classList.remove('clicked'), 300); 
    });
 });