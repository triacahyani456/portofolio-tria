// --- FITUR GANTI BAHASA (ID / EN) ---
const langToggleBtn = document.getElementById('langToggle');
const langText = document.getElementById('langText');

const translations = {
    id: {
        navHome: "Home",
        navAbout: "Tentang",
        navSkills: "Keahlian",
        navExperience: "Prestasi & Pengalaman",
        navAchievements: "Pengalaman Berharga & Sertifikat",
        navProjects: "Karya",
        navContact: "Kontak",
        
        badge: "Selamat Datang",
        heroTitle: "Halo, Saya ",
        heroSubtitle: "UI/UX Designer • Visual & Brand Communicator • Creative Content Creator • Vocalist & Digital Artist",
        heroDesc: "Berfokus pada perancangan pengalaman antarmuka digital yang intuitif dan estetis, didukung oleh keahlian komunikasi strategis serta kecintaan mendalam pada seni visual dan vokal.",
        btnProjects: "Lihat Karya",
        btnContact: "Hubungi Saya",
        
        aboutTitle: "Tentang Saya",
        skillsTitle: "Keahlian & Kemampuan",
        expTitle: "Prestasi & Pengalaman",
        achTitle: "Pengalaman Berharga & Sertifikat",
        projTitle: "Portofolio Karya",
        contactTitle: "Mari Bekerja Sama",
        
        aboutLead: "Halo! Saya Tria Cahyani,",
        aboutText: "Perpaduan antara estetika visual dan strategi komunikasi adalah fondasi dari setiap karya yang saya ciptakan. Sebagai seorang UI/UX Designer, saya senang mengeksplorasi tata letak, warna, dan interaksi pengguna untuk menciptakan produk digital yang fungsional sekaligus memukau. Di luar dunia desain, kecintaan saya pada seni menggambar dan tarik suara membentuk karakter saya yang ekspresif, detail, dan selalu terbuka untuk mengeksplorasi inovasi baru di industri kreatif.",
        
        skill1Title: "Web Development & Programming",
        skill1Desc: "Menguasai HTML, CSS, JavaScript, dan p5.js untuk membangun aplikasi web interaktif serta sistem fungsional.",
        skill2Title: "UI/UX & Digital Design",
        skill2Desc: "Berpengalaman merancang antarmuka, materi publikasi komersial, poster kompetisi, dan desain kreatif menggunakan Canva, Figma, serta Ibis Paint X.",
        skill3Title: "Public Speaking & Media",
        skill3Desc: "Berpengalaman dalam pengelolaan komunikasi publik, media informasi organisasi, serta advokasi program sosial.",

        contactDesc: "Terbuka untuk peluang kolaborasi proyek digital, kegiatan sosial, maupun kesempatan profesional lainnya.",
        btnEmail: "Kirim Email",
        btnWa: "WhatsApp",

        expData: [
            {
                title: "Divisi Kominfo Duta",
                role: "Pengelola Media & Desainer Visual",
                desc: "Bertanggung jawab dalam pengelolaan publikasi informasi, media sosial, serta pembuatan berbagai materi desain visual menggunakan Canva untuk program kerja Duta."
            },
            {
                title: "Brand Ambassador Duta Digital Indonesia",
                role: "Brand Ambassador",
                desc: "Mengemban peran sebagai Brand Ambassador Duta Digital Indonesia untuk mengkampanyekan literasi digital dan inovasi teknologi."
            },
            {
                title: "Teaching Factory (TEFA) Sekolah",
                role: "UI/UX Designer",
                desc: "Berperan sebagai UI/UX Designer dalam program Teaching Factory sekolah untuk merancang desain antarmuka aplikasi koperasi sekolah serta platform berbasis mobile."
            },
            {
                title: "Freelance Design",
                role: "Commercial Graphic Designer",
                desc: "Menerima proyek berbayar untuk merancang Poster & Komis Art ."
            },
            {
                title: "Duta Aksi Sosial",
                role: "Aktivis Sosial",
                desc: "Terjun langsung ke masyarakat untuk menyuarakan isu sosial, menggalang kepedulian publik, serta menjalankan misi pengabdian."
            },
            {
                title: "Content Creator Academy",
                role: "Siswa Terbaik Tasikmalaya dari XL Smart",
                desc: "Menerima apresiasi sebagai siswa terbaik asal Tasikmalaya dalam program pengembangan kreator konten digital."
            },
            {
                title: "Duta Generasi Remaja Indonesia",
                role: "Kandidat & Advokasi",
                desc: "Menyusun materi dan advokasi mengenai peningkatan rasa percaya diri dan dukungan mental bagi kalangan remaja."
            },
            {
                title: "Duta Pelajar Rabbani",
                role: "Semi-Finalis Kompetisi Vokal di Bandung",
                desc: "Mewakili pelajar dalam ajang kompetisi vokal regional dan berhasil menembus babak semi-final di Bandung."
            },
            {
                title: "Festival Seni Nasional",
                role: "Juara 1 Lomba Menyanyi",
                desc: "Meraih Juara 1 dalam perlombaan vokal tingkat nasional melalui performa vokal yang optimal."
            },
            {
                title: "SRC Agus",
                role: "Developer",
                desc: "Mengembangkan sistem Point of Sale untuk mendukung operasional SRC Agus."
            },
            {
                title: "GenZ Space Platform",
                role: "Inisiator Web Komunitas Sekolah",
                desc: "Membangun platform web untuk siswa SMKN 4 Tasikmalaya yang dilengkapi fitur pelacak suasana hati serta pesan anonim berbasis Firebase."
            },
            {
                title: "Tyayabooth Custom Photo Booth",
                role: "Creator & Frontend Designer",
                desc: "Merancang aplikasi web photo booth interaktif dengan integrasi kamera dan kustomisasi frame bertema khusus."
            },
            {
                title: "Seni Rupa & Sastra Kreatif",
                role: "Desainer Digital & Penulis Novel",
                desc: "Aktif dalam kompetisi desain digital sejak lama serta memiliki karya tulis novel yang telah mendapatkan penghargaan."
            }
        ],

        achData: [
            {
                title: "Semi-Finalis Duta Pelajar Rabbani",
                desc: "Sertifikat pencapaian sebagai semi-finalis dalam ajang kompetisi vokal Duta Pelajar Rabbani."
            },
            {
                title: "Duta Generasi Remaja Indonesia",
                desc: "Sertifikat partisipasi dan apresiasi dalam ajang tantangan Duta Generasi Remaja Indonesia."
            },
            {
                title: "Juara 3 Lomba Poster Kemenkes (Kelompok 3)",
                desc: "Penghargaan Juara 3 dalam lomba poster bertema kesehatan yang diadakan oleh Kemenkes di sekolah secara berkelompok."
            }
        ],

        projData: [
            {
                title: "POS SRC Agus",
                desc: "Sistem Point of Sale (POS) dan manajemen inventaris toko untuk mendukung operasional SRC Agus."
            },
            {
                title: "Tyayabooth Custom Photo Booth",
                desc: "Aplikasi web photo booth interaktif dengan fitur kustomisasi frame dan tangkapan kamera langsung."
            },
            {
                title: "Interactive Game (p5.js)",
                desc: "Pembuatan game interaktif berbasis web menggunakan pustaka p5.js JavaScript."
            },
            {
                title: "Poster Lomba Kesehatan Kemenkes (Canva)",
                desc: "Karya desain poster bertema kesehatan (Juara 3 Kelompok 3) dalam ajang perlombaan yang diadakan Kemenkes di sekolah."
            },
            {
                title: "Desain Poster Futsal (Canva)",
                desc: "Pembuatan proyek poster komersial berbayar untuk publikasi dan kebutuhan sosial media turnamen futsal via Canva."
            },
            {
                title: "Ilustrasi Digital (Ibis Paint X)",
                desc: "Karya seni dan ilustrasi digital kreatif yang dikerjakan menggunakan aplikasi Ibis Paint X."
            }
        ]
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navAchievements: "Certificates",
        navProjects: "Projects",
        navContact: "Contact",
        
        badge: "Welcome",
        heroTitle: "Hello, I'm ",
        heroSubtitle: "UI/UX Designer • Visual & Brand Communicator • Creative Content Creator • Vocalist & Digital Artist",
        heroDesc: "Focused on designing intuitive and aesthetic digital interface experiences, supported by strategic communication skills and a deep passion for visual and vocal arts.",
        btnProjects: "View Projects",
        btnContact: "Contact Me",
        
        aboutTitle: "About Me",
        skillsTitle: "Skills & Expertise",
        expTitle: "Experience & Achievements",
        achTitle: "Valuable Experience & Certificates",
        projTitle: "Portfolio Projects",
        contactTitle: "Let's Work Together",
        
        aboutLead: "Hello! I'm Tria Cahyani,",
        aboutText: "The blend of visual aesthetics and communication strategy is the foundation of every work I create. As a UI/UX Designer, I enjoy exploring layouts, colors, and user interactions to create digital products that are both functional and stunning. Beyond design, my passion for drawing and singing shapes my expressive, detail-oriented character, always open to exploring new innovations in the creative industry.",
        
        skill1Title: "Web Development & Programming",
        skill1Desc: "Proficient in HTML, CSS, JavaScript, and p5.js to build interactive web applications and functional systems.",
        skill2Title: "UI/UX & Digital Design",
        skill2Desc: "Experienced in designing user interfaces, commercial publication materials, competition posters, and creative designs using Canva, Figma, and Ibis Paint X.",
        skill3Title: "Public Speaking & Media",
        skill3Desc: "Experienced in public communication management, organizational information media, and social program advocacy.",

        contactDesc: "Open to digital project collaborations, social activities, and other professional opportunities.",
        btnEmail: "Send Email",
        btnWa: "WhatsApp",

        expData: [
            {
                title: "Ambassador Public Relations Division",
                role: "Media Manager & Visual Designer",
                desc: "Responsible for managing information publications, social media, and creating various visual design materials using Canva for Ambassador work programs."
            },
            {
                title: "Brand Ambassador of Indonesian Digital Ambassadors",
                role: "Brand Ambassador",
                desc: "Serving as a Brand Ambassador for Indonesian Digital Ambassadors to campaign for digital literacy and technological innovation."
            },
            {
                title: "School Teaching Factory (TEFA)",
                role: "UI/UX Designer",
                desc: "Acted as a UI/UX Designer in the school's Teaching Factory program to design interface layouts for school cooperative applications and mobile-based platforms."
            },
            {
                title: "Freelance Design",
                role: "Commercial Graphic Designer",
                desc: "Accepted paid projects to design Posters & Commission Art."
            },
            {
                title: "Social Action Ambassador",
                role: "Social Activist",
                desc: "Engaged directly with the community to voice social issues, raise public awareness, and carry out community service missions."
            },
            {
                title: "Content Creator Academy",
                role: "Best Student of Tasikmalaya from XL Smart",
                desc: "Received appreciation as the best student from Tasikmalaya in the digital content creator development program."
            },
            {
                title: "Indonesian Teenage Generation Ambassador",
                role: "Candidate & Advocacy",
                desc: "Compiled materials and advocacy regarding boosting self-confidence and mental support for teenagers."
            },
            {
                title: "Rabbani Student Ambassador",
                role: "Semi-Finalis Vocal Competition in Bandung",
                desc: "Represented students in a regional vocal competition and successfully advanced to the semi-finals in Bandung."
            },
            {
                title: "National Arts Festival",
                role: "1st Place Singing Competition",
                desc: "Won 1st Place in a national vocal competition through an optimal vocal performance."
            },
            {
                title: "SRC Agus",
                role: "Developer",
                desc: "Developed a Point of Sale system to support SRC Agus operations."
            },
            {
                title: "GenZ Space Platform",
                role: "School Community Web Initiator",
                desc: "Built a web platform for SMKN 4 Tasikmalaya students equipped with a mood tracker and Firebase-based anonymous messaging features."
            },
            {
                title: "Tyayabooth Custom Photo Booth",
                role: "Creator & Frontend Designer",
                desc: "Designed an interactive web photo booth application with camera integration and custom-themed frame customization."
            },
            {
                title: "Fine Arts & Creative Literature",
                role: "Digital Designer & Novelist",
                desc: "Active in digital design competitions for a long time and has written an award-winning novel."
            }
        ],

        achData: [
            {
                title: "Rabbani Student Ambassador Semi-Finalist",
                desc: "Certificate of achievement as a semi-finalist in the Rabbani Student Ambassador vocal competition."
            },
            {
                title: "Indonesian Teenage Generation Ambassador",
                desc: "Certificate of participation and appreciation in the Indonesian Teenage Generation Ambassador challenge."
            },
            {
                title: "3rd Place Kemenkes Health Poster Competition (Group 3)",
                desc: "3rd Place Award in a health-themed poster competition held by the Ministry of Health at school as a group."
            }
        ],

        projData: [
            {
                title: "POS SRC Agus",
                desc: "Point of Sale (POS) system and store inventory management to support SRC Agus operations."
            },
            {
                title: "Tyayabooth Custom Photo Booth",
                desc: "Interactive web photo booth application with frame customization features and live camera capture."
            },
            {
                title: "Interactive Game (p5.js)",
                desc: "Creation of web-based interactive games using the JavaScript p5.js library."
            },
            {
                title: "Kemenkes Health Competition Poster (Canva)",
                desc: "Health-themed poster design work (3rd Place Group 3) in a competition held by the Ministry of Health at school."
            },
            {
                title: "Futsal Poster Design (Canva)",
                desc: "Creation of paid commercial poster projects for publication and social media needs of futsal tournaments via Canva."
            },
            {
                title: "Digital Illustration (Ibis Paint X)",
                desc: "Creative digital art and illustrations created using the Ibis Paint X application."
            }
        ]
    }
};

