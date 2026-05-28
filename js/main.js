/* ══════════════════════════════
   PURE AESTHETIC — main.js
══════════════════════════════ */

// ── Translations ────────────────────────────
const translations = {
  sr: {
    nav_toggle: 'Otvori meni',
    nav_about: 'O Meni',
    nav_treatments: 'Tretmani',
    nav_results: 'Rezultati',
    nav_testimonials: 'Utisci',
    nav_contact: 'Kontakt',
    nav_cta: 'Zakaži',

    hero_tag: 'Estetska Medicina · Loznica',
    hero_title: 'Nova era<br><em>lepote</em><br>je stigla.',
    hero_desc: 'Personalizovani tretmani estetske medicine za prirodne i skladne rezultate koji ističu vašu autentičnu lepotu. Hijaluronski fileri, Botox, biorevitalizacija, skin boosteri i savremeni regenerativni tretmani u sigurnom, profesionalnom i luksuznom okruženju.',
    hero_btn_primary: 'Zakaži konsultaciju',
    hero_btn_outline: 'Naši Tretmani',

    strip_consultation: 'Skincare Konsultacija',

    about_tag: 'O Meni',
    about_title: 'Doktor estetske<br><em>medicine</em>',
    about_text1: 'Dobro došli u Pure Aesthetic. Ja sam dr Dragana Ilić, doktor estetske medicine i osnivačica Pure Aesthetic klinike u Loznici. Moja filozofija je da lepota ne treba da menja osobu, već da istakne ono najlepše što već postoji.',
    about_text2: 'U svakom tretmanu negujem individualan, pažljiv i stručan pristup, jer svako lice ima svoju anatomiju, karakter i priču. Cilj je prirodan, svež i negovan izgled, uz rezultat koji odiše merom, elegancijom i samopouzdanjem. U radu koristim isključivo sertifikovane preparate visokog kvaliteta, proverenih proizvođača, uz maksimalnu posvećenost bezbednosti, estetici i dugoročnom zadovoljstvu pacijenata.',
    about_quote: '„Cilj estetike nije da promeni vaše lice, već da probudi osećaj da blistate u svojoj koži."',
    cred1: 'Doktor stomatologije i estetske medicine',
    cred2: 'Sertifikovani i registrovani ECAMS lekar (European College of Aesthetic Medicine & Surgery)',
    cred3: 'Sertifikovani lekar za Jalupro i Profhilo',

    services_tag: 'Tretmani',
    services_title: 'Šta nudimo',
    services_desc: 'Svaki tretman je personalizovan prema vašim potrebama i željama.',

    s1_title: 'Hijaluronski Fileri',
    s1_desc: 'Povećanje i oblikovanje usana, korekcija nosa, volumizacija jagodica i popunjavanje bora — prirodni rezultati koji traju 9–18 mjeseci.',
    s2_title: 'Botox',
    s2_desc: 'Relaksacija mimičnih mišića za glatko čelo i pomlađen izgled. Precizan i bezbolan zahvat s vidljivim efektom već za nekoliko dana.',
    s3_title: 'Jalupro &amp; Profhilo',
    s3_desc: 'Dubinska biorevitalizacija koja stimuliše produkciju kolagena i elastina. Koža postaje blistavija, čvršća i mlađa iznutra.',
    s4_title: 'Mezoterapija',
    s4_desc: 'Kokteli vitamina i aktivnih supstanci direktno u kožu za intenzivnu njegu, hidrataciju i osvežavanje tena tokom cele godine.',
    s5_title: 'Glass Skin',
    s5_desc: 'Kombinacija tretmana za postizanje prozirne, blistave kože — duboka hidratacija, ujednačen ten i zdravi sjaj koji govori sam za sebe.',
    s6_title: 'Konsultacija',
    s6_desc: 'Svaka poseta počinje detaljnom analizom kože i željenih ciljeva. Zajedno određujemo koji tretman je prava opcija za vaše lice.',
    s_link: 'Zakazi →',
    s_prices: 'Cene →',

    clinic_tag: 'Naša Klinika',
    clinic_title: 'Pure Aesthetic — <em>nova era lepote</em>',

    results_tag: 'Rezultati',
    results_title: 'Pre &amp; <em>Posle</em>',
    results_desc: 'Prirodni rezultati koji govore sami za sebe.',
    badge_before: 'Pre',
    badge_after: 'Posle',
    r1_label: 'Hijaluronski Fileri — Usne',
    r2_label: 'Fileri — Jagodice &amp; Volumizacija',
    r3_label: 'Biorevitalizacija — Glass Skin',

    test_tag: 'Utisci',
    test_title: 'Što kažu naše <em>klijentkinje</em>',
    t1_text: 'Dr. Dragana je neverovatna. Bila sam nervozna zbog usana, ali rezultat je toliko prirodan da svi misle da sam se samo "odmorila". Definitivno se vraćam!',
    t1_author: '— Ana M., Loznica',
    t2_text: 'Profesionalna, topla i precizna. Objasnila mi je svaki korak i osigurala da se osećam udobno tokom celog tretmana. Koža mi nikad nije bila bolja.',
    t2_author: '— Milica S., Beograd',
    t3_text: 'Pure Aesthetic klinika je pravo malo blago. Ambijent, usluga i rezultati — sve je na najvišem nivou. Preporučujem svim prijateljicama!',
    t3_author: '— Jovana P., Valjevo',

    contact_tag: 'Kontakt',
    contact_title: 'Zakažite<br>svoju <em>konsultaciju</em>',
    contact_intro: 'Napišite nam i odgovorićemo u najkraćem roku. Prva konsultacija je besplatna.',
    addr_label: 'Adresa',
    hours_label: 'Radno Vrijeme',
    hours_val: 'Pon – Pet: 09:00 – 18:00<br>Subota: po dogovoru',
    phone_label: 'Telefon',

    form_name: 'Ime',
    form_surname: 'Prezime',
    form_contact: 'Telefon ili Email',
    form_treatment: 'Zainteresovani za',
    form_message: 'Poruka',
    form_submit: 'Pošalji Poruku',
    form_note: '* Odgovorićemo u roku od 24 sata.',
    form_success: '✓ Poruka je poslata! Uskoro ćemo vas kontaktirati.',

    ph_name: 'Vaše ime',
    ph_surname: 'Vaše prezime',
    ph_message: 'Napišite nam...',
    opt_select: 'Odaberite tretman...',
    opt_konsultacija: 'Konsultacija',
    opt_other: 'Nešto drugo',

    nav_prices: 'Cenovnik',
    prices_tag: 'Cenovnik',
    prices_title: 'Naše <em>usluge i cene</em>',
    cat_botox: 'Botulinum Toxin',
    cat_fileri: 'Hijaluronski Fileri',
    cat_biorev: 'Biorevitalizacija',
    cat_mezo: 'Mezoterapija',
    cat_kolagen: 'Kolagen Stimulatori',
    cat_prp: 'PRP & Mikronidling',
    cat_poli: 'Polinukleotidi',
    cat_piling: 'Hemijski Piling',

    footer_tagline: 'Nova era lepote je stigla u grad.',
    footer_copy: '© 2026 Pure Aesthetic. Sva prava zadržana.',

    form_sending: 'Slanje...',
    err_general: 'Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte direktno.',
    err_network: 'Greška pri slanju. Proverite internet konekciju.',
  },
  en: {
    nav_toggle: 'Open menu',
    nav_about: 'About',
    nav_treatments: 'Treatments',
    nav_results: 'Results',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    nav_cta: 'Book Appointment',

    hero_tag: 'Aesthetic Medicine · Loznica',
    hero_title: 'A new era<br><em>of beauty</em><br>has arrived.',
    hero_desc: 'Personalized aesthetic medicine treatments for natural and harmonious results that highlight your authentic beauty. Hyaluronic fillers, Botox, biorevitalization, skin boosters and advanced regenerative treatments in a safe, professional and luxurious environment.',
    hero_btn_primary: 'Book Consultation',
    hero_btn_outline: 'Our Treatments',

    strip_consultation: 'Skincare Consultation',

    about_tag: 'About Me',
    about_title: 'Doctor of aesthetic<br><em>medicine</em>',
    about_text1: 'Welcome to Pure Aesthetic. I am Dr Dragana Ilić, doctor of aesthetic medicine and founder of Pure Aesthetic clinic in Loznica. My philosophy is that beauty should not change a person - it should highlight what is already beautiful.',
    about_text2: 'In every treatment I nurture an individual, attentive and expert approach, because every face has its own anatomy, character and story. The goal is a natural, fresh and refined look, with results that radiate elegance and confidence. I use exclusively certified, high-quality products from trusted manufacturers, with full commitment to safety, aesthetics and long-term patient satisfaction.',
    about_quote: '"The goal of aesthetics is not to change your face, but to awaken the feeling that you radiate in your own skin."',
    cred3: 'Certified physician for Jalupro and Profhilo',
    cred1: 'Doctor of dental and aesthetic medicine',
    cred2: 'Specialization: fillers, Botox, regenerative treatments',
    cred4: 'Certified and registered ECAMS doctor (European College of Aesthetic Medicine & Surgery)',
    cred5: 'Owner of Pure Aesthetic clinic, Loznica',

    services_tag: 'Treatments',
    services_title: 'What We Offer',
    services_desc: 'Every treatment is personalized to your needs and wishes.',

    s1_title: 'Hyaluronic Fillers',
    s1_desc: 'Lip augmentation and shaping, nose correction, cheek volumization and wrinkle filling — natural results lasting 9–18 months.',
    s2_title: 'Botox',
    s2_desc: 'Relaxation of facial muscles for a smooth forehead and rejuvenated appearance. Precise and painless procedure with visible effect within days.',
    s3_title: 'Jalupro &amp; Profhilo',
    s3_desc: 'Deep biorevitalization that stimulates collagen and elastin production. Skin becomes more radiant, firmer and younger from within.',
    s4_title: 'Mesotherapy',
    s4_desc: 'Cocktails of vitamins and active substances directly into the skin for intensive care, hydration and complexion refreshment throughout the year.',
    s5_title: 'Glass Skin',
    s5_desc: 'A combination of treatments for achieving translucent, radiant skin — deep hydration, even complexion and healthy glow that speaks for itself.',
    s6_title: 'Consultation',
    s6_desc: 'Every visit begins with a detailed skin analysis and goal setting. Together we determine which treatment is the right option for your face.',
    s_link: 'Book →',
    s_prices: 'Prices →',

    clinic_tag: 'Our Clinic',
    clinic_title: 'Pure Aesthetic — <em>a new era of beauty</em>',

    results_tag: 'Results',
    results_title: 'Before &amp; <em>After</em>',
    results_desc: 'Natural results that speak for themselves.',
    badge_before: 'Before',
    badge_after: 'After',
    r1_label: 'Hyaluronic Fillers — Lips',
    r2_label: 'Fillers — Cheeks &amp; Volumization',
    r3_label: 'Biorevitalization — Glass Skin',

    test_tag: 'Testimonials',
    test_title: 'What our <em>clients say</em>',
    t1_text: 'Dr. Dragana is incredible. I was nervous about my lips, but the result is so natural that everyone thinks I just "got some rest". I will definitely be back!',
    t1_author: '— Ana M., Loznica',
    t2_text: 'Professional, warm and precise. She explained every step and made sure I felt comfortable throughout the treatment. My skin has never been better.',
    t2_author: '— Milica S., Belgrade',
    t3_text: 'Pure Aesthetic clinic is a real hidden gem. The ambiance, service and results — everything is at the highest level. I recommend it to all my friends!',
    t3_author: '— Jovana P., Valjevo',

    contact_tag: 'Contact',
    contact_title: 'Book<br>your <em>consultation</em>',
    contact_intro: "Write to us and we'll respond as soon as possible. First consultation is free.",
    addr_label: 'Address',
    hours_label: 'Working Hours',
    hours_val: 'Mon – Fri: 09:00 – 18:00<br>Saturday: by arrangement',
    phone_label: 'Phone',

    form_name: 'Name',
    form_surname: 'Surname',
    form_contact: 'Phone or Email',
    form_treatment: 'Interested in',
    form_message: 'Message',
    form_submit: 'Send Message',
    form_note: "* We'll respond within 24 hours.",
    form_success: "✓ Message sent! We'll contact you soon.",

    ph_name: 'Your name',
    ph_surname: 'Your surname',
    ph_message: 'Write to us...',
    opt_select: 'Select treatment...',
    opt_konsultacija: 'Consultation',
    opt_other: 'Something else',

    nav_prices: 'Prices',
    prices_tag: 'Price List',
    prices_title: 'Our <em>services & prices</em>',
    cat_botox: 'Botulinum Toxin',
    cat_fileri: 'Hyaluronic Fillers',
    cat_biorev: 'Biorevitalization',
    cat_mezo: 'Mesotherapy',
    cat_kolagen: 'Collagen Stimulators',
    cat_prp: 'PRP & Microneedling',
    cat_poli: 'Polynucleotides',
    cat_piling: 'Chemical Peel',

    footer_tagline: 'A new era of beauty has arrived in town.',
    footer_copy: '© 2026 Pure Aesthetic. All rights reserved.',

    form_sending: 'Sending...',
    err_general: 'An error occurred. Please try again or contact us directly.',
    err_network: 'Send error. Please check your internet connection.',
  }
};

