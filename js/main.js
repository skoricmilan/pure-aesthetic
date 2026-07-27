/* ══════════════════════════════
   PURE AESTHETIC - main.js
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
    about_text1: 'Dobro došli u Pure Aesthetic.<br>Ja sam dr Dragana Ilić, doktor stomatologije i estetske medicine i osnivačica Pure Aesthetic klinike u Loznici. Moja filozofija je da lepota ne treba da menja osobu, već da istakne ono najlepše što već postoji.',
    about_text2: 'U svakom tretmanu negujem individualan, pažljiv i stručan pristup, jer svako lice ima svoju anatomiju, karakter i priču. Cilj je prirodan, svež i negovan izgled, uz rezultat koji odiše merom, elegancijom i samopouzdanjem. U radu koristim isključivo sertifikovane preparate visokog kvaliteta, proverenih proizvođača, uz maksimalnu posvećenost bezbednosti, estetici i dugoročnom zadovoljstvu pacijenata.',
    about_quote: '„Cilj estetike nije da promeni vaše lice, već da probudi osećaj da blistate u svojoj koži."',
    cred1: 'Doktor stomatologije i estetske medicine',
    cred2: 'Sertifikovani i registrovani ECAMS lekar (European College of Aesthetic Medicine & Surgery)',
    cred3: 'Sertifikovani lekar za Jalupro i Profhilo',

    services_tag: 'Tretmani',
    services_title: 'Šta nudimo',
    services_desc: 'Svaki tretman je personalizovan prema vašim potrebama i željama.',

    s1_title: 'Hijaluronski fileri',
    s1_desc: 'Povećanje i oblikovanje usana, naglašavanje jagodica, ublažavanje bora i osvežavanje kontura lica uz prirodne, elegantne rezultate koji čuvaju harmoniju i mimiku lica. Suptilne promene koje licu vraćaju svežinu, volumen i negovan izgled.',
    s2_title: 'Botox',
    s2_desc: 'Precizna relaksacija mimičnih mišića u regiji čela, između obrva i oko očiju za svež, odmoran i prirodno podmlađen izgled. Ublažava fine linije i bore, osvežava izraz lica i zadržava prirodnu mimiku bez ukočenog efekta.',
    s3_title: 'Biorevitalizacija i skinboosteri',
    s3_desc: 'Tretmani namenjeni dubinskoj hidrataciji, regeneraciji i poboljšanju kvaliteta kože kroz aplikaciju hijaluronske kiseline, peptida i regenerativnih sastojaka direktno u kožu. Svežija, elastičnija i blistavija koža, uz prirodan glow i zdraviji izgled.',
    s4_title: 'Kolagen stimulatori',
    s4_desc: 'Napredni tretmani koji podstiču prirodnu proizvodnju kolagena i poboljšavaju čvrstinu, tonus i kvalitet kože. Koža postaje zategnutija, punija i prirodno podmlađenog izgleda uz postepene i dugotrajne rezultate.',
    s5_title: 'Mezoterapija',
    s5_desc: 'Tretman intenzivne hidratacije i revitalizacije kože kojim se aktivni sastojci apliciraju direktno u kožu kako bi se poboljšao njen kvalitet, tonus i elastičnost.',
    s6_title: 'PRP',
    s6_desc: 'Prirodna regeneracija kože i kose uz pomoć sopstvene krvne plazme bogate faktorima rasta, koja podstiče obnovu tkiva, produkciju kolagena i poboljšava kvalitet kože i kose. Koža postaje svežija, blistavija i revitalizovana, dok kosa dobija na gustini, jačini i kvalitetu.',
    s7_title: 'SkinPen',
    s7_desc: 'Minimalno invazivan microneedling tretman koji stimuliše prirodnu regeneraciju kože i produkciju kolagena za svežiji, blistaviji i ujednačeniji izgled kože. SkinPen poboljšava teksturu kože, ublažava pore, fine linije i ožiljke od akni uz prirodan glow efekat.',
    s8_title: 'Hemijski piling',
    s8_desc: 'Tretman za regeneraciju i obnavljanje kože koji poboljšava teksturu, ujednačava ten i vraća koži svež i blistav izgled. Hemijski piling pomaže kod akni, fleka, proširenih pora i prvih znakova starenja.',
    s9_title: 'Konsultacije',
    s9_desc: 'Prvi korak ka prirodnim i pažljivo odabranim estetskim tretmanima.',
    s_link: 'Zakaži →',
    s_prices: 'Cene →',

    clinic_tag: 'Naša Klinika',
    clinic_title: 'Pure Aesthetic - <em>nova era lepote</em>',

    results_tag: 'Rezultati',
    results_title: 'Pre &amp; <em>Posle</em>',
    results_desc: 'Prirodni rezultati koji govore sami za sebe.',
    badge_before: 'Pre',
    badge_after: 'Posle',
    r1_label: 'Hijaluronski Fileri - Usne',
    r2_label: 'Botoks - Čelo',
    r3_label: 'Fileri - Full face',
    r4_label: 'Brotox',
    r5_label: 'Fileri - Full face',
    r6_label: 'Hijaluronski Fileri - Usne',
    r7_label: 'Botoks - Čeona regija',
    r8_label: 'Botoks - Mrštilje',
    r9_label: 'Botoks - Okoloočna regija',
    results_ig_cta: 'Više rezultata i radova pogledajte na našem <strong>Instagram</strong> profilu',

    test_tag: 'Utisci',
    test_title: 'Šta kažu naše <em>klijentkinje</em>',
    t1_text: 'Prezadovoljna sam radom i pristupom dr Dragane. Strpljiva, nežna i jako prijatna. Nije mi bilo tesko da predjem malo vise km da dodjem do nje, jer je krajnji rezultat odlican: prirodne i lijepe usne.',
    t2_text: 'Dugogodišnji sam klijent dr Dragane i mogu iskreno da kažem da sam prezadovoljna uslugom i rezultatima. Profesionalnost, ljubaznost i posvećenost pacijentu. Ordinacija je moderna, prijatna i sve se radi veoma pažljivo i bez stresa. Svaka preporuka za Pure Aesthetic i dr Draganu Ilić.',
    t3_text: 'Ja sam neko ko se mnogo plasi igala i uvijek sam izbjegavala sve sto ukljucuje injekcije, dok nisam dosla kod dr Dragane. Vec na konsultacijama mi je ulila povjerenje, sve mi je objasnila, na svako moje pitanje odgovorila. Radila sam botoks tri regije i mnogo sam se plasila. Medjutim, dr Dragana ima tako laganu ruku, da nisam ni osjetila bockanje. A rezultati su bili odlicni. Svi su primjetili da sam se podmladila, da izgledam svjezije ali niko nije ni pomislio da sam radila botoks, jer je dr Dragana to tako dobro uradila da sve izgleda prirodno, bez onog ukocenog izraza lica (zbog kojeg sam strahovala). Prezadovoljna sam i toplo preporucujem dr Draganu Ilic.',
    google_review_cta: 'Ostavi svoju recenziju o našim uslugama na <strong>Google</strong>',

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
    about_text1: 'Welcome to Pure Aesthetic. I am Dr Dragana Ilić, doctor of dentistry and aesthetic medicine and founder of Pure Aesthetic clinic in Loznica. My philosophy is that beauty should not change a person - it should highlight what is already beautiful.',
    about_text2: 'In every treatment I nurture an individual, attentive and expert approach, because every face has its own anatomy, character and story. The goal is a natural, fresh and refined look, with results that radiate elegance and confidence. I use exclusively certified, high-quality products from trusted manufacturers, with full commitment to safety, aesthetics and long-term patient satisfaction.',
    about_quote: '"The goal of aesthetics is not to change your face, but to awaken the feeling that you radiate in your own skin."',
    cred1: 'Doctor of dental and aesthetic medicine',
    cred2: 'Certified and registered ECAMS physician (European College of Aesthetic Medicine & Surgery)',
    cred3: 'Certified physician for Jalupro and Profhilo',

    services_tag: 'Treatments',
    services_title: 'What We Offer',
    services_desc: 'Every treatment is personalized to your needs and wishes.',

    s1_title: 'Hyaluronic Fillers',
    s1_desc: 'Lip augmentation and shaping, cheek enhancement, wrinkle reduction and facial contour refreshment with natural, elegant results that preserve harmony and facial expression. Subtle changes that restore freshness, volume and a refined look.',
    s2_title: 'Botox',
    s2_desc: 'Precise relaxation of facial muscles in the forehead, between the brows and around the eyes for a fresh, rested and naturally rejuvenated appearance. Reduces fine lines and wrinkles while preserving natural expression without a frozen effect.',
    s3_title: 'Biorevitalization & Skin Boosters',
    s3_desc: 'Treatments designed for deep hydration, regeneration and skin quality improvement through the application of hyaluronic acid, peptides and regenerative ingredients directly into the skin. Fresher, more elastic and radiant skin with a natural glow.',
    s4_title: 'Collagen Stimulators',
    s4_desc: 'Advanced treatments that stimulate natural collagen production and improve skin firmness, tone and quality. Skin becomes tighter, fuller and naturally rejuvenated with gradual and long-lasting results.',
    s5_title: 'Mesotherapy',
    s5_desc: 'An intensive hydration and revitalization treatment where active ingredients are applied directly into the skin to improve its quality, tone and elasticity.',
    s6_title: 'PRP',
    s6_desc: 'Natural skin and hair regeneration using your own platelet-rich plasma, which stimulates tissue renewal, collagen production and improves skin and hair quality. Skin becomes fresher and more radiant while hair gains density, strength and quality.',
    s7_title: 'SkinPen',
    s7_desc: 'A minimally invasive microneedling treatment that stimulates natural skin regeneration and collagen production for a fresher, more radiant and even skin tone. SkinPen improves skin texture, minimizes pores, fine lines and acne scars with a natural glow effect.',
    s8_title: 'Chemical Peel',
    s8_desc: 'A skin regeneration and renewal treatment that improves texture, evens skin tone and restores a fresh, radiant appearance. Chemical peels help with acne, pigmentation, enlarged pores and early signs of aging.',
    s9_title: 'Consultation',
    s9_desc: 'The first step towards natural and carefully selected aesthetic treatments.',
    s_link: 'Book →',
    s_prices: 'Prices →',

    clinic_tag: 'Our Clinic',
    clinic_title: 'Pure Aesthetic - <em>a new era of beauty</em>',

    results_tag: 'Results',
    results_title: 'Before &amp; <em>After</em>',
    results_desc: 'Natural results that speak for themselves.',
    badge_before: 'Before',
    badge_after: 'After',
    r1_label: 'Hyaluronic Fillers - Lips',
    r2_label: 'Botox - Forehead',
    r3_label: 'Fillers - Full face',
    r4_label: 'Brotox',
    r5_label: 'Fillers - Full face',
    r6_label: 'Hyaluronic Fillers - Lips',
    r7_label: 'Botox - Forehead region',
    r8_label: 'Botox - Frown lines',
    r9_label: 'Botox - Periorbital region',
    results_ig_cta: 'See more results and work on our <strong>Instagram</strong> profile',

    test_tag: 'Testimonials',
    test_title: 'What our <em>clients say</em>',
    t1_text: 'I am very satisfied with the work and approach of Dr. Dragana. Patient, gentle and very pleasant. It was worth driving a little further to reach her, because the final result is excellent: natural and beautiful lips.',
    t2_text: 'I have been a long-time client of Dr. Dragana and I can sincerely say that I am very satisfied with the service and results. Professionalism, kindness and dedication to the patient. The practice is modern, pleasant and everything is done very carefully and without stress. Highly recommend Pure Aesthetic and Dr. Dragana Ilić.',
    t3_text: 'I am someone who is very afraid of needles and always avoided anything involving injections, until I came to Dr. Dragana. She gave me confidence from the very first consultation, explained everything, and answered every question. I had botox in three areas and was very scared. However, Dr. Dragana has such a gentle touch that I barely felt anything. The results were excellent - everyone noticed I looked younger and fresher, but no one suspected I had botox, because it looked so natural. Highly recommend Dr. Dragana Ilic.',
    google_review_cta: 'Leave your review of our services on <strong>Google</strong>',

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

  // ── Results slider ──
  (function () {
    const wrap = document.querySelector('.results-track-wrap');
    if (!wrap) return;
    const track = wrap.querySelector('.results-track');
    const items = Array.from(track.querySelectorAll('.result-item'));
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsWrap = document.querySelector('.slider-dots');

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach(el => track.appendChild(el));

    const GAP = 32;
    const total = items.length;
    let current = 0;

    // Clone items for infinite loop: [...originals, ...clones]
    items.forEach(el => track.appendChild(el.cloneNode(true)));
    const allItems = Array.from(track.querySelectorAll('.result-item'));

    function perView() {
      return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    }

    function itemW() {
      const pv = perView();
      return (wrap.offsetWidth - GAP * (pv - 1)) / pv;
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const btn = document.createElement('button');
        btn.className = 'slider-dot' + (i === current ? ' active' : '');
        btn.setAttribute('aria-label', 'Slajd ' + (i + 1));
        btn.addEventListener('click', () => { resetAuto(); jumpTo(i); });
        dotsWrap.appendChild(btn);
      }
    }

    function setTranslate(idx, animated) {
      const w = itemW();
      track.style.transition = animated ? 'transform 0.5s ease' : 'none';
      track.style.transform = 'translateX(-' + (idx * (w + GAP)) + 'px)';
    }

    function updateDots() {
      dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function jumpTo(n) {
      current = ((n % total) + total) % total;
      setTranslate(current, true);
      updateDots();
    }

    function next() {
      const nextIdx = current + 1;
      setTranslate(nextIdx, true);
      // after animation: if we're now in clones, silently reset to original
      track.addEventListener('transitionend', function onEnd() {
        track.removeEventListener('transitionend', onEnd);
        if (nextIdx >= total) {
          current = nextIdx % total;
          setTranslate(current, false);
        } else {
          current = nextIdx;
        }
        updateDots();
      });
    }

    function prev() {
      if (current === 0) {
        // jump to clone at end without animation, then slide back
        setTranslate(total, false);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          current = total - 1;
          setTranslate(current, true);
          updateDots();
        }));
      } else {
        current -= 1;
        setTranslate(current, true);
        updateDots();
      }
    }

    function init() {
      const w = itemW();
      allItems.forEach(el => { el.style.width = w + 'px'; });
      buildDots();
      setTranslate(current, false);
      updateDots();
    }

    prevBtn.addEventListener('click', () => { resetAuto(); prev(); });
    nextBtn.addEventListener('click', () => { resetAuto(); next(); });

    let touchX = 0;
    wrap.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; pauseAuto(); }, { passive: true });
    wrap.addEventListener('touchend', e => {
      const dx = touchX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
      resetAuto();
    });

    wrap.addEventListener('mouseenter', pauseAuto);
    wrap.addEventListener('mouseleave', resetAuto);

    let autoTimer;
    function pauseAuto() { clearInterval(autoTimer); }
    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(next, 3000);
    }

    window.addEventListener('resize', init);
    requestAnimationFrame(function tryInit() {
      if (wrap.offsetWidth === 0) { requestAnimationFrame(tryInit); return; }
      init();
      resetAuto();
    });
  }());

});