let currentLang = 'id';

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        langText.textContent = currentLang.toUpperCase();
        updateLanguage(currentLang);
    });
}

function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update Navigasi
    const navLinksItems = document.querySelectorAll('.nav-links a');
    if (navLinksItems.length >= 7) {
        navLinksItems[0].textContent = t.navHome;
        navLinksItems[1].textContent = t.navAbout;
        navLinksItems[2].textContent = t.navSkills;
        navLinksItems[3].textContent = t.navExperience;
        navLinksItems[4].textContent = t.navAchievements;
        navLinksItems[5].textContent = t.navProjects;
        navLinksItems[6].textContent = t.navContact;
    }
    
    // Update Hero Section
    const badge = document.querySelector('.hero .badge');
    const heroTitle = document.querySelector('.hero-content h1');
    const subtitle = document.querySelector('.hero .subtitle');
    const description = document.querySelector('.hero .description');
    const btnPrimary = document.querySelector('a.btn-primary[href="#projects"]');
    const btnSecondary = document.querySelector('a.btn-secondary[href="#contact"]');

    if (badge) badge.textContent = t.badge;
    if (heroTitle) heroTitle.innerHTML = `${t.heroTitle}<span class="highlight">Tria Cahyani</span>`;
    if (subtitle) subtitle.textContent = t.heroSubtitle;
    if (description) description.textContent = t.heroDesc;
    if (btnPrimary) btnPrimary.textContent = t.btnProjects;
    if (btnSecondary) btnSecondary.textContent = t.btnContact;
    
    // Update Section Titles
    const aboutTitle = document.querySelector('#about .section-title');
    const skillsTitle = document.querySelector('#skills .section-title');
    const expTitle = document.querySelector('#experience .section-title');
    const achTitle = document.querySelector('#achievements .section-title');
    const projTitle = document.querySelector('#projects .section-title');
    const contactTitle = document.querySelector('#contact .section-title');
    const contactDesc = document.querySelector('.contact-desc');

    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (skillsTitle) skillsTitle.textContent = t.skillsTitle;
    if (expTitle) expTitle.textContent = t.expTitle;
    if (achTitle) achTitle.textContent = t.achTitle;
    if (projTitle) projTitle.textContent = t.projTitle;
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    if (contactDesc) contactDesc.textContent = t.contactDesc;

    // Update About Content
    const aboutLead = document.querySelector('.about-lead');
    const aboutText = document.querySelector('.about-text');
    if (aboutLead) aboutLead.innerHTML = `${t.aboutLead}`;
    if (aboutText) aboutText.textContent = t.aboutText;

    // Update Skills Cards
    const skillCards = document.querySelectorAll('#skills .card');
    if (skillCards.length >= 3) {
        skillCards[0].querySelector('h3').textContent = t.skill1Title;
        skillCards[0].querySelector('p').textContent = t.skill1Desc;
        skillCards[1].querySelector('h3').textContent = t.skill2Title;
        skillCards[1].querySelector('p').textContent = t.skill2Desc;
        skillCards[2].querySelector('h3').textContent = t.skill3Title;
        skillCards[2].querySelector('p').textContent = t.skill3Desc;
    }

    // Update Experience Timeline Cards
    const experienceCards = document.querySelectorAll('#experience .timeline-item');
    experienceCards.forEach((item, index) => {
        if (t.expData && t.expData[index]) {
            const h3 = item.querySelector('h3');
            const role = item.querySelector('.role');
            const paragraphs = item.querySelectorAll('p');
            const desc = item.querySelector('p:not(.role)') || (paragraphs.length > 1 ? paragraphs[1] : paragraphs[0]);
            
            if (h3) h3.textContent = t.expData[index].title;
            if (role) role.textContent = t.expData[index].role;
            if (desc && desc !== role) desc.textContent = t.expData[index].desc;
        }
    });

    // --- Update Achievements / Certificates Section ---
    const achievementCards = document.querySelectorAll('#achievements .card');
    achievementCards.forEach((card, index) => {
        if (t.achData && t.achData[index]) {
            const h3 = card.querySelector('h3');
            const paragraphs = card.querySelectorAll('p');
            const desc = card.querySelector('p:not(.cert-link-text)') || paragraphs[0];
            
            if (h3) h3.textContent = t.achData[index].title;
            if (desc) desc.textContent = t.achData[index].desc;
        }
    });

    // Update Projects Cards
    const projectCards = document.querySelectorAll('#projects .card');
    projectCards.forEach((card, index) => {
        if (t.projData && t.projData[index]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) h3.textContent = t.projData[index].title;
            if (p) p.textContent = t.projData[index].desc;
        }
    });

    // Update Contact Buttons
    const emailBtn = document.querySelector('a.btn-primary[href^="mailto:"]');
    const waBtn = document.querySelector('a.btn-secondary[href^="https://wa.me"]');
    if (emailBtn) emailBtn.textContent = t.btnEmail;
    if (waBtn) waBtn.textContent = t.btnWa;
}


