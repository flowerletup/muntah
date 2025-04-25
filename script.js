document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim().toLowerCase();
  const dob = document.getElementById('dob').value; // hasilnya akan: "2006-04-25"

  if (name === 'lola apita' && dob === '2006-04-25') {
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('main-container').style.display = 'block';

      showSlides();  // Pastikan ini dipanggil untuk memulai slideshow

  } else {
      alert("Nama atau tanggal lahir salah!");
  }
});


let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    // Sembunyikan semua slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Jika slideIndex melebihi jumlah gambar, reset ke 1

    // Reset semua dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Tampilkan slide saat ini
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].classList.add("active"); // Tandai dot aktif

    // Ulangi setiap 3 detik
    setTimeout(showSlides, 3000); 
}



function showSurprise() {
  const surprise = document.getElementById('surprise-text');
  surprise.classList.remove('hidden');
  surprise.classList.add('surprise-box');
  setTimeout(() => {
      surprise.classList.add('hidden');
  }, 5000);
}

function showQuotes() {
  const quotes = document.getElementById('quotes-text');
  quotes.classList.remove('hidden');
  setTimeout(() => {
      quotes.classList.add('hidden');
  }, 6000);
}

function showMemories() {
  const popup = document.getElementById('memories-popup');
  popup.classList.remove('hidden');
}

function closeMemories() {
  const popup = document.getElementById('memories-popup');
  popup.classList.add('hidden');
}

function playMusic() {
  const music = document.getElementById('background-music');
  const btn = document.querySelector('button[onclick="playMusic()"]');

  if (music.paused) {
      music.play();
      btn.textContent = '⏸️ Pause Musik';
  } else {
      music.pause();
      btn.textContent = '🎶 Putar Musik';
  }
}

let isPartyTheme = false; // Status untuk tema party

function changeThemeAndMusic() {
    const body = document.body;
    const music = document.getElementById('background-music');
    const surpriseBox = document.getElementById('surprise-text');
    
    // Toggle theme dan lagu
    if (isPartyTheme) {
        // Kembali ke tema dan lagu awal
        body.classList.remove('party-theme');
        music.src = 'assets/A Thousand Years.mp3'; // Ganti ke lagu awal
        music.play();
        surpriseBox.textContent = "🎉 Temanya kembali ke yang semula! 🎶";
    } else {
        // Ganti ke tema dan lagu party
        body.classList.add('party-theme');
        music.src = 'assets/Jamrud.mp3'; // Ganti ke lagu party yang berbeda
        music.play();
        surpriseBox.textContent = "🎉 Selamat datang di party mode! 🕺";
    }

    // Tampilkan surprise dan hide setelah 5 detik
    surpriseBox.classList.remove('hidden');
    setTimeout(() => {
        surpriseBox.classList.add('hidden');
    }, 5000);

    isPartyTheme = !isPartyTheme; // Toggle status tema
}

let isDiscoParty = false; // Status tema party disco

function changeToDiscoParty() {
    const body = document.body;
    const music = document.getElementById('background-music');
    const surpriseBox = document.getElementById('surprise-text');
    
    if (isDiscoParty) {
        // Kembalikan ke tema dan musik semula
        body.classList.remove('party-theme');
        body.classList.remove('disco-background'); // Hentikan efek disco
        music.src = 'assets/A Thousand Years.mp3'; // Ganti ke lagu awal
        music.play();
        surpriseBox.textContent = "🎉 Temanya kembali ke yang semula! 🎶";
    } else {
        // Aktifkan tema party disco
        body.classList.add('party-theme');
        body.classList.add('disco-background'); // Tambahkan animasi disco untuk background
        music.src = 'assets/Yummy 2.mp3'; // Ganti dengan lagu party yang diinginkan
        music.play();
        surpriseBox.textContent = "🎉 Selamat datang di Party Disco! 🕺";
    }

    // Tampilkan pesan kejutan party
    surpriseBox.classList.remove('hidden');
    
    // Sembunyikan surprise setelah 5 detik
    setTimeout(() => {
        surpriseBox.classList.add('hidden');
    }, 5000);

    // Toggle status tema party
    isDiscoParty = !isDiscoParty;
}
