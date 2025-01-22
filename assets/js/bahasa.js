
function changeLanguage(language) {
    const languageDropdown = document.getElementById('languageDropdown');
    const navLinks = document.getElementById('nav-links').children;

    if (language === 'id') {
        languageDropdown.innerHTML = `
                Pilih Bahasa
                <img src="assets/images/navbar/indonesia-flag.png" alt="indonesia flag" width="20" class="ms-2">
            `;
        // Ubah teks navigasi ke Bahasa Indonesia
        navLinks[0].innerText = 'Beranda';
        navLinks[1].innerText = 'AI';
        navLinks[2].innerText = 'Sejarah';
        navLinks[3].innerText = 'Galeri';
        navLinks[4].innerText = 'Bantuan';

        // ubah footer
        document.getElementById('footer-subtitle').innerText =
            'Merupakan Platform Belajar untuk kamu bisa mengenal lebih dalam seputar wayang.';
        document.getElementById('footer-home-title').innerText = 'Home';
        document.getElementById('footer-ai-title').innerText = 'AI';
        document.getElementById('footer-sejarah-title').innerText = 'Sejarah';
        document.getElementById('footer-galery-title').innerText = 'Galeri';
        document.getElementById('footer-bantuan-title').innerText = 'Bantuan';

        // content galery 
        document.getElementById('title-galeri').innerHTML = "Galeri Wayang"
        document.getElementById('hubungi-kami').innerHTML = "Kami menyediakan berbagai wayang dari cerita yang berbeda beda, <br> Yuk Jelajahi Wayang-wayang yang ada di Indonesia!"
        document.getElementById('total-koleksi').innerHTML = "20+ Koleksi Wayang"
        document.getElementById('total-cerita').innerHTML = "10+ Cerita Wayang"
        document.getElementById('total-jenis').innerHTML = "50+ Jenis Wayang"

        // content nama wayang
        document.getElementById('figure-pandawa').innerHTML = "Tokoh Pandawa";
        document.getElementById('figure-kurawa').innerHTML = "Tokoh Kurawa";
        document.getElementById('figure-rahmayana').innerHTML = "Tokoh Cerita Ramayana";
        document.getElementById('figure-punakawan').innerHTML = "Tokoh Punakawan";
        document.getElementById('figure-dewa-dewi').innerHTML = "Tokoh Dewa Dewi";

    } else if (language === 'en') {
        languageDropdown.innerHTML = `
                Select Language
                <img src="assets/images/navbar/english-flag.png" alt="english flag" width="20" class="ms-2">
            `;

        // Ubah teks navigasi ke Bahasa Inggris
        navLinks[0].innerText = 'Home';
        navLinks[1].innerText = 'AI';
        navLinks[2].innerText = 'History';
        navLinks[3].innerText = 'Gallery';
        navLinks[4].innerText = 'Support';

        // ubah footer
        document.getElementById('footer-subtitle').innerText =
            'A learning platform to help you explore more about wayang.';
        document.getElementById('footer-home-title').innerText = 'Home';
        document.getElementById('footer-ai-title').innerText = 'AI';
        document.getElementById('footer-sejarah-title').innerText = 'History';
        document.getElementById('footer-galery-title').innerText = 'Galery';
        document.getElementById('footer-bantuan-title').innerText = 'Support';

        // content gallery 
        document.getElementById('title-galeri').innerHTML = "Wayang Gallery";
        document.getElementById('hubungi-kami').innerHTML = "We offer a variety of wayang from different stories, <br> Come explore the wayang collection in Indonesia!";
        document.getElementById('total-koleksi').innerHTML = "20+ Wayang Collections";
        document.getElementById('total-cerita').innerHTML = "10+ Wayang Stories";
        document.getElementById('total-jenis').innerHTML = "50+ Wayang Types";

        // content nama wayang
        document.getElementById('figure-pandawa').innerHTML = "Figure Pandawa";
        document.getElementById('figure-kurawa').innerHTML = "Figure Kurawa";
        document.getElementById('figure-rahmayana').innerHTML = "Figure Cerita Ramayana";
        document.getElementById('figure-punakawan').innerHTML = "Figure Punakawan";
        document.getElementById('figure-dewa-dewi').innerHTML = "Figure Dewa Dewi";

    }


}