// --- DATA PESAN & FITUR LAINNYA ---
let defaultMessages = [
    {
        name: "Rekan Organisasi & Sosial",
        message: "Dedikasinya sebagai Duta Aksi Sosial benar-benar menginspirasi banyak anak muda di Tasikmalaya!",
        likes: 5,
        adminReply: "Terima kasih banyak atas dukungannya! 🌟 — Tria"
    },
    {
        name: "Teman Sejawat Developer",
        message: "Keren banget portofolionya Tria, interaktif dan desainnya elegan ala web pro!",
        likes: 8,
        adminReply: "Terima kasih! Senang bisa terus belajar coding. 💻 — Tria"
    }
];

function getStoredMessages() {
    const saved = localStorage.getItem('tria_portfolio_messages');
    return saved ? JSON.parse(saved) : defaultMessages;
}

function saveMessages(messages) {
    localStorage.setItem('tria_portfolio_messages', JSON.stringify(messages));
}

function renderMessages() {
    const container = document.getElementById('testimonialsContainer');
    if (!container) return;

    const messages = getStoredMessages();
    container.innerHTML = "";

    if (messages.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Belum ada pesan. Jadilah yang pertama mengirimkan tanggapan!</p>`;
        return;
    }

    messages.forEach((data, index) => {
        container.innerHTML += `
            <div class="card testimonial-card-item">
                <div>
                    <p style="font-style: italic;">“${escapeHtml(data.message)}”</p>
                </div>
                <div>
                    <p class="role" style="margin-top: 15px; color: var(--accent-rose); font-weight: 600;">
                        — ${escapeHtml(data.name)}
                    </p>
                    ${data.adminReply ? `<div class="admin-reply-box"><strong>Balasan Tria:</strong> ${escapeHtml(data.adminReply)}</div>` : ''}
                    <button class="like-btn" onclick="likeMessage(${index})">
                        ❤️ Suka (<span id="like-count-${index}">${data.likes || 0}</span>)
                    </button>
                </div>
            </div>
        `;
    });
}

window.kirimPesanLokal = function() {
    const namaInput = document.getElementById('inputName');
    const pesanInput = document.getElementById('inputMessage');

    const nama = namaInput.value.trim();
    const pesan = pesanInput.value.trim();

    if (!nama || !pesan) {
        alert("Nama dan pesan tidak boleh kosong ya!");
        return;
    }

    const messages = getStoredMessages();
    
    messages.unshift({
        name: nama,
        message: pesan,
        likes: 1,
        adminReply: "Terima kasih pesan positifnya! Senang mendengarnya. ✨ — Tria"
    });

    saveMessages(messages);
    renderMessages();

    alert("Yeay! Pesan berhasil dikirim dan langsung tampil di dinding apresiasi!");
    namaInput.value = '';
    pesanInput.value = '';
}

window.likeMessage = function(index) {
    const messages = getStoredMessages();
    messages[index].likes = (messages[index].likes || 0) + 1;
    saveMessages(messages);
    
    const countSpan = document.getElementById(`like-count-${index}`);
    if (countSpan) {
        countSpan.textContent = messages[index].likes;
    }
}

function escapeHtml(text) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

renderMessages();

const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

document.addEventListener('mousemove', (e) => {
    const character = document.getElementById('cursorCharacter');
    if (!character) return;
    const rect = character.getBoundingClientRect();
    const charX = rect.left + rect.width / 2;
    const charY = rect.top + rect.height / 2;
    const angleX = (e.clientX - charX) / 25;
    const angleY = (e.clientY - charY) / 25;
    character.style.transform = `translate(${angleX}px, ${angleY}px) rotate(${angleX * 0.15}deg)`;

    document.querySelectorAll('.pupil').forEach(pupil => {
        const pX = Math.max(-3.5, Math.min(3.5, (e.clientX - charX) / 35));
        const pY = Math.max(-3.5, Math.min(3.5, (e.clientY - charY) / 35));
        pupil.style.transform = `translate(${pX}px, ${pY}px)`;
    });
});

const chibiContainer = document.getElementById('cursorCharacter');
const chibiBubble = document.getElementById('chibiBubble');
const quotes = ["Halo!", "Ada apa?", "Semangat ya!", "Keren kan?", "Wah, diklik!"];

if (chibiContainer && chibiBubble) {
    chibiContainer.addEventListener('click', () => {
        const mouth = chibiContainer.querySelector('.chibi-mouth');
        if (mouth) {
            mouth.classList.add('open');
            setTimeout(() => mouth.classList.remove('open'), 800);
        }
        chibiContainer.classList.add('bounce-effect');
        setTimeout(() => chibiContainer.classList.remove('bounce-effect'), 300);
        chibiBubble.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    });
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
}
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (themeIcon) themeIcon.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
        }
    });
}

window.openCert = function(imageSrc, title) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    if (modal && modalImg && modalTitle) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        modalTitle.textContent = title;
        document.body.style.overflow = "hidden";
    }
}

window.closeCert = function() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// --- TAMBAHAN: Tombol Back-to-Top otomatis ---
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.innerHTML = '&#8593;';
backToTopBtn.setAttribute('aria-label', 'Back to Top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});