let currentLang = localStorage.getItem('lang') || 'sr';

function applyLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'sr';
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', () => {

  // ── Language switcher ───────────────────────
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);

  // ── Price tabs ─────────────────────────────
  function activatePriceTab(cat) {
    document.querySelectorAll('.price-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.price-list').forEach(l => l.classList.remove('active'));
    const tab = document.querySelector(`.price-tab[data-cat="${cat}"]`);
    const list = document.querySelector(`.price-list[data-cat="${cat}"]`);
    if (tab) tab.classList.add('active');
    if (list) list.classList.add('active');
  }

  document.querySelectorAll('.price-tab').forEach(tab => {
    tab.addEventListener('click', () => activatePriceTab(tab.dataset.cat));
  });

  document.querySelectorAll('.service-price-link[data-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activatePriceTab(link.dataset.tab);
      const target = document.getElementById('cenovnik');
      window.scrollTo({ top: target.offsetTop - navbar.offsetHeight - 20, behavior: 'smooth' });
    });
  });

  // ── Scroll reveal ──────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });

  // ── Navbar scroll effect ───────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ── Mobile nav toggle ──────────────────────
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ── Active nav link on scroll ──────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}`
        ? 'var(--burgundy)'
        : '';
    });
  }, { passive: true });

  // ── Contact form (Web3Forms) ───────────────
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const t = translations[currentLang];
    const originalText = submitBtn.textContent;
    submitBtn.textContent = t.form_sending;
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        form.reset();
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 6000);
      } else {
        alert(t.err_general);
      }
    } catch {
      alert(t.err_network);
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  // ── Smooth anchor scroll (offset for fixed nav) ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight + 20 : 100;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });

});
